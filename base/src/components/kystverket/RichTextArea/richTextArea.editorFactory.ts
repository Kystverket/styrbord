import { Editor, defaultValueCtx, editorViewOptionsCtx, prosePluginsCtx, rootCtx } from '@milkdown/core';
import { imageInlineComponent, inlineImageConfig } from '@milkdown/components/image-inline';
import type { InlineImageConfig } from '@milkdown/components/image-inline';
import { history } from '@milkdown/plugin-history';
import { listener, listenerCtx } from '@milkdown/plugin-listener';
import type { Node as ProseNode } from '@milkdown/prose/model';
import { Plugin } from '@milkdown/prose/state';
import type { Ctx } from '@milkdown/ctx';

import {
  createRichTextAreaEditorDrop,
  createRichTextAreaEditorEditable,
  createRichTextAreaEditorPaste,
  handleRichTextAreaEditorClick,
  createRichTextAreaEditorKeydown,
  richTextCommonmarkPlugins,
} from './richTextArea.editor';

type CreateRichTextAreaEditorParams = {
  root: HTMLElement;
  disabled: boolean;
  editorMarkdown: string;
  /** id of the element describing the editor (the Alt+F10 hint). */
  describedBy: string;
  /** Whether Alt+F10 has a toolbar item to go to; without one, Tab must be allowed to leave a list. */
  canReachToolbar: () => boolean;
  canUploadImage: boolean;
  dispatchImageFromFile: (file: File) => void;
  updateInlineImageConfig: (config: InlineImageConfig) => InlineImageConfig;
  updateToolbarState: (ctx: Ctx) => void;
  onMarkdownUpdated: (ctx: Ctx, markdown: string) => void;
  /** Fires synchronously on every doc-changing transaction, unlike onMarkdownUpdated which is debounced by @milkdown/plugin-listener. */
  onEmptyChange: (isEmpty: boolean) => void;
  /** Visible text length, see getTextLength. Fires on init and on every doc change. */
  onTextLengthChange: (length: number) => void;
};

// Visible text, not markdown. A block break or hard break counts as 1, like a newline in a textarea.
// Images count as nothing.
const getTextLength = (doc: ProseNode) => doc.textBetween(0, doc.content.size, '\n').length;

export const createRichTextAreaEditor = ({
  root,
  disabled,
  editorMarkdown,
  describedBy,
  canReachToolbar,
  canUploadImage,
  dispatchImageFromFile,
  updateInlineImageConfig,
  updateToolbarState,
  onMarkdownUpdated,
  onEmptyChange,
  onTextLengthChange,
}: CreateRichTextAreaEditorParams) => {
  return Editor.make()
    .config((ctx) => {
      ctx.set(rootCtx, root);
      ctx.set(defaultValueCtx, editorMarkdown);
      ctx.update(inlineImageConfig.key, updateInlineImageConfig);
      ctx.update(editorViewOptionsCtx, (prev = {}) => ({
        ...prev,
        editable: createRichTextAreaEditorEditable(disabled),
        attributes: { 'aria-describedby': describedBy },
        handleDOMEvents: {
          ...prev.handleDOMEvents,
          click: handleRichTextAreaEditorClick,
          keydown: createRichTextAreaEditorKeydown(canReachToolbar),
          paste: createRichTextAreaEditorPaste(canUploadImage, dispatchImageFromFile),
          drop: createRichTextAreaEditorDrop(canUploadImage, dispatchImageFromFile),
        },
      }));
      ctx.get(listenerCtx).markdownUpdated((listenerContext, markdown) => {
        onMarkdownUpdated(listenerContext, markdown);
      });
      ctx.get(listenerCtx).selectionUpdated((listenerContext) => {
        updateToolbarState(listenerContext);
      });
      ctx.update(prosePluginsCtx, (plugins) =>
        plugins.concat(
          new Plugin({
            view: (initialView) => {
              onTextLengthChange(getTextLength(initialView.state.doc));
              return {
                update: (view, prevState) => {
                  const { doc } = view.state;
                  const isEmpty =
                    doc.childCount === 1 && doc.firstChild!.isTextblock && doc.firstChild!.content.size === 0;
                  onEmptyChange(isEmpty);
                  if (doc !== prevState.doc) {
                    onTextLengthChange(getTextLength(doc));
                  }
                },
              };
            },
          }),
        ),
      );
    })
    .use(richTextCommonmarkPlugins)
    .use(imageInlineComponent)
    .use(history)
    .use(listener);
};
