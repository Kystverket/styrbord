import type { ButtonHTMLAttributes, Ref } from 'react';

export type ColorScheme = 'light' | 'dark';

export type ColorSchemeToggleProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'children' | 'role' | 'type' | 'value' | 'defaultValue' | 'onChange' | 'aria-checked'
> & {
  /**
   * The selected color scheme. Set it to make the toggle controlled.
   */
  value?: ColorScheme;
  /**
   * The initial color scheme when the toggle is uncontrolled.
   * @default 'light'
   */
  defaultValue?: ColorScheme;
  /**
   * Called with the new color scheme when the toggle is clicked.
   *
   * The toggle does not change the page's color scheme by itself — apply `data-color-scheme` where your
   * application wants it.
   */
  onChange?: (value: ColorScheme) => void;
  /**
   * Accessible name of the switch. The switch is "on" when the scheme is dark.
   * @default 'Mørk modus' (translated)
   */
  'aria-label'?: string;
  ref?: Ref<HTMLButtonElement>;
};
