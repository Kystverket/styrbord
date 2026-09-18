import { configureConsentManager, createConsentManagerStore, deleteCookie, type StorageConfig } from 'c15t';
import type { ConsentConfig, ConsentService, ConsentState } from './consent.types';

/** Navn på informasjonskapselen dersom kallstedet ikke overstyrer det. */
export const DEFAULT_STORAGE_KEY = 'kystverket_consent';

/** Halvår. Kortere enn c15t sin standard på 365 dager. */
export const DEFAULT_EXPIRY_DAYS = 182;

export type ConsentStore = ReturnType<typeof createConsentManagerStore>;

/**
 * Kategoriene som faktisk kan slås av og på av brukeren, utledet fra tjenestelista.
 *
 * `necessary` er alltid på og vises ikke som et valg. Tjenester med `alwaysLoad` lastes
 * uansett samtykke, så de bidrar ikke med en kategori brukeren kan styre.
 */
export function getSelectableCategories(services: ConsentService[]) {
  const categories = services
    .filter((service) => !service.alwaysLoad)
    .map((service) => service.category)
    // Kategorien kan være et uttrykk (`{ and: [...] }`). Vi viser bare de enkle navnene;
    // sammensatte betingelser styres av kategoriene de er bygget av.
    .filter((category): category is Exclude<typeof category, object> => typeof category === 'string')
    .filter((category) => category !== 'necessary');

  return [...new Set(categories)];
}

/**
 * Sant når applikasjonen har minst én tjeneste som faktisk avhenger av samtykke.
 *
 * Saksbehandling laster i dag bare Plausible, som er informasjonskapselfritt og går med
 * `alwaysLoad`. Da har banneret ingenting å gate, og skal ikke vises — men resten av
 * samtykkeløsningen mountes likevel, slik at status kan leses og endres.
 */
export function hasGatedServices(services: ConsentService[]) {
  return getSelectableCategories(services).length > 0;
}

/**
 * Sletter informasjonskapsler satt av tjenester brukeren ikke har samtykket til.
 *
 * c15t laster ut skriptet og laster siden på nytt, men rører ikke kapslene tjenesten
 * allerede har skrevet. Matcher på prefiks, siden Hotjar & co. setter et ukjent antall
 * kapsler med felles prefiks (`_hjSession`, `_hjIncludedInSessionSample`, ...).
 *
 * Kjøres også ved oppstart, slik at kapsler som ligger igjen fra et tidligere samtykke
 * blir ryddet bort.
 */
export function clearServiceCookies(
  services: ConsentService[],
  consents: Partial<ConsentState>,
  cookieDomain?: string,
) {
  if (typeof document === 'undefined') {
    return;
  }

  const prefixes = services
    .filter((service) => {
      // Tjenester som lastes uansett samtykke skal beholde kapslene sine.
      if (service.alwaysLoad) {
        return false;
      }
      // Sammensatte kategoriuttrykk lar seg ikke slå opp direkte; da lar vi kapslene stå
      // heller enn å slette noe brukeren faktisk har samtykket til.
      if (typeof service.category !== 'string') {
        return false;
      }
      return consents[service.category] !== true;
    })
    .flatMap((service) => service.clearCookiePrefixes ?? []);

  if (prefixes.length === 0) {
    return;
  }

  const cookieNames = document.cookie
    .split(';')
    .map((entry) => entry.split('=')[0]?.trim())
    .filter((name): name is string => Boolean(name));

  for (const name of cookieNames) {
    if (!prefixes.some((prefix) => name.startsWith(prefix))) {
      continue;
    }

    // Kapselen kan være satt på vertsnavnet, på delt domene, eller uten domene i det hele
    // tatt. Nettleseren sletter bare ved eksakt treff på domene og path, så vi prøver alle.
    deleteCookie(name);
    deleteCookie(name, { domain: window.location.hostname });
    if (cookieDomain) {
      deleteCookie(name, { domain: cookieDomain });
    }
  }
}

function buildStorageConfig(config: ConsentConfig): StorageConfig {
  return {
    storageKey: config.storageKey ?? DEFAULT_STORAGE_KEY,
    defaultExpiryDays: config.expiryDays ?? DEFAULT_EXPIRY_DAYS,
    // Bevisst ikke `crossSubdomain: true` — se kommentaren på ConsentConfig.cookieDomain.
    ...(config.cookieDomain ? { defaultDomain: config.cookieDomain } : {}),
  };
}

/**
 * Setter opp samtykkelageret i offline-modus: ingen nettverkskall, ingen backend, alt lagres
 * i nettleseren. Informasjonskapselen er fasit, og c15t speiler den til localStorage — som
 * er viktig her, siden localStorage er bundet til origin og derfor ikke deles mellom
 * subdomener slik kapselen gjør.
 */
export function createConsentStore(config: ConsentConfig): ConsentStore {
  const storageConfig = buildStorageConfig(config);

  const manager = configureConsentManager({
    mode: 'offline',
    storageConfig,
  });

  return createConsentManagerStore(manager, {
    storageConfig,
    scripts: config.services,
    initialConsentCategories: getSelectableCategories(config.services),
    debug: config.debug ?? false,
    // Laster siden på nytt når samtykke trekkes tilbake. Nødvendig fordi et skript som
    // Hotjar ikke lar seg stoppe når det først kjører.
    reloadOnConsentRevoked: true,
    callbacks: {
      onConsentSet: ({ preferences }) => clearServiceCookies(config.services, preferences, config.cookieDomain),
    },
  });
}
