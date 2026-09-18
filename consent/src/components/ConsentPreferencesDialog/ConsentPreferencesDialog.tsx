'use client';

import { useEffect, useRef, type MouseEvent, type ReactElement } from 'react';
import type { ConsentCategory, ConsentService } from '../../utility/consent.types';
import { useConsentStore } from '../../utility/consentContext';
import { getSelectableCategories } from '../../utility/consentStore';
import { useRegisterConsentDialog } from '../../utility/dialogRegistry';
import { formatCookieDuration, type ConsentTranslations } from '../../utility/translations';
import { useStoreValue } from '../../hooks/useStoreValue';
import { Button } from '../shared/Button/Button';
import { Switch } from '../shared/Switch/Switch';
import styles from './ConsentPreferencesDialog.module.css';

/**
 * Informasjonskapslene en gruppe tjenester setter, som en sammenleggbar tabell.
 *
 * Detaljene hører hjemme her, i dialogen der valget faktisk tas, framfor på en egen side.
 * De ligger bak et klikk fordi de færreste vil se dem, men de som vil skal slippe å lete.
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
 * Innstillingsdialogen, der brukeren slår kategorier av og på enkeltvis.
 *
 * Kategoriene utledes av tjenestene applikasjonen faktisk laster — vi viser ikke valg som ikke
 * styrer noe. Tjenester som går uten samtykke får sin egen «alltid på»-seksjon, slik at de er
 * synlige selv om de ikke kan slås av; ellers ville en kapselfri tjeneste som Plausible vært
 * usynlig for brukeren.
 *
 * Bygget på `<dialog>` direkte. `showModal()` gir fokusfelle, Escape og backdrop gratis, som er
 * hele grunnen til at vi ikke trenger et dialogbibliotek for å klare oss uten Styrbord.
 */
export function ConsentPreferencesDialog(): ReactElement | null {
  const { store, translations, mounted } = useConsentStore();

  const activeUI = useStoreValue(store, (state) => state.activeUI);
  const selectedConsents = useStoreValue(store, (state) => state.selectedConsents);
  const scripts = useStoreValue(store, (state) => state.scripts) as ConsentService[];

  const dialogRef = useRef<HTMLDialogElement>(null);
  const open = activeUI === 'dialog';

  // Melder fra om at dialogen finnes, slik at banneret og innstillingsknappen kan advare
  // dersom de står der uten den.
  useRegisterConsentDialog();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) {
      return;
    }

    if (open && !dialog.open) {
      dialog.showModal();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  const categories = getSelectableCategories(scripts);
  // `setSelectedConsent`, ikke `setConsent`: sistnevnte kaller `saveConsents('custom')` selv, så
  // dialogen ville lagret og lukket seg ved første klikk på en bryter — og siden den bygger det
  // nye settet fra `consents` framfor `selectedConsents`, ville den samtidig forkastet de andre
  // bryterne brukeren hadde flyttet. Her skal ingenting lagres før «Lagre valg».
  const { setSelectedConsent, saveConsents, setActiveUI } = store.getState();

  if (!mounted) {
    return null;
  }

  const necessaryServices = scripts.filter((script) => script.category === 'necessary');
  const alwaysOnServices = scripts.filter((script) => script.alwaysLoad && script.category !== 'necessary');
  const servicesInCategory = (category: ConsentCategory) =>
    scripts.filter((script) => !script.alwaysLoad && script.category === category);

  // Klikk på selve dialogen treffer bare backdropen — innholdet ligger i et element under.
  const closeOnBackdrop = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === dialogRef.current) {
      setActiveUI('none');
    }
  };

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      data-color="primary"
      aria-labelledby="styrbord-consent-dialog-heading"
      onClose={() => setActiveUI('none')}
      onClick={closeOnBackdrop}
    >
      <div className={styles.content}>
        <div className={styles.header}>
          <h2 id="styrbord-consent-dialog-heading" className={styles.heading}>
            {translations.dialog.heading}
          </h2>
          <button
            type="button"
            className={styles.close}
            aria-label={translations.dialog.close}
            onClick={() => setActiveUI('none')}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden focusable="false">
              <path d="m6 6 12 12M18 6 6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>
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

          {categories.map((category) => {
            const services = servicesInCategory(category);
            return (
              <section key={category} className={styles.category}>
                <Switch
                  label={translations.categories[category].title}
                  description={translations.categories[category].description}
                  checked={selectedConsents[category] === true}
                  onChange={(event) => setSelectedConsent(category, event.target.checked)}
                />
                <div className={styles.services}>
                  <ServiceNames services={services} translations={translations} />
                  <CookieDetails services={services} translations={translations} />
                </div>
              </section>
            );
          })}
        </div>
      </div>

      <div className={styles.buttons}>
        <Button variant="filled" onClick={() => saveConsents('custom')}>
          {translations.dialog.savePreferences}
        </Button>
        <Button variant="outline" onClick={() => saveConsents('all')}>
          {translations.dialog.acceptAll}
        </Button>
        <Button variant="ghost" onClick={() => saveConsents('necessary')}>
          {translations.dialog.rejectAll}
        </Button>
      </div>
    </dialog>
  );
}
