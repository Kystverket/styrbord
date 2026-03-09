import { useContext, useEffect } from 'react';
import { FPContext } from '../FilePreviewer-context';
import { FileInfo } from '../FilePreviewer.types';
import { Box, Button, Icon, Paragraph, Tooltip } from '~/main';
import classes from './FilePreviewer-thumbnail.module.css';
import { FileRenderer } from '../renderer/FileRenderer';
import { convertBytesToReadable } from '~/utils/convertBytesToReadable';
import { handleDownload } from '../FilePreviewer-handleFileDownload';
import { openFileInNewTab } from '../FilePreviewer-openInNew';

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

  const openDialogHandler = () => {
    if (ref && 'current' in ref && ref.current) {
      ref.current.showModal(index);
    }
  };

  const isInteractiveTarget = (target: EventTarget | null) =>
    target instanceof HTMLElement && !!target.closest('button, a, input, select, textarea, [role="button"]');

  const filename = splitFilenameAndExtension(file.fileName);
  return (
    <div
      tabIndex={0}
      onKeyDown={(e) => {
        if (isInteractiveTarget(e.target)) return;

        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openDialogHandler();
        }
      }}
      onClick={() => {
        openDialogHandler();
      }}
      className={classes.container}
    >
      <div className={classes.thumbnail}>
        <FileRenderer file={file} />
        <Box className={classes.buttonGroup} horizontal>
          <Button
            variant="ghost"
            color="neutral"
            size="sm"
            className={classes.button}
            icon
            onClick={(e) => {
              e.stopPropagation();
              openFileInNewTab(file);
            }}
          >
            <Icon material="open_in_new" />
          </Button>
          <Button
            variant="ghost"
            color="neutral"
            size="sm"
            className={classes.button}
            icon
            onClick={(e) => {
              e.stopPropagation();
              handleDownload(file);
            }}
          >
            <Icon material="download" />
          </Button>
        </Box>
      </div>
      <Box className={classes.fileInfoContainer}>
        <Box horizontal>
          <Tooltip content={`${filename.filename}.${filename.extension}`}>
            <Paragraph className={classes.fileName}>{filename.filename}</Paragraph>
          </Tooltip>
          <Paragraph className={classes.fileExtension}>.{filename.extension}</Paragraph>
        </Box>

        {file.fileSizeInBytes && (
          <Paragraph data-size="sm" className={classes.fileSize}>
            {file.fileSize ?? convertBytesToReadable(file.fileSizeInBytes)}
          </Paragraph>
        )}
      </Box>
    </div>
  );
};

const splitFilenameAndExtension = (filename: string) => {
  const splitFile = filename.split('.');
  return { filename: splitFile.slice(0, -1).join('.'), extension: splitFile[splitFile.length - 1] };
};
