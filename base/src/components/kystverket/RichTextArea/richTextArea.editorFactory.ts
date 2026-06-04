import { Editor, defaultValueCtx, editorViewOptionsCtx, rootCtx } from '@milkdown/core';
import { imageInlineComponent, inlineImageConfig } from '@milkdown/components/image-inline';
import type { InlineImageConfig } from '@milkdown/components/image-inline';
import { history } from '@milkdown/plugin-history';
import { listener, listenerCtx } from '@milkdown/plugin-listener';
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
  canUploadImage: boolean;
  dispatchImageFromFile: (file: File) => void;
  updateInlineImageConfig: (config: InlineImageConfig) => InlineImageConfig;
  updateToolbarState: (ctx: Ctx) => void;
  onMarkdownUpdated: (ctx: Ctx, markdown: string) => void;
};

export const createRichTextAreaEditor = ({
  root,
  disabled,
  editorMarkdown,
  canUploadImage,
  dispatchImageFromFile,
  updateInlineImageConfig,
  updateToolbarState,
  onMarkdownUpdated,
}: CreateRichTextAreaEditorParams) => {
  return Editor.make()
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
    })
    .use(richTextCommonmarkPlugins)
    .use(imageInlineComponent)
    .use(history)
    .use(listener);
};
