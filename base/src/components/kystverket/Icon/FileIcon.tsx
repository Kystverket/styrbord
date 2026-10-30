import classes from './FileIcon.module.css';
import { FileIconId, fileIconIdList } from './icon.types';

import FileBlank from './file/file.svg?react';
import FileJson from './file/json.svg?react';
import FilePdf from './file/pdf.svg?react';
import FileXls from './file/xls.svg?react';

const fileIcons: Record<FileIconId, typeof FileBlank> = {
  json: FileJson,
  pdf: FilePdf,
  xls: FileXls,
};

const FileIcon = ({ file }: { file: string }) => {
  const key = file.toLowerCase();
  const Preset = (fileIconIdList as readonly string[]).includes(key) ? fileIcons[key as FileIconId] : undefined;

  return (
    <span className={classes.file}>
      {Preset ? (
        <Preset className={classes.fileSvg} />
      ) : (
        <>
          <FileBlank className={classes.fileSvg} />
          <span className={classes.fileLabel}>{file.toUpperCase()}</span>
        </>
      )}
    </span>
  );
};

export default FileIcon;
