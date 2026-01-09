import { Box } from '~/main';
import { FileInfoByContentType, FileInfo } from './FilePreviewer.types';
import classes from './FileRenderer.module.css';

export const FileRenderer = ({
  file,
  className,
  mode = 'thumbnail',
  tabIndex,
}: {
  file: FileInfo;
  mode?: 'thumbnail' | 'full';
  className?: string;
  tabIndex?: number;
}) => {
  if (mode === 'thumbnail') {
    if (file.contentType === 'image') return <ImageThumbnail file={file} className={className} />;
    if (file.contentType === 'json') return <JsonThumbnail file={file} className={className} />;
    if (file.contentType === 'pdf') return <PdfThumbnail file={file} className={className} />;
  }

  if (file.contentType === 'image') return <ImageDisplay file={file} className={className} />; //No tabindex because there's no interactive elements in the img
  if (file.contentType === 'pdf') return <PdfDisplay tabIndex={tabIndex} file={file} className={className} />;
  if (file.contentType === 'json') return <JsonDisplay tabIndex={tabIndex} file={file} className={className} />;
};

/**
 * Image
 */

const ImageThumbnail = ({ file, className }: { file: FileInfoByContentType<'image'>; className?: string }) => {
  return <img src={file.src} className={`${classes.image} ${className || ''}`} />;
};

const ImageDisplay = ({ file, className }: { file: FileInfoByContentType<'image'>; className?: string }) => {
  return <img className={`${classes.previewFile} ${className || ''}`} src={file.src} />;
};

/**
 * JSON
 */

const JsonThumbnail = ({ file, className }: { file: FileInfoByContentType<'json'>; className?: string }) => {
  return (
    <Box align="center" justify="center" className={`${classes.thumbnail} ${classes.flexCenter} ${className || ''}`}>
      <p>{file.fileName}</p>
    </Box>
  );
};

function JsonDisplay({
  file,
  className,
  tabIndex,
}: {
  file: FileInfoByContentType<'json'>;
  className?: string;
  tabIndex?: number;
}) {
  const selectAllText = (element: HTMLPreElement) => {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(element);
    selection?.removeAllRanges();
    selection?.addRange(range);
  };

  const handleOnDoubleClick = (e: React.MouseEvent<HTMLPreElement>) => {
    selectAllText(e.currentTarget);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLPreElement>) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'a') {
      e.preventDefault();
      selectAllText(e.currentTarget);
    }
  };

  return (
    <pre
      onDoubleClick={handleOnDoubleClick}
      onKeyDown={handleKeyDown}
      className={`${classes.previewFile} ${classes.JsonPreview} ${className || ''}`}
      tabIndex={tabIndex ?? 0}
    >
      {JSON.stringify(file.data, null, 2)}
    </pre>
  );
}

/**
 * PDF
 */

const PdfThumbnail = ({ file, className }: { file: FileInfoByContentType<'pdf'>; className?: string }) => {
  return (
    <Box className={`${classes.thumbnail} ${classes.flexCenter} ${className || ''}`}>
      <p>{file.fileName}</p>
    </Box>
  );
};

const PdfDisplay = ({
  file,
  className,
  tabIndex,
}: {
  file: FileInfoByContentType<'pdf'>;
  className?: string;
  tabIndex?: number;
}) => {
  return (
    <iframe
      tabIndex={tabIndex}
      title={file.fileName}
      className={`${classes.previewFile} ${className || ''}`}
      src={file.src}
    />
  );
};
