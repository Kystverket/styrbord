import type { HTMLAttributes } from 'react';
import type { DataColor } from '~/main';
import type { ScreenSize } from '~/utils/types';

/** Steps of the Designsystemet size scale — `4` or `'4'` resolves to `var(--ds-size-4)`. */
export const surfaceSizes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 22, 26, 30] as const;
type SurfaceSizeStep = (typeof surfaceSizes)[number];
export type SurfaceSize = SurfaceSizeStep | `${SurfaceSizeStep}`;

export const surfaceSpacingKeys = [
  'p',
  'px',
  'py',
  'pt',
  'pb',
  'pl',
  'pr',
  'm',
  'mx',
  'my',
  'mt',
  'mb',
  'ml',
  'mr',
] as const;
export type SurfaceSpacingKey = (typeof surfaceSpacingKeys)[number];

export type SurfaceSpacingProps = {
  [K in SurfaceSpacingKey]?: SurfaceSize;
};

export const surfaceColorVariants = ['subtle', 'tinted', 'base'] as const;
export type SurfaceColorVariant = (typeof surfaceColorVariants)[number];

export const surfaceBorderStyles = ['none', 'solid', 'dashed', 'dotted', 'double'] as const;
export type SurfaceBorderStyle = (typeof surfaceBorderStyles)[number];

export type SurfaceWidth = 'auto' | 'fit' | 'full' | 'container' | 'form' | 'form-sidebar';

export type SurfaceProps = Omit<HTMLAttributes<HTMLDivElement>, 'color'> &
  SurfaceSpacingProps & {
    /** Lay children out in a row. A screen size makes it a row from that breakpoint and up. */
    horizontal?: boolean | ScreenSize;
    gap?: SurfaceSize;
    align?: 'normal' | 'start' | 'center' | 'end' | 'stretch';
    justify?: 'start' | 'center' | 'end' | 'between' | 'stretch';
    wrap?: boolean | 'reverse';
    grow?: boolean | number;
    shrink?: boolean | number;
    basis?: 'auto' | SurfaceSize;
    width?: SurfaceWidth;
    show?: ScreenSize;
    hide?: ScreenSize;
    container?: 'size' | 'inline-size';
    /** Gives the surface a background, text and border colour from this family. */
    'data-color'?: DataColor;
    /**
     * `subtle` = `background-tinted`, `tinted` = `surface-tinted`, `base` = `base-default` with contrast text.
     * Only has an effect together with `data-color`.
     */
    'data-color-variant'?: SurfaceColorVariant;
    'data-size'?: '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    'border-style'?: SurfaceBorderStyle;
    radius?: 'none' | 'default' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  };
