type ButtonOptions = {
  showDownload?: boolean;
  showOpenInNew?: boolean;
};

export type FileInfo = {
  fileName: string;
  fileSize?: string;
  buttons?: ButtonOptions;
} & (PdfFile | ImageFile | JsonFile);

type PdfFile = {
  contentType: 'pdf';
  src: string;
};

type ImageFile = {
  contentType: 'image';
  src: string;
};

// to force user to send in either data or src, not both. So it can display both "local" json
// and accept a src
type JsonFile =
  | { contentType: 'json'; data: Record<string, unknown>; src?: never }
  | { contentType: 'json'; src: string; data?: never };
  
//Get File type filtered by the value of contentType
export type FileInfoByContentType<T extends FileInfo['contentType']> = Extract<FileInfo, { contentType: T }>;

// Default button configurations by file type
export const defaultButtonsByType: Record<FileInfo['contentType'], ButtonOptions> = {
  pdf: { showDownload: true, showOpenInNew: true },
  image: { showDownload: true, showOpenInNew: true },
  json: { showDownload: true, showOpenInNew: true },
};
