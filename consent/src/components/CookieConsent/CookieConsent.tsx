'use client';

import { Link } from '@kystverket/styrbord';
import { useConsent } from '../../hooks/useConsent';
import { useConsentStore } from '../../utility/consentContext';
import { ConsentBanner } from '../ConsentBanner/ConsentBanner';
import { ConsentPreferencesDialog } from '../ConsentPreferencesDialog/ConsentPreferencesDialog';
import { ConsentSettingsButton } from '../ConsentSettingsButton/ConsentSettingsButton';

/**
 * Samtykkeflatene samlet: banner, innstillingsdialog og knappen som åpner den igjen.
 *
 * Legges én gang inne i `<ConsentProvider>`, typisk nederst i applikasjonens layout.
 */
export function CookieConsent() {
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
 * midt i en tekst.
 */
export function ManageConsentLink({ className }: Readonly<{ className?: string }>) {
  const { translations } = useConsentStore();
  const { showPreferences } = useConsent();

  return (
    <Link asChild className={className}>
      <button type="button" onClick={showPreferences}>
        {translations.manageLink}
      </button>
    </Link>
  );
}
