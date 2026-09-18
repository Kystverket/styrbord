import { useRef, useSyncExternalStore } from 'react';
import type { ConsentStore } from '../utility/consentStore';

/**
 * Abonnerer på en utledet verdi fra samtykkelageret.
 *
 * `getServerSnapshot` må returnere den samme verdien hver gang den kalles — React bruker den
 * både ved serverrendring og under hydrering, og en verdi som endrer seg gir enten en
 * hydreringsfeil eller en uendelig renderløkke. Derfor låses den første verdien i et ref.
 * Selve samtykkeflatene venter uansett på `mounted`, så verdien påvirker ikke markupen.
 */
export function useStoreValue<T>(store: ConsentStore, selector: (state: ReturnType<ConsentStore['getState']>) => T): T {
  const serverSnapshot = useRef<{ value: T } | null>(null);

  return useSyncExternalStore(
    store.subscribe,
    () => selector(store.getState()),
    () => {
      serverSnapshot.current ??= { value: selector(store.getState()) };
      return serverSnapshot.current.value;
    },
  );
}
