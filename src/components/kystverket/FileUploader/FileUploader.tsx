'use client';

import { ReactNode, useContext, useRef, useState } from 'react';
import { Exif, FileInfo, UploadFileError, UploadFileResult } from './FileUploader.types';
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
import { Box, Icon, LabelContent, Tag } from '~/main';
import exifr from 'exifr';
import { FileUploaderContext } from './FileUploader.context';
import { v4 } from 'uuid';
import { useStyrbordTranslation } from '~/i18n/translations';

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
  translations?: {
    existingFiles?: {
      buttonOpen?: string;
      dialogTitle?: string;
      dialogCancel?: string;
      dialogConfirm?: string;
      noFilesAvailable?: string;
    };
  };

  existingFilesProvider?: () => Promise<FileInfo[]>;
}

function getUploadErrorMessage(error?: UploadFileError) {
  switch (error) {
    case 'network-error':
      return 'Nettverksfeil. Vennligst sjekk tilkoblingen og prøv igjen.';

    case 'invalid-file-type':
      return 'Filtypen er ikke tillatt.';

    case 'file-too-large':
      return 'Filen er for stor. Vennligst velg en mindre fil.';

    case 'file-scan-failed':
      return 'Filen kunne ikke lastes opp fordi sikkerhetsskanningen feilet.';

    case 'error':
      return 'Noe gikk galt under opplastingen.';

    case 'unknown-error':
    default:
      return 'En ukjent feil oppstod. Vennligst prøv igjen senere.';
  }
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
  translations,
  existingFilesProvider,
}: FileUploaderProps) => {
  const { at } = useStyrbordTranslation();
  const t = at.bind(null, 'fileUploader', translations);

  const fileUploaderContext = useContext(FileUploaderContext);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const [allExistingFiles, setAllExistingFiles] = useState<FileInfo[]>([]);
  const [loadingAllExistingFiles, setLoadingAllExistingFiles] = useState<boolean>(false);

  const [selectedExistingFiles, setSelectedExistingFiles] = useState<Record<string, boolean>>({});

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

  const openExistingFilesModal = async () => {
    if (!existingFilesProvider) return;

    setLoadingAllExistingFiles(true);
    (async () => {
      const existingFiles = await existingFilesProvider();
      setAllExistingFiles(existingFiles);
      setSelectedExistingFiles(
        existingFiles.reduce(
          (acc, file) => {
            if (file.storageId) {
              acc[file.storageId] = !!files.find((f) => f.storageId === file.storageId);
            }
            return acc;
          },
          {} as Record<string, boolean>,
        ),
      );
      setLoadingAllExistingFiles(false);
    })();
    dialogRef.current?.showModal();
  };

  const handleExistingFileCheckboxChange = (storageId: string, checked: boolean) => {
    setSelectedExistingFiles((prev) => ({
      ...prev,
      [storageId]: checked,
    }));
  };

  const handleConfirmExistingFiles = () => {
    const newFileList = [
      ...files.filter(
        (file) =>
          (file.storageId && selectedExistingFiles[file.storageId]) ||
          !allExistingFiles.find((f) => f.storageId === file.storageId),
      ),
    ];

    const newlySelectedFiles = allExistingFiles.filter(
      (file) =>
        file.storageId && selectedExistingFiles[file.storageId] && !files.find((f) => f.storageId === file.storageId),
    );

    if (newlySelectedFiles.length > 0) {
      const newFiles = newlySelectedFiles.map((file) => ({
        ...file,
        contextId: v4(),
        status: 'uploaded' as const,
      }));

      newFileList.push(...newFiles);
    }

    onChange([...newFileList]);

    dialogRef.current?.close();
  };

  const handleCancelExistingFiles = () => {
    dialogRef.current?.close();
  };

  const showUploadingWarning = files.some((f) => f.status === 'uploading');
  const showMaxReachedWarning = !showUploadingWarning && maxFiles && files.length >= maxFiles;
  const showUploadButton = !showMaxReachedWarning && !showUploadingWarning;

  return (
    <>
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
          <Box gap={8} horizontal>
            {existingFilesProvider && (
              <button className={classes.uploadButton} onClick={openExistingFilesModal}>
                {t('existingFiles.buttonOpen')}
              </button>
            )}
            <button className={classes.uploadButton} onClick={() => fileInputRef.current?.click()}>
              {buttonLabel}
            </button>
          </Box>
        )}
        {showMaxReachedWarning && (
          <div className={classes.uploadInformation}>
            <Icon material="info" />
            <span>{t('maxFilesReached')}</span>
          </div>
        )}
        {showUploadingWarning && (
          <div className={classes.uploadInformation}>
            <Spinner aria-label={t('uploading')} data-size="2xs" data-color="neutral" />
            <span>{t('uploadingPleaseWait')}</span>
          </div>
        )}{' '}
        {files && files.length > 0 && (
          <div className={classes.fileList}>
            {files.map((file) => (
              <div key={file.contextId} className={classes.fileItem}>
                <Box>
                  <Box horizontal align="center" gap={8}>
                    <span>{file.fileName}</span>
                    {file.status === 'uploading' && (
                      <Spinner aria-label={t('uploading')} data-size="2xs" data-color="neutral" />
                    )}
                  </Box>
                  {file.status === 'error' && (
                    <ValidationMessage>{getUploadErrorMessage(file.error as UploadFileError)}</ValidationMessage>
                  )}
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
      </Field>

      {/* Existing Files Dialog */}
      <Dialog ref={dialogRef}>
        <Box gap={16}>
          <Heading level={2} data-size="sm">
            {t('existingFiles.dialogTitle')}
          </Heading>

          {loadingAllExistingFiles && (
            <Box horizontal align="center" justify="center">
              <Spinner aria-label={t('loading')} />
            </Box>
          )}
          {!loadingAllExistingFiles && allExistingFiles.length === 0 && (
            <Paragraph>{t('existingFiles.noFilesAvailable')}</Paragraph>
          )}
          {!loadingAllExistingFiles && allExistingFiles.length > 0 && (
            <>
              <Box gap={12} my={16}>
                {allExistingFiles.map((file) => (
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
                      className={classes.checkbox}
                      checked={(file.storageId && selectedExistingFiles[file.storageId]) || false}
                      onChange={(e) => {
                        if (file.storageId) {
                          handleExistingFileCheckboxChange(file.storageId, e.target.checked);
                        }
                      }}
                      onClick={(e) => e.stopPropagation()}
                    />
                    <div
                      className={
                        file.thumbnailUri && file.contentType?.startsWith('image/')
                          ? classes.thumbnailContainer
                          : classes.fileIconContainer
                      }
                      style={{ '--thumbnail-uri': `url(${file.thumbnailUri})` } as React.CSSProperties}
                    >
                      {!(file.thumbnailUri && file.contentType?.startsWith('image/')) ? '📄' : ''}
                    </div>
                    <Box gap={8} horizontal align="center" justify="between" grow>
                      <Paragraph className={classes.fileName}>{file.fileName || t('unknownFilename')}</Paragraph>
                      {file.contentType && (
                        <Tag className={classes.mimeType}>{file.contentType?.split('/').findLast(() => true)}</Tag>
                      )}
                    </Box>
                  </div>
                ))}
              </Box>

              <Box horizontal gap={16}>
                <Button onClick={handleConfirmExistingFiles} variant="primary">
                  {t('existingFiles.dialogConfirm')}
                </Button>
                <Button variant="secondary" onClick={handleCancelExistingFiles}>
                  {t('existingFiles.dialogCancel')}
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Dialog>
    </>
  );
};

const onFilesChanged = (
  files: FileAndExif[],
  state: FileInfo[],
  uploadFile: (file: FormData) => Promise<UploadFileResult>,
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

      const result = await uploadFile(formData);
      if (result.success) {
        uploadedFileState.storageId = result.storageId;
        uploadedFileState.status = 'uploaded';
        delete uploadedFileState.error;
      } else {
        uploadedFileState.status = 'error';
        uploadedFileState.error = result.error || 'Failed to upload file';
      }
      callback([...newFilesState]);
    } catch (error) {
      console.error('Error when uploading', error);

      const errorFileState = newFilesState.find((f) => f.contextId === contextId);
      if (!errorFileState) {
        return;
      }
      errorFileState.status = 'error';
      errorFileState.error = (error instanceof Error ? error.message : String(error)) || 'unknown-error';
      callback([...newFilesState]);
    }
  });
};
