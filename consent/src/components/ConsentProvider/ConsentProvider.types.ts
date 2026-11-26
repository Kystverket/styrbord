import type { ReactNode } from 'react';
import type { ConsentConfig, ConsentLayout } from '../../utility/consent.types';
import type { ConsentTranslations } from '../../utility/translations';

export interface ConsentProviderProps extends ConsentConfig {
  children: ReactNode;

  /**
   * Hvordan samtykket presenteres. Standard er `banner`, som legger banneret øverst i innholdet
   * — da må `<CookieConsent />` stå først i `<body>`, før «Hopp til hovedinnhold». `modal` gir et
   * banner som ligger fast over innholdet og innstillinger i en modal dialog.
   */
  layout?: ConsentLayout;

  /** Språkkode, f.eks. `nb-NO`. Styrer standardtekstene. Ukjente språk faller til bokmål. */
  language?: string;

  /**
   * Overstyrer enkelttekster. Utelatte felter beholder standardteksten for språket, så det
   * holder å sende inn det man faktisk vil endre.
   */
  translations?: Partial<ConsentTranslations>;
}
