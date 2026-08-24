/** Replaces Designsystemets useMediaQuery as it's deprecated https://designsystemet.no/en/components/changelog#117 */

import { useCallback, useSyncExternalStore } from 'react';

/** Below this, treat the viewport as phone-sized (40rem = 640px at the default 16px root font size). */
export const PHONE_SIZE_BREAKPOINT = '40rem';
/** Below this, treat the viewport as tablet-sized (48rem = 768px at the default 16px root font size). */
export const TABLET_SIZE_BREAKPOINT = '48rem';
/**
 * Lytter på en CSS media query og returnerer om den matcher.
 * Bruker useSyncExternalStore slik at React holder seg synkronisert med
 * nettleserens matchMedia uten ekstra rendering.
 *
 * @example
 * const isWide = useMediaQuery('(min-width: 1200px)');
 */
export function useMediaQuery(query: string): boolean {
  const subscribe = useCallback(
    (onChange: () => void) => {
      if (typeof globalThis.matchMedia !== 'function') {
        return () => {};
      }

      const mediaQueryList = globalThis.matchMedia(query);
      mediaQueryList.addEventListener('change', onChange);
      return () => {
        mediaQueryList.removeEventListener('change', onChange);
      };
    },
    [query],
  );

  const getSnapshot = () => {
    if (typeof globalThis.matchMedia !== 'function') {
      return false;
    }
    return globalThis.matchMedia(query).matches;
  };

  const getServerSnapshot = () => false;

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
