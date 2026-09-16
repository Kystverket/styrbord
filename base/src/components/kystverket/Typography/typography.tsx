import { ReactNode } from 'react';
import { buildTypographyClasses, TypographyWeight } from './typography.util';
import style from './typography.module.css';
import { ParagraphProps } from '~/main';

export interface TypographyProps {
  className?: string;
  children?: ReactNode | undefined;
}

export type BodyTypographyProps = ParagraphProps;

export type AccentTypographyProps = TypographyProps & {
  size?: 'sm' | 'md';
  /** @deprecated Use `weight="medium"` instead. */
  strong?: boolean;
  weight?: TypographyWeight;
};

export type LabelTypographyProps = TypographyProps & {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** @deprecated Use `weight="medium"` instead. */
  strong?: boolean;
  weight?: TypographyWeight;
  inline?: boolean;
};

export const Accent = ({ strong, weight, size = 'md', className, children }: AccentTypographyProps) => {
  const classes = buildTypographyClasses({
    type: 'accent',
    size,
    strong,
    weight,
    className,
  });

  return <span className={classes}>{children}</span>;
};

const Label = ({ strong, weight, size, className, children, inline = false }: LabelTypographyProps) => {
  let classes = buildTypographyClasses({
    type: 'label',
    size,
    strong,
    weight,
    className,
  });

  if (inline) {
    classes += ` ${style.inline}`;
  }

  return <span className={classes}>{children}</span>;
};

export const Typography = {
  Accent,
  Label,
};
