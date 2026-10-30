import classes from './FileIcon.module.css';
import { FileIconId, fileIconIdList } from './icon.types';

import FileBlank from './file/file.svg?react';

/** The label fits three characters, so longer extensions get their usual short form. */
const fileIconLabels: Partial<Record<FileIconId, string>> = {
  docx: 'DOC',
  geojson: 'GEO',
  html: 'HTM',
  jpeg: 'JPG',
  json: 'JSO',
  markdown: 'MD',
  mpeg: 'MPG',
  pptx: 'PPT',
  tiff: 'TIF',
  xlsx: 'XLS',
  yaml: 'YML',
};

const FileIcon = ({ file }: { file: string }) => {
  const key = file.toLowerCase();
  const short = (fileIconIdList as readonly string[]).includes(key) ? fileIconLabels[key as FileIconId] : undefined;
  const label = short ?? file.toUpperCase().slice(0, 3);

  return (
    <span className={classes.file}>
      <FileBlank className={classes.fileSvg} />
      <svg viewBox="0 0 24 24" className={classes.fileSvg} aria-label={label}>
        <text x="12" y="17.4" textAnchor="middle" className={classes.fileLabel}>
          {label}
        </text>
      </svg>
    </span>
  );
};

export default FileIcon;
