import { FileAndExif, FileUploaderProps } from '~/components/kystverket/FileUploader/FileUploader';
import { FileInfo, UploadFileError, UploadFileResult } from './FileUploader.types';
import { v4 } from 'uuid';

type fileUploaderFilters = Pick<FileUploaderProps, 'maxSizeInBytes' | 'allowedFileTypes' | 'maxFiles'>;

export const onFilesChanged = (
  files: FileAndExif[],
  state: FileInfo[],
  uploadFile: (file: FormData) => Promise<UploadFileResult>,
  onChange: (files: FileInfo[]) => void,
  t: (key: string) => string,
  filters?: fileUploaderFilters,
) => {
  console.log('onFilesChanged', files, state);
  const newFilesState = [...state];
  const fileObjectsByContextId: Record<string, File> = {};

  const { acceptedFiles, rejectedFiles } = validateFiles(files, state.length, filters);

  // Add accepted files with uploading status
  acceptedFiles.forEach((fileAndExif) => {
    const contextId = v4();
    newFilesState.push({
      contextId,
      fileName: fileAndExif.file.name,
      status: 'uploading',
      thumbnailUri: fileAndExif.file.type.startsWith('image/') ? URL.createObjectURL(fileAndExif.file) : undefined,
      contentType: fileAndExif.file.type,
      exif: fileAndExif.exif,
      sizeInBytes: fileAndExif.file.size,
    });
    fileObjectsByContextId[contextId] = fileAndExif.file;
  });
  // Add rejected files with error status
  rejectedFiles.forEach((rejection) => {
    const contextId = v4();
    newFilesState.push({
      contextId,
      fileName: rejection.file.file.name,
      status: 'error',
      contentType: rejection.file.file.type,
      exif: rejection.file.exif,
      error: t(`errors.${rejection.reason}`),
      sizeInBytes: rejection.file.file.size,
    });
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
};;

const validateFiles = (newFiles: FileAndExif[], currentLength: number, filters: fileUploaderFilters | undefined) => {
  const acceptedFiles: FileAndExif[] = [];
  const rejectedFiles: Array<{ file: FileAndExif; reason: UploadFileError }> = [];

  for (const [idx, file] of newFiles.entries()) {
    if (filters === undefined) {
      acceptedFiles.push(file);
      continue;
    }

    const acceptedFileSize = isAcceptedSize(file.file, filters.maxSizeInBytes);
    const acceptedFileType = isAcceptedFileType(file.file, filters.allowedFileTypes);
    const isWithinMaxLimit = filters.maxFiles ? currentLength + idx <= filters.maxFiles : true;

    if (!acceptedFileSize) {
      rejectedFiles.push({ file, reason: 'file-too-large' });
    } else if (!acceptedFileType) {
      rejectedFiles.push({ file, reason: 'invalid-file-type' });
    } else if (!isWithinMaxLimit) {
      rejectedFiles.push({ file, reason: 'over-files-limit' });
    } else {
      acceptedFiles.push(file);
    }
  }

  return { acceptedFiles, rejectedFiles };
};

const isAcceptedSize = (file: File, maxSizeInBytes: FileUploaderProps['maxSizeInBytes'] | undefined): boolean => {
  if (maxSizeInBytes === undefined) return true;
  return file.size <= maxSizeInBytes;
};

const isAcceptedFileType = (file: File, allowedFileTypes: FileUploaderProps['allowedFileTypes'] | undefined) => {
  if (allowedFileTypes === undefined) return true;
  const normalizedAllowedTypes = allowedFileTypes.map((type) => type.trim().toLowerCase()).filter(Boolean);

  if (normalizedAllowedTypes.length === 0) {
    return true;
  }

  const fileName = file.name.toLowerCase();
  const fileMimeType = file.type.toLowerCase();

  return normalizedAllowedTypes.some((allowedType) => {
    if (allowedType.startsWith('.')) {
      return fileName.endsWith(allowedType);
    }

    if (allowedType.endsWith('/*')) {
      const mimePrefix = allowedType.slice(0, -1);
      return fileMimeType.startsWith(mimePrefix);
    }

    return fileMimeType === allowedType;
  });
};
