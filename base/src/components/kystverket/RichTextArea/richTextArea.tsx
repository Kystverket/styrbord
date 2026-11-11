'use client';

import { useContext, useEffect, useId, useRef, useState } from 'react';
import type { KeyboardEvent } from 'react';
import { Milkdown, MilkdownProvider, useEditor, useInstance } from '@milkdown/react';
import { editorViewCtx } from '@milkdown/core';
import type { InlineImageConfig } from '@milkdown/components/image-inline';
import { redoCommand, undoCommand } from '@milkdown/plugin-history';
import { replaceAll } from '@milkdown/utils';
import '@milkdown/prose/view/style/prosemirror.css';

import classes from './richTextArea.module.css';

import { Fieldset, LabelContent, ValidationMessage } from '~/main';
import { FileRetrieverContext } from '../FileUploader/FileRetriever.context';
import LinkEditor from './components/LinkEditor/linkEditor';
import { CharacterCounter } from '~/components/shared/CharacterCounter/CharacterCounter';
import { getToolbarItems, Toolbar } from './components/Toolbar/toolbar';
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
import type { DeriveFileInfosFromStorageIds } from '~/utils/fileInfoResolver';
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
  bottomToolbar,
  optional = false,
  required = false,
  showToolbar,
  rows,
  maxLength,
  error: externalError,
}: RichTextAreaProps) => {
  // Owned here so useEditor config can close over them before useRichTextImageUpload is called.
  const sasToRefMap = useRef(new Map<string, string>());
  const refToPreviewMap = useRef(new Map<string, string>());
  const fileRetrieverContext = useContext(FileRetrieverContext);
  const hasLoggedMissingFileResolverRef = useRef(false);

  const deriveFileInfosFromStorageIds: DeriveFileInfosFromStorageIds = (storageIds) => {
    if (!fileRetrieverContext) {
      if (!hasLoggedMissingFileResolverRef.current && storageIds.length > 0) {
        console.error(
          'RichTextArea: image upload/ref support is enabled but FileRetrieverContext.Provider is missing. Provide a file resolver to enable image reference resolution.',
        );
        hasLoggedMissingFileResolverRef.current = true;
      }
      return [];
    }

    return fileRetrieverContext.deriveFileInfosFromStorageIds(storageIds);
  };

  const normalizedValue = normalizeMarkdownBreakTags(value ?? '');
  const [editorMarkdown, setEditorMarkdown] = useState(normalizedValue);
  const [isEditorEmpty, setIsEditorEmpty] = useState(!normalizedValue);
  const [valueLength, setValueLength] = useState<number | null>(null);
  const latestOnChangeRef = useRef(onChange);
  const latestOnUploadRef = useRef(onImageUpload);
  const latestOnRemoveRef = useRef(onImageRemove);
  const lastKnownMarkdownRef = useRef(normalizedValue);
  const lastSyncedEditorMarkdownRef = useRef(normalizedValue);
  const resolvedValueRef = useRef(normalizedValue);
  const isValueFromEditorRef = useRef(false);
  const hasPendingSyncRef = useRef(false);
  const [isEditing, setIsEditing] = useState(false);
  const pendingImageSelectionRef = useRef<{ from: number; to: number } | null>(null);
  const maxLengthRef = useRef(maxLength);
  const isSyncingFromValueRef = useRef(false);

  latestOnChangeRef.current = onChange;
  latestOnUploadRef.current = onImageUpload;
  latestOnRemoveRef.current = onImageRemove;
  maxLengthRef.current = maxLength;

  const keepImageMappingsInValue = (markdown: string) => {
    const refsInValue = new Set(getImageRefsFromMarkdown(markdown));
    for (const [src, ref] of sasToRefMap.current) {
      if (!refsInValue.has(ref)) sasToRefMap.current.delete(src);
    }
    for (const ref of refToPreviewMap.current.keys()) {
      if (!refsInValue.has(ref)) refToPreviewMap.current.delete(ref);
    }
  };

  // Resolve stable image refs to display URLs before markdown is loaded into the editor.
  useEffect(() => {
    let isCancelled = false;

    const resolveImages = async () => {
      try {
        const previousRefToUrlMap = new Map<string, string>(
          Array.from(sasToRefMap.current.entries(), ([src, ref]) => [ref, src]),
        );
        const nextSasToRefMap = new Map<string, string>();
        const resolvedMarkdown = await convertFromRefToImage(
          normalizedValue,
          deriveFileInfosFromStorageIds,
          nextSasToRefMap,
          previousRefToUrlMap,
        );

        if (isCancelled) {
          return;
        }

        keepImageMappingsInValue(normalizedValue);
        for (const [src, ref] of nextSasToRefMap.entries()) {
          sasToRefMap.current.set(src, ref);
          refToPreviewMap.current.set(ref, src);
        }

        resolvedValueRef.current = normalizedValue;
        setEditorMarkdown(resolvedMarkdown);
      } catch {
        if (isCancelled) {
          return;
        }

        keepImageMappingsInValue(normalizedValue);
        resolvedValueRef.current = normalizedValue;
        setEditorMarkdown(normalizedValue);
      }
    };

    void resolveImages();

    return () => {
      isCancelled = true;
    };
  }, [normalizedValue, fileRetrieverContext]);

  const insertImageFromFileRef = useRef<ImageInsertHandler>(() => {});
  const inlineImageConfigUpdaterRef = useRef<(config: InlineImageConfig) => InlineImageConfig>((c) => c);

  const { toolbarState, updateToolbarState } = useRichTextToolbarState();
  const linkEditorAnchorId = `rich-text-link-editor-${useId().replaceAll(':', '')}`;
  const toolbarHintId = useId();
  const counterId = useId();
  const toolbarRef = useRef<HTMLDivElement>(null);
  const editorWrapperRef = useRef<HTMLDivElement>(null);
  const bottomToolbarRef = useRef<HTMLDivElement>(null);

  const dispatchImageFromFile = (file: File) => insertImageFromFileRef.current(file);
  const toValue = (markdown: string) =>
    replaceImageUrlsWithRefs(normalizeMarkdownBreakTags(markdown), sasToRefMap.current);
  const updateInlineImageConfig = (config: InlineImageConfig) => inlineImageConfigUpdaterRef.current(config);

  // Oppretter Milkdown-editor med schema, historikk og listeners.
  // Refs above are populated before Milkdown's useEffect runs, so closures here are safe.
  const { loading, get } = useEditor(
    (root) =>
      createRichTextAreaEditor({
        root,
        disabled,
        editorMarkdown,
        describedBy: `${toolbarHintId} ${counterId}`,
        canReachToolbar: () => Boolean(toolbarRef.current && getToolbarItems(toolbarRef.current).length > 0),
        canUploadImage: Boolean(latestOnUploadRef.current),
        dispatchImageFromFile,
        updateInlineImageConfig,
        updateToolbarState,
        onMarkdownUpdated: (ctx, markdown) => {
          const transformedMarkdown = toValue(markdown);
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
          isValueFromEditorRef.current = true;
          latestOnChangeRef.current(transformedMarkdown);
          updateToolbarState(ctx);
        },
        onEmptyChange: setIsEditorEmpty,
        toValue,
        onValueLengthChange: setValueLength,
        getMaxLength: () => maxLengthRef.current,
        isExternalUpdate: () => isSyncingFromValueRef.current,
      }),
    [disabled],
  );

  const [, getEditor] = useInstance();

  const imageUpload = useRichTextImageUpload({
    disabled,
    get,
    updateToolbarState,
    latestOnUploadRef,
    deriveFileInfosFromStorageIds,
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

  const isEditingInField = (element: Element | null) =>
    Boolean(editorWrapperRef.current?.contains(element) && !bottomToolbarRef.current?.contains(element));

  // Synker ekstern verdi til editor ved endringer.
  useEffect(() => {
    const editor = getEditor();

    if (!editor) {
      return;
    }

    const isResolvingNewValue = resolvedValueRef.current !== normalizedValue;
    if (isResolvingNewValue) {
      return;
    }

    const editorShowsValue =
      !hasPendingSyncRef.current &&
      normalizedValue === lastKnownMarkdownRef.current &&
      (isValueFromEditorRef.current || editorMarkdown === lastSyncedEditorMarkdownRef.current);
    if (editorShowsValue) {
      isValueFromEditorRef.current = false;
      lastSyncedEditorMarkdownRef.current = editorMarkdown;
      return;
    }

    // Ikke synk ekstern verdi mens bruker aktivt redigerer – i teksten, toolbaren eller lenkeeditoren.
    // Toolbaren flytter ikke lenger fokus til editoren, så å bare sjekke editorens fokus lot en utdatert
    // verdi overskrive første formatendring. Konsumentens bottomToolbar teller ikke: en knapp der som
    // nullstiller verdien skal slå gjennom.
    if (isEditing) {
      hasPendingSyncRef.current = true;
      return;
    }

    hasPendingSyncRef.current = false;
    lastKnownMarkdownRef.current = normalizedValue;
    lastSyncedEditorMarkdownRef.current = editorMarkdown;
    isValueFromEditorRef.current = false;
    isSyncingFromValueRef.current = true;
    try {
      editor.action(replaceAll(editorMarkdown));
    } finally {
      isSyncingFromValueRef.current = false;
    }
  }, [editorMarkdown, getEditor, isEditing, loading, normalizedValue]);

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

  const showPlaceholder = isEditorEmpty && Boolean(placeholder);

  // Alt+F10 fra editoren hopper til toolbaren, Esc i toolbaren hopper tilbake (som TinyMCE/CKEditor).
  // Tab redigerer lister, så uten dette er toolbaren vanskelig å nå med tastatur.
  const handleEditorWrapperKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const toolbar = toolbarRef.current;
    if (!toolbar) return;
    const target = e.target as Node;

    if (e.key === 'F10' && e.altKey && !toolbar.contains(target)) {
      const [firstItem] = getToolbarItems(toolbar);
      if (!firstItem) return;
      e.preventDefault();
      firstItem.focus();
      return;
    }

    // Toolbaren er ett tab-stopp (arrow-tastene navigerer inni), så Tab ut av den går rett til teksten.
    const isTabForward = e.key === 'Tab' && !e.shiftKey && !e.ctrlKey && !e.metaKey && !e.altKey;
    if ((e.key === 'Escape' || isTabForward) && toolbar.contains(target)) {
      e.preventDefault();
      get()?.action((ctx) => ctx.get(editorViewCtx).focus());
    }
  };

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
            rows === 'sm' && classes.rowsSm,
            rows === 'lg' && classes.rowsLg,
          ]
            .filter(Boolean)
            .join(' ')}
          ref={editorWrapperRef}
          onKeyDown={handleEditorWrapperKeyDown}
          onFocus={(e) => setIsEditing(isEditingInField(e.target))}
          onBlur={(e) => setIsEditing(isEditingInField(e.relatedTarget))}
        >
          {showToolbar !== false && (
            <span id={toolbarHintId} className="ds-sr-only">
              Press Alt+F10 to go to the formatting toolbar, and Escape to return.
            </span>
          )}
          <Toolbar
            ref={toolbarRef}
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
            linkPopoverTarget={linkEditorAnchorId}
            onImageUpload={() => imagePicker.openImageFilePicker()}
            onBulletList={() =>
              toggleList({
                isTargetListActive: toolbarState.isBulletListActive,
                isOtherListActive: toolbarState.isOrderedListActive,
                wrapCommand: wrapInBulletListCommand,
              })
            }
            showToolbar={showToolbar}
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
          {!!bottomToolbar && <div ref={bottomToolbarRef}>{bottomToolbar}</div>}
        </div>

        {maxLength !== undefined && valueLength !== null && (
          <CharacterCounter id={counterId} count={valueLength} maxLength={maxLength} focusScopeRef={editorWrapperRef} />
        )}
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
