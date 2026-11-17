import type { ReactNode } from 'react';
import { Button, Heading, Icon, Paragraph, Surface } from '~/main';
import { useTranslation } from '~/translations';
import { convertBytesToReadable } from '~/utils/convertBytesToReadable';
import { getButtonConfig } from '../dialog/FilePreviewer-dialog';
import { handleDownload } from '../FilePreviewer-handleFileDownload';
import { openFileInNewTab } from '../FilePreviewer-openInNew';
import type { FileInfo } from '../FilePreviewer.types';
import { FileRenderer } from '../renderer/FileRenderer';
import classes from './FilePreviewer-panel.module.css';

export interface FilePreviewerPanelProps {
  /** The file to show. When unset, `emptyContent` is shown instead. */
  file?: FileInfo;
  /** Shown when no file is selected. Default: a short "no file selected" text. */
  emptyContent?: ReactNode;
  /** Heading level of the file name. Default: `2`. */
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

const fileExtension = (file: FileInfo) => file.fileName.split('.').pop()?.toLowerCase() ?? file.contentType;

/**
 * Shows one file inline — file name, size, "open in new tab" and "download" — for use in a side
 * panel such as `SaksbehandlingShell`'s `comparisonContent`. Unlike `FilePreviewer.Thumbnail`
 * it does not need a surrounding `<FilePreviewer>`.
 */
export function FilePreviewerPanel({ file, emptyContent, headingLevel = 2, className = '' }: FilePreviewerPanelProps) {
  const { scopedT } = useTranslation();
  const t = scopedT('filePreviewer');

  if (!file) {
    return <>{emptyContent ?? <Paragraph>{t('noFileSelected')}</Paragraph>}</>;
  }

  const buttons = getButtonConfig(file);
  const size = file.fileSize ?? (file.fileSizeInBytes ? convertBytesToReadable(file.fileSizeInBytes) : undefined);

  return (
    <div className={`${classes.panel} ${className}`}>
      <Surface horizontal align="center" justify="between" gap={2} wrap>
        <Surface horizontal align="center" gap={2}>
          <Icon file={fileExtension(file)} size="lg" />
          <Surface>
            <Heading level={headingLevel} data-size="xs" className={classes.fileName}>
              {file.fileName}
            </Heading>
            {size && (
              <Paragraph data-size="sm" data-color-variant="subtle">
                {size}
              </Paragraph>
            )}
          </Surface>
        </Surface>
        <Surface horizontal align="center" gap={2}>
          {buttons.showOpenInNew && (
            <Button variant="outline" size="sm" onClick={() => openFileInNewTab(file)}>
              <Icon material="open_in_new" size="sm" />
              {t('openInNewTab')}
            </Button>
          )}
          {buttons.showDownload && (
            <Button variant="outline" size="sm" onClick={() => handleDownload(file)}>
              <Icon material="download" size="sm" />
              {t('download')}
            </Button>
          )}
        </Surface>
      </Surface>
      <div className={classes.preview}>
        <FileRenderer file={file} mode="full" className={classes.previewFile} />
      </div>
    </div>
  );
}
