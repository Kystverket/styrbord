import { useEffect, useState } from 'react';
import { ExistingFilesDialogHandle } from '../existingFilesDialog/ExistingFilesDialog';
import { Box, FileUploaderProps, Icon, Button, Paragraph } from '~/main';
import classes from './FileUploadActions.module.css';

type FileUploadActionsProps = {
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  fileCameraInputRef: React.RefObject<HTMLInputElement | null>;
  dialogRef: React.RefObject<ExistingFilesDialogHandle | null>;
  t: (key: string) => string;
  onUploadFile: (uploadedFiles: File[]) => void;
  allowedFileTypes: string[];
} & Pick<FileUploaderProps, 'variant' | 'existingFilesProvider' | 'buttonLabel' | 'withCaptureButton' | 'multiple'>;

export function FileUploadActions({
  variant,
  fileInputRef,
  fileCameraInputRef,
  buttonLabel,
  onUploadFile,
  existingFilesProvider,
  dialogRef,
  allowedFileTypes,
  withCaptureButton,
  multiple,
  t,
}: FileUploadActionsProps) {
  const [isDropzoneActive, setIsDropzoneActive] = useState(false);
  const [canUseCamera, setCanUseCamera] = useState(false);

  useEffect(() => {
    const hasGetUserMedia = !!navigator.mediaDevices?.getUserMedia;
    const input = document.createElement('input');
    const hasCaptureAttr = 'capture' in input;

    const isTouchLike =
      window.matchMedia('(pointer: coarse)').matches ||
      navigator.maxTouchPoints > 0 ||
      /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    setCanUseCamera((hasGetUserMedia || hasCaptureAttr) && isTouchLike);
  }, []);

  const onChangeFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      onUploadFile(Array.from(target.files));
      target.value = ''; // Reset the input value to allow re-uploading the same file
    }
  };

  return (
    <>
      {/* Default */}
      <input
        type="file"
        style={{ display: 'none' }}
        ref={fileInputRef}
        id="fileUploadButton"
        name="fileUploadButton"
        accept={allowedFileTypes?.join(',')}
        multiple={multiple}
        onChange={onChangeFileUpload}
      />
      {/* withCaptureButton */}
      <input
        capture="environment"
        type="file"
        style={{ display: 'none' }}
        ref={fileCameraInputRef}
        id="fileCaptureUploadButton"
        name="fileCaptureUploadButton"
        accept={allowedFileTypes.join(',')}
        onChange={onChangeFileUpload}
      />
      <Box gap={4} mt={8}>
        {variant === 'dropzone' && (
          <div
            role="button"
            aria-label={t('dropzoneText')}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                fileInputRef.current?.click();
              }
            }}
            onClick={() => fileInputRef.current?.click()}
            className={`${classes.dropzone} ${isDropzoneActive ? classes.active : ''}`}
            onDragEnter={() => setIsDropzoneActive(true)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e: React.DragEvent<HTMLDivElement>) => {
              e.preventDefault();
              const files = Array.from(e.dataTransfer.files);
              onUploadFile(files);
              setIsDropzoneActive(false);
            }}
            onDragLeave={() => setIsDropzoneActive(false)}
          >
            <span className={classes.dropzoneIcon}>
              <Icon material="upload" />
            </span>
            <Paragraph className={classes.dropzoneText}>{t('dropzoneText')}</Paragraph>
          </div>
        )}
        <Box gap={8} className={classes.buttonRow} horizontal wrap>
          {variant === 'buttons' && (
            <Button
              className={`${classes.uploadButton}`}
              variant="outline"
              onClick={() => fileInputRef.current?.click()}
            >
              <Icon material="upload" />
              {buttonLabel ?? t('buttonLabel')}
            </Button>
          )}
          {canUseCamera && withCaptureButton && (
            <Button
              variant="outline"
              className={`${classes.uploadButton} ${variant !== 'buttons' && classes.stretch}`}
              onClick={() => fileCameraInputRef.current?.click()}
            >
              <Icon material="photo_camera" />
              {t('withCaptureButtonLabel')}
            </Button>
          )}
          {existingFilesProvider && (
            <Button
              variant="outline"
              className={`${classes.uploadButton} ${variant !== 'buttons' && classes.stretch}`}
              onClick={() => dialogRef.current?.showModal()}
            >
              <Icon material="folder_open" />
              {t('existingFiles.buttonOpen')}
            </Button>
          )}
        </Box>
      </Box>
    </>
  );
}
