'use client';

import type { ReactElement } from 'react';
import type { ConsentCategory, ConsentService } from '../../utility/consent.types';
import { useConsentStore } from '../../utility/consentContext';
import { getSelectableCategories } from '../../utility/consentStore';
import { formatCookieDuration, type ConsentTranslations } from '../../utility/translations';
import { useStoreValue } from '../../hooks/useStoreValue';
import { Button } from '../shared/Button/Button';
import { Checkbox } from '../shared/Checkbox/Checkbox';
import styles from './ConsentPreferences.module.css';

/**
 * Informasjonskapslene en gruppe tjenester setter, som en sammenleggbar tabell.
 *
 * Detaljene hører hjemme her, der valget faktisk tas, framfor på en egen side. De ligger bak
 * et klikk fordi de færreste vil se dem, men de som vil skal slippe å lete.
 */
function CookieDetails({
  services,
  translations,
}: Readonly<{ services: ConsentService[]; translations: ConsentTranslations }>) {
  // Skiller mellom «tjenesten setter ingen kapsler» og «vi har ikke oppgitt noe»: det første
  // er informasjon brukeren har nytte av, det andre er en mangel vi ikke skal pynte på.
  const declaresCookies = services.some((service) => service.cookies !== undefined);
  if (!declaresCookies) {
    return null;
  }

  const rows = services.flatMap((service) =>
    (service.cookies ?? []).map((cookie) => ({ ...cookie, provider: service.displayName ?? service.id })),
  );

  if (rows.length === 0) {
    return <p className={styles.fineprint}>{translations.dialog.noCookies}</p>;
  }

  return (
    <details className={styles.details}>
      <summary className={styles.summary}>{translations.dialog.showCookies}</summary>
      <table className={styles.table}>
        <thead>
          <tr>
            <th scope="col">{translations.dialog.cookieName}</th>
            <th scope="col">{translations.dialog.cookieProvider}</th>
            <th scope="col">{translations.dialog.cookieDuration}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={`${row.provider}-${row.name}`}>
              <td>
                <code>{row.name}</code>
              </td>
              <td>{row.provider}</td>
              <td>{formatCookieDuration(row.duration, translations)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </details>
  );
}

/** Navnene på tjenestene i en gruppe, f.eks. «Tjenester: Hotjar». */
function ServiceNames({
  services,
  translations,
}: Readonly<{ services: ConsentService[]; translations: ConsentTranslations }>) {
  if (services.length === 0) {
    return null;
  }

  return (
    <p className={styles.fineprint}>
      {translations.dialog.servicesLabel}: {services.map((service) => service.displayName ?? service.id).join(', ')}
    </p>
  );
}

/**
 * Valgene i samtykkeinnstillingene: én avkrysningsboks per kategori, samlet i en `fieldset`.
 *
 * Kategoriene utledes av tjenestene applikasjonen faktisk laster — vi viser ikke valg som ikke
 * styrer noe. Nødvendige tjenester og tjenester som går uten samtykke vises som tekst, ikke som
 * en avkrysset eller deaktivert kontroll: de er ikke et valg, og en kontroll som ikke kan
 * endres sier det motsatte. Uten dem ville en kapselfri tjeneste som Plausible vært usynlig.
 *
 * Intern: brukes både av det utvidede banneret og av `ConsentPreferencesDialog`.
 */
export function ConsentPreferencesFields(): ReactElement {
  const { store, translations } = useConsentStore();

  const selectedConsents = useStoreValue(store, (state) => state.selectedConsents);
  const scripts = useStoreValue(store, (state) => state.scripts) as ConsentService[];

  const categories = getSelectableCategories(scripts);
  // `setSelectedConsent`, ikke `setConsent`: sistnevnte kaller `saveConsents('custom')` selv, så
  // innstillingene ville lagret og lukket seg ved første klikk på en boks — og siden den bygger
  // det nye settet fra `consents` framfor `selectedConsents`, ville den samtidig forkastet de
  // andre boksene brukeren hadde krysset av. Her skal ingenting lagres før «Lagre valg».
  const { setSelectedConsent } = store.getState();

  const necessaryServices = scripts.filter((script) => script.category === 'necessary');
  const alwaysOnServices = scripts.filter((script) => script.alwaysLoad && script.category !== 'necessary');
  const servicesInCategory = (category: ConsentCategory) =>
    scripts.filter((script) => !script.alwaysLoad && script.category === category);

  return (
    <div className={styles.fields}>
      <p className={styles.body}>{translations.dialog.body}</p>

      <div className={styles.categories}>
        <section className={styles.category}>
          <h3 className={styles.categoryHeading}>{translations.categories.necessary.title}</h3>
          <p className={styles.body}>{translations.categories.necessary.description}</p>
          <CookieDetails services={necessaryServices} translations={translations} />
        </section>

        {alwaysOnServices.length > 0 && (
          <section className={styles.category}>
            <h3 className={styles.categoryHeading}>{translations.dialog.alwaysOnHeading}</h3>
            <p className={styles.body}>{translations.dialog.alwaysOnBody}</p>
            <ServiceNames services={alwaysOnServices} translations={translations} />
            <CookieDetails services={alwaysOnServices} translations={translations} />
          </section>
        )}

        {categories.length > 0 && (
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>{translations.dialog.legend}</legend>
            {categories.map((category) => {
              const services = servicesInCategory(category);
              return (
                <div key={category} className={styles.category}>
                  <Checkbox
                    label={translations.categories[category].title}
                    description={translations.categories[category].description}
                    checked={selectedConsents[category] === true}
                    onChange={(event) => setSelectedConsent(category, event.target.checked)}
                  />
                  <div className={styles.services}>
                    <ServiceNames services={services} translations={translations} />
                    <CookieDetails services={services} translations={translations} />
                  </div>
                </div>
              );
            })}
          </fieldset>
        )}
      </div>
    </div>
  );
}

/**
 * Knappene under innstillingene. «Godta alle» og «Avslå alle» har samme utseende: å si nei skal
 * være like lett å se og treffe som å si ja.
 */
export function ConsentPreferencesActions({ className }: Readonly<{ className?: string }>): ReactElement {
  const { store, translations } = useConsentStore();
  const { saveConsents } = store.getState();

  return (
    <div className={[styles.actions, className].filter(Boolean).join(' ')}>
      <Button variant="filled" onClick={() => saveConsents('custom')}>
        {translations.dialog.savePreferences}
      </Button>
      <Button variant="outline" onClick={() => saveConsents('all')}>
        {translations.dialog.acceptAll}
      </Button>
      <Button variant="outline" onClick={() => saveConsents('necessary')}>
        {translations.dialog.rejectAll}
      </Button>
    </div>
  );
}
