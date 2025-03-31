import typography from './typography.module.css';

export type TypographyPrefix = 'display' | 'headline' | 'title' | 'body' | 'label' | 'accent' | 'paragraph';

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
  color = 'neutral',
  margin = false,
  className,
}: BuildTypographyProps): string => {
  return [
    typography[type],
    typography[`${type}-${size}${strong ? '-strong' : ''}`],
    inline ? typography.inline : '',
    color === 'accent' ? typography.accentColor : '',
    margin ? typography.margin : '',
    className ?? '',
  ].join(' ');
};
