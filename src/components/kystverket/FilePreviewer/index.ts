import { FilePreviewerContext } from './FilePreviewer-context';
import { FilePreviewerThumbnail } from './FilePreviewer-thumbnail';

// Compound component pattern: FilePreviewer = Context wrapper
// Usage: <FilePreviewer><FilePreviewer.Thumbnail /></FilePreviewer>
type FilePreviewerCompound = typeof FilePreviewerContext & {
  Thumbnail: typeof FilePreviewerThumbnail & { displayName?: string };
  displayName?: string;
};

const FilePreviewer = Object.assign(FilePreviewerContext, {
  Thumbnail: FilePreviewerThumbnail,
}) as FilePreviewerCompound;

FilePreviewer.displayName = 'FilePreviewer';
FilePreviewer.Thumbnail.displayName = 'FilePreviewer.Thumbnail';

export type { FilePreviewerContextProps as FilePreviewerProps } from './FilePreviewer-context';
export type { FilePreviewerThumbnailProps } from './FilePreviewer-thumbnail';

export { FilePreviewer };
