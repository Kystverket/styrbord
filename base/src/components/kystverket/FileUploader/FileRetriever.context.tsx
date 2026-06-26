import { createContext } from 'react';
import type { DeriveFileInfosFromStorageIds } from '~/utils/fileInfoResolver';

export interface FileRetrieverContextProps {
  deriveFileInfosFromStorageIds: DeriveFileInfosFromStorageIds;
}

export const FileRetrieverContext = createContext<FileRetrieverContextProps | null>(null);
