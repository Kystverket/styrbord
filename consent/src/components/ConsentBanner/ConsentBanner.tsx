'use client';

import { Box, Button, Heading, Paragraph } from '@kystverket/styrbord';
import { useConsentStore } from '../../utility/consentContext';
import { useStoreValue } from '../../hooks/useStoreValue';
import styles from './ConsentBanner.module.css';

/**
 * Samtykkebanneret som vises til brukeren har tatt et valg.
 *
 * Bevisst ikke en modal: den låser ikke fokus og blokkerer ikke siden. Å sperre innholdet til
 * brukeren har svart presser fram et samtykke, og et framtvunget samtykke er ikke gyldig etter
 * GDPR. De tre valgene er likestilte — «Kun nødvendige» skal være like lett å treffe som
 * «Godta alle».
 */
export function ConsentBanner() {
  const { store, translations, showsBanner, mounted } = useConsentStore();
  const activeUI = useStoreValue(store, (state) => state.activeUI);

  if (!mounted || !showsBanner || activeUI !== 'banner') {
    return null;
  }

  const { saveConsents, setActiveUI } = store.getState();

  return (
    <section className={styles.banner} aria-labelledby="styrbord-consent-banner-heading">
      <div className={styles.inner}>
        <Box gap={8}>
          <Heading id="styrbord-consent-banner-heading" level={2} data-size="xs">
            {translations.banner.heading}
          </Heading>
          <Paragraph data-size="sm">{translations.banner.body}</Paragraph>
        </Box>

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
