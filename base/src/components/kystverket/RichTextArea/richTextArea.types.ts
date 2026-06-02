import type { CmdKey } from '@milkdown/core';

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
  /** For when image is uploaded, to give it a ref */
  onImageUpload?: UploadImageFn;
  resolveImageRef?: (ref: string) => string | null | undefined;
};

export type ToolbarCommand<T = unknown> = { key: CmdKey<T>; value?: T };

export type ImageMarkdown = { src: string; alt?: string };

export type ImageUploadResult = { src: string; ref?: string; alt?: string };

export type ImageInsertHandler = (file: File) => void;

export type UploadImageFn = (file: File) => Promise<ImageUploadResult | string | null>;
