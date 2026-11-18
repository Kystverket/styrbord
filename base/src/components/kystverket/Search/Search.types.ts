import type { HTMLAttributes, InputHTMLAttributes, Ref } from 'react';
import type { ButtonProps } from '~/components/designsystemet/Button/Button';

export type SearchProps = HTMLAttributes<HTMLDivElement> & {
  ref?: Ref<HTMLDivElement>;
};

export type SearchInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> & {
  /**
   * `search` shows the magnifying glass, `text` hides it.
   * @default 'search'
   */
  type?: 'search' | 'text';
  ref?: Ref<HTMLInputElement>;
};

export type SearchClearProps = Omit<HTMLAttributes<HTMLButtonElement>, 'children'> & {
  /**
   * Accessible name of the clear button.
   * @default 'Fjern tekst' (translated)
   */
  'aria-label'?: string;
  ref?: Ref<HTMLButtonElement>;
};

export type SearchButtonProps = Omit<ButtonProps, 'type'> & {
  /**
   * @default 'filled'
   */
  variant?: ButtonProps['variant'];
};
