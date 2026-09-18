import { createContext, useContext } from 'react';
import type { ConsentStore } from './consentStore';
import type { ConsentTranslations } from './translations';

export interface ConsentContextValue {
  store: ConsentStore;
  translations: ConsentTranslations;

  /** Falsk når ingen av tjenestene faktisk avhenger av samtykke. Da vises ikke banneret. */
  showsBanner: boolean;

  /**
   * Falsk under serverrendring og fram til første klientrender er ferdig.
   *
   * Samtykket ligger i en informasjonskapsel som bare leses i nettleseren, så serveren kan
   * ikke vite om banneret skal vises. Render vi ut fra klienttilstanden med én gang, spriker
   * markupen fra det serveren sendte, og React forkaster hele treet med en hydreringsfeil.
   * Samtykkeflatene venter derfor til etter mount.
   */
  mounted: boolean;
}

export const ConsentContext = createContext<ConsentContextValue | null>(null);

/**
 * Tilgang til hele samtykkekonteksten. Brukes av komponentene i pakken; applikasjonskode
 * klarer seg som regel med `useConsent`.
 */
export function useConsentStore(): ConsentContextValue {
  const context = useContext(ConsentContext);
  if (!context) {
    throw new Error('useConsentStore må brukes innenfor en <ConsentProvider>.');
  }
  return context;
}
