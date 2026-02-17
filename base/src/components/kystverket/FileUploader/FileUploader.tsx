'use client';

import { ReactNode, useContext, useRef } from 'react';
import { Exif, FileInfo } from './FileUploader.types';
import { Field, Label, Spinner, ValidationMessage, Button, Heading, Paragraph } from '@digdir/designsystemet-react';
import classes from './FileUploader.module.css';
import { Box, Icon, LabelContent } from '~/main';
import exifr from 'exifr';
import { FileUploaderContext } from './FileUploader.context';
import { v4 } from 'uuid';
import { useStyrbordTranslation } from '~/i18n/translations';
import { FileUploaderItem } from './item/FileUploaderItem';
import { onFilesChanged } from '~/components/kystverket/FileUploader/FileUploaderHelpers';
import {
  ExistingFilesDialog,
  ExistingFilesDialogHandle,
} from '~/components/kystverket/FileUploader/existingFilesDialog/ExistingFilesDialog';

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

export interface FileAndExif {
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
  maxSizeInBytes?: number;
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
  variant?: 'dropzone' | 'buttons';
}

const defaultAllowedFileTypes = ['.pdf', '.jpg', '.jpeg', '.png'];

export const FileUploader = ({
  label,
  maxSizeInBytes,
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
  variant = 'dropzone',
}: FileUploaderProps) => {
  const { at } = useStyrbordTranslation();
  const t = at.bind(null, 'fileUploader', translations);

  const fileUploaderContext = useContext(FileUploaderContext);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<ExistingFilesDialogHandle>(null);

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
      console.log(files);
      onFilesChanged(filesWithExif, files, fileUploaderContext.uploadFile, onChange, t, maxSizeInBytes);
    });
  };

  const onDeleteFile = (file: FileInfo) => {
    onChange(files.filter((f) => f.contextId !== file.contextId));
  };

  const handleConfirmExistingFiles = (selectedFiles: FileInfo[]) => {
    const localFiles = files.filter((file) => !file.storageId);
    const selectedWithContext = selectedFiles.map((file) => {
      const existingFile = files.find((f) => f.storageId && f.storageId === file.storageId);
      if (existingFile) {
        return existingFile;
      }

      return {
        ...file,
        contextId: v4(),
        status: 'uploaded' as const,
      };
    });

    onChange([...localFiles, ...selectedWithContext]);
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
        {description && (
          <Field.Description>
            {description}.{!!maxSizeInBytes && ` Maks filstorrelse er ${Math.round(maxSizeInBytes / (1024 * 1024))}MB`}.
          </Field.Description>
        )}
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
          <Box gap={4} mt={8}>
            {variant === 'dropzone' && (
              <div
                onClick={() => fileInputRef.current?.click()}
                className={classes.dropzone}
                onDragEnter={() => {
                  console.log('entered');
                }}
                onDragLeave={(e) => console.log(e)}
              >
                <span className={classes.dropzoneIcon}>
                  <Icon material="upload" />
                </span>
                <Paragraph style={{ whiteSpace: 'pre-wrap', textAlign: 'center' }}>
                  {`Klikk for å laste opp\neller dra og slipp filer her`}
                </Paragraph>
              </div>
            )}
            <Box gap={8} horizontal>
              {variant === 'buttons' && (
                <Button className={classes.uploadButton} onClick={() => fileInputRef.current?.click()}>
                  <Icon material="upload" />
                  {buttonLabel}
                </Button>
              )}
              {existingFilesProvider && (
                <Button className={classes.uploadButton} onClick={() => dialogRef.current?.showModal()}>
                  <Icon material="folder_open" />
                  {t('existingFiles.buttonOpen')}
                </Button>
              )}
            </Box>
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
        )}
        {files && files.length > 0 && (
          <div className={classes.fileList}>
            {/* <label >Vedlegg ({files.length})</label> */}
            <Heading data-size="sm">Vedlegg ({files.length})</Heading>
            {files.map((file) => (
              <FileUploaderItem key={file.contextId} file={file} t={t} onDeleteFile={onDeleteFile} />
            ))}
          </div>
        )}
        {error && <ValidationMessage>{error}</ValidationMessage>}
      </Field>
      {existingFilesProvider && (
        <ExistingFilesDialog
          t={t}
          ref={dialogRef}
          files={files}
          existingFilesProvider={existingFilesProvider}
          onConfirm={handleConfirmExistingFiles}
        />
      )}
    </>
  );
};

