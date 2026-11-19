import cl from 'clsx';
import { useId, useState, type MouseEvent, type ReactElement } from 'react';
import { useTranslation } from '~/translations';
import classes from './ColorSchemeToggle.module.css';
import type { ColorScheme, ColorSchemeToggleProps } from './ColorSchemeToggle.types';

/**
 * Switch between light and dark color scheme.
 *
 * The thumb is the sun or the moon, and the open side of the track shows a lighthouse that slides in and
 * out through the nearest edge as the thumb moves. Each half of the illustration pins its own
 * `data-color-scheme`, so the day scene stays light and the night scene stays dark whatever scheme the
 * page around it is in.
 *
 * The toggle only reports the choice — the application decides where to apply `data-color-scheme`.
 *
 * @example
 * const [scheme, setScheme] = useState<ColorScheme>('light');
 * <ColorSchemeToggle value={scheme} onChange={setScheme} />
 */
export function ColorSchemeToggle({
  value,
  defaultValue = 'light',
  onChange,
  onClick,
  className,
  'aria-label': ariaLabel,
  ...rest
}: ColorSchemeToggleProps): ReactElement {
  const { t } = useTranslation();
  const [internalValue, setInternalValue] = useState<ColorScheme>(defaultValue);
  const scheme = value ?? internalValue;
  const dark = scheme === 'dark';

  const toggle = (event: MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);
    if (event.defaultPrevented) return;

    const next: ColorScheme = dark ? 'light' : 'dark';
    if (value === undefined) setInternalValue(next);
    onChange?.(next);
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={dark}
      aria-label={ariaLabel ?? t('colorSchemeToggle.label')}
      className={cl(classes.toggle, className)}
      onClick={toggle}
      {...rest}
    >
      <DaySky />
      <NightSky />
      <Lighthouse variant="day" />
      <Lighthouse variant="night" />
      <span className={classes.thumb} aria-hidden>
        <Sun />
        <Moon />
      </span>
    </button>
  );
}

/** `useId` output contains characters that are awkward inside `url(#…)`, so keep only the safe ones. */
function useSvgId(): string {
  return `styrbord-cst-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
}

function DaySky(): ReactElement {
  const id = useSvgId();
  return (
    <svg className={cl(classes.sky, classes.daySky)} data-color-scheme="light" viewBox="0 0 64 32" aria-hidden>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" className={classes.daySkyTop} />
          <stop offset="1" className={classes.daySkyBottom} />
        </linearGradient>
      </defs>
      <rect width="64" height="32" fill={`url(#${id})`} />
      <path
        className={classes.cloud}
        d="M50 9.5a2.2 2.2 0 0 1 2.6-2.1 3 3 0 0 1 5.6.9 1.6 1.6 0 0 1 .3 3.2H51a1 1 0 0 1-1-2"
      />
      <path
        className={classes.cloud}
        d="M36 6a1.5 1.5 0 0 1 1.9-1.4 2 2 0 0 1 3.7.6 1.1 1.1 0 0 1 .2 2.2h-5a.7.7 0 0 1-.8-1.4"
      />
      <path className={classes.seaBack} d="M0 25q4-1.6 8 0t8 0 8 0 8 0 8 0 8 0 8 0 8 0V32H0Z" />
      <path className={classes.seaFront} d="M0 27.5q4 1.4 8 0t8 0 8 0 8 0 8 0 8 0 8 0 8 0V32H0Z" />
    </svg>
  );
}

function NightSky(): ReactElement {
  const id = useSvgId();
  return (
    <svg className={cl(classes.sky, classes.nightSky)} data-color-scheme="dark" viewBox="0 0 64 32" aria-hidden>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" className={classes.nightSkyTop} />
          <stop offset="1" className={classes.nightSkyBottom} />
        </linearGradient>
      </defs>
      <rect width="64" height="32" fill={`url(#${id})`} />
      <g className={classes.stars}>
        <circle cx="5" cy="6" r="0.7" />
        <circle cx="13" cy="3.5" r="0.5" />
        <circle cx="26" cy="5" r="0.8" />
        <circle cx="29" cy="13" r="0.5" />
        <circle cx="4" cy="15" r="0.5" />
        <circle cx="36" cy="4" r="0.6" />
      </g>
      <path className={classes.seaBack} d="M0 25q4-1.6 8 0t8 0 8 0 8 0 8 0 8 0 8 0 8 0V32H0Z" />
      <path className={classes.seaFront} d="M0 27.5q4 1.4 8 0t8 0 8 0 8 0 8 0 8 0 8 0 8 0V32H0Z" />
    </svg>
  );
}

function Lighthouse({ variant }: { variant: 'day' | 'night' }): ReactElement {
  const id = useSvgId();
  return (
    <span
      className={cl(classes.lighthouse, variant === 'day' ? classes.lighthouseDay : classes.lighthouseNight)}
      data-color-scheme={variant === 'day' ? 'light' : 'dark'}
      aria-hidden
    >
      <svg viewBox="0 0 32 32">
        {variant === 'night' && (
          <>
            <defs>
              <linearGradient id={id} gradientUnits="userSpaceOnUse" x1="16" y1="0" x2="44" y2="0">
                <stop offset="0" className={classes.beamStart} />
                <stop offset="1" className={classes.beamEnd} />
              </linearGradient>
            </defs>
            <path className={classes.beam} fill={`url(#${id})`} d="M16 9.2 48 3.5v11.4Z" />
          </>
        )}
        <path className={classes.rock} d="M7 32q1-6 5.5-6.5 3.5-1 7 0Q24 26 25 32Z" />
        <path className={classes.towerLight} d="M13.6 12h4.8l1.6 14h-8Z" />
        <path className={classes.towerStripe} d="M13.25 15h5.5l.4 3.5h-6.3ZM12.6 21h6.8l.4 3.5h-7.6Z" />
        <rect className={classes.gallery} x="12.4" y="10.8" width="7.2" height="1.4" rx="0.4" />
        <rect className={classes.lantern} x="14.2" y="7.4" width="3.6" height="3.4" />
        <path className={classes.roof} d="M13.4 7.6 16 4.6l2.6 3Z" />
      </svg>
    </span>
  );
}

function Sun(): ReactElement {
  return (
    <svg className={classes.sun} data-color-scheme="light" viewBox="0 0 24 24">
      <g className={classes.rays}>
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <rect key={angle} x="11" y="1.5" width="2" height="3.5" rx="1" transform={`rotate(${angle} 12 12)`} />
        ))}
      </g>
      <circle className={classes.sunDisc} cx="12" cy="12" r="5.6" />
    </svg>
  );
}

function Moon(): ReactElement {
  const id = useSvgId();
  return (
    <svg className={classes.moon} data-color-scheme="dark" viewBox="0 0 24 24">
      <defs>
        <mask id={id}>
          <rect width="24" height="24" fill="white" />
          <circle cx="17" cy="7.5" r="7.2" fill="black" />
        </mask>
      </defs>
      <g mask={`url(#${id})`}>
        <circle className={classes.moonDisc} cx="12" cy="12" r="9" />
        <circle className={classes.crater} cx="7.5" cy="13.5" r="1.6" />
        <circle className={classes.crater} cx="11.5" cy="18" r="1.1" />
        <circle className={classes.crater} cx="5.6" cy="9" r="0.8" />
      </g>
    </svg>
  );
}
