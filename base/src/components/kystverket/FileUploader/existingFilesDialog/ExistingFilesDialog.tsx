import { Button, Checkbox, Dialog, DialogBlock, Heading, Paragraph, Spinner } from '@digdir/designsystemet-react';
import { forwardRef, useImperativeHandle, useState } from 'react';
import { Box, FileInfo } from '~/main';
import classes from './ExistingFilesDialog.module.css';

type ExistingFilesDialogProps = {
  t: (key: string) => string;
  files: FileInfo[];
  existingFilesProvider: () => Promise<FileInfo[]>;
  onConfirm: (selectedFiles: FileInfo[]) => void;
};

export interface ExistingFilesDialogHandle {
  showModal: () => Promise<void>;
  close: () => void;
}

export const ExistingFilesDialog = forwardRef<ExistingFilesDialogHandle, ExistingFilesDialogProps>(
  function ExistingFilesDialog({ t, files, existingFilesProvider, onConfirm }, ref) {
    const [loadingAllExistingFiles, setLoadingAllExistingFiles] = useState(false);
    const [allExistingFiles, setAllExistingFiles] = useState<FileInfo[]>([]);
    const [selectedExistingFiles, setSelectedExistingFiles] = useState<Record<string, boolean>>({});
    const [dialogElement, setDialogElement] = useState<HTMLDialogElement | null>(null);

    useImperativeHandle(
      ref,
      () => ({
        showModal: async () => {
          if (!dialogElement) {
            return;
          }

          if (!dialogElement.open) {
            dialogElement.showModal();
          }

          setLoadingAllExistingFiles(true);

          try {
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
          } finally {
            setLoadingAllExistingFiles(false);
          }
        },
        close: () => {
          dialogElement?.close();
        },
      }),
      [dialogElement, existingFilesProvider, files],
    );

    const handleExistingFileCheckboxChange = (storageId: string, checked: boolean) => {
      setSelectedExistingFiles((prev) => ({
        ...prev,
        [storageId]: checked,
      }));
    };

    const handleConfirmExistingFiles = () => {
      const selectedFiles = allExistingFiles.filter((file) => file.storageId && selectedExistingFiles[file.storageId]);
      onConfirm(selectedFiles);
      dialogElement?.close();
    };

    const handleCancelExistingFiles = () => dialogElement?.close();

    return (
      <Dialog ref={setDialogElement} closedby="any">
        <DialogBlock>
          <Heading level={2} data-size="sm">
            {t('existingFiles.dialogTitle')}
          </Heading>
        </DialogBlock>
        <DialogBlock>
          {loadingAllExistingFiles && (
            <Box horizontal align="center" justify="center">
              <Spinner aria-label={t('loading')} />
            </Box>
          )}
          {!loadingAllExistingFiles && allExistingFiles.length === 0 && (
            <Paragraph>{t('existingFiles.noFilesAvailable')}</Paragraph>
          )}
          {!loadingAllExistingFiles && allExistingFiles.length > 0 && (
            <Box gap={12} my={4}>
              <Paragraph className={classes.selectFilesLabel}>Velg filer</Paragraph>
              {allExistingFiles.map((file) => (
                <div
                  key={file.storageId}
                  className={classes.fileItem}
                  onClick={() => {
                    if (file.storageId) {
                      handleExistingFileCheckboxChange(file.storageId, !selectedExistingFiles[file.storageId]);
                    }
                  }}
                >
                  <Checkbox
                    label={''}
                    className={classes.checkbox}
                    checked={(file.storageId && selectedExistingFiles[file.storageId]) || false}
                    onChange={(e) => {
                      if (file.storageId) {
                        handleExistingFileCheckboxChange(file.storageId, e.target.checked);
                      }
                    }}
                    onKeyDown={(e) => {
                      if (e.key !== 'Enter') return;
                      if (file.storageId) {
                        handleExistingFileCheckboxChange(file.storageId, !selectedExistingFiles[file.storageId]);
                      }
                    }}
                    onClick={(e) => e.stopPropagation()}
                  />
                  <Box gap={2}>
                    <Paragraph className={classes.fileName}>{file.fileName || t('unknownFilename')}</Paragraph>
                    <Paragraph className={classes.fileSize}>{'0.29 MB'}</Paragraph>
                  </Box>
                </div>
              ))}
            </Box>
          )}
        </DialogBlock>
        <DialogBlock>
          <Box horizontal gap={16}>
            <Button onClick={handleConfirmExistingFiles} variant="primary">
              {t('existingFiles.dialogConfirm')}
            </Button>
            <Button variant="secondary" onClick={handleCancelExistingFiles}>
              {t('existingFiles.dialogCancel')}
            </Button>
          </Box>
        </DialogBlock>
      </Dialog>
    );
  },
);
