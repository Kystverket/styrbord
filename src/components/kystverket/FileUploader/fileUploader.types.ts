export type FileStatus = 'uploading' | 'uploaded' | 'error';

export type FileInfo = {
  contextId: string;
  fileName: string;
  storageId?: string;
  contentType: string;
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
