import { Box } from '~/main';
import { FileInfo, ImageFile, JsonFile, PdfFile } from './FilePreviewer.types';
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
  if (file.contentType === 'image') return <ImageDisplay file={file} className={className} />;
  if (file.contentType === 'pdf') return <PdfDisplay tabIndex={tabIndex} file={file} className={className} />;
  if (file.contentType === 'json') return <JsonDisplay tabIndex={tabIndex} file={file} className={className} />;
};

/**
 * Image
 */

const ImageThumbnail = ({ file, className }: { file: ImageFile; className?: string }) => {
  return <img src={file.src} className={`${classes.image} ${className || ''}`}></img>;
};

const ImageDisplay = ({ file, className }: { file: ImageFile; className?: string; tabIndex?: number }) => {
  return <img className={`${classes.previewFile} ${className || ''}`} src={file.src}></img>;
};

/**
 * JSON
 */

const JsonThumbnail = ({ file, className }: { file: JsonFile; className?: string }) => {
  return (
    <Box align="center" justify="center" className={`${classes.thumbnail} ${classes.flexCenter} ${className || ''}`}>
      <p>{file.fileName}</p>
    </Box>
  );
};

function JsonDisplay({ file, className, tabIndex }: { file: JsonFile; className?: string; tabIndex?: number }) {
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

const PdfThumbnail = ({ file, className }: { file: PdfFile; className?: string }) => {
  return (
    <Box className={`${classes.thumbnail} ${classes.flexCenter} ${className || ''}`}>
      <p>{file.fileName}</p>
    </Box>
  );
};

const PdfDisplay = ({ file, className, tabIndex }: { file: PdfFile; className?: string; tabIndex?: number }) => {
  return <embed tabIndex={tabIndex} className={`${classes.previewFile} ${className || ''}`} src={file.src}></embed>;
};
