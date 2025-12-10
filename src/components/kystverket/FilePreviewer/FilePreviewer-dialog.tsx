import { forwardRef, useEffect, useRef, useState } from 'react';
import classes from './FilePreviewer-dialog.module.css';
import { Box, Button, Icon, Paragraph } from '~/main';
import { FileInfo, defaultButtonsByType } from './FilePreviewer.types';
import { FileRenderer } from './FileRenderer';
import { useHorizontalDragScroll } from '~/hooks/useHorizontalDragScroll';
import { handleDownload } from '~/utils/handleFileDownload';

const getButtonConfig = (file: FileInfo) => {
  const defaults = defaultButtonsByType[file.contentType];
  return { ...defaults, ...file.buttons };
};

export type FilePreviewRef = {
  close: () => void;
  showModal: (idx?: number) => void;
};
export interface FilePreviewerProps {
  files: FileInfo[];
  startIndex?: number;
  onClose?: () => void;
}
export const FilePreviewerDialog = forwardRef<FilePreviewRef, FilePreviewerProps>(({ onClose, files, startIndex }) => {
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

  useEffect(() => dialogRef.current?.showModal(), []);
  console.log('Rendered FilePreviewer');
  return (
    <dialog ref={dialogRef} className={classes.frame} onClose={handleClose}>
      {/* NAVIGATION */}
      <Box horizontal justify="between" className={classes.nav}>
        <Box>
          <Paragraph style={{ color: '#EBECED' }}>{selectedFile.fileName}</Paragraph>
          {selectedFile.fileSize && (
            <Paragraph data-size="sm" style={{ color: 'var(--ds-color-neutral-text-subtle)' }}>
              {selectedFile.fileSize}
            </Paragraph>
          )}
        </Box>
        <Box horizontal gap={32}>
          <Box horizontal gap={8}>
            {buttonConfig.showOpenInNew && (
              <Button title="Åpne i ny fane" variant="filled" color="neutral" icon onClick={handleOpenInNew}>
                <Icon material="open_in_new" size="xl" />
              </Button>
            )}
            {buttonConfig.showDownload && (
              <Button title="Last ned" variant="filled" color="neutral" icon onClick={downloadHandler}>
                <Icon material="download" size="xl" />
              </Button>
            )}
          </Box>
          <Box>
            <Button title="Lukk" variant="filled" color="neutral" icon onClick={handleClose}>
              <Icon material="close" size="xl"></Icon>
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
            className={classes.switchButton}
            size="lg"
            variant="filled"
            color="neutral"
            style={{ left: '0' }}
            icon
          >
            <Icon material="arrow_back" size="xl" />
          </Button>
        )}
        {selectedFileIndex < files.length - 1 && (
          <Button
            title="Neste fil"
            onClick={handleNext}
            className={classes.switchButton}
            size="lg"
            variant="filled"
            color="neutral"
            style={{ right: '0' }}
            icon
          >
            <Icon material="arrow_forward" size="xl"></Icon>
          </Button>
        )}
        {files.map((e, idx) => (
          <FileRenderer mode="full" key={idx} file={e} className={idx !== selectedFileIndex ? classes.none : ''} />
        ))}
      </Box>

      <div
        onKeyDown={(e) => {
          if (e.key !== 'Tab' && e.key !== 'Shift') {
            e.preventDefault();
          }
        }}
        ref={scrollRef}
        tabIndex={0}
        className={classes.selectArea}
        {...dragScrollHandlers}
      >
        {files.map((file, idx) => {
          return (
            <button
              key={idx}
              ref={(el) => {
                previewButtonRefs.current[idx] = el;
              }}
              tabIndex={-1}
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
});
