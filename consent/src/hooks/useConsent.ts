import type { ConsentState, ConsentUI } from '../utility/consent.types';
import { useConsentStore } from '../utility/consentContext';
import type { ConsentStore } from '../utility/consentStore';
import { useStoreValue } from './useStoreValue';

export interface UseConsentResult {
  /**
   * Sant når brukeren har samtykket til kategorien. Tar også sammensatte uttrykk, f.eks.
   * `hasConsent({ or: ['measurement', 'marketing'] })`.
   */
  hasConsent: (category: Parameters<ReturnType<ConsentStore['getState']>['has']>[0]) => boolean;

  /** Samtykkestatus per kategori. */
  consents: ConsentState;

  /** Sant inntil brukeren har tatt et valg. */
  needsDecision: boolean;

  /** Åpner innstillingsdialogen. */
  showPreferences: () => void;

  /** Lukker banner og dialog uten å lagre. */
  close: () => void;

  /** Hvilken flate som vises nå. */
  activeUI: ConsentUI;
}

/**
 * Leser og endrer samtykke.
 *
 * Dette er inngangen applikasjonskode skal bruke. Den sier ingenting om hvordan samtykket
 * lagres, så implementasjonen under kan byttes ut uten at kallstedene må skrives om.
 */
export function useConsent(): UseConsentResult {
  const { store } = useConsentStore();

  const consents = useStoreValue(store, (state) => state.consents);
  const activeUI = useStoreValue(store, (state) => state.activeUI) as ConsentUI;
  const consentInfo = useStoreValue(store, (state) => state.consentInfo);
  const isLoading = useStoreValue(store, (state) => state.isLoadingConsentInfo);

  return {
    hasConsent: (category) => store.getState().has(category),
    consents,
    needsDecision: !isLoading && consentInfo === null,
    showPreferences: () => store.getState().setActiveUI('dialog'),
    close: () => store.getState().setActiveUI('none'),
    activeUI,
  };
}
