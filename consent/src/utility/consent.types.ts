import type { AllConsentNames, Script } from 'c15t';

/**
 * Samtykkekategoriene c15t opererer med. Vokabularet er fast og kan ikke utvides — det er en
 * fordel når flere applikasjoner deler den samme informasjonskapselen, siden de da er nødt
 * til å tolke nøklene likt.
 */
export type ConsentCategory = AllConsentNames;

/**
 * En informasjonskapsel en tjeneste setter, slik den vises i samtykkedialogen.
 *
 * Brukeren har krav på å vite hva som lagres, av hvem og hvor lenge, før de tar stilling til
 * samtykket. Ved å henge informasjonen på tjenesten den hører til, havner den i dialogen der
 * valget faktisk tas.
 */
export interface ServiceCookie {
  /** Navn, eventuelt med `*` for en familie av kapsler, f.eks. `_hjSession*`. */
  name: string;

  /** Levetid i dager, eller `'session'` for kapsler som forsvinner når nettleseren lukkes. */
  duration: number | 'session';
}

/**
 * En tjeneste som lastes (eller ikke lastes) avhengig av samtykke.
 *
 * Dette er c15t sin `Script`-type med feltene vi trenger for å kunne vise tjenesten i
 * dialogen og rydde opp etter den.
 */
export type ConsentService = Script & {
  /**
   * Informasjonskapslene tjenesten setter, til visning i dialogen. En tom liste betyr at
   * tjenesten er kapselfri, og vises som nettopp det — ikke som at vi ikke vet.
   */
  cookies?: ServiceCookie[];

  /**
   * Navn slik det vises i dialogen. Faller tilbake til `id` når det ikke er satt.
   */
  displayName?: string;

  /**
   * Informasjonskapsler tjenesten setter, og som skal slettes når samtykket trekkes tilbake.
   * Prefiks-match: `_hj` treffer `_hjSession`, `_hjIncludedInSessionSample`, osv.
   *
   * c15t laster ut selve skriptet og laster siden på nytt, men sletter ikke kapslene
   * tredjeparten allerede har satt.
   */
  clearCookiePrefixes?: string[];
};

/**
 * Konfigurasjon av samtykkeløsningen. Alt som varierer mellom miljøer og applikasjoner sendes
 * inn her — biblioteket leser aldri `process.env` selv.
 *
 * Det er et bevisst krav: i rammeverk som bygger ett artefakt for flere miljøer (Next.js med
 * `NEXT_PUBLIC_*`, Vite med `import.meta.env`) bakes miljøvariabler inn på byggetidspunktet,
 * og en verdi lest inne i biblioteket ville blitt låst til byggemiljøet.
 */
export interface ConsentConfig {
  /**
   * Domenet informasjonskapselen settes på. Dette er mekanismen som gir ett felles samtykke
   * på tvers av subdomener: `.example.no` gjør at alle tjenester under domenet deler svaret.
   *
   * La stå udefinert lokalt, da settes kapselen på gjeldende vertsnavn.
   *
   * Merk: bruk denne fremfor c15t sin `crossSubdomain: true`. Den utleder domenet fra de to
   * siste leddene i vertsnavnet, som gir riktig `.example.no` i produksjon, men et bredere
   * domene enn ønsket når testmiljøene ligger dypere nestet.
   */
  cookieDomain?: string;

  /** Navn på informasjonskapselen. Må være likt i alle apper som skal dele samtykke. */
  storageKey?: string;

  /** Hvor lenge samtykket varer. Datatilsynet anbefaler høyst 12 måneder. */
  expiryDays?: number;

  /** Tjenestene applikasjonen laster. Se `services.ts` for ferdige oppsett. */
  services: ConsentService[];

  /** Slår på `[c15t]`-logging i konsollet. */
  debug?: boolean;
}

/** Samtykkestatus per kategori. */
export type ConsentState = Record<ConsentCategory, boolean>;

/** Hvilken del av samtykke-grensesnittet som vises. */
export type ConsentUI = 'none' | 'banner' | 'dialog';
