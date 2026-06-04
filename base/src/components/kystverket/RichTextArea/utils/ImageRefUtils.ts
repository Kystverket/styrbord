import { MaybePromise } from '~/utils/utility.types';

type ResolvedImageRef = { src: string; alt?: string } | string | null | undefined;

export const convertFromRefToImage = async (
  markdown: string,
  resolveImageRefs: (refs: string[]) => MaybePromise<Record<string, ResolvedImageRef>>,
  urlToRefMap?: Map<string, string>,
  previousRefToUrlMap?: Map<string, string>,
) => {
  const imageRegex = /!\[([^\]]*)\]\(([^)\s]+)(?:\s+"([^"]*)")?\)/g;
  const uniqueRefs = Array.from(new Set(Array.from(markdown.matchAll(imageRegex), ([, , ref]) => ref)));

  const resolvedImageRefs = await resolveImageRefs(uniqueRefs);

  return markdown.replace(imageRegex, (fullMatch, alt: string, ref: string, title: string | undefined) => {
    const resolvedImageRef = resolvedImageRefs[ref];

    if (resolvedImageRef === undefined || resolvedImageRef === null) {
      const fallbackSrc = previousRefToUrlMap?.get(ref);

      if (!fallbackSrc) {
        return fullMatch;
      }

      const titlePart = title ? ` "${title}"` : '';
      urlToRefMap?.set(fallbackSrc, ref);
      return `![${alt}](${fallbackSrc}${titlePart})`;
    }

    const resolvedSrc = typeof resolvedImageRef === 'string' ? resolvedImageRef : resolvedImageRef.src;
    const resolvedAlt = typeof resolvedImageRef === 'string' ? alt : (resolvedImageRef.alt ?? alt);
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
