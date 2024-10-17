import { ReactNode } from 'react';
import { typographyClasses } from './typography.util';

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
};

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement>;

const Heading = ({ level, children, ...props }: HeadingProps & HeaderTypographyProps) => {
  switch (level) {
    case '1':
      return <h1 {...props}>{children}</h1>;
    case '2':
      return <h2 {...props}>{children}</h2>;
    case '3':
      return <h3 {...props}>{children}</h3>;
    case '4':
      return <h4 {...props}>{children}</h4>;
    case '5':
      return <h5 {...props}>{children}</h5>;
    case '6':
      return <h6 {...props}>{children}</h6>;
    default:
      return <h1 {...props}>{children}</h1>;
  }
};

export const Display = (props: HeaderTypographyProps) => {
  return (
    <Heading level={props.level} className={typographyClasses('display', props.size, false, props.className)}>
      {props.children}
    </Heading>
  );
};

export const Headline = (props: HeaderTypographyProps) => {
  return (
    <Heading level={props.level} className={typographyClasses('headline', props.size, false, props.className)}>
      {props.children}
    </Heading>
  );
};

export const Title = (props: HeaderTypographyProps) => {
  return (
    <Heading level={props.level} className={typographyClasses('title', props.size, false, props.className)}>
      {props.children}
    </Heading>
  );
};

export const Body = (props: BodyTypographyProps) => {
  const classes = typographyClasses('body', props.size, props.strong ?? false, props.className);
  if (props.inline) {
    return <span className={classes}>{props.children}</span>;
  }
  return <p className={classes}>{props.children}</p>;
};

export const Label = (props: LabelTypographyProps) => {
  const classes = typographyClasses('label', props.size, props.strong ?? false, props.className);
  return <span className={classes}>{props.children}</span>;
};
