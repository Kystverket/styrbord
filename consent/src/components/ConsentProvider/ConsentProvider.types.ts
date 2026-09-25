import type { ReactNode } from 'react';
import type { ConsentConfig } from '../../utility/consent.types';
import type { ConsentTranslations } from '../../utility/translations';

export interface ConsentProviderProps extends ConsentConfig {
  children: ReactNode;

  /** Språkkode, f.eks. `nb-NO`. Styrer standardtekstene. Ukjente språk faller til bokmål. */
  language?: string;

  /**
   * Overstyrer enkelttekster. Utelatte felter beholder standardteksten for språket, så det
   * holder å sende inn det man faktisk vil endre.
   */
  translations?: Partial<ConsentTranslations>;
}
