'use client';

import { createContext, useContext, useEffect, useRef } from 'react';

/**
 * Teller over hvor mange `ConsentPreferencesDialog` som står mountet.
 *
 * Et muterbart objekt framfor tilstand: ingen skal rendre på nytt fordi dialogen registrerer
 * seg. Dette brukes bare til å advare utviklere om et oppsett som ikke henger sammen.
 */
export interface ConsentDialogRegistry {
  count: number;
}

const ConsentDialogRegistryContext = createContext<ConsentDialogRegistry | null>(null);

export const ConsentDialogRegistryProvider = ConsentDialogRegistryContext.Provider;

/** Lager registeret. Kalles én gang, av `ConsentProvider`. */
export function useConsentDialogRegistry(): ConsentDialogRegistry {
  const registry = useRef<ConsentDialogRegistry>({ count: 0 });
  return registry.current;
}

/** Melder dialogen inn i registeret så lenge den står mountet. */
export function useRegisterConsentDialog(): void {
  const registry = useContext(ConsentDialogRegistryContext);

  useEffect(() => {
    if (!registry) {
      return;
    }

    registry.count += 1;
    return () => {
      registry.count -= 1;
    };
  }, [registry]);
}

/** Navn det allerede er advart om, slik at advarselen ikke gjentas ved hver render. */
const warned = new Set<string>();

/**
 * Advarer når en flate som åpner innstillingsdialogen vises uten at dialogen er mountet.
 *
 * Både banneret og innstillingsknappen skjuler seg selv når de setter `activeUI` til `dialog`.
 * Er det ingen dialog til å ta over, forsvinner flaten uten at noe kommer i stedet, og brukeren
 * sitter igjen uten vei videre — verken til å gi eller trekke tilbake samtykke. Det er lett å gå
 * i når flatene mountes hver for seg i stedet for gjennom `CookieConsent`.
 *
 * @param componentName Navnet som skal stå i advarselen.
 * @param active Om flaten faktisk vises. En skjult flate kan ingen klikke seg fast i.
 */
export function useMissingConsentDialogWarning(componentName: string, active: boolean): void {
  const registry = useContext(ConsentDialogRegistryContext);

  useEffect(() => {
    if (!active || !registry || warned.has(componentName)) {
      return;
    }

    // Utsettes ett steg: søskenkomponenter kjører effektene sine i rekkefølge, og dialogen
    // rekker ikke å registrere seg før banneret over den har kjørt sin. Uten utsettelsen ville
    // advarselen kommet selv når alt er riktig satt opp.
    const timer = setTimeout(() => {
      if (registry.count > 0 || warned.has(componentName)) {
        return;
      }

      warned.add(componentName);
      console.warn(
        `<${componentName}> is shown without a <ConsentPreferencesDialog> mounted. Opening the ` +
          `consent settings will hide it with nothing to replace it, leaving the user unable to ` +
          `give or withdraw consent. Mount <ConsentPreferencesDialog> alongside it, or use ` +
          `<CookieConsent>, which mounts all three surfaces.`,
      );
    }, 0);

    return () => clearTimeout(timer);
  }, [active, componentName, registry]);
}
