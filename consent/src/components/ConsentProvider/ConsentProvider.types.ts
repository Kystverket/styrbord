import type { ReactNode } from 'react';
import type { ConsentConfig, ConsentLayout } from '../../utility/consent.types';
import type { ConsentTranslations } from '../../utility/translations';

export interface ConsentProviderProps extends ConsentConfig {
  children: ReactNode;

  /**
   * Hvordan samtykket presenteres. Standard er `floating`: et banner som ligger fast nederst i
   * vinduet uten å låse siden, og innstillinger i en modal dialog. `banner` legger banneret øverst
   * i innholdet, slik Designsystemet anbefaler — da må `<CookieConsent />` stå først i `<body>`,
   * før «Hopp til hovedinnhold».
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
