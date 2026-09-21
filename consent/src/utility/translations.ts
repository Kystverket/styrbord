import type { ConsentCategory } from './consent.types';
import enUS from '../i18n/en-US.json';
import nbNO from '../i18n/nb-NO.json';
import nnNO from '../i18n/nn-NO.json';

/**
 * Tekstene i samtykkeløsningen.
 *
 * Disse følger biblioteket i stedet for å hentes fra applikasjonens i18n-oppsett. Apper som
 * bruker pakken har ulike oppsett (i18next, `@kystverket/sprak-react`, ingenting i det hele
 * tatt), og en komponent som griper etter et bestemt av dem kan bare brukes der. Standard-
 * tekstene ligger derfor her, og kan overstyres via `translations`-propen på `ConsentProvider`.
 */
export interface ConsentTranslations {
  banner: {
    heading: string;
    body: string;
    acceptAll: string;
    rejectAll: string;
    managePreferences: string;
  };
  dialog: {
    heading: string;
    body: string;
    savePreferences: string;
    acceptAll: string;
    rejectAll: string;
    close: string;
    servicesLabel: string;
    showCookies: string;
    noCookies: string;
    alwaysOnHeading: string;
    alwaysOnBody: string;
    cookieName: string;
    cookieProvider: string;
    cookieDuration: string;
  };
  /**
   * Levetid. `{{count}}` erstattes med tallet. Skilt i entall og flertall fordi «1 måneder»
   * ser slurvete ut i en tekst brukeren skal ta en avgjørelse ut fra.
   */
  durations: {
    session: string;
    day: string;
    days: string;
    month: string;
    months: string;
    year: string;
    years: string;
  };
  categories: Record<ConsentCategory, { title: string; description: string }>;
  manageLink: string;
}

export const consentTranslations = {
  'nb-NO': nbNO as ConsentTranslations,
  'nn-NO': nnNO as ConsentTranslations,
  'en-US': enUS as ConsentTranslations,
} as const;

export type ConsentLanguage = keyof typeof consentTranslations;

export const defaultConsentLanguage: ConsentLanguage = 'nb-NO';

/**
 * Finner tekstene for et språk. Ukjente språk faller tilbake til bokmål, og en bar språkkode
 * (`nb`, `en`) treffer den første varianten som matcher, slik at kall fra apper uten
 * regionskode også fungerer.
 */
export function getConsentTranslations(language?: string): ConsentTranslations {
  if (!language) {
    return consentTranslations[defaultConsentLanguage];
  }

  const exact = consentTranslations[language as ConsentLanguage];
  if (exact) {
    return exact;
  }

  const base = language.split('-')[0]?.toLowerCase();
  const match = (Object.keys(consentTranslations) as ConsentLanguage[]).find(
    (key) => key.split('-')[0].toLowerCase() === base,
  );

  return match ? consentTranslations[match] : consentTranslations[defaultConsentLanguage];
}

/**
 * Gjør en levetid om til lesbar tekst: 182 dager blir «6 måneder», ikke «182 dager».
 *
 * Runde måneder og år brukes der det går opp noenlunde, fordi det er slik folk tenker om hvor
 * lenge noe varer. Ellers oppgis dager.
 */
export function formatCookieDuration(duration: number | 'session', translations: ConsentTranslations): string {
  const { durations } = translations;

  if (duration === 'session') {
    return durations.session;
  }

  const fill = (template: string, count: number) => template.replace('{{count}}', String(count));

  if (duration >= 365 && duration % 365 === 0) {
    const years = duration / 365;
    return fill(years === 1 ? durations.year : durations.years, years);
  }

  if (duration >= 28) {
    const months = Math.round(duration / 30.4);
    if (months >= 1) {
      return fill(months === 1 ? durations.month : durations.months, months);
    }
  }

  return fill(duration === 1 ? durations.day : durations.days, duration);
}
