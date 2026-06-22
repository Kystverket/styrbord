import { createContext } from 'react';
import type { DeriveFileInfosFromStorageIds } from '~/main';

export interface FileRetrieverContextProps {
  deriveFileInfosFromStorageIds: DeriveFileInfosFromStorageIds;
}

export const FileRetrieverContext = createContext<FileRetrieverContextProps>({
  deriveFileInfosFromStorageIds: async () => [],
});
