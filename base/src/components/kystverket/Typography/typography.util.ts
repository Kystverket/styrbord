import typography from './typography.module.css';

export type TypographyPrefix = 'body' | 'accent' | 'label';

export type AllSizes = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export type TypographyColor = 'accent' | 'neutral';

export type TypographyFontWeight = 'regular' | 'medium' | 'semibold';

const fontWeightSuffix: Record<TypographyFontWeight, string> = {
  regular: '',
  medium: '-strong',
  semibold: '-semibold',
};

type BuildTypographyProps = {
  type: TypographyPrefix;
  size?: AllSizes;
  /** @deprecated Use `fontWeight="medium"` instead. */
  strong?: boolean;
  fontWeight?: TypographyFontWeight;
  inline?: boolean;
  color?: TypographyColor;
  margin?: boolean;
  className?: string;
};

export const buildTypographyClasses = ({
  type,
  size = 'md',
  strong = false,
  fontWeight,
  inline = false,
  className,
}: BuildTypographyProps): string => {
  const resolvedWeight = fontWeight ?? (strong ? 'medium' : undefined);
  return [
    typography[type],
    typography[`${type}-${size}${resolvedWeight ? fontWeightSuffix[resolvedWeight] : ''}`],
    inline ? typography.inline : '',
    className ?? '',
  ].join(' ');
};
