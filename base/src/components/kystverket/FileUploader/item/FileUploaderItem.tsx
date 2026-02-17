import { FileInfo } from '../FileUploader.types';
import { Box, Button, Icon, Paragraph, Spinner, ValidationMessage } from '~/main';
import classes from './FileUploadItem.module.css';
import { MaterialIconProps } from '~/components/kystverket/Icon/icon';

type FileUploaderItemProps = {
  file: FileInfo;
  t: (key: string) => string;
  onDeleteFile: (file: FileInfo) => void;
};

export function FileUploaderItem({ file, t, onDeleteFile }: FileUploaderItemProps) {
  console.log(file.status);

  if (file.fileName === 'file2.txt') {
    file.status = 'error';
    file.error = 'Filformatet støttes ikke';
  }

  const getPrefixIcon = (contentType: FileInfo['contentType']): MaterialIconProps['material'] => {
    console.log(contentType);
    if (contentType.startsWith('text') || contentType.endsWith('pdf')) return 'description';
    if (contentType.startsWith('image')) return 'image';
    if (contentType.startsWith('json')) return 'code_blocks';
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
          {file.status === 'uploading' ? t('uploading') : '0.29 MB'}
        </Paragraph>
        {file.status === 'error' && <ValidationMessage>{file.error}</ValidationMessage>}
      </Box>
      <Box align="center" className={classes.buttonContainer}>
        {(file.status === 'uploaded' || file.status === 'error') && (
          <Button onClick={() => onDeleteFile(file)} aria-label="Remove file" icon variant="ghost" color="neutral">
            <Icon material="delete" />
          </Button>
        )}
        {file.status === 'uploading' && <Spinner aria-label={t('uploading')} data-size="xs" data-color="neutral" />}
      </Box>
    </Box>
  );
}
