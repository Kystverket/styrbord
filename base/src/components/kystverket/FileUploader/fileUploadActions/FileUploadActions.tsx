import { useState } from 'react';
import { ExistingFilesDialogHandle } from '../existingFilesDialog/ExistingFilesDialog';
import { Box, FileUploaderProps, Icon, Button, Paragraph } from '~/main';
import classes from './FileUploadActions.module.css';

type FileUploadActionsProps = {
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  dialogRef: React.RefObject<ExistingFilesDialogHandle | null>;
  t: (key: string) => string;
  onUploadFile: (uploadedFiles: File[]) => void;
} & Pick<FileUploaderProps, 'variant' | 'existingFilesProvider'>;

export function FileUploadActions({
  variant,
  fileInputRef,
  onUploadFile,
  existingFilesProvider,
  dialogRef,
  t,
}: FileUploadActionsProps) {
  const [isDropzoneActive, setIsDropzoneActive] = useState(false);

  return (
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
      <Box gap={8} horizontal>
        {variant === 'buttons' && (
          <Button className={`${classes.uploadButton}`} variant="outline" onClick={() => fileInputRef.current?.click()}>
            <Icon material="upload" />
            {t('buttonLabel')}
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
  );
}
