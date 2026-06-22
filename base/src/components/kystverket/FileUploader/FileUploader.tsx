'use client';

import { ReactNode, useContext, useEffect, useRef, useState } from 'react';
import { Exif, ExtraFileInfo, FileInfo } from './FileUploader.types';
import { Field, Label, Spinner, ValidationMessage } from '@digdir/designsystemet-react';
import classes from './FileUploader.module.css';
import { Icon, LabelContent } from '~/main';
import exifr from 'exifr';
import { FileUploaderContext } from './FileUploader.context';
import { FileRetrieverContext } from './FileRetriever.context';
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
import { createStorageIdToExtraFileInfoMap, getExtraFileInfoPreviewUri } from '~/utils/fileInfoResolver';

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
  const fileRetrieverContext = useContext(FileRetrieverContext);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const fileCameraInputRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<ExistingFilesDialogHandle>(null);
  const [previewStartIndex, setPreviewStartIndex] = useState<number | null>(null);
  const [previewFiles, setPreviewFiles] = useState<PreviewFileInfo[]>([]);
  const [storageIdToPreviewIndex, setStorageIdToPreviewIndex] = useState<Map<string, number>>(new Map());
  const [storageIdToExtraFileInfo, setStorageIdToExtraFileInfo] = useState<Map<string, ExtraFileInfo>>(new Map());

  useEffect(() => {
    if (!allowFilePreview || !fileRetrieverContext) {
      setPreviewFiles([]);
      setStorageIdToPreviewIndex(new Map());
      setStorageIdToExtraFileInfo(new Map());
      return;
    }

    const fetchPreviewFiles = async () => {
      const result: PreviewFileInfo[] = [];
      const indexMap = new Map<string, number>();

      const storageIds = files
        .filter((f) => f.status === 'uploaded' && f.storageId)
        .map((f) => f.storageId!) as string[];
      const extraFileInfos = await fileRetrieverContext.deriveFileInfosFromStorageIds(storageIds);
      const extraInfoMap = createStorageIdToExtraFileInfoMap(extraFileInfos);

      files.forEach((file) => {
        if (file.status !== 'uploaded') {
          return;
        }
        const extraInfo = file.storageId ? extraInfoMap.get(file.storageId) : undefined;
        const src = getExtraFileInfoPreviewUri(extraInfo, { preferThumbnail: true });

        if (!src || !extraInfo?.storageId) {
          return;
        }

        let previewContentType: 'image' | 'pdf' | null = null;

        if (file.contentType.startsWith('image/')) {
          previewContentType = 'image';
        } else if (file.contentType === 'application/pdf' || file.contentType.endsWith('/pdf')) {
          previewContentType = 'pdf';
        }

        if (previewContentType) {
          indexMap.set(extraInfo.storageId, result.length);
          result.push({
            fileName: file.fileName,
            fileSizeInBytes: extraInfo?.sizeInBytes,
            contentType: previewContentType,
            src,
          });
        }
      });
      setPreviewFiles(result);
      setStorageIdToPreviewIndex(indexMap);
      setStorageIdToExtraFileInfo(extraInfoMap);
    };
    void fetchPreviewFiles();
  }, [allowFilePreview, files, fileRetrieverContext]);

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
                extraInfo={file.storageId ? storageIdToExtraFileInfo.get(file.storageId) : undefined}
                t={t}
                onDeleteFile={onDeleteFile}
                onPreviewFile={
                  allowFilePreview && file.storageId && storageIdToPreviewIndex.has(file.storageId)
                    ? () => setPreviewStartIndex(storageIdToPreviewIndex.get(file.storageId!)!)
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
