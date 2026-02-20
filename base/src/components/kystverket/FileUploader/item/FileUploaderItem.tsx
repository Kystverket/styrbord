import { FileInfo } from '../FileUploader.types';
import { Box, Button, Icon, Paragraph, Spinner, ValidationMessage } from '~/main';
import classes from './FileUploaderItem.module.css';
import { MaterialIconProps } from '~/components/kystverket/Icon/icon';
import { convertBytesToReadable } from '~/utils/convertBytesToReadable';

type FileUploaderItemProps = {
  file: FileInfo;
  t: (key: string) => string;
  onDeleteFile: (file: FileInfo) => void;
};

export function FileUploaderItem({ file, t, onDeleteFile }: FileUploaderItemProps) {
  const getPrefixIcon = (contentType: FileInfo['contentType']): MaterialIconProps['material'] => {
    console.log(contentType);
    if (contentType.startsWith('text') || contentType.endsWith('pdf')) return 'description';
    if (contentType.startsWith('image')) return 'image';
    if (contentType.endsWith('json')) return 'code_blocks';
    return 'anchor';
  };

  return (
    <Box className={classes.itemWrapper}>
      <Box className={classes.filePreview}>
        {file.thumbnailUri ? (
          <img src={file.thumbnailUri} />
        ) : (
          <Icon size="lg" material={getPrefixIcon(file.contentType)} />
        )}
      </Box>
      <Box className={classes.fileData}>
        <Paragraph className={classes.title}>{file.fileName}</Paragraph>
        <Paragraph className={classes.subtitle} data-size="sm">
          {file.status === 'uploading' ? t('uploading') : convertBytesToReadable(file.sizeInBytes)}
        </Paragraph>
        {file.status === 'error' && <ValidationMessage>{file.error}</ValidationMessage>}
      </Box>
      <Box align="center" className={classes.buttonContainer}>
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
      </Box>
    </Box>
  );
}
