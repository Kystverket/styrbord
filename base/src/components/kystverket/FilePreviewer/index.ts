import { FilePreviewerContext } from './FilePreviewer-context';
import { FilePreviewerThumbnail } from './thumbnail/FilePreviewer-thumbnail';
import { FilePreviewerPanel } from './panel/FilePreviewer-panel';

// Compound component pattern: FilePreviewer = Context wrapper
// Usage: <FilePreviewer><FilePreviewer.Thumbnail /></FilePreviewer>
type FilePreviewerCompound = typeof FilePreviewerContext & {
  Thumbnail: typeof FilePreviewerThumbnail & { displayName?: string };
  Panel: typeof FilePreviewerPanel & { displayName?: string };
  displayName?: string;
};

const FilePreviewer = Object.assign(FilePreviewerContext, {
  Thumbnail: FilePreviewerThumbnail,
  Panel: FilePreviewerPanel,
}) as FilePreviewerCompound;

FilePreviewer.displayName = 'FilePreviewer';
FilePreviewer.Thumbnail.displayName = 'FilePreviewer.Thumbnail';
FilePreviewer.Panel.displayName = 'FilePreviewer.Panel';

export type { FilePreviewerContextProps as FilePreviewerProps } from './FilePreviewer-context';
export type { FilePreviewerThumbnailProps } from './thumbnail/FilePreviewer-thumbnail';
export type { FilePreviewerPanelProps } from './panel/FilePreviewer-panel';

export { FilePreviewer };
