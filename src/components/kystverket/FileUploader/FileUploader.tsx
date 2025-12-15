'use client';

import { ReactNode, useContext, useRef, useState } from 'react';
import { Exif, FileInfo } from './FileUploader.types';
import {
  Field,
  Label,
  Spinner,
  ValidationMessage,
  Dialog,
  Button,
  Checkbox,
  Paragraph,
  Heading,
} from '@digdir/designsystemet-react';
import classes from './FileUploader.module.css';
import { Box, Icon, LabelContent, Image } from '~/main';
import exifr from 'exifr';
import { FileUploaderContext } from './FileUploader.context';
import { v4 } from 'uuid';

// Remove all exif data except latitude and longitude
const pruneUnwantedExifData = (exif: Exif): Exif | undefined => {
  if (!exif) {
    return undefined;
  }
  return {
    latitude: exif.latitude,
    longitude: exif.longitude,
  };
};

interface FileAndExif {
  file: File;
  exif?: Exif;
}

export interface FileUploaderProps {
  label: string;
  buttonLabel: string;
  description?: string | string[] | ReactNode;
  error?: string | null;
  multiple?: boolean;
  files: FileInfo[];
  maxFiles?: number;
  onChange: (files: FileInfo[]) => void;
  allowedFileTypes?: string[];
  required?: boolean | string;
  optional?: boolean | string;

  // Existing files functionality
  existingFilesConfig?: {
    files: FileInfo[];
    label?: string;
    onLoadPreview?: (storageIds: string[]) => Promise<{ uri?: string; type?: string }[]>;
    cancelLabel?: string;
    selectLabel?: string;
  };
}

const defaultAllowedFileTypes = ['.pdf', '.jpg', '.jpeg', '.png'];

export const FileUploader = ({
  label,
  required,
  optional,
  buttonLabel,
  description = '',
  error = null,
  multiple = true,
  files = [],
  maxFiles,
  onChange,
  allowedFileTypes = defaultAllowedFileTypes,
  existingFilesConfig,
}: FileUploaderProps) => {
  const fileUploaderContext = useContext(FileUploaderContext);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const existingFiles = existingFilesConfig?.files ?? [];
  const existingFilesLabel = existingFilesConfig?.label ?? 'Velg fra eksisterende filer';
  const onLoadExistingFilePreview = existingFilesConfig?.onLoadPreview;
  const existingFilesCancelLabel = existingFilesConfig?.cancelLabel ?? 'Avbryt';
  const existingFilesSelectLabel = existingFilesConfig?.selectLabel ?? 'Velg';

  const [selectedExistingFiles, setSelectedExistingFiles] = useState<{ [key: string]: boolean }>({});
  const [existingFilesWithPreviews, setExistingFilesWithPreviews] = useState<
    (FileInfo & { previewUrl?: string; mimeType?: string })[]
  >([]);
  const [loadingExistingFiles, setLoadingExistingFiles] = useState(false);

  const onUploadFile = (uploadedFiles: File[]) => {
    Promise.all(
      uploadedFiles.map<Promise<FileAndExif>>(async (file) => {
        try {
          return { file, exif: pruneUnwantedExifData(await exifr.parse(file)) };
        } catch (exifError) {
          console.log('Error when parsing exif data, assuming image does not have any', exifError);
          return { file };
        }
      }),
    ).then((filesWithExif) => {
      onFilesChanged(filesWithExif, files, fileUploaderContext.uploadFile, onChange);
    });
  };

  const onDeleteFile = (file: FileInfo) => {
    onChange(files.filter((f) => f.contextId !== file.contextId));
  };

  const getAvailableExistingFiles = (): FileInfo[] => {
    const currentFileIds = files.map((f) => f.storageId).filter(Boolean);
    return existingFiles.filter((file) => !currentFileIds.includes(file.storageId));
  };

  const loadExistingFilePreviews = async (filesToLoad: FileInfo[]) => {
    setLoadingExistingFiles(true);
    try {
      if (onLoadExistingFilePreview) {
        const storageIds = filesToLoad.map((file) => file.storageId).filter(Boolean) as string[];

        if (storageIds.length > 0) {
          const previews = await onLoadExistingFilePreview(storageIds);

          const withPreviews = filesToLoad.map((file, index) => {
            const preview = previews[index];
            return {
              ...file,
              previewUrl: preview?.uri,
              mimeType: preview?.type || file.contentType,
            };
          });

          setExistingFilesWithPreviews(withPreviews);
        } else {
          setExistingFilesWithPreviews(filesToLoad.map((file) => ({ ...file })));
        }
      } else {
        setExistingFilesWithPreviews(filesToLoad.map((file) => ({ ...file })));
      }
    } catch (previewError) {
      console.error('Failed to load existing file previews:', previewError);
      setExistingFilesWithPreviews(filesToLoad.map((file) => ({ ...file })));
    } finally {
      setLoadingExistingFiles(false);
    }
  };

  const openExistingFilesModal = async () => {
    setSelectedExistingFiles({});
    dialogRef.current?.showModal();

    const availableFiles = getAvailableExistingFiles();
    await loadExistingFilePreviews(availableFiles);
  };

  const handleExistingFileCheckboxChange = (storageId: string, checked: boolean) => {
    setSelectedExistingFiles((prev) => ({
      ...prev,
      [storageId]: checked,
    }));
  };

  const handleConfirmExistingFiles = () => {
    const selectedFiles = existingFilesWithPreviews.filter(
      (file) => file.storageId && selectedExistingFiles[file.storageId],
    );

    if (selectedFiles.length > 0) {
      const newFiles = selectedFiles.map((file) => ({
        ...file,
        contextId: v4(),
        status: 'uploaded' as const,
      }));

      onChange([...files, ...newFiles]);
    }

    dialogRef.current?.close();
    setSelectedExistingFiles({});
  };

  const handleCancelExistingFiles = () => {
    dialogRef.current?.close();
    setSelectedExistingFiles({});
  };

  const showUploadingWarning = files.some((f) => f.status === 'uploading');
  const showMaxReachedWarning = !showUploadingWarning && maxFiles && files.length >= maxFiles;
  const showUploadButton = !showMaxReachedWarning && !showUploadingWarning;

  return (
    <Field>
      <Label style={{ pointerEvents: 'none' }}>
        <LabelContent text={label} required={required} optional={optional} />
      </Label>
      {description && <Field.Description>{description}</Field.Description>}
      <input
        type="file"
        style={{ display: 'none' }}
        ref={fileInputRef}
        id="fileUploadButton"
        name="fileUploadButton"
        accept={allowedFileTypes.join(',')}
        multiple={multiple}
        onChange={(e) => {
          const target = e.target as HTMLInputElement;
          if (target.files && target.files.length > 0) {
            onUploadFile(Array.from(target.files));
            target.value = ''; // Reset the input value to allow re-uploading the same file
          }
        }}
      />
      {showUploadButton && (
        <Box gap={8} horizontal={existingFilesConfig && existingFiles.length > 0}>
          <button className={classes.uploadButton} onClick={() => fileInputRef.current?.click()}>
            {buttonLabel}
          </button>
          {existingFilesConfig && existingFiles.length > 0 && getAvailableExistingFiles().length > 0 && (
            <Button variant="secondary" onClick={openExistingFilesModal} className={classes.existingFilesButton}>
              {existingFilesLabel}
            </Button>
          )}
        </Box>
      )}
      {showMaxReachedWarning && (
        <div className={classes.uploadInformation}>
          <Icon material="info" />
          <span>Maksimalt antall filer er lastet opp.</span>
        </div>
      )}
      {showUploadingWarning && (
        <div className={classes.uploadInformation}>
          <Spinner aria-label="Laster opp" data-size="2xs" data-color="neutral" />
          <span>Vennligst vent med å velge flere filer før alle filene er lastet opp</span>
        </div>
      )}
      {files && files.length > 0 && (
        <div className={classes.fileList}>
          {files.map((file) => (
            <div key={file.contextId} className={classes.fileItem}>
              <Box>
                <Box horizontal align="center" gap={8}>
                  <span>{file.fileName}</span>
                  {file.status === 'uploading' && (
                    <Spinner aria-label="Laster opp" data-size="2xs" data-color="neutral" />
                  )}
                </Box>
                {file.status === 'error' && <ValidationMessage>{file.error}</ValidationMessage>}
              </Box>
              <button
                className={classes.removeButton}
                onClick={() => {
                  onDeleteFile(file);
                }}
                aria-label="Remove file"
              >
                <Icon material="close" />
              </button>
            </div>
          ))}
        </div>
      )}
      {error && <ValidationMessage>{error}</ValidationMessage>}

      {/* Existing Files Dialog */}
      <Dialog ref={dialogRef}>
        <Box gap={16}>
          <Heading data-size="sm">{existingFilesLabel}</Heading>

          {loadingExistingFiles ? (
            <Box gap={8} align="center">
              <Spinner aria-label="Laster" data-size="xs" />
              <Paragraph>Laster filer...</Paragraph>
            </Box>
          ) : existingFilesWithPreviews.length === 0 ? (
            <Paragraph>Ingen eksisterende filer tilgjengelig.</Paragraph>
          ) : (
            <Box gap={12}>
              {existingFilesWithPreviews.map((file) => (
                <div
                  key={file.storageId}
                  className={`${classes.existingFileItem} ${file.storageId && selectedExistingFiles[file.storageId] ? classes.selected : ''}`}
                  onClick={() => {
                    if (file.storageId) {
                      handleExistingFileCheckboxChange(file.storageId, !selectedExistingFiles[file.storageId]);
                    }
                  }}
                >
                  <Checkbox
                    label=""
                    checked={(file.storageId && selectedExistingFiles[file.storageId]) || false}
                    onChange={(e) => {
                      if (file.storageId) {
                        handleExistingFileCheckboxChange(file.storageId, e.target.checked);
                      }
                    }}
                    onClick={(e) => e.stopPropagation()}
                  />
                  <Box className={classes.thumbnailContainer}>
                    {file.previewUrl && file.mimeType?.startsWith('image/') ? (
                      <Image
                        src={file.previewUrl}
                        alt={file.fileName || 'Thumbnail'}
                        className={classes.thumbnailImage}
                      />
                    ) : (
                      <Box className={classes.fileIcon}>
                        <Paragraph className={classes.fileIconText}>📄</Paragraph>
                      </Box>
                    )}
                  </Box>
                  <Box className={classes.existingFileInfo}>
                    <Box gap={2}>
                      <Paragraph className={classes.fileName}>{file.fileName || 'Unknown filename'}</Paragraph>
                      {file.mimeType && <Paragraph className={classes.mimeType}>{file.mimeType}</Paragraph>}
                    </Box>
                  </Box>
                </div>
              ))}
            </Box>
          )}
          <Box align="end">
            <Box horizontal gap={16}>
              <Button variant="secondary" onClick={handleCancelExistingFiles}>
                {existingFilesCancelLabel}
              </Button>
              <Button
                disabled={Object.keys(selectedExistingFiles).every((key) => !selectedExistingFiles[key])}
                onClick={handleConfirmExistingFiles}
                variant="primary"
              >
                {existingFilesSelectLabel}
              </Button>
            </Box>
          </Box>
        </Box>
      </Dialog>
    </Field>
  );
};

const onFilesChanged = (
  files: FileAndExif[],
  state: FileInfo[],
  uploadFile: (file: FormData) => Promise<string>,
  callback: (files: FileInfo[]) => void,
) => {
  console.log('onFilesChanged', files, state);
  const newFilesState = [...state];
  const fileObjectsByContextId: Record<string, File> = {};

  files.forEach((fileAndExif) => {
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

  callback(newFilesState);

  Object.keys(fileObjectsByContextId).forEach(async (contextId) => {
    try {
      const uploadedFileState = newFilesState.find((f) => f.contextId === contextId);
      if (!uploadedFileState) {
        return;
      }

      const formData = new FormData();
      formData.append('file', fileObjectsByContextId[contextId], uploadedFileState.fileName);

      const storageId = await uploadFile(formData);
      uploadedFileState.storageId = storageId;
      uploadedFileState.status = 'uploaded';
      delete uploadedFileState.error;
      callback([...newFilesState]);
    } catch (error) {
      console.error('Error when uploading', error);

      const errorFileState = newFilesState.find((f) => f.contextId === contextId);
      if (!errorFileState) {
        return;
      }
      errorFileState.status = 'error';
      errorFileState.error = 'Failed to upload file';
      callback([...newFilesState]);
    }
  });
};
