'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { ConsentContext, type ConsentContextValue } from '../../utility/consentContext';
import { createConsentStore, hasGatedServices, type ConsentStore } from '../../utility/consentStore';
import { getConsentTranslations, type ConsentTranslations } from '../../utility/translations';
import type { ConsentProviderProps } from './ConsentProvider.types';

function mergeTranslations(base: ConsentTranslations, overrides?: Partial<ConsentTranslations>): ConsentTranslations {
  if (!overrides) {
    return base;
  }

  return {
    banner: { ...base.banner, ...overrides.banner },
    dialog: { ...base.dialog, ...overrides.dialog },
    durations: { ...base.durations, ...overrides.durations },
    categories: { ...base.categories, ...overrides.categories },
    manageLink: overrides.manageLink ?? base.manageLink,
  };
}

/**
 * Setter opp samtykkelageret og gjør det tilgjengelig for komponentene under.
 *
 * Legg `<CookieConsent />` inni for å få banner, dialog og innstillingsknapp, eller bygg ditt
 * eget grensesnitt med `useConsent`.
 */
export function ConsentProvider({
  children,
  language,
  translations: translationOverrides,
  ...config
}: Readonly<ConsentProviderProps>) {
  // Lageret skal opprettes én gang. Et ref framfor useState gjør det tydelig at dette ikke er
  // tilstand React skal følge med på — endringer leses via useSyncExternalStore.
  const storeRef = useRef<ConsentStore | null>(null);
  storeRef.current ??= createConsentStore(config);
  const store = storeRef.current;

  const { services } = config;

  // Tjenestelista bygges typisk på nytt ved hver render fordi kallstedet lager den inline.
  // Å sammenligne på id-ene holder avledede verdier stabile uten at kallstedet må memoisere.
  const serviceIds = services.map((service) => service.id).join(',');

  // Tjenestene registreres når lageret opprettes, og skal ikke registreres på nytt her:
  // c15t sin `setScripts` legger til i stedet for å erstatte (`[...state.scripts, ...scripts]`),
  // til tross for navnet, så et ekstra kall ville gitt hver tjeneste to ganger.

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const value = useMemo<ConsentContextValue>(
    () => ({
      store,
      translations: mergeTranslations(getConsentTranslations(language), translationOverrides),
      showsBanner: hasGatedServices(services),
      mounted,
    }),
    // `serviceIds` står her med vilje i stedet for `services`: lista bygges som regel inline
    // hos kallstedet og har ny identitet ved hver render, mens innholdet er det samme.
    [store, language, translationOverrides, serviceIds, mounted],
  );

  return <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>;
}
