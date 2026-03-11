import ReactMarkdown from 'react-markdown';
import classes from './markdownToReact.module.css';
import { Heading, Link, Paragraph } from '~/main';
export type MarkDownToReactProps = {
  markdown: string;
};

const MarkDownToReact = ({ markdown }: MarkDownToReactProps) => {
  return (
    <div className={classes.markdownToReact}>
      <ReactMarkdown
        components={{
          h1: ({ children }) => (
            <Heading level={1} data-size="sm">
              {children}
            </Heading>
          ),
          h2: ({ children }) => (
            <Heading level={2} data-size="xs">
              {children}
            </Heading>
          ),
          h3: ({ children }) => (
            <Heading level={3} data-size="2xs">
              {children}
            </Heading>
          ),
          li: ({ children }) => <li className={classes.li}>{children}</li>,
          ul: ({ children }) => <ul className={classes.ul}>{children}</ul>,
          ol: ({ children }) => <ol className={classes.ol}>{children}</ol>,
          p: ({ children }) => <Paragraph>{children}</Paragraph>,
          a: ({ href, children }) => (
            <Link data-color="accent" href={href}>
              {children}
            </Link>
          ),
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
};
export default MarkDownToReact;
