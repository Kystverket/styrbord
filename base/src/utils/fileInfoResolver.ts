import { type ExtraFileInfo } from '~/components/kystverket/FileUploader/FileUploader.types';
import { type MaybePromise } from '~/utils/utility.types';

export type DeriveFileInfosFromStorageIds = (storageIds: string[]) => MaybePromise<ExtraFileInfo[]>;

export const createStorageIdToExtraFileInfoMap = (extraFileInfos: ExtraFileInfo[]): Map<string, ExtraFileInfo> => {
  const storageIdToExtraFileInfo = new Map<string, ExtraFileInfo>();

  extraFileInfos.forEach((extraFileInfo) => {
    if (!extraFileInfo.storageId) {
      return;
    }

    storageIdToExtraFileInfo.set(extraFileInfo.storageId, extraFileInfo);
  });

  return storageIdToExtraFileInfo;
};

export const getExtraFileInfoPreviewUri = (
  extraFileInfo: ExtraFileInfo | undefined,
  options?: { preferThumbnail?: boolean },
): string | undefined => {
  if (!extraFileInfo) {
    return undefined;
  }

  if (options?.preferThumbnail) {
    return extraFileInfo.thumbnailUri || extraFileInfo.previewUri;
  }

  return extraFileInfo.previewUri || extraFileInfo.thumbnailUri;
};
