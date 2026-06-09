import type { CmdKey } from '@milkdown/core';
import { DeriveFileInfosFromStorageIds } from '~/utils/fileInfoResolver';

export type RichTextAreaProps = {
  value: string | null | undefined;
  onChange: (markdown: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  label?: string;
  description?: string | React.ReactNode;
  optional?: boolean | string;
  required?: boolean | string;
  error?: string;
  /** Optional upload handler that returns a display src and optional stable image ref. */
  onImageUpload?: OnImageUploadFn;
  /** Optional remove handler for deleting persisted images by stable ref. */
  onImageRemove?: (ref: string) => Promise<void>;
  /** Optional resolver that returns image metadata for markdown refs (storageIds). */
  deriveFileInfosFromStorageIds?: DeriveFileInfosFromStorageIds;
};

export type ToolbarCommand<T = unknown> = { key: CmdKey<T>; value?: T };

export type ResolvedImageRef = { storageId: string; previewUri: string; alt?: string };

export type ImageUploadResult = { src: string; ref?: string; alt?: string };

export type FileUploaderStyleImageUploadResult = { storageId: string; success: boolean; error?: string };

export type OnImageUploadFn = (
  file: File,
) => Promise<ImageUploadResult | FileUploaderStyleImageUploadResult | string | null>;

export type ImageInsertHandler = (file: File) => void;

export type UploadImageFn = (file: File) => Promise<ImageUploadResult | string | null>;
