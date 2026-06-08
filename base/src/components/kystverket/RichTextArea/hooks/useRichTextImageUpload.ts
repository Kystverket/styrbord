import { useState } from 'react';
import { commandsCtx, editorViewCtx } from '@milkdown/core';
import type { Editor } from '@milkdown/core';
import { insertImageCommand } from '@milkdown/preset-commonmark';
import type { Ctx } from '@milkdown/ctx';
import type { InlineImageConfig } from '@milkdown/components/image-inline';
import { TextSelection } from '@milkdown/prose/state';

import type { ImageUploadResult, ResolvedImageRef, UploadImageFn } from '../richTextArea.types';
import { createRichTextAreaInlineImageConfig } from '../richTextArea.editor';

type UseRichTextImageUploadParams = {
  disabled: boolean;
  get: () => Editor | undefined;
  updateToolbarState: (ctx: Ctx) => void;
  latestOnUploadRef: React.RefObject<UploadImageFn | undefined> | undefined;
  sasToRefMap: React.RefObject<Map<string, string>>;
  pendingImageSelectionRef: React.RefObject<{ from: number; to: number } | null>;
};

type UseRichTextImageUploadReturn = {
  isUploadingImage: boolean;
  inlineImageConfig: (config: InlineImageConfig) => InlineImageConfig;
  insertImageFromFile: (file: File) => void;
  handleImageFileInputChange: (event: React.ChangeEvent<HTMLInputElement>) => Promise<{ success: boolean }>;
};

const normalizeUploadResult = (
  result: Awaited<ReturnType<NonNullable<UploadImageFn>>> | null,
  file: File,
): ImageUploadResult | null => {
  if (!result) {
    return null;
  }

  if (typeof result === 'string') {
    return {
      src: result,
      alt: file.name.replace(/\.[^.]+$/, ''),
    };
  }

  if (!result.src) {
    return null;
  }

  return {
    src: result.src,
    ref: result.ref,
    alt: result.alt ?? file.name.replace(/\.[^.]+$/, ''),
  };
};

export const useRichTextImageUpload = ({
  disabled,
  get,
  updateToolbarState,
  latestOnUploadRef,
  sasToRefMap,
  pendingImageSelectionRef,
}: UseRichTextImageUploadParams): UseRichTextImageUploadReturn => {
  const [isUploadingImage, setIsUploadingImage] = useState(false);

  const uploadImage = async (file: File): Promise<ImageUploadResult | null> => {
    const upload = latestOnUploadRef?.current;

    if (!upload) {
      return null;
    }

    const result = await upload(file);
    return normalizeUploadResult(result, file);
  };

  const insertImageNode = (image: Omit<ResolvedImageRef, 'storageId'>) => {
    const editor = get();

    if (!editor) {
      return;
    }

    editor.action((ctx) => {
      const view = ctx.get(editorViewCtx);
      const selection = pendingImageSelectionRef.current;
      const maxPos = view.state.doc.content.size;

      view.focus();

      if (selection) {
        const clampedFrom = Math.min(Math.max(selection.from, 0), maxPos);
        const clampedTo = Math.min(Math.max(selection.to, 0), maxPos);
        const from = Math.min(clampedFrom, clampedTo);
        const to = Math.max(clampedFrom, clampedTo);
        view.dispatch(view.state.tr.setSelection(TextSelection.create(view.state.doc, from, to)));
      }

      const commands = ctx.get(commandsCtx);
      commands.call(insertImageCommand.key, image);

      pendingImageSelectionRef.current = null;
      updateToolbarState(ctx);
    });
  };

  const handleImageInsertFromFile = async (file: File): Promise<boolean> => {
    if (disabled || isUploadingImage) {
      return false;
    }

    setIsUploadingImage(true);

    try {
      const uploadedImage = await uploadImage(file);

      if (!uploadedImage) {
        return false;
      }

      if (uploadedImage.ref) {
        sasToRefMap.current.set(uploadedImage.src, uploadedImage.ref);
      }

      insertImageNode({ previewUri: uploadedImage.src, alt: uploadedImage.alt });
      return true;
    } catch {
      return false;
    } finally {
      setIsUploadingImage(false);
    }
  };

  const insertImageFromFile = (file: File) => {
    void handleImageInsertFromFile(file);
  };

  const handleImageFileInputChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ): Promise<{ success: boolean }> => {
    const file = event.target.files?.[0];
    event.target.value = '';

    if (!file) {
      return { success: true };
    }
    const result = await handleImageInsertFromFile(file);

    return { success: result };
  };

  return {
    isUploadingImage,
    inlineImageConfig: createRichTextAreaInlineImageConfig(uploadImage, sasToRefMap.current),
    insertImageFromFile,
    handleImageFileInputChange,
  };
};
