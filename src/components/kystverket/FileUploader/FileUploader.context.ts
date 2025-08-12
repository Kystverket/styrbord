import { createContext } from 'react';
import { FileInfo } from './FileUploader.types';
import { v4 as uuidv4 } from 'uuid';

export type FileChangeCallback = (files: FileInfo[]) => void;

const uploadFileDummy = async (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(uuidv4());
    }, 2500);
  });
};

const deleteFileDummy = async (): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2500);
  });
};

export interface FileUploaderContextProps {
  uploadFile: (file: FormData) => Promise<string>;
  deleteFile: (fileId: string) => Promise<void>;
}

export const FileUploaderContext = createContext<FileUploaderContextProps>({
  uploadFile: uploadFileDummy,
  deleteFile: deleteFileDummy,
});
