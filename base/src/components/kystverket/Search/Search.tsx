import { Input } from '@digdir/designsystemet-react';
import cl from 'clsx';
import type { MouseEvent, ReactElement } from 'react';
import { Button } from '~/components/designsystemet/Button/Button';
import { useTranslation } from '~/translations';
import classes from './Search.module.css';
import type { SearchButtonProps, SearchClearProps, SearchInputProps, SearchProps } from './Search.types';

/**
 * Search field with optional clear button and submit button.
 *
 * Styrbord's own replacement for Designsystemet's `Search`, which is deprecated and will be removed in
 * their next major version. The API matches upstream, so existing usage keeps working.
 *
 * @example
 * <Search>
 *   <Search.Input aria-label="Søk" />
 *   <Search.Clear />
 *   <Search.Button />
 * </Search>
 */
function SearchRoot({ className, ...rest }: SearchProps): ReactElement {
  return <div className={cl(classes.search, className)} {...rest} />;
}

/**
 * The search field. Must be a direct child of `Search`.
 */
export function SearchInput({ type = 'search', placeholder = ' ', ...rest }: SearchInputProps): ReactElement {
  // `placeholder` defaults to a space so `:placeholder-shown` can tell an empty field from a filled one,
  // which is how the clear button knows when to show itself — for controlled and uncontrolled inputs alike.
  return <Input type={type} placeholder={placeholder} enterKeyHint="search" {...rest} />;
}

const setNativeValue = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')?.set;

/**
 * Clears the search field. Only visible while the field has a value.
 *
 * Clears just the search field and fires an `input` event, so a controlled input's `onChange` runs too.
 * Unlike a `type="reset"` button it does not reset the rest of a surrounding form.
 */
export function SearchClear({ onClick, 'aria-label': ariaLabel, className, ...rest }: SearchClearProps): ReactElement {
  const { t } = useTranslation();

  const clear = (event: MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);
    if (event.defaultPrevented) return;

    const input = event.currentTarget.parentElement?.querySelector<HTMLInputElement>(':scope > input');
    if (!input) return;

    setNativeValue?.call(input, '');
    input.dispatchEvent(new Event('input', { bubbles: true }));
    input.focus();
  };

  return (
    <button
      type="button"
      className={cl(classes.clear, className)}
      aria-label={ariaLabel ?? t('search.clear')}
      onClick={clear}
      {...rest}
    />
  );
}

/**
 * Submit button attached to the end of the search field.
 */
export function SearchButton({ variant = 'filled', children, className, ...rest }: SearchButtonProps): ReactElement {
  const { t } = useTranslation();

  return (
    <Button type="submit" variant={variant} className={cl(classes.button, className)} {...rest}>
      {children ?? t('search.button')}
    </Button>
  );
}

type SearchComponent = typeof SearchRoot & {
  Input: typeof SearchInput;
  Clear: typeof SearchClear;
  Button: typeof SearchButton;
};

export const Search = Object.assign(SearchRoot, {
  Input: SearchInput,
  Clear: SearchClear,
  Button: SearchButton,
}) as SearchComponent;
