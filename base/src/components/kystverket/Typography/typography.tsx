import { ReactNode } from 'react';
import { buildTypographyClasses } from './typography.util';
import style from './typography.module.css';

export interface TypographyProps {
  className?: string;
  children?: ReactNode | undefined;
}

export type BodyTypographyProps = TypographyProps & {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  strong?: boolean;
  inline?: boolean;
};

export type AccentTypographyProps = TypographyProps & {
  size?: 'sm' | 'md';
  strong?: boolean;
};

export type LabelTypographyProps = TypographyProps & {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  strong?: boolean;
  inline?: boolean;
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

export const Accent = ({ strong, size = 'md', className, children }: AccentTypographyProps) => {
  const classes = buildTypographyClasses({
    type: 'accent',
    size,
    strong,
    className,
  });

  return <span className={classes}>{children}</span>;
};

const Label = ({ strong, size, className, children, inline = false }: LabelTypographyProps) => {
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

export const Typography = {
  Body,
  Accent,
  Label,
};
