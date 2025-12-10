type ButtonOptions = {
  showDownload?: boolean;
  showOpenInNew?: boolean;
};

export type PdfFile = {
  contentType: 'pdf';
  src: string;
  fileName: string;
  fileSize?: string;
  buttons?: ButtonOptions;
};

export type ImageFile = {
  contentType: 'image';
  src: string;
  fileName: string;
  fileSize?: string;
  buttons?: ButtonOptions;
};

export type JsonFile = {
  contentType: 'json';
  data: Record<string, unknown>;
  fileName: string;
  fileSize?: string;
  buttons?: ButtonOptions;
};

// Default button configurations by file type
export const defaultButtonsByType = {
  pdf: { showDownload: true, showOpenInNew: true } as ButtonOptions,
  image: { showDownload: true, showOpenInNew: true } as ButtonOptions,
  json: { showDownload: true, showOpenInNew: true } as ButtonOptions,
};

export type FileInfo = PdfFile | ImageFile | JsonFile;
