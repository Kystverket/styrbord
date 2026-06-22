import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import {
  Box,
  FileInfo,
  Button,
  Checkbox,
  Heading,
  Paragraph,
  Spinner,
  Card,
  Icon,
  type ExtraFileInfo,
  SlotDialog,
} from '~/main';
import { useFileRetrieverContext } from '~/components/kystverket/FileUploader/FileRetriever.context';
import classes from './ExistingFilesDialog.module.css';
import { convertBytesToReadable } from '~/utils/convertBytesToReadable';
import { ExistingFilesProviderItem } from '~/components/kystverket/FileUploader/FileUploader';
import { createStorageIdToExtraFileInfoMap } from '~/utils/fileInfoResolver';
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
    const { deriveFileInfosFromStorageIds } = useFileRetrieverContext();

    const [existingFilesCollection, setExistingFilesCollection] = useState<ExistingFilesProviderItem[]>([]);
    const [selectedFileCollection, setSelectedFileCollection] = useState<ExistingFilesProviderItem>();

    const [selectedExistingFiles, setSelectedExistingFiles] = useState<Record<string, boolean>>({});

    const [dialogElement, setDialogElement] = useState<HTMLDialogElement | null>(null);

    const [storageIdToExtraFileInfo, setStorageIdToExtraFileInfo] = useState<Map<string, ExtraFileInfo>>(new Map());

    useEffect(() => {
      if (!existingFilesCollection || existingFilesCollection.length === 0) {
        setStorageIdToExtraFileInfo(new Map());
      }

      const fetchPreviewFiles = async () => {
        const storageIds = new Set(
          existingFilesCollection
            .flatMap((f) => f.files)
            .filter((f) => f.storageId)
            .map((f) => f.storageId!) as string[],
        );
        const extraFileInfos = await deriveFileInfosFromStorageIds([...storageIds]);
        const extraInfoMap = createStorageIdToExtraFileInfoMap(extraFileInfos);
        setStorageIdToExtraFileInfo(extraInfoMap);
      };
      void fetchPreviewFiles();
    }, [existingFilesCollection, deriveFileInfosFromStorageIds]);

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
      <SlotDialog longContent title={t('existingFiles.dialogTitle')} ref={setDialogElement}>
        <>
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
                  <Box gap={8} horizontal align={'center'}>
                    <Button
                      onClick={() => setSelectedFileCollection(undefined)}
                      aria-label={t('existingFiles.goBackToCollectionAriaLabel')}
                      icon
                      color={'neutral'}
                      variant="ghost"
                    >
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
                      extraInfo={file.storageId ? storageIdToExtraFileInfo.get(file.storageId) : undefined}
                      handleExistingFileCheckboxChange={handleExistingFileCheckboxChange}
                      selectedExistingFiles={selectedExistingFiles}
                      t={t}
                    />
                  ))}
                </>
              )}
              {selectedFileCollection === undefined &&
                existingFilesCollection.map((fileCollection) => (
                  <ExistingFilesListCard
                    key={`${fileCollection.title}-${fileCollection.files
                      .map((file) => file.storageId)
                      .sort()
                      .join(',')}`}
                    existingFilesProviderItem={fileCollection}
                    onClick={() => setSelectedFileCollection(fileCollection)}
                  />
                ))}
            </Box>
          )}
          <SlotDialog.Buttons>
            <Box horizontal gap={16}>
              <Button variant="filled" onClick={handleConfirmExistingFiles}>
                {t('existingFiles.dialogConfirm')}
              </Button>
              <Button variant="outline" onClick={handleCancelExistingFiles}>
                {t('existingFiles.dialogCancel')}
              </Button>
            </Box>
          </SlotDialog.Buttons>
        </>
      </SlotDialog>
    );
  },
);

interface ExistingFilesListCardProps {
  onClick: () => void;
  existingFilesProviderItem: ExistingFilesProviderItem;
}
function ExistingFilesListCard({ existingFilesProviderItem, onClick }: ExistingFilesListCardProps) {
  return (
    <Card
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          onClick();
        }
      }}
      className={classes.listCard}
      onClick={onClick}
    >
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
  extraInfo?: ExtraFileInfo;
  handleExistingFileCheckboxChange: (storageId: string, checked: boolean) => void;
  selectedExistingFiles: Record<string, boolean>;

  t: (key: string) => string;
}
function ExistingFileItem({
  file,
  extraInfo,
  handleExistingFileCheckboxChange,
  selectedExistingFiles,
  t,
}: ExistingFileItemProps) {
  if (file.storageId === undefined) return;

  return (
    <div
      className={classes.fileItem}
      onClick={() => {
        if (file.storageId) {
          handleExistingFileCheckboxChange(file.storageId, !selectedExistingFiles[file.storageId]);
        }
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
          {extraInfo?.thumbnailUri ? (
            <img src={extraInfo.thumbnailUri} alt={file.fileName || t('unknownFilename')} />
          ) : (
            <Icon size="lg" material={getPrefixIcon(file.contentType)} />
          )}
        </Box>
        <Box gap={2}>
          <Paragraph className={classes.fileName}>{file.fileName || t('unknownFilename')}</Paragraph>
          {extraInfo?.sizeInBytes && (
            <Paragraph className={classes.subtitle}>{convertBytesToReadable(extraInfo.sizeInBytes)}</Paragraph>
          )}
        </Box>
      </Box>
    </div>
  );
}
