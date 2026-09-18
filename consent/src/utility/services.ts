import type { ConsentService } from './consent.types';
import { DEFAULT_EXPIRY_DAYS, DEFAULT_STORAGE_KEY } from './consentStore';

/**
 * Ferdige oppsett for de vanligste sporingstjenestene, med kategorien hver av dem hører til.
 *
 * Disse hører hjemme i biblioteket, ikke i den enkelte applikasjonen: når flere apper deler
 * én informasjonskapsel må de også være enige om hvilken kategori en gitt tjeneste faller inn
 * under. Ellers betyr det samme samtykket ulike ting fra app til app.
 *
 * Trenger du en tjeneste som ikke står her, bygg et `ConsentService`-objekt selv — det er bare
 * c15t sin `Script` med `cookies` og `displayName` i tillegg.
 */

export interface PlausibleOptions {
  /** Verdien i `data-domain`, altså nettstedet slik det er registrert i Plausible. */
  domain: string;

  /**
   * Om Plausible skal kreve samtykke.
   *
   * Plausible settes ikke i informasjonskapsler og lagrer ingen identifikator på enheten,
   * og faller derfor trolig utenfor samtykkekravet i ekomloven. Standard er derfor at det
   * lastes uansett. Settes denne til `true` havner Plausible bak `measurement` sammen med
   * resten av statistikken.
   *
   * @default false
   */
  requireConsent?: boolean;

  /** Vertsnavn for self-hosted Plausible. */
  scriptSrc?: string;
}

export function plausibleService({
  domain,
  requireConsent = false,
  scriptSrc = 'https://plausible.io/js/script.js',
}: PlausibleOptions): ConsentService {
  return {
    id: 'plausible',
    displayName: 'Plausible',
    src: scriptSrc,
    category: 'measurement',
    alwaysLoad: !requireConsent,
    defer: true,
    attributes: { 'data-domain': domain },
    // Tom liste, ikke utelatt: dialogen skiller mellom «setter ingen kapsler» og «vi har
    // ikke oppgitt noe», og det kapselfrie er hele grunnen til at Plausible går usamtykket.
    cookies: [],
  };
}

export interface HotjarOptions {
  /** Site id fra Hotjar. */
  siteId: string | number;
}

/**
 * Hotjar lager varmekart og opptak av ekte økter, setter `_hj*`-kapsler og krever samtykke.
 *
 * Skriptet lar seg ikke stoppe når det først kjører, så tilbaketrekking av samtykke er
 * avhengig av at c15t laster siden på nytt (`reloadOnConsentRevoked`).
 */
export function hotjarService({ siteId }: HotjarOptions): ConsentService {
  return {
    id: 'hotjar',
    displayName: 'Hotjar',
    category: 'experience',
    clearCookiePrefixes: ['_hj'],
    cookies: [
      { name: '_hjSessionUser_*', duration: 365 },
      { name: '_hjSession_*', duration: 1 },
      { name: '_hjIncludedInSessionSample_*', duration: 1 },
    ],
    textContent: `
      (function (h, o, t, j, a, r) {
        h.hj = h.hj || function () { (h.hj.q = h.hj.q || []).push(arguments); };
        h._hjSettings = { hjid: ${Number(siteId)}, hjsv: 6 };
        a = o.getElementsByTagName('head')[0];
        r = o.createElement('script');
        r.async = 1;
        r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
        a.appendChild(r);
      })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
    `,
  };
}

export interface PostHogOptions {
  /** Prosjektets API-nøkkel (`phc_...`). */
  apiKey: string;

  /** API-vert. Bruk EU-instansen for data som skal bli i Europa. */
  apiHost?: string;
}

/**
 * PostHog er ikke tatt i bruk ennå, men ligger her ferdig kategorisert slik at det bare er å
 * legge den til i tjenestelista når den tid kommer.
 *
 * Merk at CSP må utvides med `apiHost` og tilhørende assets-vert før dette virker, og at
 * `revision` bør økes slik at brukerne får spørsmålet på nytt — en ny leverandør i en
 * kategori er en endring de har krav på å bli informert om.
 */
export function postHogService({ apiKey, apiHost = 'https://eu.i.posthog.com' }: PostHogOptions): ConsentService {
  return {
    id: 'posthog',
    displayName: 'PostHog',
    category: 'measurement',
    clearCookiePrefixes: ['ph_'],
    cookies: [{ name: 'ph_*_posthog', duration: 365 }],
    src: `${apiHost.replace(/\/$/, '')}/static/array.js`,
    attributes: { 'data-api-key': apiKey },
  };
}

/**
 * Selve samtykke-informasjonskapselen, som metadata til dialogen.
 *
 * Den settes av samtykkeløsningen selv, så modulen er den eneste som kjenner navnet og
 * levetiden — derfor hører oppføringen hjemme her, ikke i den enkelte applikasjonen.
 * `callbackOnly` gjør at c15t ikke prøver å laste noe skript for den.
 */
export function consentCookieService(
  storageKey: string = DEFAULT_STORAGE_KEY,
  expiryDays: number = DEFAULT_EXPIRY_DAYS,
): ConsentService {
  return {
    id: 'consent',
    displayName: 'Kystverket',
    category: 'necessary',
    callbackOnly: true,
    alwaysLoad: true,
    cookies: [{ name: storageKey, duration: expiryDays }],
  };
}
