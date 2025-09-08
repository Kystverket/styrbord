import { spacingKeys } from './box.constants';

export type Spacing = 0 | 2 | 4 | 6 | 8 | 12 | 16 | 20 | 24 | 28 | 32 | 36 | 40 | 44 | 48 | 64 | 80 | 96 | 112 | 128;

export type SpacingKey = (typeof spacingKeys)[number];

export type SpacingProps = {
  [K in SpacingKey]?: Spacing;
};

export type BorderRadiusProps = {
  radius?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
};

export type BorderWidthProps = {
  border?: 'sm' | 'md' | 'lg';
};

export const boxBackgroundColors = [
  'primary',
  'neutral',
  'danger',
  'success',
  'warning',
  'info',
  'navy',
  'white',
] as const;
export type BoxBackgroundColor = (typeof boxBackgroundColors)[number];

export const boxBackgroundVariants = ['default', 'tinted', 'hover', 'active'] as const;
export type BoxBackgroundVariant = (typeof boxBackgroundVariants)[number];

export type BoxStyleProps = {
  color?: `${BoxBackgroundColor}` | `${BoxBackgroundColor}/${BoxBackgroundVariant}`;
};
