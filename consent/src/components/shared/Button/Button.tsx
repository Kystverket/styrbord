import type { ButtonHTMLAttributes, ReactElement } from 'react';
import styles from './Button.module.css';

/**
 * Knappevariantene samtykkeflatene bruker. Navnene er de samme som i `@kystverket/styrbord`,
 * ikke Designsystemets `primary`/`secondary`/`tertiary` — se `ButtonProps.variant` der for
 * hvorfor Styrbord navngir formen framfor viktighetsnivået.
 */
export type ConsentButtonVariant = 'filled' | 'outline' | 'ghost';

export interface ConsentButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ConsentButtonVariant;
}

/**
 * Knappen samtykkeflatene bruker.
 *
 * Pakken har med vilje ingen avhengighet til `@kystverket/styrbord`, slik at applikasjoner som
 * ikke kan ta inn hele designsystemet likevel kan vise et samtykkebanner. Prisen er at de få
 * kontrollene vi trenger må finnes her — bygget på de samme designtokenene, så resultatet ser
 * likt ut ved siden av en Styrbord-app.
 *
 * Forutsetter at en forelder setter `data-color`, slik Designsystemet gjør: det er den som gir
 * `--ds-color-base-*` en verdi. Samtykkeflatene setter den selv på rotelementet sitt.
 */
export function Button({
  variant = 'filled',
  className,
  type = 'button',
  ...rest
}: Readonly<ConsentButtonProps>): ReactElement {
  return (
    <button {...rest} type={type} className={[styles.button, styles[variant], className].filter(Boolean).join(' ')} />
  );
}
