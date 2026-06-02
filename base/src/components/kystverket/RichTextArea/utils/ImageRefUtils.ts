type ResolvedImageRef = { src: string; alt?: string } | string | null | undefined;

/**
 *
 * @param markdown
 * @param resolveImageRef
 * @returns
 */
export const replaceRefsWithImageUrls = (markdown: string, resolveImageRef: (ref: string) => ResolvedImageRef) => {
  const imageRegex = /!\[([^\]]*)\]\(([^)\s]+)\)/g;

  return markdown.replace(imageRegex, (fullMatch, alt: string, src: string) => {
    const resolvedImageRef = resolveImageRef(src);

    if (resolvedImageRef === undefined || resolvedImageRef === null) return fullMatch;

    const resolvedSrc = typeof resolvedImageRef === 'string' ? resolvedImageRef : resolvedImageRef.src;
    const resolvedAlt = typeof resolvedImageRef === 'string' ? alt : (resolvedImageRef.alt ?? alt);

    return `![${resolvedAlt}](${resolvedSrc})`;
  });
};

export type ImageUploadResult = { src: string; ref?: string; alt?: string };

export const convertFromRefToImage = (
  markdown: string,
  resolveImageRef: (ref: string) => ResolvedImageRef,
  urlToRefMap?: Map<string, string>,
) => {
  const imageRegex = /!\[([^\]]*)\]\(([^)\s]+)(?:\s+"([^"]*)")?\)/g;

  return markdown.replace(imageRegex, (fullMatch, alt: string, ref: string, title: string | undefined) => {
    const resolvedImageRef = resolveImageRef(ref);

    if (resolvedImageRef === undefined || resolvedImageRef === null) {
      return fullMatch;
    }

    const resolvedSrc = typeof resolvedImageRef === 'string' ? resolvedImageRef : resolvedImageRef.src;
    const resolvedAlt = typeof resolvedImageRef === 'string' ? alt : (resolvedImageRef.alt ?? alt);
    const titlePart = title ? ` "${title}"` : '';

    urlToRefMap?.set(resolvedSrc, ref);

    return `![${resolvedAlt}](${resolvedSrc}${titlePart})`;
  });
};

/**
 *
 * @param markdown
 * @param sasToRefMap
 * @returns
 */
export const replaceImageUrlsWithRefs = (markdown: string, sasToRefMap: Map<string, string>): string =>
  markdown.replace(/!\[([^\]]*)\]\(([^)\s]+)\)/g, (match, altText: string, url: string) => {
    const ref = sasToRefMap.get(url);
    if (!ref) return match;
    return `![${altText}](${ref})`;
  });
