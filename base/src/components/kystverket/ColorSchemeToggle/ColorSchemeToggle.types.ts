import type { ButtonHTMLAttributes, Ref } from 'react';

export type ColorScheme = 'light' | 'dark';

export type ColorSchemeToggleVariant = 'color' | 'mono' | 'icon';

export type ColorSchemeToggleSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

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
   * `icon` is just a solid sun or moon in `primary-base-default` inside the border, with no sky or sea. Made for
   * the small sizes (`xs`, `sm`), where the scene is too detailed to read.
   * @default 'mono'
   */
  variant?: ColorSchemeToggleVariant;
  /**
   * Diameter: `xs` ≈ 16 px, `sm` ≈ 24 px, `md` ≈ 32 px, `lg` ≈ 48 px, `xl` ≈ 64 px. Taken from the
   * `--ds-size-*` scale, so it follows the root font size.
   * @default 'md'
   */
  'data-size'?: ColorSchemeToggleSize;
  ref?: Ref<HTMLButtonElement>;
};
