'use client';

import { ReactNode, useContext, useMemo, useRef, useState } from 'react';
import { Exif, FileInfo } from './FileUploader.types';
import { Field, Label, Spinner, ValidationMessage } from '@digdir/designsystemet-react';
import classes from './FileUploader.module.css';
import { Icon, LabelContent } from '~/main';
import exifr from 'exifr';
import { FileUploaderContext } from './FileUploader.context';
import { FileUploaderItem } from './item/FileUploaderItem';
import { onFilesChanged } from '~/components/kystverket/FileUploader/FileUploaderHelpers';
import {
  ExistingFilesDialog,
  ExistingFilesDialogHandle,
} from '~/components/kystverket/FileUploader/existingFilesDialog/ExistingFilesDialog';
import { FileUploadActions } from '~/components/kystverket/FileUploader/fileUploadActions/FileUploadActions';
import { useTranslation } from '~/translations';
import { FilePreviewerDialog } from '../FilePreviewer/dialog/FilePreviewer-dialog';
import { FileInfo as PreviewFileInfo } from '../FilePreviewer/FilePreviewer.types';

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

export interface ExistingFilesProviderItem {
  title: string;
  label: string;
  files: FileInfo[];
}

export interface FileUploaderProps {
  label: string;
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

  /**
   * Adds a button with "Open Camera" on most NON-PC devices
   * \ Opens on the back camera by default
   */
  withCaptureButton?: boolean;
  existingFilesProvider?: () => Promise<ExistingFilesProviderItem[]>;
  variant?: 'dropzone' | 'buttons';

  /**
   * Enables file preview using the FilePreviewer component.
   * When enabled, a preview button appears on each uploaded file that can be previewed.
   */
  allowFilePreview?: boolean;
}

const defaultAllowedFileTypes = ['.pdf', '.jpg', '.jpeg', '.png'];

export const FileUploader = ({
  label,
  maxSizeInBytes,
  required,
  optional,
  description = '',
  error = null,
  multiple = true,
  files = [],
  maxFiles,
  onChange,
  allowedFileTypes = defaultAllowedFileTypes,
  withCaptureButton,
  existingFilesProvider,
  variant = 'buttons',
  allowFilePreview,
}: FileUploaderProps) => {
  const { scopedT } = useTranslation();
  const t = scopedT('fileUploader');

  const fileUploaderContext = useContext(FileUploaderContext);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const fileCameraInputRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<ExistingFilesDialogHandle>(null);
  const [previewStartIndex, setPreviewStartIndex] = useState<number | null>(null);

  const { previewFiles, contextIdToPreviewIndex } = useMemo(() => {
    if (!allowFilePreview) {
      return { previewFiles: [] as PreviewFileInfo[], contextIdToPreviewIndex: new Map<string, number>() };
    }
    const result: PreviewFileInfo[] = [];
    const indexMap = new Map<string, number>();
    files.forEach((file) => {
      if (file.status !== 'uploaded') {
        return;
      }
      if (file.contentType.startsWith('image/') && file.thumbnailUri) {
        indexMap.set(file.contextId, result.length);
        result.push({
          fileName: file.fileName,
          fileSizeInBytes: file.sizeInBytes,
          contentType: 'image',
          src: file.thumbnailUri,
        });
      }
    });
    return { previewFiles: result, contextIdToPreviewIndex: indexMap };
  }, [allowFilePreview, files]);

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
      onFilesChanged(filesWithExif, files, fileUploaderContext.uploadFile, onChange, t, {
        allowedFileTypes: allowedFileTypes,
        maxFiles: maxFiles,
        maxSizeInBytes: maxSizeInBytes,
      });
    });
  };

  const onDeleteFile = (file: FileInfo) => {
    onChange(files.filter((f) => f.contextId !== file.contextId));
  };

  const showUploadingWarning = files.some((f) => f.status === 'uploading');
  const showMaxReachedWarning = !showUploadingWarning && maxFiles && files.length >= maxFiles;
  const showUploadActions = !showMaxReachedWarning && !showUploadingWarning;
  const attachmentsHeading = t('attachmentsCount').replace('{count}', String(files.length));

  return (
    <>
      <Field>
        <Label style={{ pointerEvents: 'none' }}>
          <LabelContent text={label} required={required} optional={optional} />
        </Label>
        {description && <Field.Description>{description}</Field.Description>}
        {showUploadActions && (
          <FileUploadActions
            fileCameraInputRef={fileCameraInputRef}
            allowedFileTypes={allowedFileTypes}
            multiple={multiple}
            withCaptureButton={withCaptureButton}
            onUploadFile={onUploadFile}
            dialogRef={dialogRef}
            fileInputRef={fileInputRef}
            t={t}
            existingFilesProvider={existingFilesProvider}
            variant={variant}
          />
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
            <Label style={{ pointerEvents: 'none' }}>{attachmentsHeading}</Label>
            {files.map((file) => (
              <FileUploaderItem
                key={file.contextId}
                file={file}
                t={t}
                onDeleteFile={onDeleteFile}
                onPreviewFile={
                  allowFilePreview && contextIdToPreviewIndex.has(file.contextId)
                    ? () => setPreviewStartIndex(contextIdToPreviewIndex.get(file.contextId)!)
                    : undefined
                }
              />
            ))}
          </div>
        )}
        {error && <ValidationMessage>{error}</ValidationMessage>}
      </Field>
      {previewStartIndex !== null && previewFiles.length > 0 && (
        <FilePreviewerDialog
          files={previewFiles}
          startIndex={previewStartIndex}
          onClose={() => setPreviewStartIndex(null)}
        />
      )}
      {existingFilesProvider && (
        <ExistingFilesDialog
          t={t}
          ref={dialogRef}
          existingFiles={files}
          existingFilesProvider={existingFilesProvider}
          onConfirm={onChange}
        />
      )}
    </>
  );
};
