import { Editor, defaultValueCtx, editorViewOptionsCtx, prosePluginsCtx, rootCtx } from '@milkdown/core';
import { imageInlineComponent, inlineImageConfig } from '@milkdown/components/image-inline';
import type { InlineImageConfig } from '@milkdown/components/image-inline';
import { history } from '@milkdown/plugin-history';
import { listener, listenerCtx } from '@milkdown/plugin-listener';
import { Plugin } from '@milkdown/prose/state';
import type { Ctx } from '@milkdown/ctx';

import {
  createRichTextAreaEditorDrop,
  createRichTextAreaEditorEditable,
  createRichTextAreaEditorPaste,
  handleRichTextAreaEditorClick,
  handleRichTextAreaEditorKeydown,
  richTextCommonmarkPlugins,
} from './richTextArea.editor';

type CreateRichTextAreaEditorParams = {
  root: HTMLElement;
  disabled: boolean;
  editorMarkdown: string;
  /** id of the element describing the editor (the Alt+F10 hint). */
  describedBy: string;
  canUploadImage: boolean;
  dispatchImageFromFile: (file: File) => void;
  updateInlineImageConfig: (config: InlineImageConfig) => InlineImageConfig;
  updateToolbarState: (ctx: Ctx) => void;
  onMarkdownUpdated: (ctx: Ctx, markdown: string) => void;
  /** Fires synchronously on every doc-changing transaction, unlike onMarkdownUpdated which is debounced by @milkdown/plugin-listener. */
  onEmptyChange: (isEmpty: boolean) => void;
};

export const createRichTextAreaEditor = ({
  root,
  disabled,
  editorMarkdown,
  describedBy,
  canUploadImage,
  dispatchImageFromFile,
  updateInlineImageConfig,
  updateToolbarState,
  onMarkdownUpdated,
  onEmptyChange,
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
          keydown: handleRichTextAreaEditorKeydown,
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
            view: () => ({
              update: (view) => {
                const { doc } = view.state;
                const isEmpty =
                  doc.childCount === 1 && doc.firstChild!.isTextblock && doc.firstChild!.content.size === 0;
                onEmptyChange(isEmpty);
              },
            }),
          }),
        ),
      );
    })
    .use(richTextCommonmarkPlugins)
    .use(imageInlineComponent)
    .use(history)
    .use(listener);
};
