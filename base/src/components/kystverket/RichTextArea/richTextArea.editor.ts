import { imageInlineComponent } from '@milkdown/components/image-inline';
import type { InlineImageConfig } from '@milkdown/components/image-inline';
import { history } from '@milkdown/plugin-history';
import { commonmark } from '@milkdown/preset-commonmark';
import { listener } from '@milkdown/plugin-listener';
import type { EditorView } from '@milkdown/prose/view';

import { normalizeHref } from './utils/linkUtils';
import type { ImageInsertHandler, UploadImageFn } from './richTextArea.types';

export const normalizeMarkdownBreakTags = (value: string) => value.replaceAll(/<br\s*\/?>/gi, '\n\n');

const blockedCommonmarkGroups = new Set(['CodeBlock', 'InlineCode', 'Blockquote', 'Hr', 'Html']);
export const richTextCommonmarkPlugins = commonmark.filter((plugin) => {
  const group = plugin.meta?.group ?? '';
  return !blockedCommonmarkGroups.has(group);
});

export const richTextEditorPlugins = [richTextCommonmarkPlugins, imageInlineComponent, history, listener] as const;

export const hasImageFile = (files: ArrayLike<File> | undefined) => {
  return Array.from(files ?? []).find((file) => file.type.startsWith('image/')) ?? null;
};

export const createRichTextAreaEditorEditable = (disabled: boolean) => () => !disabled;

export const handleRichTextAreaEditorClick = (_view: EditorView, event: MouseEvent) => {
  const target = event.target;

  if (!(target instanceof HTMLElement)) {
    return false;
  }

  const anchor = target.closest('a[href]');

  if (!anchor) {
    return false;
  }

  const href = anchor.getAttribute('href');

  if (!href) {
    return false;
  }

  event.preventDefault();
  window.open(normalizeHref(href), '_blank', 'noopener,noreferrer');
  return true;
};

export const handleRichTextAreaEditorKeydown = (view: EditorView, event: KeyboardEvent) => {
  if (event.key !== ' ' || event.ctrlKey || event.metaKey || event.altKey) {
    return false;
  }

  const { state } = view;
  const { selection } = state;
  const linkMarkType = state.schema.marks.link;

  if (!linkMarkType || !selection.empty) {
    return false;
  }

  const { from, $from } = selection;
  const nodeBefore = $from.nodeBefore;
  const nodeAfter = $from.nodeAfter;

  const linkInCursorMarks = linkMarkType.isInSet(state.storedMarks ?? $from.marks());
  const linkOnNodeBefore = !!(nodeBefore?.isText && linkMarkType.isInSet(nodeBefore.marks));

  if (!linkInCursorMarks && !linkOnNodeBefore) {
    return false;
  }

  if (nodeAfter?.isText && linkMarkType.isInSet(nodeAfter.marks)) {
    return false;
  }

  event.preventDefault();

  const tr = state.tr.setStoredMarks([]).insertText(' ', from, from);

  view.dispatch(tr);

  return true;
};

export const createRichTextAreaEditorPaste = (canUploadImage: boolean, insertImageFromFile: ImageInsertHandler) => {
  return (_view: EditorView, event: ClipboardEvent) => {
    const imageFile = hasImageFile(event.clipboardData?.files);

    if (!imageFile || !canUploadImage) {
      return false;
    }

    event.preventDefault();
    insertImageFromFile(imageFile);
    return true;
  };
};

export const createRichTextAreaEditorDrop = (canUploadImage: boolean, insertImageFromFile: ImageInsertHandler) => {
  return (_view: EditorView, event: DragEvent) => {
    const imageFile = hasImageFile(event.dataTransfer?.files);

    if (!imageFile || !canUploadImage) {
      return false;
    }

    event.preventDefault();
    insertImageFromFile(imageFile);
    return true;
  };
};

export const createRichTextAreaInlineImageUpload = (
  uploadImage: UploadImageFn,
  sasToRefMap: Map<string, string>,
  refToPreviewMap: Map<string, string>,
) => {
  return async (file: File) => {
    const uploadedImage = await uploadImage(file);
    if (!uploadedImage) {
      return URL.createObjectURL(file);
    }
    if (typeof uploadedImage === 'string') {
      return uploadedImage;
    }
    if (uploadedImage.ref) {
      sasToRefMap.set(uploadedImage.src, uploadedImage.ref);
      refToPreviewMap.set(uploadedImage.ref, uploadedImage.src);
      return uploadedImage.ref;
    }
    return uploadedImage.src;
  };
};

export const createRichTextAreaInlineImageConfig = (
  uploadImage: UploadImageFn,
  sasToRefMap: Map<string, string>,
  refToPreviewMap: Map<string, string>,
) => {
  return (config: InlineImageConfig) => ({
    ...config,
    onUpload: createRichTextAreaInlineImageUpload(uploadImage, sasToRefMap, refToPreviewMap),
    proxyDomURL: async (url: string) => {
      const previewUrl = refToPreviewMap.get(url);

      if (previewUrl) {
        return previewUrl;
      }

      if (config.proxyDomURL) {
        return config.proxyDomURL(url);
      }

      return url;
    },
  });
};
