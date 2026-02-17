import { FileAndExif } from '~/components/kystverket/FileUploader/FileUploader';
import { FileInfo, UploadFileResult } from './FileUploader.types';
import { v4 } from 'uuid';

export const onFilesChanged = (
  files: FileAndExif[],
  state: FileInfo[],
  uploadFile: (file: FormData) => Promise<UploadFileResult>,
  onChange: (files: FileInfo[]) => void,
  t: (key: string) => string,
  maxSizeInBytes?: number,
) => {
  console.log('onFilesChanged', files, state);
  const newFilesState = [...state];
  const fileObjectsByContextId: Record<string, File> = {};

  const { acceptedFiles, rejectedFiles } = validateFiles(files, maxSizeInBytes);

  // Add rejected files with error status immediately
  rejectedFiles.forEach((rejection) => {
    const contextId = v4();
    newFilesState.push({
      contextId,
      fileName: rejection.file.file.name,
      status: 'error',
      contentType: rejection.file.file.type,
      exif: rejection.file.exif,
      error: t(`errors.${rejection.reason}`),
    });
  });

  // Add accepted files with uploading status
  acceptedFiles.forEach((fileAndExif) => {
    const contextId = v4();
    newFilesState.push({
      contextId,
      fileName: fileAndExif.file.name,
      status: 'uploading',
      contentType: fileAndExif.file.type,
      exif: fileAndExif.exif,
    });
    fileObjectsByContextId[contextId] = fileAndExif.file;
  });

  onChange(newFilesState);

  Object.keys(fileObjectsByContextId).forEach(async (contextId) => {
    try {
      const uploadedFileState = newFilesState.find((f) => f.contextId === contextId);
      if (!uploadedFileState) {
        return;
      }

      const formData = new FormData();
      formData.append('file', fileObjectsByContextId[contextId], uploadedFileState.fileName);

      const result = await uploadFile(formData);
      if (result.success) {
        uploadedFileState.storageId = result.storageId;
        uploadedFileState.status = 'uploaded';
        delete uploadedFileState.error;
      } else {
        uploadedFileState.status = 'error';
        uploadedFileState.error = t(`errors.${result.error || 'unknown-error'}`);
      }
      onChange([...newFilesState]);
    } catch (error) {
      console.error('Error when uploading', error);

      const errorFileState = newFilesState.find((f) => f.contextId === contextId);
      if (!errorFileState) {
        return;
      }
      errorFileState.status = 'error';
      errorFileState.error = t('errors.unknown-error');
      onChange([...newFilesState]);
    }
  });
};

//these are mapped with custom messages in i18n files
type possibleErrors =
  | 'network-error'
  | 'invalid-file-type'
  | 'file-too-large'
  | 'file-scan-failed'
  | 'error'
  | 'unknown-error';

const validateFiles = (files: FileAndExif[], maxSizeInBytes: number = -1) => {
  const acceptedFiles: FileAndExif[] = [];
  const rejectedFiles: Array<{ file: FileAndExif; reason: possibleErrors }> = [];

  for (const file of files) {
    const acceptedFileSize = isAcceptedSize(file.file, maxSizeInBytes);

    if (!acceptedFileSize) {
      rejectedFiles.push({ file, reason: 'file-too-large' });
    } else {
      acceptedFiles.push(file);
    }
  }

  return { acceptedFiles, rejectedFiles };
};

const isAcceptedSize = (file: File, maxSizeInBytes: number): boolean => {
  if (maxSizeInBytes === -1) return true;
  return file.size <= maxSizeInBytes;
};


