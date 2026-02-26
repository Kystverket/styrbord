import { FileInfo } from '~/components/kystverket/FilePreviewer/FilePreviewer.types';

export const handleDownload = (selectedFile: FileInfo) => {
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
