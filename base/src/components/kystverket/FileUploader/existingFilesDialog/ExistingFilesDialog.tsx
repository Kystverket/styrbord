import { forwardRef, useImperativeHandle, useState } from 'react';
import { Box, FileInfo, Button, Checkbox, Dialog, DialogBlock, Heading, Paragraph, Spinner, Card, Icon } from '~/main';
import classes from './ExistingFilesDialog.module.css';
import { convertBytesToReadable } from '~/utils/convertBytesToReadable';
import { ExistingFilesProviderItem } from '~/components/kystverket/FileUploader/FileUploader';
import { getPrefixIcon } from '~/components/kystverket/FileUploader/item/FileUploaderItem';

type ExistingFilesDialogProps = {
  t: (key: string) => string;
  existingFiles: FileInfo[];
  existingFilesProvider: () => Promise<ExistingFilesProviderItem[]>;
  onConfirm: React.Dispatch<FileInfo[]>;
};

export interface ExistingFilesDialogHandle {
  showModal: () => Promise<void>;
  close: () => void;
}

export const ExistingFilesDialog = forwardRef<ExistingFilesDialogHandle, ExistingFilesDialogProps>(
  function ExistingFilesDialog({ t, existingFiles, existingFilesProvider, onConfirm }, ref) {
    const [loadingAllExistingFiles, setLoadingAllExistingFiles] = useState(false);

    const [existingFilesCollection, setExistingFilesCollection] = useState<ExistingFilesProviderItem[]>([]);
    const [selectedFileCollection, setSelectedFileCollection] = useState<ExistingFilesProviderItem>();

    const [selectedExistingFiles, setSelectedExistingFiles] = useState<Record<string, boolean>>({});

    const [dialogElement, setDialogElement] = useState<HTMLDialogElement | null>(null);

    useImperativeHandle(
      ref,
      () => ({
        showModal: async () => {
          if (!dialogElement) return;
          if (!dialogElement.open) {
            dialogElement.showModal();
          }
          setLoadingAllExistingFiles(true);
          loadInFilesProvider();
        },
        close: () => {
          dialogElement?.close();
        },
      }),
      [dialogElement, existingFilesProvider, existingFiles],
    );

    const loadInFilesProvider = async () => {
      try {
        const FilesProvider = await existingFilesProvider();
        setExistingFilesCollection(FilesProvider);
        console.log(FilesProvider);
        const allFiles = FilesProvider.map((fp) => fp.files).flat();
        setSelectedExistingFiles(
          allFiles.reduce(
            (acc, file) => {
              if (file.storageId) {
                acc[file.storageId] = !!existingFiles.find((f) => f.storageId === file.storageId);
              }
              return acc;
            },
            {} as Record<string, boolean>,
          ),
        );
      } finally {
        setLoadingAllExistingFiles(false);
      }
    };

    const handleExistingFileCheckboxChange = (storageId: string, checked: boolean) => {
      setSelectedExistingFiles((prev) => ({
        ...prev,
        [storageId]: checked,
      }));
    };

    const handleConfirmExistingFiles = () => {
      const allFiles = existingFilesCollection.map((fp) => fp.files).flat();
      const providerStorageIds = new Set(allFiles.map((file) => file.storageId).filter(Boolean) as string[]);

      const preservedManualFiles = existingFiles.filter(
        (file) => !file.storageId || !providerStorageIds.has(file.storageId),
      );

      const selectedProviderFiles = allFiles.filter((file) => file.storageId && selectedExistingFiles[file.storageId]);

      const mergedFiles = [...preservedManualFiles];
      selectedProviderFiles.forEach((file) => {
        if (file.storageId && !mergedFiles.some((existing) => existing.storageId === file.storageId)) {
          mergedFiles.push(file);
        }
      });

      onConfirm(mergedFiles);
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

        {/* CONTENT BLOCK */}
        <DialogBlock className={classes.dialogContent}>
          {loadingAllExistingFiles && (
            <Box horizontal align="center" justify="center">
              <Spinner aria-label={t('loading')} />
            </Box>
          )}
          {!loadingAllExistingFiles && existingFilesCollection.length === 0 && (
            <Paragraph>{t('existingFiles.noFilesAvailable')}</Paragraph>
          )}
          {!loadingAllExistingFiles && existingFilesCollection.length > 0 && (
            <Box gap={12} my={4}>
              {selectedFileCollection !== undefined && (
                <>
                  <Box horizontal align={'center'}>
                    <Button onClick={() => setSelectedFileCollection(undefined)} icon color={'neutral'} variant="ghost">
                      <Icon size="xl" material="chevron_left" />
                    </Button>
                    <Heading>
                      {t('existingFiles.inMenuTitle')} "{selectedFileCollection.title}"
                    </Heading>
                  </Box>

                  <Paragraph className={classes.selectFilesLabel}>{t('existingFiles.selectFilesLabel')}</Paragraph>

                  {selectedFileCollection.files.map((file) => (
                    <ExistingFileItem
                      key={file.storageId}
                      file={file}
                      handleExistingFileCheckboxChange={handleExistingFileCheckboxChange}
                      selectedExistingFiles={selectedExistingFiles}
                      t={t}
                    />
                  ))}
                </>
              )}
              {selectedFileCollection === undefined &&
                existingFilesCollection.map((fileCollection, idx) => (
                  <ExistingFilesListCard
                    key={fileCollection.title + idx}
                    existingFilesProviderItem={fileCollection}
                    onClick={() => setSelectedFileCollection(fileCollection)}
                  />
                ))}
            </Box>
          )}
        </DialogBlock>
        <DialogBlock>
          <Box horizontal gap={16}>
            <Button variant="filled" onClick={handleConfirmExistingFiles}>
              {t('existingFiles.dialogConfirm')}
            </Button>
            <Button variant="outline" onClick={handleCancelExistingFiles}>
              {t('existingFiles.dialogCancel')}
            </Button>
          </Box>
        </DialogBlock>
      </Dialog>
    );
  },
);

interface ExistingFilesListCardProps {
  onClick: () => void;
  existingFilesProviderItem: ExistingFilesProviderItem;
}
function ExistingFilesListCard({ existingFilesProviderItem, onClick }: ExistingFilesListCardProps) {
  return (
    <Card className={classes.listCard} onClick={onClick}>
      <Box horizontal justify="between" align="center">
        <Box gap={4}>
          <Heading>{existingFilesProviderItem.title}</Heading>
          <Paragraph className={classes.subtitle}>{existingFilesProviderItem.label}</Paragraph>
        </Box>
        <Icon material="chevron_right" />
      </Box>
    </Card>
  );
}

interface ExistingFileItemProps {
  file: FileInfo;
  handleExistingFileCheckboxChange: (storageId: string, checked: boolean) => void;
  selectedExistingFiles: Record<string, boolean>;

  t: (key: string) => string;
}
function ExistingFileItem({ file, handleExistingFileCheckboxChange, selectedExistingFiles, t }: ExistingFileItemProps) {
  return (
    <div
      key={file.storageId}
      className={classes.fileItem}
      onClick={() => {
        if (!file.storageId) return;
        handleExistingFileCheckboxChange(file.storageId, !selectedExistingFiles[file.storageId]);
      }}
    >
      <Checkbox
        label={null}
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
      <Box gap={12} horizontal>
        <Box className={classes.filePreview}>
          {file.thumbnailUri ? (
            <img src={file.thumbnailUri} />
          ) : (
            <Icon size="lg" material={getPrefixIcon(file.contentType)} />
          )}
        </Box>
        <Box gap={2}>
          <Paragraph className={classes.fileName}>{file.fileName || t('unknownFilename')}</Paragraph>
          {file.sizeInBytes && (
            <Paragraph className={classes.subtitle}>{convertBytesToReadable(file.sizeInBytes)}</Paragraph>
          )}
        </Box>
      </Box>
    </div>
  );
}
