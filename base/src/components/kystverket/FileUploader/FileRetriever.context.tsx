import { createContext, useContext } from 'react';
import type { DeriveFileInfosFromStorageIds } from '~/utils/fileInfoResolver';

export interface FileRetrieverContextProps {
  deriveFileInfosFromStorageIds: DeriveFileInfosFromStorageIds;
}

export const FileRetrieverContext = createContext<FileRetrieverContextProps | null>(null);

export const useFileRetrieverContext = (): FileRetrieverContextProps => {
  const context = useContext(FileRetrieverContext);

  if (!context) {
    throw new Error('FileRetrieverContext.Provider is missing in the component tree.');
  }

  return context;
};
