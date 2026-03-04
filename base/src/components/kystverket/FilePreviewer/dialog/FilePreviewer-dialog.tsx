import { useEffect, useRef, useState } from 'react';
import classes from './FilePreviewer-dialog.module.css';
import { Body, Box, Button, ButtonProps, Icon } from '~/main';
import { FileInfo, defaultButtonsByType } from '../FilePreviewer.types';
import { FileRenderer } from '../renderer/FileRenderer';
import { useHorizontalDragScroll } from '~/hooks/useHorizontalDragScroll';
import { handleDownload } from '~/utils/handleFileDownload';
import { convertBytesToReadable } from '~/utils/convertBytesToReadable';

const getButtonConfig = (file: FileInfo) => {
  const defaults = defaultButtonsByType[file.contentType];
  return { ...defaults, ...file.buttons };
};

export type FilePreviewRef = {
  close: () => void;
  showModal: (idx?: number) => void;
};
export interface FilePreviewerDialogProps {
  animation?: 'none' | 'slide';
  files: FileInfo[];
  startIndex?: number;
  onClose?: () => void;
}

export const FilePreviewerDialog = ({ animation = 'slide', onClose, files, startIndex }: FilePreviewerDialogProps) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const [selectedFile, setSelectedFile] = useState<FileInfo>(files[startIndex ?? 0]);
  const [selectedFileIndex, setSelectedFileIndex] = useState(startIndex ?? 0);
  const selectedFileIndexRef = useRef(selectedFileIndex);
  const previewButtonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const { scrollRef, hasMovedRef, handlers: dragScrollHandlers } = useHorizontalDragScroll();

  const buttonConfig = getButtonConfig(selectedFile);

  useEffect(() => {
    setSelectedFile(files[selectedFileIndex]);
    selectedFileIndexRef.current = selectedFileIndex;

    if (previewButtonRefs.current[selectedFileIndex]) {
      previewButtonRefs.current[selectedFileIndex]?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [selectedFileIndex]);

  //logic: Attach eventlistener for swapping between items
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        handleNext();
      } else if (event.key === 'ArrowLeft') {
        handlePrev();
      } else if (event.key === 'Escape') {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleClose = () => {
    if (typeof dialogRef !== 'function' && dialogRef?.current) {
      dialogRef.current.close();
    }
    onClose?.();
  };

  const downloadHandler = () => handleDownload(selectedFile);

  const handleOpenInNew = () => {
    if (selectedFile.contentType === 'image') window.open(selectedFile.src, '_blank');
    else if (selectedFile.contentType === 'pdf') window.open(selectedFile.src, '_blank');
    else if (selectedFile.contentType === 'json') openSelectedJsonFileAsBlob();
  };

  const openSelectedJsonFileAsBlob = () => {
    if (selectedFile.contentType !== 'json') return;
    {
      const jsonString = JSON.stringify(selectedFile.data, null, 2);
      const blob = new Blob([jsonString], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      window.open(url, '_blank');
      setTimeout(() => URL.revokeObjectURL(url), 100);
    }
  };

  const handleNext = () => {
    if (selectedFileIndexRef.current < files.length - 1) setSelectedFileIndex((index) => index + 1);
  };
  const handlePrev = () => {
    if (selectedFileIndexRef.current > 0) setSelectedFileIndex((index) => index - 1);
  };
  const getPositionClass = (idx: number) => {
    if (idx === selectedFileIndex) return classes.selected;
    else if (idx < selectedFileIndex) return classes.previous;
    else return classes.next;
  };

  const defaultButtonProps: Partial<ButtonProps> = {
    variant: 'outline',
    color: 'neutral',
    icon: true,
    size: 'lg',
  };
  useEffect(() => dialogRef.current?.showModal(), []);
  return (
    <dialog ref={dialogRef} className={classes.frame} onClose={handleClose} data-color-scheme="dark">
      {/* NAVIGATION */}
      <Box horizontal justify="between" className={classes.nav}>
        <Box>
          <Body>{selectedFile.fileName}</Body>
          {selectedFile.fileSizeInBytes && (
            <Body data-size="sm" className={classes.fileSize}>
              {selectedFile.fileSize ?? convertBytesToReadable(selectedFile.fileSizeInBytes)}
            </Body>
          )}
        </Box>
        <Box horizontal className={classes.topRightButtonContainer}>
          <Box horizontal>
            {buttonConfig.showOpenInNew && (
              <Button title="Åpne i ny fane" onClick={handleOpenInNew} {...defaultButtonProps}>
                <Icon material="open_in_new" size="lg" />
              </Button>
            )}
            {buttonConfig.showDownload && (
              <Button title="Last ned" onClick={downloadHandler} {...defaultButtonProps}>
                <Icon material="download" size="lg" />
              </Button>
            )}
          </Box>
          <Box>
            <Button title="Lukk" onClick={handleClose} {...defaultButtonProps}>
              <Icon material="close" size="lg"></Icon>
            </Button>
          </Box>
        </Box>
      </Box>
      {/* END OF NAVIGATION */}
      <Box className={classes.content}>
        {selectedFileIndex > 0 && (
          <Button
            title="Forrige fil"
            onClick={handlePrev}
            className={`${classes.switchButton} ${classes.left}`}
            {...defaultButtonProps}
          >
            <Icon material="chevron_left" size="lg" />
          </Button>
        )}
        {selectedFileIndex < files.length - 1 && (
          <Button
            title="Neste fil"
            onClick={handleNext}
            className={`${classes.switchButton} ${classes.right}`}
            {...defaultButtonProps}
          >
            <Icon material="chevron_right" size="lg"></Icon>
          </Button>
        )}
        <Box className={classes.fileInnerContainer}>
          {files.map((file, idx) => (
            <Box key={`${idx}-display`} className={`${classes.file} ${classes[animation]} ${getPositionClass(idx)}`}>
              <FileRenderer tabIndex={idx === selectedFileIndex ? 0 : -1} mode="full" file={file} />
            </Box>
          ))}
        </Box>
      </Box>

      <div
        onKeyDown={(e) => {
          if (e.key !== 'Tab' && e.key !== 'Shift') {
            e.preventDefault();
          }
        }}
        ref={scrollRef}
        className={classes.selectArea}
        {...dragScrollHandlers}
      >
        {files.map((file, idx) => {
          return (
            <button
              key={`${idx}-preview`}
              ref={(el) => {
                previewButtonRefs.current[idx] = el;
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelectedFileIndex(idx);
                }
              }}
              className={classes.previewButton}
              onClick={() => {
                // Only change selection if we haven't been dragging
                if (!hasMovedRef.current) {
                  setSelectedFileIndex(idx);
                }
              }}
              aria-selected={selectedFileIndex === idx}
            >
              <FileRenderer file={file} />
            </button>
          );
        })}
      </div>
    </dialog>
  );
};
