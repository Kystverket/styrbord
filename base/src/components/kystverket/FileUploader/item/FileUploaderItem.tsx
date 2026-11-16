import { ExtraFileInfo, FileInfo, FileUploaderFileAction } from '../FileUploader.types';
import { Surface, Button, Icon, Paragraph, Spinner, ValidationMessage } from '~/main';
import classes from './FileUploaderItem.module.css';
import { MaterialIconProps } from '~/components/kystverket/Icon/icon';
import { convertBytesToReadable } from '~/utils/convertBytesToReadable';

type FileUploaderItemProps = {
  file: FileInfo;
  extraInfo?: ExtraFileInfo;
  t: (key: string) => string;
  onDeleteFile: (file: FileInfo) => void;
  onPreviewFile?: () => void;
  actions?: FileUploaderFileAction[];
};

export const getPrefixIcon = (contentType: FileInfo['contentType']): MaterialIconProps['material'] => {
  if (contentType.startsWith('text') || contentType.endsWith('pdf')) return 'description';
  if (contentType.startsWith('image')) return 'image';
  if (contentType.endsWith('json')) return 'code_blocks';
  return 'anchor';
};

export function FileUploaderItem({ file, extraInfo, t, onDeleteFile, onPreviewFile, actions }: FileUploaderItemProps) {
  return (
    <Surface className={classes.itemWrapper}>
      <Surface className={classes.filePreview}>
        {extraInfo?.thumbnailUri ? (
          <img src={extraInfo.thumbnailUri} alt={file.fileName || t('unknownFilename')} />
        ) : (
          <Icon size="lg" material={getPrefixIcon(file.contentType)} />
        )}
      </Surface>
      <Surface className={classes.fileData}>
        <Paragraph className={classes.title}>{file.fileName}</Paragraph>
        <Paragraph className={classes.subtitle} data-size="sm">
          {file.status === 'uploading' ? t('uploading') : convertBytesToReadable(extraInfo?.sizeInBytes)}
        </Paragraph>
        {file.status === 'error' && <ValidationMessage>{file.error}</ValidationMessage>}
      </Surface>
      <Surface align="center" horizontal className={classes.buttonContainer}>
        {file.status === 'uploaded' &&
          actions?.map((action) => (
            <Button
              key={action.label}
              onClick={() => action.onClick(file)}
              aria-label={action.label}
              disabled={action.disabled}
              icon
              variant="ghost"
              color="neutral"
            >
              <Icon material={action.icon} />
            </Button>
          ))}
        {onPreviewFile && file.status === 'uploaded' && (
          <Button onClick={onPreviewFile} aria-label={t('previewFileAriaLabel')} icon variant="ghost" color="neutral">
            <Icon material="visibility" />
          </Button>
        )}
        {(file.status === 'uploaded' || file.status === 'error') && (
          <Button
            onClick={() => onDeleteFile(file)}
            aria-label={t('removeFileAriaLabel')}
            icon
            variant="ghost"
            color="neutral"
          >
            <Icon material="delete" />
          </Button>
        )}
        {file.status === 'uploading' && <Spinner aria-label={t('uploading')} data-size="xs" data-color="neutral" />}
      </Surface>
    </Surface>
  );
}
