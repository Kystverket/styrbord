import { useEffect, useMemo, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './markdownToReact.module.css';
import { Link, Paragraph } from '~/main';
import { convertFromRefToImage } from '~/components/kystverket/RichTextArea/utils/ImageRefUtils';
import { useFileRetrieverContext } from '~/components/kystverket/FileUploader/FileRetriever.context';

export type MarkdownToReactProps = {
  markdown: string;
};

// Overskrifter (h1-h6) rendres som <Paragraph> med tanke på dokumenthierarki (enn så lenge, dette må vi komme tilbake til etter hvert)
const MarkdownToReact = ({ markdown }: MarkdownToReactProps) => {
  const { deriveFileInfosFromStorageIds } = useFileRetrieverContext();

  const normalizedMarkdown = useMemo(() => markdown.replaceAll(/\n{3,}/g, '\n\n\u00A0\n\n'), [markdown]);
  const [renderedMarkdown, setRenderedMarkdown] = useState(normalizedMarkdown);

  useEffect(() => {
    let isCancelled = false;

    const resolve = async () => {
      try {
        const resolvedMarkdown = await convertFromRefToImage(normalizedMarkdown, deriveFileInfosFromStorageIds);

        if (isCancelled) {
          return;
        }

        setRenderedMarkdown(resolvedMarkdown);
      } catch {
        if (isCancelled) {
          return;
        }

        setRenderedMarkdown(normalizedMarkdown);
      }
    };

    void resolve();

    return () => {
      isCancelled = true;
    };
  }, [normalizedMarkdown, deriveFileInfosFromStorageIds]);

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
