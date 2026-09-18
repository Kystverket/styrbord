'use client';

import type { ReactElement } from 'react';
import { useConsent } from '../../hooks/useConsent';
import { useConsentStore } from '../../utility/consentContext';
import { ConsentBanner } from '../ConsentBanner/ConsentBanner';
import { ConsentPreferencesDialog } from '../ConsentPreferencesDialog/ConsentPreferencesDialog';
import { ConsentSettingsButton } from '../ConsentSettingsButton/ConsentSettingsButton';
import styles from './CookieConsent.module.css';

/**
 * Samtykkeflatene samlet: banner, innstillingsdialog og knappen som åpner den igjen.
 *
 * Legges én gang inne i `<ConsentProvider>`, typisk nederst i applikasjonens layout.
 */
export function CookieConsent(): ReactElement {
  return (
    <>
      <ConsentBanner />
      <ConsentPreferencesDialog />
      <ConsentSettingsButton />
    </>
  );
}

/**
 * Samtykkeinnstillingene som en vanlig tekstlenke, til bruk i løpende tekst — for eksempel i
 * en personvernerklæring som omtaler informasjonskapsler.
 *
 * Et alternativ til knappen i hjørnet for de som heller vil ha inngangen i bunnteksten eller
 * midt i en tekst. Det er en `<button>`, ikke en `<a>`: den navigerer ingen steder, og en lenke
 * uten mål er både uventet for skjermlesere og ubrukelig å åpne i ny fane.
 */
export function ManageConsentLink({ className }: Readonly<{ className?: string }>): ReactElement {
  const { translations } = useConsentStore();
  const { showPreferences } = useConsent();

  return (
    <button type="button" className={[styles.link, className].filter(Boolean).join(' ')} onClick={showPreferences}>
      {translations.manageLink}
    </button>
  );
}
