import { useState } from 'react';
import { ExistingFilesDialogHandle } from '../existingFilesDialog/ExistingFilesDialog';
import { Surface, FileUploaderProps, Icon, Button, Paragraph, useMediaQuery } from '~/main';
import classes from './FileUploadActions.module.css';

type FileUploadActionsProps = {
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  fileCameraInputRef: React.RefObject<HTMLInputElement | null>;
  dialogRef: React.RefObject<ExistingFilesDialogHandle | null>;
  t: (key: string) => string;
  onUploadFile: (uploadedFiles: File[]) => void;
  /** Goes on the primary visible control; the hidden inputs derive their ids from it. */
  controlId: string;
  /** Space-separated ids for the visible controls' aria-describedby (label, error, description). */
  describedBy: string;
  allowedFileTypes: string[];
} & Pick<FileUploaderProps, 'variant' | 'existingFilesProvider' | 'withCaptureButton' | 'multiple' | 'uploadActions'>;

export function FileUploadActions({
  controlId,
  describedBy,
  variant,
  fileInputRef,
  onUploadFile,
  existingFilesProvider,
  fileCameraInputRef,
  dialogRef,
  allowedFileTypes,
  withCaptureButton,
  multiple,
  uploadActions,
  t,
}: FileUploadActionsProps) {
  const [isDropzoneActive, setIsDropzoneActive] = useState(false);

  // Desktop browsers ignore the capture attribute, so the camera button would just
  // reopen the regular file picker there.
  const canUseCamera = useMediaQuery('(pointer: coarse)');

  const showCaptureButton = canUseCamera && (withCaptureButton || variant === 'capture');
  const showDefaultUploadButton = variant === 'buttons' || (variant === 'capture' && !canUseCamera);
  const stretchButtons = !showDefaultUploadButton;

  // Exactly one visible control carries the field id, so an ErrorSummary link to `#id` can focus it.
  const primaryControl = variant === 'dropzone' ? 'dropzone' : showDefaultUploadButton ? 'upload' : 'capture';
  const controlProps = (control: typeof primaryControl) => ({
    id: control === primaryControl ? controlId : undefined,
    'aria-describedby': describedBy || undefined,
  });

  const onChangeFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      onUploadFile(Array.from(target.files));
      target.value = ''; // Reset the input value to allow re-uploading the same file
    }
  };

  return (
    <>
      {/* `hidden` (not just display: none) keeps Field from treating these as its input: the visible
          controls carry the id and aria wiring instead, and Field warns when it finds two inputs. */}
      {/* Default */}
      <input
        type="file"
        hidden
        style={{ display: 'none' }}
        ref={fileInputRef}
        id={`${controlId}-input`}
        name="fileUploadButton"
        accept={allowedFileTypes?.join(',')}
        multiple={multiple}
        onChange={onChangeFileUpload}
      />
      {/* withCaptureButton */}
      <input
        capture="environment"
        type="file"
        hidden
        style={{ display: 'none' }}
        ref={fileCameraInputRef}
        id={`${controlId}-capture`}
        name="fileCaptureUploadButton"
        accept={allowedFileTypes.join(',')}
        onChange={onChangeFileUpload}
      />
      <Surface gap={1} mt={2}>
        {variant === 'dropzone' && (
          <div
            role="button"
            {...controlProps('dropzone')}
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
        <Surface gap={2} className={classes.buttonRow} horizontal wrap>
          {showDefaultUploadButton && (
            <Button
              className={classes.uploadButton}
              variant="outline"
              {...controlProps('upload')}
              onClick={() => fileInputRef.current?.click()}
            >
              <Icon material="upload" />
              {t('buttonLabel')}
            </Button>
          )}
          {showCaptureButton && (
            <Button
              variant="outline"
              {...controlProps('capture')}
              className={`${classes.uploadButton} ${stretchButtons ? classes.stretch : ''}`}
              onClick={() => fileCameraInputRef.current?.click()}
            >
              <Icon material="photo_camera" />
              {t('withCaptureButtonLabel')}
            </Button>
          )}
          {existingFilesProvider && (
            <Button
              variant="outline"
              className={`${classes.uploadButton} ${stretchButtons ? classes.stretch : ''}`}
              onClick={() => dialogRef.current?.showModal()}
            >
              <Icon material="folder_open" />
              {t('existingFiles.buttonOpen')}
            </Button>
          )}
          {uploadActions?.map((action) => (
            <Button
              key={action.label}
              variant="outline"
              disabled={action.disabled}
              className={`${classes.uploadButton} ${stretchButtons ? classes.stretch : ''}`}
              onClick={action.onClick}
            >
              <Icon material={action.icon} />
              {action.label}
            </Button>
          ))}
        </Surface>
      </Surface>
    </>
  );
}
