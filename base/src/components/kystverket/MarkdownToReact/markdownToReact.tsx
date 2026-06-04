import { useEffect, useMemo, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './markdownToReact.module.css';
import { Link, Paragraph } from '~/main';
import { MaybePromise } from '~/utils/utility.types';

type ResolvedImageRefs = Record<string, ResolvedImageRef>;

export type MarkdownToReactProps = {
  markdown: string;
  /** Optional sync/async resolver that receives all refs found in markdown. */

  resolveImageRefs?: (refs?: string[]) => MaybePromise<ResolvedImageRefs>;
};

export type ResolvedImageRef = { src: string; alt?: string } | string | null | undefined;

const imageRegex = /!\[([^\]]*)\]\(([^)\s]+)(?:\s+"([^"]*)")?\)/g;

const getUniqueImageRefs = (markdown: string): string[] =>
  Array.from(new Set(Array.from(markdown.matchAll(imageRegex), ([, , src]) => src)));

const replaceResolvedImageRefs = (markdown: string, resolvedImageRefs: ResolvedImageRefs) => {
  return markdown.replace(imageRegex, (fullMatch, alt: string, src: string, title: string | undefined) => {
    const resolvedImageRef = resolvedImageRefs[src];

    if (resolvedImageRef === undefined || resolvedImageRef === null) return fullMatch;

    const resolvedSrc = typeof resolvedImageRef === 'string' ? resolvedImageRef : resolvedImageRef.src;
    const resolvedAlt = typeof resolvedImageRef === 'string' ? alt : (resolvedImageRef.alt ?? alt);
    const titlePart = title ? ` "${title}"` : '';

    return `![${resolvedAlt}](${resolvedSrc}${titlePart})`;
  });
};

// Overskrifter (h1-h6) rendres som <Paragraph> med tanke på dokumenthierarki (enn så lenge, dette må vi komme tilbake til etter hvert)
const MarkdownToReact = ({ markdown, resolveImageRefs }: MarkdownToReactProps) => {
  const normalizedMarkdown = useMemo(() => markdown.replaceAll(/\n{3,}/g, '\n\n\u00A0\n\n'), [markdown]);
  const [renderedMarkdown, setRenderedMarkdown] = useState(normalizedMarkdown);

  useEffect(() => {
    const uniqueRefs = getUniqueImageRefs(normalizedMarkdown);

    if (!resolveImageRefs || uniqueRefs.length === 0) {
      setRenderedMarkdown(normalizedMarkdown);
      return;
    }

    const resolve = async () => {
      const resolvedImageRefs = await resolveImageRefs(uniqueRefs);
      setRenderedMarkdown(replaceResolvedImageRefs(normalizedMarkdown, resolvedImageRefs));
    };
    resolve();
  }, [normalizedMarkdown, resolveImageRefs]);

  return (
    <div className={styles.markdownToReact}>
      <ReactMarkdown
        skipHtml
        components={{
          h1: ({ children }) => <Paragraph className={styles.heading1}>{children}</Paragraph>,
          h2: ({ children }) => <Paragraph className={styles.heading2}>{children}</Paragraph>,
          h3: ({ children }) => <Paragraph>{children}</Paragraph>,
          h4: ({ children }) => <Paragraph>{children}</Paragraph>,
          h5: ({ children }) => <Paragraph>{children}</Paragraph>,
          h6: ({ children }) => <Paragraph>{children}</Paragraph>,
          p: ({ children }) => <Paragraph>{children}</Paragraph>,
          li: ({ children }) => <li>{children}</li>,
          ul: ({ children }) => <ul>{children}</ul>,
          ol: ({ children }) => <ol>{children}</ol>,
          a: ({ href, children }) => (
            <Link data-color="accent" href={href}>
              {children}
            </Link>
          ),
        }}
      >
        {renderedMarkdown}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownToReact;
