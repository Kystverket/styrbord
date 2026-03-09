import { FileInfo } from './FilePreviewer.types';

/**
 * Opens a file preview in a new browser tab.
 * For local JSON data, a temporary Blob URL is used.
 */
export const openFileInNewTab = (file: FileInfo) => {
  if (file.contentType === 'image' || file.contentType === 'pdf') {
    window.open(file.src, '_blank', 'noopener,noreferrer');
    return;
  }

  // JSON can be provided either as src or as in-memory data.
  if ('src' in file && file.src) {
    window.open(file.src, '_blank', 'noopener,noreferrer');
    return;
  }

  const jsonString = JSON.stringify(file.data, null, 2);
  const blob = new Blob([jsonString], { type: 'application/json' });
  const url = URL.createObjectURL(blob);

  window.open(url, '_blank', 'noopener,noreferrer');
  setTimeout(() => URL.revokeObjectURL(url), 100);
};
