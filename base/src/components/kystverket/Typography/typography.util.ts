import typography from './typography.module.css';

export type TypographyPrefix = 'body' | 'accent' | 'label';

export type AllSizes = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export type TypographyColor = 'accent' | 'neutral';

export type TypographyWeight = 'regular' | 'medium' | 'semibold';

const weightSuffix: Record<TypographyWeight, string> = {
  regular: '',
  medium: '-strong',
  semibold: '-semibold',
};

type BuildTypographyProps = {
  type: TypographyPrefix;
  size?: AllSizes;
  /** @deprecated Use `weight="medium"` instead. */
  strong?: boolean;
  weight?: TypographyWeight;
  inline?: boolean;
  color?: TypographyColor;
  margin?: boolean;
  className?: string;
};

export const buildTypographyClasses = ({
  type,
  size = 'md',
  strong = false,
  weight,
  inline = false,
  className,
}: BuildTypographyProps): string => {
  const resolvedWeight = weight ?? (strong ? 'medium' : undefined);
  return [
    typography[type],
    typography[`${type}-${size}${resolvedWeight ? weightSuffix[resolvedWeight] : ''}`],
    inline ? typography.inline : '',
    className ?? '',
  ].join(' ');
};
