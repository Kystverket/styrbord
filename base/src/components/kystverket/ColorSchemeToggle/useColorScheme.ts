import { useEffect, useSyncExternalStore } from 'react';
import type { ColorScheme } from './ColorSchemeToggle.types';

export const COLOR_SCHEME_STORAGE_KEY = 'styrbord-color-scheme';

const DARK_QUERY = '(prefers-color-scheme: dark)';

type Preference = ColorScheme | 'system';

const listeners = new Set<() => void>();

/**
 * The last choice made in this page view (`undefined` until one is made). Lets the choice hold for
 * the page view when `localStorage` is unavailable (private mode, blocked site data).
 */
let sessionPreference: Preference | undefined;

function isColorScheme(value: unknown): value is ColorScheme {
  return value === 'light' || value === 'dark';
}

function readStored(): Preference {
  try {
    const stored = localStorage.getItem(COLOR_SCHEME_STORAGE_KEY);
    return isColorScheme(stored) ? stored : 'system';
  } catch {
    return 'system';
  }
}

function systemScheme(): ColorScheme {
  return window.matchMedia(DARK_QUERY).matches ? 'dark' : 'light';
}

/** A string, so `useSyncExternalStore` can compare snapshots by value. */
type Snapshot = `${Preference}:${ColorScheme}`;

function getSnapshot(): Snapshot {
  const preference = sessionPreference ?? readStored();
  return `${preference}:${preference === 'system' ? systemScheme() : preference}`;
}

/** The server cannot know the user's setting; the client re-renders with the real value after hydration. */
function getServerSnapshot(): Snapshot {
  return 'system:light';
}

function subscribe(onChange: () => void): () => void {
  listeners.add(onChange);

  // Follows the system setting live while the user has made no choice of their own.
  const media = window.matchMedia(DARK_QUERY);
  media.addEventListener('change', onChange);

  // Keeps other tabs in step.
  const onStorage = (event: StorageEvent) => {
    if (event.key !== COLOR_SCHEME_STORAGE_KEY) return;
    sessionPreference = isColorScheme(event.newValue) ? event.newValue : 'system';
    onChange();
  };
  window.addEventListener('storage', onStorage);

  return () => {
    listeners.delete(onChange);
    media.removeEventListener('change', onChange);
    window.removeEventListener('storage', onStorage);
  };
}

/**
 * Choosing what the system already shows clears the stored choice, so the page goes back to
 * following the system. With a two-state toggle there is otherwise no way back to the default.
 */
function setColorScheme(next: ColorScheme): void {
  sessionPreference = next === systemScheme() ? 'system' : next;
  try {
    if (sessionPreference === 'system') {
      localStorage.removeItem(COLOR_SCHEME_STORAGE_KEY);
    } else {
      localStorage.setItem(COLOR_SCHEME_STORAGE_KEY, sessionPreference);
    }
  } catch {
    // Storage unavailable: the choice lasts for this page view only.
  }
  listeners.forEach((listener) => listener());
}

/**
 * Owns the page's colour scheme. By default the page follows the system setting
 * (`prefers-color-scheme`): `<html>` gets `data-color-scheme="auto"` and the tokens switch in CSS, live.
 * A choice that differs from the system is saved in `localStorage` under `styrbord-color-scheme` and
 * set as `data-color-scheme="light|dark"`; choosing what the system shows clears it again.
 * All components using the hook share one value.
 *
 * Returns the scheme in use (resolved from the system when following it), a setter, and whether the
 * page is following the system.
 *
 * During server rendering and hydration the scheme is `light`. Render `<html data-color-scheme="auto">`
 * so system users get the right scheme before JavaScript runs. Users with a stored choice need an
 * inline script in `<head>` that applies it before first paint.
 *
 * @example
 * const [colorScheme, setColorScheme] = useColorScheme();
 * <ColorSchemeToggle colorScheme={colorScheme} onColorSchemeChange={setColorScheme} />
 */
export function useColorScheme(): readonly [ColorScheme, (next: ColorScheme) => void, boolean] {
  const snapshot = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [preference, colorScheme] = snapshot.split(':') as [Preference, ColorScheme];
  const followsSystem = preference === 'system';

  useEffect(() => {
    document.documentElement.setAttribute('data-color-scheme', followsSystem ? 'auto' : colorScheme);
  }, [followsSystem, colorScheme]);

  return [colorScheme, setColorScheme, followsSystem] as const;
}
