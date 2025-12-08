type buttonOptions = {
  showDownload?: boolean;
  showOpenInNew?: boolean;
};

export type pdfFile = {
  contentType: 'pdf';
  src: string;
  fileName: string;
  fileSize?: string;
  buttons?: buttonOptions;
};

export type imageFile = {
  contentType: 'image';
  src: string;
  fileName: string;
  fileSize?: string;
  buttons?: buttonOptions;
};

export type jsonFile = {
  contentType: 'json';
  data: Record<string, unknown>;
  fileName: string;
  fileSize?: string;
  buttons?: buttonOptions;
};

// Default button configurations by file type
export const defaultButtonsByType = {
  pdf: { showDownload: true, showOpenInNew: true } as buttonOptions,
  image: { showDownload: true, showOpenInNew: true } as buttonOptions,
  json: { showDownload: true, showOpenInNew: true } as buttonOptions,
};
