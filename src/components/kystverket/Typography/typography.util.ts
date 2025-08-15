import typography from './typography.module.css';

export type TypographyPrefix = 'body' | 'accent';

export type AllSizes = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export type TypographyColor = 'accent' | 'neutral';

type BuildTypographyProps = {
  type: TypographyPrefix;
  size?: AllSizes;
  strong?: boolean;
  inline?: boolean;
  color?: TypographyColor;
  margin?: boolean;
  className?: string;
};

export const buildTypographyClasses = ({
  type,
  size = 'md',
  strong = false,
  inline = false,
  className,
}: BuildTypographyProps): string => {
  return [
    typography[type],
    typography[`${type}-${size}${strong ? '-strong' : ''}`],
    inline ? typography.inline : '',
    className ?? '',
  ].join(' ');
};
