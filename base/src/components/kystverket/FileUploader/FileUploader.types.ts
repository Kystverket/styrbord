export type FileStatus = 'uploading' | 'uploaded' | 'error';

export type FileInfo = {
  contextId: string;
  fileName: string;
  storageId?: string;
  contentType: string;
  thumbnailUri?: string;
  status: FileStatus;
  exif?: Exif;
  error?: string;
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
  | 'file-scan-failed';
