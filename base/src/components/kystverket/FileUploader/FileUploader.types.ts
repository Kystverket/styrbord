import { MaterialIconProps } from '~/components/kystverket/Icon/icon';

export type FileStatus = 'uploading' | 'uploaded' | 'error';

/** An extra button in the FileUploader's button row, after the built-in upload buttons. */
export type FileUploaderAction = {
  icon: MaterialIconProps['material'];
  label: string;
  onClick: () => void;
  disabled?: boolean;
};

/** An extra icon button on a single file in the FileUploader's file list. `label` is used as aria-label. */
export type FileUploaderFileAction = Omit<FileUploaderAction, 'onClick'> & {
  onClick: (file: FileInfo) => void;
};

export type FileInfo = {
  contextId: string;
  fileName: string;
  storageId?: string;
  contentType: string;
  status: FileStatus;
  exif?: Exif;
  error?: string;
};

export type ExtraFileInfo = {
  storageId?: string;
  thumbnailUri?: string;
  previewUri?: string;
  sizeInBytes?: number;
};

export interface UploadFileResponse {
  attachmentId: string;
}

export type Exif = {
  latitude?: number;
  longitude?: number;
};

export type UploadFileResult = {
  storageId: string;
  success: boolean;
  error?: UploadFileError;
};

export type UploadFileError =
  | 'error'
  | 'network-error'
  | 'invalid-file-type'
  | 'file-too-large'
  | 'unknown-error'
  | 'file-scan-failed'
  | 'over-files-limit';
