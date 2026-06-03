type ResolvedImageRef = { src: string; alt?: string } | string | null | undefined;

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
