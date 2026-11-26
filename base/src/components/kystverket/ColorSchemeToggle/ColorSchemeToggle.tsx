import { colors } from '@kystverket/styrbord-tokens/colors';
import cl from 'clsx';
import type { CSSProperties, MouseEvent, ReactElement } from 'react';
import { useTranslation } from '~/translations';
import classes from './ColorSchemeToggle.module.css';
import type { ColorSchemeToggleProps } from './ColorSchemeToggle.types';

/**
 * The colour variant's scene is fixed: palette tokens change value with the page's colour scheme,
 * and the sky and sea must not. So the values are taken from the light/dark token sets directly and
 * handed to the CSS as custom properties; the CSS picks the pair that matches `data-mode`.
 */
const sceneColors = {
  '--kyv-scheme-toggle-border-light': colors.light.primary.baseDefault,
  '--kyv-scheme-toggle-border-dark': colors.dark.primary.baseDefault,
  '--kyv-scheme-toggle-sky-light': colors.light.himmel.baseDefault,
  '--kyv-scheme-toggle-sky-dark': colors.dark.dyphav.backgroundDefault,
  '--kyv-scheme-toggle-sea-light': colors.light.hav.baseDefault,
  '--kyv-scheme-toggle-sea-dark': colors.dark.dyphav.surfaceDefault,
  '--kyv-scheme-toggle-wave-light': colors.light.himmel.baseDefault,
  '--kyv-scheme-toggle-wave-dark': colors.dark.dyphav.borderSubtle,
  '--kyv-scheme-toggle-sun-fill': colors.light.sol.brand,
  '--kyv-scheme-toggle-sun-stroke': colors.light.dyphav.baseDefault,
  '--kyv-scheme-toggle-night': colors.dark.sol.textDefault,
} as CSSProperties;

/**
 * Round button (32 px by default, see `data-size`) that switches between light and dark colour scheme. Shows a sun over the sea in
 * light mode; in dark mode the sun sinks and a crescent moon and stars appear.
 *
 * Controlled: pair it with `useColorScheme`, which stores the choice and sets `data-color-scheme`
 * on `<html>`. The accessible name describes the action ("Bytt til mørk modus") and changes with
 * the state, so the button has no `aria-pressed`.
 *
 * @example
 * const [colorScheme, setColorScheme] = useColorScheme();
 * <ColorSchemeToggle colorScheme={colorScheme} onColorSchemeChange={setColorScheme} />
 */
export function ColorSchemeToggle({
  colorScheme,
  onColorSchemeChange,
  variant = 'mono',
  'data-size': size = 'md',
  className,
  style,
  onClick,
  ...rest
}: ColorSchemeToggleProps): ReactElement {
  const { t } = useTranslation();
  const label = t(colorScheme === 'dark' ? 'colorSchemeToggle.toLight' : 'colorSchemeToggle.toDark');

  const toggle = (event: MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);
    if (event.defaultPrevented) return;
    onColorSchemeChange(colorScheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      {...rest}
      type="button"
      className={cl(classes.toggle, className)}
      style={{ ...sceneColors, ...style }}
      data-variant={variant}
      data-size={size}
      data-mode={colorScheme}
      aria-label={label}
      title={label}
      onClick={toggle}
    >
      {/* Draw order matters: the sea is drawn after the sun and moon so it covers them. The icon variant hides all but the sun and moon. */}
      <svg className={classes.svg} viewBox="0 0 48 48" aria-hidden="true" focusable="false">
        <rect className={classes.sky} x="0" y="0" width="48" height="48" />
        <g className={classes.stars}>
          <circle cx="11" cy="14" r="1.1" />
          <circle cx="37" cy="10" r="1" />
          <circle cx="38" cy="22" r="0.9" />
        </g>
        {/* The icon variant scales and centres this group; the others leave it as drawn. */}
        <g className={classes.celestial}>
          <g className={classes.sun}>
            <circle className={classes.sunDisc} cx="24" cy="16" r="5.5" />
            <path
              className={classes.sunRays}
              d="M24 5v2.5M24 24.5v2.5M13 16h2.5M32.5 16h2.5M16.2 8.2l1.8 1.8M30 22l1.8 1.8M16.2 23.8l1.8-1.8M30 10l1.8-1.8"
            />
            {/* The icon variant shows a lit bulb in place of the sun; it sinks the same way. */}
            <g className={classes.bulb}>
              <path d="M24 6a7 7 0 0 0-4.2 12.6c.8.6 1.2 1.5 1.2 2.4v.5h6V21c0-.9.4-1.8 1.2-2.4A7 7 0 0 0 24 6z" />
              <rect x="21" y="23" width="6" height="3" rx="1.2" />
            </g>
          </g>
          <g className={classes.moon}>
            <path
              className={classes.moonShape}
              transform="translate(15 6) scale(0.75)"
              d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"
            />
          </g>
        </g>
        <rect className={classes.sea} x="0" y="29" width="48" height="19" />
        <path className={classes.horizon} d="M0 29h48" />
        <path className={classes.wave} d="M8 35q3-2 6 0t6 0t6 0t6 0t6 0" />
        <path className={classes.wave} d="M14 41q3-2 6 0t6 0t6 0" />
      </svg>
    </button>
  );
}
