import { forwardRef, useContext, useEffect, useImperativeHandle, useRef, useState } from 'react';
import {
  Surface,
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
import classes from './ExistingFilesDialog.module.css';
import { FileRetrieverContext } from '../FileRetriever.context';
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

    const [existingFilesCollection, setExistingFilesCollection] = useState<ExistingFilesProviderItem[]>([]);
    const [selectedFileCollection, setSelectedFileCollection] = useState<ExistingFilesProviderItem>();

    const [selectedExistingFiles, setSelectedExistingFiles] = useState<Record<string, boolean>>({});

    const [dialogElement, setDialogElement] = useState<HTMLDialogElement | null>(null);

    const [storageIdToExtraFileInfo, setStorageIdToExtraFileInfo] = useState<Map<string, ExtraFileInfo>>(new Map());

    const fileRetrieverContext = useContext(FileRetrieverContext);
    const hasLoggedMissingFileResolverRef = useRef(false);

    useEffect(() => {
      if (!existingFilesCollection || existingFilesCollection.length === 0) {
        setStorageIdToExtraFileInfo(new Map());
      }

      if (!fileRetrieverContext) {
        const storageIds = existingFilesCollection.flatMap((f) => f.files).filter((f) => f.storageId);
        if (!hasLoggedMissingFileResolverRef.current && storageIds.length > 0) {
          console.error(
            'ExistingFilesDialog: file preview support is enabled but FileRetrieverContext.Provider is missing. Provide a file resolver to enable file preview.',
          );
          hasLoggedMissingFileResolverRef.current = true;
        }
        return;
      }

      const fetchPreviewFiles = async () => {
        const storageIds = new Set(
          existingFilesCollection
            .flatMap((f) => f.files)
            .filter((f) => f.storageId)
            .map((f) => f.storageId!) as string[],
        );
        const extraFileInfos = await fileRetrieverContext.deriveFileInfosFromStorageIds([...storageIds]);
        const extraInfoMap = createStorageIdToExtraFileInfoMap(extraFileInfos);
        setStorageIdToExtraFileInfo(extraInfoMap);
      };
      void fetchPreviewFiles();
    }, [existingFilesCollection, fileRetrieverContext]);

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
            <Surface horizontal align="center" justify="center">
              <Spinner aria-label={t('loading')} />
            </Surface>
          )}
          {!loadingAllExistingFiles && existingFilesCollection.length === 0 && (
            <Paragraph>{t('existingFiles.noFilesAvailable')}</Paragraph>
          )}
          {!loadingAllExistingFiles && existingFilesCollection.length > 0 && (
            <Surface gap={3} my={1}>
              {selectedFileCollection !== undefined && (
                <>
                  <Surface gap={2} horizontal align={'center'}>
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
                  </Surface>

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
            </Surface>
          )}
          <SlotDialog.Buttons>
            <Surface horizontal gap={4}>
              <Button variant="filled" onClick={handleConfirmExistingFiles}>
                {t('existingFiles.dialogConfirm')}
              </Button>
              <Button variant="outline" onClick={handleCancelExistingFiles}>
                {t('existingFiles.dialogCancel')}
              </Button>
            </Surface>
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
      <Surface horizontal justify="between" align="center">
        <Surface gap={1}>
          <Heading>{existingFilesProviderItem.title}</Heading>
          <Paragraph className={classes.subtitle}>{existingFilesProviderItem.label}</Paragraph>
        </Surface>
        <Icon material="chevron_right" />
      </Surface>
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
      <Surface gap={3} horizontal>
        <Surface className={classes.filePreview}>
          {extraInfo?.thumbnailUri ? (
            <img src={extraInfo.thumbnailUri} alt={file.fileName || t('unknownFilename')} />
          ) : (
            <Icon size="lg" material={getPrefixIcon(file.contentType)} />
          )}
        </Surface>
        <Surface gap={1}>
          <Paragraph className={classes.fileName}>{file.fileName || t('unknownFilename')}</Paragraph>
          {extraInfo?.sizeInBytes && (
            <Paragraph className={classes.subtitle}>{convertBytesToReadable(extraInfo.sizeInBytes)}</Paragraph>
          )}
        </Surface>
      </Surface>
    </div>
  );
}
