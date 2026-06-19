'use client';

import { useContext, useEffect, useId, useRef, useState } from 'react';
import { Milkdown, MilkdownProvider, useEditor } from '@milkdown/react';
import { editorViewCtx } from '@milkdown/core';
import type { InlineImageConfig } from '@milkdown/components/image-inline';
import { redoCommand, undoCommand } from '@milkdown/plugin-history';
import { replaceAll } from '@milkdown/utils';
import '@milkdown/prose/view/style/prosemirror.css';

import classes from './richTextArea.module.css';

import { Fieldset, FileUploaderContext, LabelContent, ValidationMessage } from '~/main';
import LinkEditor from './components/LinkEditor/linkEditor';
import { Toolbar } from './components/Toolbar/toolbar';
import { useRichTextToolbarState } from './hooks/useRichTextToolbarState';
import { useRichTextLinkEditor } from './hooks/useRichTextLinkEditor';
import { useRichTextImageUpload } from './hooks/useRichTextImageUpload';
import { useRichTextImagePicker } from './hooks/useRichTextImagePicker';
import {
  useRichTextCommands,
  toggleStrongCommand,
  toggleEmphasisCommand,
  wrapInBulletListCommand,
  wrapInOrderedListCommand,
} from './hooks/useRichTextCommands';
import { normalizeMarkdownBreakTags } from './richTextArea.editor';
import { createRichTextAreaEditor } from './richTextArea.editorFactory';
import type { ImageInsertHandler, RichTextAreaProps } from './richTextArea.types';
import {
  convertFromRefToImage,
  getImageRefsFromMarkdown,
  replaceImageUrlsWithRefs,
} from '~/components/kystverket/RichTextArea/utils/ImageRefUtils';
export type { RichTextAreaProps };

const notifyRemovedManagedImages = (
  previousMarkdown: string,
  currentMarkdown: string,
  sasToRefMap: Map<string, string>,
  onImageRemove?: (ref: string) => unknown,
) => {
  if (!onImageRemove) {
    return;
  }

  const previousRefs = new Set(getImageRefsFromMarkdown(previousMarkdown));
  const currentRefs = new Set(getImageRefsFromMarkdown(currentMarkdown));
  const managedRefs = new Set(sasToRefMap.values());

  for (const ref of previousRefs) {
    if (!currentRefs.has(ref) && managedRefs.has(ref)) {
      void Promise.resolve(onImageRemove(ref)).catch(() => {
        // Ignore remove failures here; callers should handle retry/logging
      });
    }
  }
};

const RichTextAreaContainer = ({
  value,
  onChange,
  onImageUpload,
  onImageRemove,
  placeholder,
  disabled = false,
  label,
  description,
  optional = false,
  required = false,
  error: externalError,
}: RichTextAreaProps) => {
  // Owned here so useEditor config can close over them before useRichTextImageUpload is called.
  const sasToRefMap = useRef(new Map<string, string>());
  const refToPreviewMap = useRef(new Map<string, string>());
  const fileUploaderContext = useContext(FileUploaderContext);

  const normalizedValue = normalizeMarkdownBreakTags(value ?? '');
  const [editorMarkdown, setEditorMarkdown] = useState(normalizedValue);
  const latestOnChangeRef = useRef(onChange);
  const latestOnUploadRef = useRef(onImageUpload);
  const latestOnRemoveRef = useRef(onImageRemove);
  const lastKnownMarkdownRef = useRef(normalizedValue);
  const lastSyncedEditorMarkdownRef = useRef(normalizedValue);
  const pendingImageSelectionRef = useRef<{ from: number; to: number } | null>(null);

  latestOnChangeRef.current = onChange;
  latestOnUploadRef.current = onImageUpload;
  latestOnRemoveRef.current = onImageRemove;

  // Resolve stable image refs to display URLs before markdown is loaded into the editor.
  useEffect(() => {
    let isCancelled = false;

    const resolveImages = async () => {
      if (!fileUploaderContext.deriveFileInfosFromStorageIds) {
        sasToRefMap.current.clear();
        refToPreviewMap.current.clear();
        setEditorMarkdown(normalizedValue);
        return;
      }

      try {
        const previousRefToUrlMap = new Map<string, string>(
          Array.from(sasToRefMap.current.entries(), ([src, ref]) => [ref, src]),
        );
        const nextSasToRefMap = new Map<string, string>();
        const resolvedMarkdown = await convertFromRefToImage(
          normalizedValue,
          fileUploaderContext.deriveFileInfosFromStorageIds,
          nextSasToRefMap,
          previousRefToUrlMap,
        );

        if (isCancelled) {
          return;
        }

        sasToRefMap.current.clear();
        refToPreviewMap.current.clear();
        for (const [src, ref] of nextSasToRefMap.entries()) {
          sasToRefMap.current.set(src, ref);
          refToPreviewMap.current.set(ref, src);
        }

        setEditorMarkdown(resolvedMarkdown);
      } catch {
        if (isCancelled) {
          return;
        }

        sasToRefMap.current.clear();
        refToPreviewMap.current.clear();
        setEditorMarkdown(normalizedValue);
      }
    };

    void resolveImages();

    return () => {
      isCancelled = true;
    };
  }, [normalizedValue, fileUploaderContext.deriveFileInfosFromStorageIds]);

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
      createRichTextAreaEditor({
        root,
        disabled,
        editorMarkdown,
        canUploadImage: Boolean(latestOnUploadRef.current),
        dispatchImageFromFile,
        updateInlineImageConfig,
        updateToolbarState,
        onMarkdownUpdated: (ctx, markdown) => {
          const normalizedMarkdown = normalizeMarkdownBreakTags(markdown);
          const transformedMarkdown = replaceImageUrlsWithRefs(normalizedMarkdown, sasToRefMap.current);
          const previousMarkdown = lastKnownMarkdownRef.current;

          if (transformedMarkdown === previousMarkdown) {
            updateToolbarState(ctx);
            return;
          }

          notifyRemovedManagedImages(
            previousMarkdown,
            transformedMarkdown,
            sasToRefMap.current,
            latestOnRemoveRef.current,
          );

          lastKnownMarkdownRef.current = transformedMarkdown;
          latestOnChangeRef.current(transformedMarkdown);
          updateToolbarState(ctx);
        },
      }),
    [disabled],
  );

  const imageUpload = useRichTextImageUpload({
    disabled,
    get,
    updateToolbarState,
    latestOnUploadRef,
    deriveFileInfosFromStorageIds: fileUploaderContext.deriveFileInfosFromStorageIds,
    sasToRefMap,
    refToPreviewMap,
    pendingImageSelectionRef,
  });

  const imagePicker = useRichTextImagePicker({
    disabled,
    loading,
    canUploadImage: Boolean(onImageUpload),
    isUploadingImage: imageUpload.isUploadingImage,
    get,
    pendingImageSelectionRef,
    onImageFileInputChange: imageUpload.handleImageFileInputChange,
  });

  const displayedError = externalError ?? imagePicker.imageUploadError;

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

    if (normalizedValue === lastKnownMarkdownRef.current && editorMarkdown === lastSyncedEditorMarkdownRef.current) {
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
    lastSyncedEditorMarkdownRef.current = editorMarkdown;
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
            canUploadImage={Boolean(onImageUpload)}
            onBold={() => runCommand(toggleStrongCommand)}
            onItalic={() => runCommand(toggleEmphasisCommand)}
            onUndo={() => runCommand(undoCommand)}
            onRedo={() => runCommand(redoCommand)}
            onLink={openLinkEditor}
            onImageUpload={imagePicker.openImageFilePicker}
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
            ref={imagePicker.imageInputRef}
            type="file"
            accept="image/*"
            hidden
            disabled={disabled || loading || imageUpload.isUploadingImage || !onImageUpload}
            onChange={imagePicker.handleImageFileInputChange}
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
