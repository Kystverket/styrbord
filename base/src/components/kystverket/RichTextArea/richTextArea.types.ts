import type { CmdKey } from '@milkdown/core';

// resolveImageRef?: (ref: string) => ResolvedImageRef;

type ImageHandlersBoth = {
  onUpload: UploadImageFn;
  resolveImageRef: (ref: string) => string | null;
};

type ImageHandlersNeither = {
  onUpload?: never;
  resolveImageRef?: never;
};

type RichTextAreaBaseProps = {
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
};

export type RichTextAreaProps = RichTextAreaBaseProps & (ImageHandlersBoth | ImageHandlersNeither);

export type ToolbarCommand<T = unknown> = { key: CmdKey<T>; value?: T };

export type ImageMarkdown = { src: string; alt?: string; title?: string };

export type ImageUploadResult = { src: string; ref?: string; alt?: string; title?: string };

export type ImageInsertHandler = (file: File) => void;

export type UploadImageFn = (file: File) => Promise<ImageUploadResult | string | null>;
