import { forwardRef, useEffect, useRef, useState } from 'react';
import classes from './Lightbox.module.css';
import { Box, Button, Icon, Paragraph } from '~/main';
import { imageFile, jsonFile, pdfFile, defaultButtonsByType } from './FilePreviewer.types';

type FileInfo = pdfFile | jsonFile | imageFile;

const getButtonConfig = (file: FileInfo) => {
  const defaults = defaultButtonsByType[file.contentType];
  return { ...defaults, ...file.buttons };
};
export interface FilePreviewProps {
  files: FileInfo[];
  navigation?: boolean;
  startIndex?: number;
  open?: boolean;
  onClose?: () => void;
}

export const FilePreview = forwardRef<HTMLDialogElement, FilePreviewProps>(
  ({ files, onClose, startIndex, navigation = true }, ref) => {
    const dialogRef = ref || useRef<HTMLDialogElement>(null);
    const [selectedFile, setSelectedFile] = useState<FileInfo>(files[startIndex ?? 0]);
    const [selectedFileIndex, setSelectedFileIndex] = useState(startIndex ?? 0);
    const selectedFileIndexRef = useRef(selectedFileIndex);
    const previewButtonRefs = useRef<(HTMLButtonElement | null)[]>([]);

    useEffect(() => {
      setSelectedFile(files[selectedFileIndex]);
      selectedFileIndexRef.current = selectedFileIndex;

      // Scroll selected preview button into view
      if (previewButtonRefs.current[selectedFileIndex]) {
        previewButtonRefs.current[selectedFileIndex]?.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center',
        });
      }
    }, [selectedFileIndex]);

    const handleClose = () => {
      if (typeof dialogRef !== 'function' && dialogRef?.current) {
        dialogRef.current.close();
      }
      onClose?.();
    };

    const handleDownload = () => {
      if (selectedFile.contentType === 'json') {
        // For JSON, create a blob and download
        const jsonString = JSON.stringify(selectedFile.data, null, 2);
        const blob = new Blob([jsonString], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = selectedFile.fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      } else if (selectedFile.contentType === 'pdf') {
        // Open PDF in browser's native viewer with download button
        window.open(selectedFile.src, '_blank');
      } else {
        // For images, fetch as blob to ensure download works cross-origin
        fetch(selectedFile.src)
          .then((response) => response.blob())
          .then((blob) => {
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = selectedFile.fileName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
          })
          .catch(() => {
            // Fallback: try direct download
            const link = document.createElement('a');
            link.href = selectedFile.src;
            link.download = selectedFile.fileName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          });
      }
    };

    const handleOpenInNew = () => {
      if (selectedFile.contentType == 'image') window.open(selectedFile.src, '_blank');
      else if (selectedFile.contentType == 'pdf') window.open(selectedFile.src, '_blank');
    };

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

    const handleNext = () => {
      if (selectedFileIndexRef.current < files.length - 1) setSelectedFileIndex((index) => index + 1);
    };
    const handlePrev = () => {
      if (selectedFileIndexRef.current > 0) setSelectedFileIndex((index) => index - 1);
    };

    const buttonConfig = getButtonConfig(selectedFile);

    // Drag to scroll functionality
    const scrollRef = useRef<HTMLDivElement>(null);
    const isDraggingRef = useRef(false);
    const hasMovedRef = useRef(false);
    const startXRef = useRef(0);
    const scrollLeftRef = useRef(0);

    const handleMouseDown = (e: React.MouseEvent) => {
      if (!scrollRef.current) return;
      isDraggingRef.current = true;
      hasMovedRef.current = false;
      startXRef.current = e.pageX - scrollRef.current.offsetLeft;
      scrollLeftRef.current = scrollRef.current.scrollLeft;
    };

    const handleMouseMove = (e: React.MouseEvent) => {
      if (!isDraggingRef.current || !scrollRef.current) return;
      e.preventDefault();
      const x = e.pageX - scrollRef.current.offsetLeft;
      const walk = x - startXRef.current;

      // Mark as moved if there's been any significant movement
      if (Math.abs(walk) > 3) {
        hasMovedRef.current = true;
      }

      scrollRef.current.scrollLeft = scrollLeftRef.current - walk;
    };

    const handleMouseUpOrLeave = () => {
      isDraggingRef.current = false;
      if (scrollRef.current) {
        scrollRef.current.style.cursor = 'grab';
      }

      // Reset hasMoved after a short delay to allow click events to check it
      setTimeout(() => {
        hasMovedRef.current = false;
      }, 0);
    };

    return (
      <dialog ref={dialogRef as React.RefObject<HTMLDialogElement>} className={classes.frame} onClose={handleClose}>
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
                <Button title="open_in_new_button" variant="filled" color="neutral" icon onClick={handleOpenInNew}>
                  <Icon material="open_in_new" size="xl" />
                </Button>
              )}
              {buttonConfig.showDownload && (
                <Button title="download_button" variant="filled" color="neutral" icon onClick={handleDownload}>
                  <Icon material="download" size="xl" />
                </Button>
              )}
            </Box>
            <Box>
              <Button title="close" variant="filled" color="neutral" icon onClick={handleClose}>
                <Icon material="close" size="xl"></Icon>
              </Button>
            </Box>
          </Box>
        </Box>
        {/* END OF NAVIGATION */}
        <Box pr={96} pl={96} className={classes.content}>
          {selectedFileIndex > 0 && (
            <Button
              title="previous"
              onClick={handlePrev}
              className={classes.NavButton}
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
              title="next"
              onClick={handleNext}
              className={classes.NavButton}
              size="lg"
              variant="filled"
              color="neutral"
              style={{ right: '0' }}
              icon
            >
              <Icon material="arrow_forward" size="xl"></Icon>
            </Button>
          )}
          <PreviewFile file={selectedFile} />
        </Box>

        {navigation && (
          <div
            onKeyDown={(e) => e.preventDefault()}
            ref={scrollRef}
            tabIndex={0}
            className={classes.selectArea}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
            style={{ cursor: 'grab' }}
          >
            {files.map((f, idx) => {
              return (
                <PreviewButton
                  ref={(el) => {
                    previewButtonRefs.current[idx] = el;
                  }}
                  onClick={() => {
                    // Only change selection if we haven't been dragging
                    if (!hasMovedRef.current) {
                      setSelectedFileIndex(idx);
                    }
                  }}
                  ariaSelected={selectedFileIndex === idx}
                  file={f}
                ></PreviewButton>
              );
            })}
          </div>
        )}

        {/* <Select options={[{ value: '100%' }, { value: '125%' }]}></Select> */}
      </dialog>
    );
  },
);

const PreviewButton = forwardRef<
  HTMLButtonElement,
  {
    onClick: () => void;
    file: FileInfo;
    ariaSelected: boolean;
  }
>(({ onClick, file, ariaSelected }, ref) => {
  if (file.contentType === 'image') {
    return (
      <button ref={ref} tabIndex={-1} className={classes.previewButton} onClick={onClick} aria-selected={ariaSelected}>
        <img src={file.src} alt={file.fileName}></img>
      </button>
    );
  }

  return (
    <button
      ref={ref}
      tabIndex={-1}
      className={classes.previewButton}
      style={{ padding: '5px', wordBreak: 'break-word' }}
      onClick={onClick}
      aria-selected={ariaSelected}
    >
      {file.fileName
        .split('.')
        .map((a) => a + '\u00AD')
        .join('.')}
    </button>
  );
});

function PreviewFile({ file }: { file: FileInfo }) {
  switch (file.contentType) {
    case 'image': {
      return <img src={file.src}></img>;
    }
    case 'json': {
      return <JsonDisplay data={file.data} />;
    }
    case 'pdf': {
      return <embed src={file.src}></embed>;
    }
  }
}

function JsonDisplay({ data }: { data: Record<string, unknown> }) {
  return (
    <pre
      style={{
        backgroundColor: '#1e1e1e',
        color: '#d4d4d4',
        overflow: 'auto',
        fontSize: '0.9rem',
        lineHeight: '1.6',
        fontFamily: "'Consolas', 'Monaco', 'Courier New', monospace",
        margin: 0,
      }}
    >
      {JSON.stringify(data, null, 2)}
    </pre>
  );
}
