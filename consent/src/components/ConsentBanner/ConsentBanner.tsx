'use client';

import type { ReactElement } from 'react';
import { useConsentStore } from '../../utility/consentContext';
import { useMissingConsentDialogWarning } from '../../utility/dialogRegistry';
import { useStoreValue } from '../../hooks/useStoreValue';
import { Button } from '../shared/Button/Button';
import styles from './ConsentBanner.module.css';

/**
 * Samtykkebanneret som vises til brukeren har tatt et valg.
 *
 * Bevisst ikke en modal: den låser ikke fokus og blokkerer ikke siden. Å sperre innholdet til
 * brukeren har svart presser fram et samtykke, og et framtvunget samtykke er ikke gyldig etter
 * GDPR. De tre valgene er likestilte — «Kun nødvendige» skal være like lett å treffe som
 * «Godta alle».
 */
export function ConsentBanner(): ReactElement | null {
  const { store, translations, showsBanner, mounted } = useConsentStore();
  const activeUI = useStoreValue(store, (state) => state.activeUI);

  const visible = mounted && showsBanner && activeUI === 'banner';
  useMissingConsentDialogWarning('ConsentBanner', visible);

  if (!visible) {
    return null;
  }

  const { saveConsents, setActiveUI } = store.getState();

  return (
    <section className={styles.banner} data-color="primary" aria-labelledby="styrbord-consent-banner-heading">
      <div className={styles.inner}>
        <div className={styles.text}>
          <h2 id="styrbord-consent-banner-heading" className={styles.heading}>
            {translations.banner.heading}
          </h2>
          <p className={styles.body}>{translations.banner.body}</p>
        </div>

        <div className={styles.actions}>
          <Button variant="filled" onClick={() => saveConsents('all')}>
            {translations.banner.acceptAll}
          </Button>
          <Button variant="outline" onClick={() => saveConsents('necessary')}>
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
