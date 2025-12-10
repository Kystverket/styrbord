import { useContext, useEffect } from 'react';
import { FPContext } from './FilePreviewer-context';
import { FileInfo } from './FilePreviewer.types';
import { Box, Button, Icon, Paragraph, Tooltip } from '~/main';
import classes from './FilePreviewer-thumbnail.module.css';
import { FileRenderer } from './FileRenderer';

export interface FilePreviewerThumbnailProps {
  file: FileInfo;

  /**
   * The index of the file in the array
   * Needed if it's a child of <FilePreviewer>
   */
  index: number;
}

export const FilePreviewerThumbnail = ({ file, index }: FilePreviewerThumbnailProps) => {
  const { setFiles, ref } = useContext(FPContext);
  if (!file) return;
  if (!FPContext) throw new Error('Missing context!');

  //Add file to context
  useEffect(
    () =>
      setFiles((prev) => {
        const newFiles = [...prev];
        newFiles[index] = file;
        return newFiles;
      }),
    [],
  );

  const onClickHandler = () => {
    if (ref && 'current' in ref && ref.current) {
      ref.current.showModal(index);
    }
  };

  const filename = splitFilenameAndExtension(file.fileName);
  return (
    <Box className={classes.container}>
      <Box className={classes.thumbnail}>
        <FileRenderer file={file} />
        <Button variant="ghost" color="neutral" className={classes.button} icon onClick={onClickHandler}>
          <Icon material="pan_zoom" />
        </Button>
      </Box>
      <Box className={classes.fileInfoContainer}>
        <Box horizontal>
          <Tooltip content={filename.filename}>
            <Paragraph data-size="sm" className={classes.fileName}>
              {filename.filename}
            </Paragraph>
          </Tooltip>
          <Paragraph className={classes.fileExtension} data-size="sm">
            .{filename.extension}
          </Paragraph>
        </Box>
        {file.fileSize && <Paragraph data-size="xs">{file.fileSize}</Paragraph>}
      </Box>
    </Box>
  );
};

const splitFilenameAndExtension = (filename: string) => {
  const splitFile = filename.split('.');
  return { filename: splitFile.slice(0, -1).join('.'), extension: splitFile[splitFile.length - 1] };
};
