import type { CmdKey } from '@milkdown/core';
import type { ReactNode } from 'react';

export type RichTextAreaProps = {
  value: string | null | undefined;
  onChange: (markdown: string) => void;
  placeholder?: string;
  disabled?: boolean;
  /** Editor height in lines. Defaults to a medium height. */
  rows?: 'sm' | 'md' | 'lg';
  className?: string;
  label?: string;
  description?: string | React.ReactNode;
  optional?: boolean | string;
  required?: boolean | string;
  error?: string;
  /**
   * Maximum number of characters, like `maxLength` on TextArea: typing stops at the limit, a paste is
   * cut to fit, and a counter shows under the editor. Counts the visible text, not the markdown, and
   * each line or paragraph break as one character. A `value` that is already longer is shown in full,
   * and the counter shows how much too long it is.
   */
  maxLength?: number;
  /** Used for the bottomToolbar */
  bottomToolbar?: ReactNode;
  /** Optional upload handler that returns a display src and optional stable image ref. */
  showToolbar?: boolean;
  onImageUpload?: OnImageUploadFn;
  /** Optional remove handler for deleting persisted images by stable ref. */
  onImageRemove?: (ref: string) => Promise<void>;
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
