import { useRef, useState } from 'react';
import { editorViewCtx } from '@milkdown/core';
import type { Editor } from '@milkdown/core';

type UseRichTextImagePickerParams = {
  disabled: boolean;
  loading: boolean;
  canUploadImage: boolean;
  isUploadingImage: boolean;
  get: () => Editor | undefined;
  pendingImageSelectionRef: React.RefObject<{ from: number; to: number } | null>;
  onImageFileInputChange: (event: React.ChangeEvent<HTMLInputElement>) => Promise<{ success: boolean }>;
};

type UseRichTextImagePickerReturn = {
  imageInputRef: React.RefObject<HTMLInputElement | null>;
  imageUploadError: string | undefined;
  openImageFilePicker: () => void;
  handleImageFileInputChange: (event: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
};

export const useRichTextImagePicker = ({
  disabled,
  loading,
  canUploadImage,
  isUploadingImage,
  get,
  pendingImageSelectionRef,
  onImageFileInputChange,
}: UseRichTextImagePickerParams): UseRichTextImagePickerReturn => {
  const [imageUploadError, setImageUploadError] = useState<string | undefined>(undefined);
  const imageInputRef = useRef<HTMLInputElement | null>(null);

  const openImageFilePicker = () => {
    if (disabled || loading || !canUploadImage || isUploadingImage) {
      return;
    }

    const editor = get();

    if (editor) {
      editor.action((ctx) => {
        const { from, to } = ctx.get(editorViewCtx).state.selection;
        pendingImageSelectionRef.current = { from, to };
      });
    }

    imageInputRef.current?.click();
  };

  const handleImageFileInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setImageUploadError(undefined);
    const { success } = await onImageFileInputChange(event);
    setImageUploadError(success ? undefined : 'Image failed to upload');
  };

  return {
    imageInputRef,
    imageUploadError,
    openImageFilePicker,
    handleImageFileInputChange,
  };
};
