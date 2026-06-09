import {
  createStorageIdToExtraFileInfoMap,
  DeriveFileInfosFromStorageIds,
  getExtraFileInfoPreviewUri,
} from '~/utils/fileInfoResolver';

const imageRegex = /!\[([^\]]*)\]\(([^)\s]+)(?:\s+"([^"]*)")?\)/g;
const imageRefPrefix = 'image://';

const toStorageId = (ref: string): string => {
  if (ref.startsWith(imageRefPrefix)) {
    return ref.slice(imageRefPrefix.length);
  }

  return ref;
};

export const getImageRefsFromMarkdown = (markdown: string): string[] =>
  Array.from(new Set(Array.from(markdown.matchAll(imageRegex), ([, , ref]) => ref)));

export const convertFromRefToImage = async (
  markdown: string,
  deriveFileInfosFromStorageIds: DeriveFileInfosFromStorageIds,
  urlToRefMap?: Map<string, string>,
  previousRefToUrlMap?: Map<string, string>,
) => {
  const uniqueRefs = getImageRefsFromMarkdown(markdown);

  if (uniqueRefs.length === 0) {
    return markdown;
  }

  const storageIds = Array.from(new Set(uniqueRefs.map((ref) => toStorageId(ref)).filter(Boolean)));
  const derivedFileInfos = await deriveFileInfosFromStorageIds(storageIds);
  const storageIdToExtraFileInfo = createStorageIdToExtraFileInfoMap(derivedFileInfos);

  return markdown.replace(imageRegex, (fullMatch, alt: string, ref: string, title: string | undefined) => {
    const extraFileInfo = storageIdToExtraFileInfo.get(toStorageId(ref)) || storageIdToExtraFileInfo.get(ref);
    const resolvedSrc = getExtraFileInfoPreviewUri(extraFileInfo);

    if (!resolvedSrc) {
      const fallbackSrc = previousRefToUrlMap?.get(ref);

      if (!fallbackSrc) {
        return fullMatch;
      }

      const titlePart = title ? ` "${title}"` : '';
      urlToRefMap?.set(fallbackSrc, ref);
      return `![${alt}](${fallbackSrc}${titlePart})`;
    }

    const titlePart = title ? ` "${title}"` : '';

    urlToRefMap?.set(resolvedSrc, ref);

    return `![${alt}](${resolvedSrc}${titlePart})`;
  });
};

export const replaceImageUrlsWithRefs = (markdown: string, sasToRefMap: Map<string, string>): string =>
  markdown.replace(
    /!\[([^\]]*)\]\(([^)\s]+)(?:\s+"([^"]*)")?\)/g,
    (match, altText: string, url: string, title: string | undefined) => {
      const ref = sasToRefMap.get(url);
      if (!ref) return match;
      const titlePart = title ? ` "${title}"` : '';
      return `![${altText}](${ref}${titlePart})`;
    },
  );
