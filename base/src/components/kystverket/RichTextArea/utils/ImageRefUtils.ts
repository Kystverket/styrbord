import { ResolvedImageRef } from '~/components/kystverket/RichTextArea/richTextArea.types';
import { MaybePromise } from '~/utils/utility.types';

const imageRegex = /!\[([^\]]*)\]\(([^)\s]+)(?:\s+"([^"]*)")?\)/g;

export const getImageRefsFromMarkdown = (markdown: string): string[] =>
  Array.from(new Set(Array.from(markdown.matchAll(imageRegex), ([, , ref]) => ref)));

export const convertFromRefToImage = async (
  markdown: string,
  resolveImageRefs: (refs: string[]) => MaybePromise<ResolvedImageRef[]>,
  urlToRefMap?: Map<string, string>,
  previousRefToUrlMap?: Map<string, string>,
) => {
  const uniqueRefs = getImageRefsFromMarkdown(markdown);

  const resolvedImageRefs = await resolveImageRefs(uniqueRefs);
  const resolvedImageRefMap = new Map<string, ResolvedImageRef>(
    resolvedImageRefs
      .filter((resolvedImageRef) => resolvedImageRef.storageId)
      .map((resolvedImageRef) => [resolvedImageRef.storageId!, resolvedImageRef]),
  );

  return markdown.replace(imageRegex, (fullMatch, alt: string, ref: string, title: string | undefined) => {
    const resolvedImageRef = resolvedImageRefMap.get(ref);

    if (resolvedImageRef === undefined || resolvedImageRef.previewUri === undefined) {
      const fallbackSrc = previousRefToUrlMap?.get(ref);

      if (!fallbackSrc) {
        return fullMatch;
      }

      const titlePart = title ? ` "${title}"` : '';
      urlToRefMap?.set(fallbackSrc, ref);
      return `![${alt}](${fallbackSrc}${titlePart})`;
    }

    const resolvedSrc = resolvedImageRef.previewUri;
    const resolvedAlt = resolvedImageRef.alt ?? alt;
    const titlePart = title ? ` "${title}"` : '';

    urlToRefMap?.set(resolvedSrc, ref);

    return `![${resolvedAlt}](${resolvedSrc}${titlePart})`;
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
