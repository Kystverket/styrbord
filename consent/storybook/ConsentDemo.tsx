import { useEffect, useState, type ReactNode } from 'react';
import { deleteConsentFromStorage } from 'c15t';
import { Button } from '~/components/shared/Button/Button';
import {
  ConsentProvider,
  consentCookieService,
  hotjarService,
  plausibleService,
  postHogService,
  useConsent,
  useConsentStore,
  type ConsentLanguage,
  type ConsentService,
} from '~/main';
import styles from './ConsentDemo.module.css';

/**
 * Egen nøkkel for Storybook, slik at demoen aldri rører samtykket til en applikasjon som
 * tilfeldigvis kjører på samme vertsnavn under utvikling.
 */
const STORY_STORAGE_KEY = 'styrbord_consent_storybook';

/**
 * Fjerner skriptet fra et tjenesteoppsett, men beholder kategori og kapselliste.
 *
 * Storybook publiseres på GitHub Pages, og et samtykkebanner som faktisk laster Hotjar når du
 * trykker «Godta alle» ville vært stikk i strid med poenget. Tjenestene vises derfor med de
 * ekte opplysningene sine, mens `callbackOnly` gjør at c15t ikke setter inn noe skript-element.
 */
function withoutScript(service: ConsentService): ConsentService {
  return { ...service, src: undefined, textContent: undefined, callbackOnly: true };
}

/**
 * Tjenestene demoen viser fram: én kapselfri tjeneste som går uten samtykke (Plausible), og to
 * som er gatet bak hver sin kategori. Det gir en dialog med både «alltid på»-seksjon og
 * brytere, som er det oppsettet applikasjonene våre faktisk ender opp med.
 */
export const demoServices: ConsentService[] = [
  consentCookieService(STORY_STORAGE_KEY),
  plausibleService({ domain: 'demo.kystverket.no' }),
  hotjarService({ siteId: 1234567 }),
  postHogService({ apiKey: 'phc_demo' }),
].map(withoutScript);

/** Bare den nødvendige kapselen: ingen tjeneste å ta stilling til, og dermed ikke noe banner. */
export const onlyNecessaryServices: ConsentService[] = [consentCookieService(STORY_STORAGE_KEY)].map(withoutScript);

/** Hvor demoen skal starte. */
export type ConsentDemoStart =
  /** Banneret er oppe — brukeren har ikke svart ennå. */
  | 'banner'
  /** Innstillingsdialogen er åpen. */
  | 'dialog'
  /** Brukeren har allerede svart, så bare innstillingsknappen står igjen. */
  | 'answered';

function ApplyStart({ start }: Readonly<{ start: ConsentDemoStart }>) {
  const { store } = useConsentStore();

  useEffect(() => {
    if (start === 'dialog') {
      store.getState().setActiveUI('dialog');
    }
    if (start === 'answered') {
      void store.getState().saveConsents('necessary');
    }
  }, [start, store]);

  return null;
}

function ConsentStatus() {
  const { consents, activeUI } = useConsent();
  const granted = Object.entries(consents)
    .filter(([, value]) => value)
    .map(([category]) => category);

  return (
    <p className={styles.status}>
      Aktiv flate: <code>{activeUI}</code>. Samtykket til:{' '}
      <code>{granted.length > 0 ? granted.join(', ') : 'ingen'}</code>.
    </p>
  );
}

export interface ConsentDemoProps {
  /** Språket tekstene vises på. */
  language?: ConsentLanguage;

  /** Tjenestene demoen konfigureres med. */
  services?: ConsentService[];

  /** Hvor i forløpet demoen skal starte. */
  start?: ConsentDemoStart;

  /** Samtykkeflatene som skal vises — `<CookieConsent />` eller enkeltkomponentene. */
  children: ReactNode;
}

/**
 * Siden samtykkeflatene vises på: litt innhold å legge seg over, og en knapp for å nullstille.
 *
 * Nullstillingen er poenget med hele rammen. Samtykket lagres i en informasjonskapsel og i
 * localStorage, så uten den ville banneret vært borte for godt etter første klikk — og en
 * historie som bare kan spilles én gang per nettleser er ikke til stor hjelp.
 */
export function ConsentDemo({
  language = 'nb-NO',
  services = demoServices,
  start = 'banner',
  children,
}: Readonly<ConsentDemoProps>) {
  // Ryddes i selve renderen, ikke i en effekt: `ConsentProvider` leser lagret samtykke idet
  // lageret opprettes, og det skjer før effekter rekker å kjøre.
  const [generation, setGeneration] = useState(() => {
    deleteConsentFromStorage(undefined, { storageKey: STORY_STORAGE_KEY });
    return 0;
  });

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const reset = () => {
    deleteConsentFromStorage(undefined, { storageKey: STORY_STORAGE_KEY });
    setGeneration((current) => current + 1);
  };

  return (
    <ConsentProvider key={generation} language={language} storageKey={STORY_STORAGE_KEY} services={services}>
      <div className={styles.page} data-color="neutral">
        <h1 className={styles.heading}>Demoside</h1>
        <p>
          Innholdet her er bare en flate for samtykkeflatene å legge seg over. Banneret ligger nederst, og
          innstillingsknappen dukker opp i hjørnet når banneret er besvart.
        </p>
        <ConsentStatus />
        <div>
          <Button variant="outline" onClick={reset}>
            Nullstill samtykke
          </Button>
        </div>
      </div>

      <ApplyStart start={start} />
      {children}
    </ConsentProvider>
  );
}

/** Argumentene historiene deler. */
export interface ConsentStoryArgs {
  language: ConsentLanguage;
}

/** Språkvelgeren i Controls, slik at de tre tekstsettene kan sammenlignes uten å bytte historie. */
export const languageArgTypes = {
  language: {
    name: 'Språk',
    control: 'inline-radio' as const,
    options: ['nb-NO', 'nn-NO', 'en-US'] satisfies ConsentLanguage[],
    description: 'Sendes videre til `ConsentProvider` som `language`.',
  },
};

/** Standardverdier for `ConsentStoryArgs`. */
export const languageArgs: ConsentStoryArgs = {
  language: 'nb-NO',
};
