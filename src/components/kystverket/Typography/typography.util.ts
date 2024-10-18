import typography from './typography.module.css';

export type TypographyPrefix = 'display' | 'headline' | 'title' | 'body' | 'label';

export type AllSizes = 'sm' | 'md' | 'lg' | 'xl';

type BuildTypographyProps = {
  type: TypographyPrefix;
  size?: AllSizes;
  strong?: boolean;
  inline?: boolean;
  className?: string;
};

export const buildTypographyClasses = ({
  type,
  size = 'md',
  strong = false,
  inline = false,
  className,
}: BuildTypographyProps) => {
  return [
    typography[type],
    typography[`${type}-${size}${strong ? '-strong' : ''}`],
    inline ? typography.inline : '',
    className ?? '',
  ].join(' ');
};
