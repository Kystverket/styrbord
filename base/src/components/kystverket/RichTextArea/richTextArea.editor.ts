import { imageInlineComponent } from '@milkdown/components/image-inline';
import type { InlineImageConfig } from '@milkdown/components/image-inline';
import { history } from '@milkdown/plugin-history';
import { commonmark, syncHeadingIdPlugin } from '@milkdown/preset-commonmark';
import { listener } from '@milkdown/plugin-listener';
import type { MilkdownPlugin } from '@milkdown/ctx';
import { Slice } from '@milkdown/prose/model';
import type { Fragment, Node as ProseNode } from '@milkdown/prose/model';
import { Plugin } from '@milkdown/prose/state';
import type { Transaction } from '@milkdown/prose/state';
import { sinkListItem } from '@milkdown/prose/schema-list';
import { $remark } from '@milkdown/utils';
import type { EditorView } from '@milkdown/prose/view';

import { normalizeHref } from './utils/linkUtils';
import type { ImageInsertHandler, UploadImageFn } from './richTextArea.types';

export const normalizeMarkdownBreakTags = (value: string) => value.replaceAll(/<br\s*\/?>/gi, '\n\n');

const blockedCommonmarkGroups = new Set(['Blockquote', 'Hr', 'Html']);
export const richTextCommonmarkPlugins = commonmark.filter((plugin) => {
  const group = plugin.meta?.group ?? '';
  return !blockedCommonmarkGroups.has(group);
});

export type RichTextFeatures = { headings: boolean; links: boolean };

type MarkdownNode = { type: string; children?: MarkdownNode[] };

// The editor throws on a markdown node its schema cannot parse, so a heading or link in the value
// must become something it can: a heading becomes a paragraph, a link becomes its text.
const flattenDisabledNodes = (node: MarkdownNode, features: RichTextFeatures) => {
  if (!node.children) {
    return;
  }

  node.children = node.children.flatMap((child): MarkdownNode[] => {
    flattenDisabledNodes(child, features);
    if (!features.headings && child.type === 'heading') {
      return [{ type: 'paragraph', children: child.children ?? [] }];
    }
    if (!features.links && child.type === 'link') {
      return child.children ?? [];
    }
    return [child];
  });
};

export const createRichTextCommonmarkPlugins = (features: RichTextFeatures) => {
  if (features.headings && features.links) {
    return richTextCommonmarkPlugins;
  }

  const disabledGroups = [!features.headings && 'Heading', !features.links && 'Link'];
  // Outside the Heading group, but it reads the heading id context and fails without it.
  const isDisabled = (plugin: MilkdownPlugin) =>
    disabledGroups.includes(plugin.meta?.group ?? '') || (!features.headings && plugin === syncHeadingIdPlugin);
  const flattenPlugin = $remark(
    'richTextFlattenDisabledNodes',
    () => () => (tree: MarkdownNode) => flattenDisabledNodes(tree, features),
  );

  return [...richTextCommonmarkPlugins.filter((plugin) => !isDisabled(plugin)), ...flattenPlugin];
};

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

const getListItemDepth = (view: EditorView) => {
  const listItemType = view.state.schema.nodes.list_item;
  if (!listItemType) {
    return 0;
  }

  const { $from } = view.state.selection;
  let listItemDepth = 0;
  for (let depth = $from.depth; depth > 0; depth--) {
    if ($from.node(depth).type === listItemType) {
      listItemDepth++;
    }
  }
  return listItemDepth;
};

// Tab/Shift+Tab i en liste oppfører seg som i Word: de redigerer alltid og flytter aldri fokus ut.
// Tab indenterer, Shift+Tab outdenterer nestede punkter, og ellers skjer ingenting – listen fjernes
// ikke (det gjør Backspace i starten av punktet). Utenfor lister flytter Tab fokus som vanlig.
// Unntak: uten en toolbar å nå med Alt+F10 (skjult eller deaktivert) slipper Tab gjennom, ellers blir
// en editor som bare består av én liste en tastaturfelle.
const handleListTab = (view: EditorView, event: KeyboardEvent, canReachToolbar: () => boolean) => {
  if (event.key !== 'Tab' || event.ctrlKey || event.metaKey || event.altKey) {
    return false;
  }

  const listItemDepth = getListItemDepth(view);
  if (listItemDepth === 0) {
    return false;
  }

  const listItemType = view.state.schema.nodes.list_item!;
  const canMove = event.shiftKey ? listItemDepth > 1 : sinkListItem(listItemType)(view.state);
  if (canMove) {
    // La listItemKeymap gjøre selve indenteringen.
    return false;
  }

  // true hopper over listItemKeymap (som ellers ville fjernet listen). Uten preventDefault flytter
  // nettleseren fokus som vanlig.
  if (canReachToolbar()) {
    event.preventDefault();
  }
  return true;
};

export const createRichTextAreaEditorKeydown = (canReachToolbar: () => boolean) => {
  return (view: EditorView, event: KeyboardEvent) =>
    handleListTab(view, event, canReachToolbar) || handleLinkSpace(view, event);
};

const handleLinkSpace = (view: EditorView, event: KeyboardEvent) => {
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

const getTextLength = (content: Fragment) => content.textBetween(0, content.size, '\n').length;

export type MeasureValueLength = (doc: ProseNode) => number;

const fitsMaxLength = (maxLength: number, measure: MeasureValueLength, before: ProseNode, after: ProseNode) => {
  const afterLength = measure(after);
  return afterLength <= maxLength || afterLength <= measure(before);
};

const truncateSlice = (slice: Slice, maxChars: number): Slice => {
  const { content } = slice;
  let low = 0;
  let high = content.size;
  while (low < high) {
    const mid = Math.ceil((low + high) / 2);
    if (content.textBetween(0, mid, '\n').length <= maxChars) {
      low = mid;
    } else {
      high = mid - 1;
    }
  }

  const cut = content.cut(0, low);
  if (cut.size === 0) {
    return Slice.empty;
  }
  const open = Slice.maxOpen(cut);
  return new Slice(cut, Math.min(slice.openStart, open.openStart), open.openEnd);
};

const trimAfterComposition = (
  view: EditorView,
  maxLength: number,
  measure: MeasureValueLength,
  lengthBefore: number,
) => {
  const { state } = view;
  const limit = Math.max(maxLength, lengthBefore);
  const { $head } = state.selection;
  if (view.composing || measure(state.doc) <= limit) {
    return;
  }

  const deleteBeforeHead = (count: number) => state.tr.delete($head.pos - count, $head.pos);
  let best: Transaction | null = null;
  let low = 1;
  let high = $head.parentOffset;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const tr = deleteBeforeHead(mid);
    if (measure(tr.doc) <= limit) {
      best = tr;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  if (best) {
    view.dispatch(best);
  }
};

export const createRichTextAreaMaxLengthPlugin = (
  getMaxLength: () => number | undefined,
  isExternalUpdate: () => boolean,
  measure: MeasureValueLength,
) => {
  let editorView: EditorView | null = null;
  let lengthBeforeComposition = 0;

  return new Plugin({
    view: (view) => {
      editorView = view;
      return {
        destroy: () => {
          editorView = null;
        },
      };
    },
    filterTransaction: (tr, state) => {
      const maxLength = getMaxLength();
      if (maxLength === undefined || !tr.docChanged || isExternalUpdate() || editorView?.composing) {
        return true;
      }
      return fitsMaxLength(maxLength, measure, state.doc, tr.doc);
    },
    props: {
      handleDOMEvents: {
        compositionstart: (view) => {
          if (!view.composing) {
            lengthBeforeComposition = measure(view.state.doc);
          }
          return false;
        },
        compositionend: (view) => {
          const maxLength = getMaxLength();
          if (maxLength !== undefined) {
            setTimeout(() => {
              if (editorView === view) {
                trimAfterComposition(view, maxLength, measure, lengthBeforeComposition);
              }
            });
          }
          return false;
        },
      },
      handlePaste: (view, _event, slice) => {
        const maxLength = getMaxLength();
        if (maxLength === undefined) {
          return false;
        }

        const { state } = view;
        const pasteIfItFits = (candidate: Slice) => {
          const tr = state.tr.replaceSelection(candidate);
          return fitsMaxLength(maxLength, measure, state.doc, tr.doc) ? tr : null;
        };

        if (pasteIfItFits(slice)) {
          return false;
        }

        let best: Transaction | null = null;
        let low = 0;
        let high = getTextLength(slice.content) - 1;
        while (low <= high) {
          const mid = Math.floor((low + high) / 2);
          const tr = pasteIfItFits(truncateSlice(slice, mid));
          if (tr) {
            best = tr;
            low = mid + 1;
          } else {
            high = mid - 1;
          }
        }

        if (best?.docChanged) {
          view.dispatch(best.scrollIntoView().setMeta('paste', true).setMeta('uiEvent', 'paste'));
        }
        return true;
      },
    },
  });
};
