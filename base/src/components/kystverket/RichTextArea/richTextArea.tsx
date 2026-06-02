'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { Milkdown, MilkdownProvider, useEditor } from '@milkdown/react';
import { Editor, defaultValueCtx, editorViewCtx, editorViewOptionsCtx, rootCtx } from '@milkdown/core';
import { imageInlineComponent, inlineImageConfig } from '@milkdown/components/image-inline';
import type { InlineImageConfig } from '@milkdown/components/image-inline';
import { history, redoCommand, undoCommand } from '@milkdown/plugin-history';
import { listener, listenerCtx } from '@milkdown/plugin-listener';
import { replaceAll } from '@milkdown/utils';
import '@milkdown/prose/view/style/prosemirror.css';

import classes from './richTextArea.module.css';

import { Fieldset, LabelContent, ValidationMessage } from '~/main';
import LinkEditor from './components/LinkEditor/linkEditor';
import { Toolbar } from './components/Toolbar/toolbar';
import { useRichTextToolbarState } from './hooks/useRichTextToolbarState';
import { useRichTextLinkEditor } from './hooks/useRichTextLinkEditor';
import { useRichTextImageUpload } from './hooks/useRichTextImageUpload';
import {
  useRichTextCommands,
  toggleStrongCommand,
  toggleEmphasisCommand,
  wrapInBulletListCommand,
  wrapInOrderedListCommand,
} from './hooks/useRichTextCommands';
import {
  normalizeMarkdownBreakTags,
  richTextCommonmarkPlugins,
  createRichTextAreaEditorEditable,
  handleRichTextAreaEditorClick,
  handleRichTextAreaEditorKeydown,
  createRichTextAreaEditorPaste,
  createRichTextAreaEditorDrop,
} from './richTextArea.editor';
import type { ImageInsertHandler, RichTextAreaProps } from './richTextArea.types';
import {
  convertFromRefToImage,
  replaceImageUrlsWithRefs,
} from '~/components/kystverket/RichTextArea/utils/ImageRefUtils';
export type { RichTextAreaProps };

const RichTextAreaContainer = ({
  value,
  onChange,
  onImageUpload: onUpload,
  resolveImageRef,
  placeholder,
  disabled = false,
  label,
  description,
  optional = false,
  required = false,
  error: externalError,
}: RichTextAreaProps) => {
  const [internalError, setInternalError] = useState<string | undefined>(undefined);
  const displayedError = externalError ?? internalError;

  // Owned here so useEditor config can close over them before useRichTextImageUpload is called.
  const sasToRefMap = useRef(new Map<string, string>());

  const normalizedValue = normalizeMarkdownBreakTags(value ?? '');
  const editorMarkdown = resolveImageRef
    ? convertFromRefToImage(normalizedValue, resolveImageRef, sasToRefMap.current)
    : normalizedValue;
  const latestOnChangeRef = useRef(onChange);
  const latestOnUploadRef = useRef(onUpload);
  const lastKnownMarkdownRef = useRef(normalizedValue);
  const imageInputRef = useRef<HTMLInputElement | null>(null);

  latestOnChangeRef.current = onChange;
  latestOnUploadRef.current = onUpload;

  const insertImageFromFileRef = useRef<ImageInsertHandler>(() => {});
  const inlineImageConfigUpdaterRef = useRef<(config: InlineImageConfig) => InlineImageConfig>((c) => c);

  const { toolbarState, updateToolbarState } = useRichTextToolbarState();
  const linkEditorAnchorId = `rich-text-link-editor-${useId().replaceAll(':', '')}`;

  const dispatchImageFromFile = (file: File) => insertImageFromFileRef.current(file);
  const updateInlineImageConfig = (config: InlineImageConfig) => inlineImageConfigUpdaterRef.current(config);

  // Oppretter Milkdown-editor med schema, historikk og listeners.
  // Refs above are populated before Milkdown's useEffect runs, so closures here are safe.
  const { loading, get } = useEditor(
    (root) =>
      Editor.make()
        .config((ctx) => {
          ctx.set(rootCtx, root);
          ctx.set(defaultValueCtx, editorMarkdown);
          ctx.update(inlineImageConfig.key, updateInlineImageConfig);
          ctx.update(editorViewOptionsCtx, (prev = {}) => ({
            ...prev,
            editable: createRichTextAreaEditorEditable(disabled),
            handleDOMEvents: {
              ...prev.handleDOMEvents,
              click: handleRichTextAreaEditorClick,
              keydown: handleRichTextAreaEditorKeydown,
              paste: createRichTextAreaEditorPaste(Boolean(latestOnUploadRef.current), dispatchImageFromFile),
              drop: createRichTextAreaEditorDrop(Boolean(latestOnUploadRef.current), dispatchImageFromFile),
            },
          }));
          ctx.get(listenerCtx).markdownUpdated((_ctx, markdown) => {
            const normalizedMarkdown = normalizeMarkdownBreakTags(markdown);
            const transformedMarkdown = replaceImageUrlsWithRefs(normalizedMarkdown, sasToRefMap.current);

            if (transformedMarkdown === lastKnownMarkdownRef.current) {
              updateToolbarState(_ctx);
              return;
            }
            lastKnownMarkdownRef.current = transformedMarkdown;
            latestOnChangeRef.current(transformedMarkdown);
            updateToolbarState(_ctx);
          });
          ctx.get(listenerCtx).selectionUpdated((listenerContext) => {
            updateToolbarState(listenerContext);
          });
        })
        .use(richTextCommonmarkPlugins)
        .use(imageInlineComponent)
        .use(history)
        .use(listener),
    [disabled],
  );

  const imageUpload = useRichTextImageUpload({
    disabled,
    get,
    updateToolbarState,
    latestOnUploadRef,
    sasToRefMap,
  });

  // Sync stable refs so useEditor closures always call the latest implementations.
  insertImageFromFileRef.current = imageUpload.insertImageFromFile;
  inlineImageConfigUpdaterRef.current = imageUpload.inlineImageConfig;

  const { executeInEditor, runCommand, toggleList, handleFormatChange } = useRichTextCommands({
    disabled,
    get,
    updateToolbarState,
  });

  const { linkEditorOpen, linkEditorState, closeLinkEditor, openLinkEditor, handleLinkSave, handleLinkRemove } =
    useRichTextLinkEditor({
      disabled,
      executeInEditor,
    });

  // Synker ekstern verdi til editor ved endringer.
  useEffect(() => {
    const editor = get();

    if (!editor) {
      return;
    }

    if (normalizedValue === lastKnownMarkdownRef.current) {
      return;
    }

    // Ikke synk ekstern verdi mens bruker aktivt skriver i editoren.
    let isEditorFocused = false;
    editor.action((ctx) => {
      isEditorFocused = ctx.get(editorViewCtx).hasFocus();
    });

    if (isEditorFocused) {
      return;
    }

    lastKnownMarkdownRef.current = normalizedValue;
    editor.action(replaceAll(editorMarkdown));
  }, [editorMarkdown, get, normalizedValue]);

  // Sett knappestatus når editoren er tilgjengelig.
  useEffect(() => {
    const editor = get();

    if (!editor) {
      return;
    }

    editor.action((ctx) => {
      updateToolbarState(ctx);
    });
  }, [get]);

  const openImageFilePicker = () => {
    if (disabled || loading || !onUpload || imageUpload.isUploadingImage) {
      return;
    }

    imageInputRef.current?.click();
  };

  const showPlaceholder = !normalizedValue && Boolean(placeholder);

  return (
    <Fieldset>
      {label && (
        <Fieldset.Legend>
          <LabelContent text={label} required={required} optional={optional} />
        </Fieldset.Legend>
      )}
      {description && <Fieldset.Description>{description}</Fieldset.Description>}

      <div>
        <div
          className={[
            classes.editorWrapper,
            displayedError && classes.editorWrapperError,
            disabled && classes.editorWrapperDisabled,
          ]
            .filter(Boolean)
            .join(' ')}
        >
          <Toolbar
            disabled={disabled || loading || imageUpload.isUploadingImage}
            isBoldActive={toolbarState.isBoldActive}
            isItalicActive={toolbarState.isItalicActive}
            isBulletListActive={toolbarState.isBulletListActive}
            isOrderedListActive={toolbarState.isOrderedListActive}
            selectedFormat={toolbarState.selectedFormat}
            isLinkActive={toolbarState.isLinkActive}
            canUploadImage={Boolean(onUpload)}
            onBold={() => runCommand(toggleStrongCommand)}
            onItalic={() => runCommand(toggleEmphasisCommand)}
            onUndo={() => runCommand(undoCommand)}
            onRedo={() => runCommand(redoCommand)}
            onLink={openLinkEditor}
            onImageUpload={openImageFilePicker}
            linkPopoverTarget={linkEditorAnchorId}
            onBulletList={() =>
              toggleList({
                isTargetListActive: toolbarState.isBulletListActive,
                isOtherListActive: toolbarState.isOrderedListActive,
                wrapCommand: wrapInBulletListCommand,
              })
            }
            onOrderedList={() =>
              toggleList({
                isTargetListActive: toolbarState.isOrderedListActive,
                isOtherListActive: toolbarState.isBulletListActive,
                wrapCommand: wrapInOrderedListCommand,
              })
            }
            onFormatChange={handleFormatChange}
          />
          <input
            ref={imageInputRef}
            type="file"
            accept="image/*"
            hidden
            disabled={disabled || loading || imageUpload.isUploadingImage || !onUpload}
            onChange={async (event) => {
              setInternalError(undefined);
              const { success } = await imageUpload.handleImageFileInputChange(event);
              setInternalError(success ? undefined : 'Image failed to upload');
            }}
          />

          <div
            className={[classes.editorContainer, disabled && classes.editorContainerDisabled].filter(Boolean).join(' ')}
          >
            {showPlaceholder ? (
              <span className={classes.placeholder} aria-hidden="true">
                {placeholder}
              </span>
            ) : null}
            <div className={classes.editor}>
              <Milkdown />
            </div>
          </div>
          <LinkEditor
            open={linkEditorOpen}
            anchorId={linkEditorAnchorId}
            href={linkEditorState?.href ?? ''}
            hasSelection={linkEditorState?.hasSelection ?? false}
            onSave={handleLinkSave}
            onRemove={handleLinkRemove}
            onClose={closeLinkEditor}
          />
        </div>
        {displayedError && <ValidationMessage className={classes.error}>{displayedError}</ValidationMessage>}
      </div>
    </Fieldset>
  );
};

export const RichTextArea = ({ className, ...props }: RichTextAreaProps) => {
  return (
    <div className={className}>
      <MilkdownProvider>
        <RichTextAreaContainer {...props} />
      </MilkdownProvider>
    </div>
  );
};
