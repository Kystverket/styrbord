import { FileInfo } from './FileUploader.types';
export type FileChangeCallback = (files: FileInfo[]) => void;
export interface FileUploaderContextProps {
    uploadFile: (file: FormData) => Promise<string>;
    deleteFile: (fileId: string) => Promise<void>;
}
export declare const FileUploaderContext: React.Context<FileUploaderContextProps>;
