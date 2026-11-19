import type { ButtonHTMLAttributes, Ref } from 'react';

export type ColorScheme = 'light' | 'dark';

export type ColorSchemeToggleVariant = 'color' | 'mono';

export type ColorSchemeToggleProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'type' | 'children' | 'onChange' | 'aria-label' | 'title'
> & {
  /** The colour scheme currently in use. The button shows a sun for `light` and a moon for `dark`. */
  colorScheme: ColorScheme;
  /** Called with the opposite scheme when the button is clicked. Not called if `onClick` prevents default. */
  onColorSchemeChange: (next: ColorScheme) => void;
  /**
   * `color` draws sky, sea and a yellow sun. `mono` is a single-colour line icon in
   * `primary-base-default` on `primary-surface-default`, and follows the page's colour scheme.
   * @default 'color'
   */
  variant?: ColorSchemeToggleVariant;
  ref?: Ref<HTMLButtonElement>;
};
