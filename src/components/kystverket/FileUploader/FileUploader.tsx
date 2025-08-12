'use client';

import { ReactNode, useContext, useRef } from 'react';
import { Exif, FileInfo } from './FileUploader.types';
import { Field, Label, Spinner, ValidationMessage } from '@digdir/designsystemet-react';
import classes from './FileUploader.module.css';
import { Box, Icon } from '~/main';
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
}

const defaultAllowedFileTypes = ['.pdf', '.jpg', '.jpeg', '.png'];

export const FileUploader = ({
  label,
  buttonLabel,

  description = '',
  error = null,
  multiple = true,
  files = [],
  maxFiles,
  onChange,
  allowedFileTypes = defaultAllowedFileTypes,
}: FileUploaderProps) => {
  const fileUploaderContext = useContext(FileUploaderContext);
  const fileInputRef = useRef<HTMLInputElement>(null);

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

  const showUploadingWarning = files.some((f) => f.status === 'uploading');
  const showMaxReachedWarning = !showUploadingWarning && maxFiles && files.length >= maxFiles;
  const showUploadButton = !showMaxReachedWarning && !showUploadingWarning;

  return (
    <Field>
      <Label>{label}</Label>
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
        <button className={classes.uploadButton} onClick={() => fileInputRef.current?.click()}>
          {buttonLabel}
        </button>
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
