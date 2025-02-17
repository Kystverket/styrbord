import { ReactNode } from 'react';
import { buildTypographyClasses } from './typography.util';
import style from './typography.module.css';

export interface TypographyProps {
  className?: string;
  children?: ReactNode | undefined;
}

export type HeaderTypographyProps = TypographyProps & {
  size?: 'sm' | 'md' | 'lg';
  level?: '1' | '2' | '3' | '4' | '5' | '6';
};

export type BodyTypographyProps = TypographyProps & {
  size?: 'sm' | 'md' | 'lg';
  strong?: boolean;
  inline?: boolean;
};

export type LabelTypographyProps = TypographyProps & {
  size: 'sm' | 'md' | 'lg' | 'xl';
  strong?: boolean;
  inline?: boolean;
};

export type AccentTypographyProps = TypographyProps & {
  size: 'sm' | 'md';
  strong?: boolean;
};

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement>;

const Heading = ({ level = '1', children, ...props }: HeadingProps & HeaderTypographyProps) => {
  const HeaderTag = `h${level}`;
  return <HeaderTag {...props}>{children}</HeaderTag>;
};

export const Display = ({ level, size, className, children }: HeaderTypographyProps) => {
  return (
    <Heading level={level} className={buildTypographyClasses({ type: 'display', size, className })}>
      {children}
    </Heading>
  );
};

export const Headline = ({ level, size, className, children }: HeaderTypographyProps) => {
  return (
    <Heading level={level} className={buildTypographyClasses({ type: 'headline', size, className })}>
      {children}
    </Heading>
  );
};

export const Title = ({ level, size, className, children }: HeaderTypographyProps) => {
  return (
    <Heading level={level} className={buildTypographyClasses({ type: 'title', size, className })}>
      {children}
    </Heading>
  );
};

export const Body = ({ inline, strong, size, className, children }: BodyTypographyProps) => {
  const classes = buildTypographyClasses({
    type: 'body',
    size,
    strong,
    inline,
    className,
  });

  if (inline) {
    return <span className={`${classes}`}>{children}</span>;
  }
  return <p className={classes}>{children}</p>;
};

export const Label = ({ strong, size, className, children, inline = false }: LabelTypographyProps) => {
  let classes = buildTypographyClasses({
    type: 'label',
    size,
    strong,
    className,
  });

  if (inline) {
    classes += ` ${style.inline}`;
  }

  return <span className={classes}>{children}</span>;
};

export const Accent = ({ strong, size, className, children }: AccentTypographyProps) => {
  const classes = buildTypographyClasses({
    type: 'accent',
    size,
    strong,
    className,
  });

  return <span className={classes}>{children}</span>;
};
