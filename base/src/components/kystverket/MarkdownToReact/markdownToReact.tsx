import ReactMarkdown from 'react-markdown';
import styles from './markdownToReact.module.css';
import { Link, Paragraph } from '~/main';
export type MarkdownToReactProps = {
  markdown: string;
};

// Overskrifter (h1-h6) rendres som <Paragraph> med tanke på dokumenthierarki (enn så lenge, dette må vi komme tilbake til etter hvert)
const MarkdownToReact = ({ markdown }: MarkdownToReactProps) => {
  const renderedMarkdown = markdown.replaceAll(/\n{2}/g, '\n\n&nbsp;\n\n'); // Fjern ekstra linjeskift for å unngå unødvendige <p> elementer

  return (
    <div className={styles.markdownToReact}>
      <ReactMarkdown
        // Hold HTML deaktivert siden markdown kan komme fra ukontrollerte kilder.
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
