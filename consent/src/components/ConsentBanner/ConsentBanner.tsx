'use client';

import { useEffect, useRef, type ReactElement } from 'react';
import { useConsentStore } from '../../utility/consentContext';
import { useMissingConsentDialogWarning, useRegisterConsentDialog } from '../../utility/dialogRegistry';
import { useStoreValue } from '../../hooks/useStoreValue';
import { ConsentPreferencesActions, ConsentPreferencesFields } from '../ConsentPreferences/ConsentPreferences';
import { Button } from '../shared/Button/Button';
import styles from './ConsentBanner.module.css';

/**
 * Samtykkebanneret som vises til brukeren har tatt et valg.
 *
 * I `banner`-varianten (standard) ligger det i innholdet og skyver siden ned, slik
 * Designsystemet anbefaler. Det skal derfor stå først i `<body>`, før «Hopp til hovedinnhold».
 * «Velg selv» utvider banneret med innstillingene i stedet for å åpne en dialog, og det er også
 * her innstillingsknappen og `ManageConsentLink` lander — med fokus flyttet hit, så brukeren
 * ikke blir stående igjen der hen klikket.
 *
 * I `modal`-varianten ligger det fast nederst i vinduet, og «Velg selv» åpner
 * `ConsentPreferencesDialog`.
 *
 * Uansett variant er det ikke en modal: det låser ikke fokus og blokkerer ikke siden. Å sperre
 * innholdet til brukeren har svart presser fram et samtykke, og et framtvunget samtykke er ikke
 * gyldig etter GDPR. «Godta» og «Avslå» ser like ut — å si nei skal være like lett som å si ja.
 */
export function ConsentBanner(): ReactElement | null {
  const { store, translations, showsBanner, mounted, layout } = useConsentStore();
  const activeUI = useStoreValue(store, (state) => state.activeUI);
  const consentInfo = useStoreValue(store, (state) => state.consentInfo);

  // Innstillingene vises i banneret også når appen ikke har tjenester som krever samtykke: da
  // kan brukeren fortsatt åpne dem via `ManageConsentLink` og se hva som lagres.
  const expanded = layout === 'banner' && activeUI === 'dialog';
  const visible = mounted && (expanded || (showsBanner && activeUI === 'banner'));
  // I `banner`-varianten er det banneret selv som viser innstillingene, så det trenger ingen
  // dialog — men innstillingsknappen og `ManageConsentLink` trenger banneret.
  useRegisterConsentDialog(layout === 'banner');
  useMissingConsentDialogWarning('ConsentBanner', visible && layout === 'modal');

  const headingRef = useRef<HTMLHeadingElement>(null);
  const wasExpanded = useRef(expanded);

  // Flytter fokus til overskriften når banneret utvides eller slås sammen igjen. Ikke ved første
  // visning: et banner som stjeler fokus idet siden lastes, er nettopp det vi ikke vil ha.
  useEffect(() => {
    if (wasExpanded.current === expanded) {
      return;
    }
    wasExpanded.current = expanded;

    const heading = headingRef.current;
    if (!heading) {
      return;
    }
    heading.scrollIntoView({ block: 'start' });
    heading.focus({ preventScroll: true });
  }, [expanded]);

  if (!visible) {
    return null;
  }

  const { saveConsents, setActiveUI } = store.getState();
  const className = [styles.banner, layout === 'modal' && styles.floating].filter(Boolean).join(' ');

  if (expanded) {
    // Tilbake til banneret om brukeren ikke har svart ennå, ellers helt bort.
    const close = () => setActiveUI(consentInfo === null ? 'banner' : 'none');

    return (
      <section className={className} data-color="primary" aria-labelledby="styrbord-consent-banner-heading">
        <div className={styles.inner}>
          <div className={styles.header}>
            <h2 id="styrbord-consent-banner-heading" ref={headingRef} tabIndex={-1} className={styles.heading}>
              {translations.dialog.heading}
            </h2>
            <button type="button" className={styles.close} aria-label={translations.dialog.close} onClick={close}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden focusable="false">
                <path d="m6 6 12 12M18 6 6 18" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <ConsentPreferencesFields />
          <ConsentPreferencesActions />
        </div>
      </section>
    );
  }

  return (
    <section className={className} data-color="primary" aria-labelledby="styrbord-consent-banner-heading">
      <div className={styles.inner}>
        <div className={styles.text}>
          <h2 id="styrbord-consent-banner-heading" ref={headingRef} tabIndex={-1} className={styles.heading}>
            {translations.banner.heading}
          </h2>
          <p className={styles.body}>{translations.banner.body}</p>
        </div>

        <div className={styles.actions}>
          <Button variant="filled" onClick={() => saveConsents('all')}>
            {translations.banner.acceptAll}
          </Button>
          <Button variant="filled" onClick={() => saveConsents('necessary')}>
            {translations.banner.rejectAll}
          </Button>
          <Button variant="ghost" onClick={() => setActiveUI('dialog')}>
            {translations.banner.managePreferences}
          </Button>
        </div>
      </div>
    </section>
  );
}
