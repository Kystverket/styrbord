import { ReactNode } from 'react';
import { FileInfo } from './FileUploader.types';
export interface FileUploaderProps {
    label: string;
    buttonLabel: string;
    description?: string | string[] | ReactNode;
    error?: string | null;
    multiple?: boolean;
    files: FileInfo[];
    maxFiles?: number;
    onChange: (files: FileInfo[]) => void;
    allowedFileTypes?: string[];
    required?: boolean | string;
    optional?: boolean | string;
}
export declare const FileUploader: ({ label, required, optional, buttonLabel, description, error, multiple, files, maxFiles, onChange, allowedFileTypes, }: FileUploaderProps) => React.JSX.Element;
