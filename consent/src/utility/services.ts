import type { ConsentCategory, ConsentService } from './consent.types';
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
  /** Prosjektets API-nøkkel (`phc_...`). Den er offentlig og ligger i klientkoden uansett. */
  apiKey: string;

  /** API-vert. Standard er EU-instansen, slik at data blir i Europa. */
  apiHost?: string;

  /**
   * Verten skriptet lastes fra. PostHog serverer det fra en egen assets-vert, og utleder den
   * fra `apiHost` (`eu.i.posthog.com` → `eu-assets.i.posthog.com`). Sett den selv når PostHog
   * går gjennom en egen proxy, der utledningen ikke gir mening.
   */
  assetHost?: string;

  /**
   * Om sesjonsopptak og varmekart skal brukes.
   *
   * Dette er en annen ting å samtykke til enn statistikk, og styres derfor av kategorien
   * `experience` — se kommentaren på funksjonen under.
   *
   * @default false
   */
  sessionReplay?: boolean;

  /**
   * Om PostHog selv skal telle sidevisninger. Sett den til `false` i applikasjoner som teller
   * dem manuelt ved ruteendring, ellers blir hver visning talt to ganger.
   *
   * @default true
   */
  capturePageview?: boolean;

  /**
   * Når PostHog skal lage personprofiler. `identified_only` lager dem bare for innloggede
   * brukere, og er både PostHogs og vår standard.
   *
   * @default 'identified_only'
   */
  personProfiles?: 'always' | 'identified_only' | 'never';

  /**
   * Hvilket sett med standardoppførsel PostHog skal bruke. PostHog endrer standardverdier over
   * tid og lar deg feste dem til en dato, slik at oppførselen ikke flytter seg under beina på
   * deg når skriptet oppdateres.
   *
   * @default '2026-05-30'
   */
  defaults?: string;
}

/** Den lille biten av PostHog-API-et vi rører. Skrevet ut her for å slippe `posthog-js` som avhengighet. */
interface PostHogGlobal {
  init: (apiKey: string, config: Record<string, unknown>) => void;
  startSessionRecording: () => void;
  stopSessionRecording: () => void;
}

/**
 * PostHog: produktanalyse, og eventuelt sesjonsopptak og varmekart.
 *
 * Skriptet ligger bak `measurement`, fordi det alltid teller sidevisninger og klikk. Med
 * `sessionReplay` gjør det i tillegg det samme som Hotjar — og det hører hjemme under
 * `experience`, som er kategorien der vi lover brukeren nettopp «anonymiserte opptak og
 * varmekart».
 *
 * Én tjeneste kan bare stå i én kategori i dialogen: c15t tillater sammensatte uttrykk
 * (`{ and: [...] }`), men dialogen filtrerer dem bort, så PostHog ville blitt usynlig for
 * brukeren — akkurat den stille underrapporteringen kapselmetadataen er til for å unngå.
 * Opptaket styres derfor i stedet i kjøretid: skriptet starter med opptak avslått, og slår det
 * på og av etter hvert som `experience` gis og trekkes tilbake.
 *
 * Merk at varmekart ikke lar seg skru på i kjøretid slik opptak gjør — de settes når skriptet
 * initialiseres. Gir brukeren `experience` etter at siden er lastet, starter opptaket med én
 * gang, mens varmekartene først er med ved neste sidelast.
 *
 * CSP må åpne for både `apiHost` og assets-verten før dette virker.
 */
export function postHogService({
  apiKey,
  apiHost = 'https://eu.i.posthog.com',
  assetHost,
  sessionReplay = false,
  capturePageview = true,
  personProfiles = 'identified_only',
  defaults = '2026-05-30',
}: PostHogOptions): ConsentService {
  const host = apiHost.replace(/\/$/, '');
  const assets = (assetHost ?? host.replace('.i.posthog.com', '-assets.i.posthog.com')).replace(/\/$/, '');

  const instance = () => (window as unknown as { posthog?: PostHogGlobal }).posthog;

  /** Starter eller stopper opptak etter hvor `experience` står nå. */
  const applyReplayConsent = (consents: Partial<Record<ConsentCategory, boolean>>) => {
    if (!sessionReplay) {
      return;
    }

    const posthog = instance();
    if (!posthog) {
      return;
    }

    if (consents.experience === true) {
      posthog.startSessionRecording();
    } else {
      posthog.stopSessionRecording();
    }
  };

  return {
    id: 'posthog',
    displayName: 'PostHog',
    category: 'measurement',
    clearCookiePrefixes: ['ph_'],
    // Kapselen heter `ph_<nøkkel>_posthog`. Nøkkelen er kjent her, så brukeren får se det
    // faktiske navnet framfor et jokertegn. PostHog speiler den samme verdien til localStorage,
    // som dialogen foreløpig ikke har noen måte å vise.
    cookies: [{ name: `ph_${apiKey}_posthog`, duration: 365 }],
    src: `${assets}/static/array.js`,
    onLoad: ({ consents }) => {
      instance()?.init(apiKey, {
        api_host: host,
        person_profiles: personProfiles,
        capture_pageview: capturePageview,
        defaults,
        // PostHog setter denne til `true` selv, som legger kapselen på toppdomenet. Samme felle
        // som c15t sin `crossSubdomain` — se kommentaren på `ConsentConfig.cookieDomain`.
        cross_subdomain_cookie: false,
        disable_session_recording: true,
        capture_heatmaps: sessionReplay && consents.experience === true,
      });
      applyReplayConsent(consents);
    },
    onConsentChange: ({ consents }) => applyReplayConsent(consents),
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
