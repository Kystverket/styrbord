import classes from './FileIcon.module.css';
import { FileIconId, fileIconIdList } from './icon.types';

import FileBlank from './file/file.svg?react';
import FileGeo from './file/geo.svg?react';
import FileJpg from './file/jpg.svg?react';
import FileJson from './file/json.svg?react';
import FilePdf from './file/pdf.svg?react';
import FileXls from './file/xls.svg?react';

const fileIcons: Record<FileIconId, typeof FileBlank> = {
  geojson: FileGeo,
  jpeg: FileJpg,
  json: FileJson,
  pdf: FilePdf,
  xls: FileXls,
};

/** Alternative extensions that share a preset. */
const fileIconAliases: Record<string, FileIconId> = {
  geo: 'geojson',
  jpg: 'jpeg',
};

const FileIcon = ({ file }: { file: string }) => {
  const key = fileIconAliases[file.toLowerCase()] ?? file.toLowerCase();
  const Preset = (fileIconIdList as readonly string[]).includes(key) ? fileIcons[key as FileIconId] : undefined;

  return (
    <span className={classes.file}>
      {Preset ? (
        <Preset className={classes.fileSvg} />
      ) : (
        <>
          <FileBlank className={classes.fileSvg} />
          {/* Baseline matches the presets' lettering (caps at y 12.7–17.7) */}
          <svg viewBox="0 0 24 24" className={classes.fileSvg} aria-label={file.toUpperCase()}>
            <text x="12" y="17.4" textAnchor="middle" className={classes.fileLabel}>
              {file.toUpperCase()}
            </text>
          </svg>
        </>
      )}
    </span>
  );
};

export default FileIcon;
