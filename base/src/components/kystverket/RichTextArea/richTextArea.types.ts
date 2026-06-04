import type { CmdKey } from '@milkdown/core';
import { MaybePromise } from '~/utils/utility.types';

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
  onImageUpload?: (file: File) => Promise<ImageUploadResult | null>;
  /** Optional remove handler for deleting persisted images by stable ref. */
  onImageRemove?: (ref: string) => Promise<void>;
  /** Optional resolver that maps image refs in markdown to renderable image sources. */
  resolveImageRefs?: (refs?: string[]) => MaybePromise<Record<string, ResolvedImageRef>>;
};

export type ToolbarCommand<T = unknown> = { key: CmdKey<T>; value?: T };

export type ImageMarkdown = { src: string; alt?: string };
export type ResolvedImageRef = ImageMarkdown | undefined;

export type ImageUploadResult = { src: string; ref?: string; alt?: string };

export type ImageInsertHandler = (file: File) => void;

export type UploadImageFn = (file: File) => Promise<ImageUploadResult | string | null>;
