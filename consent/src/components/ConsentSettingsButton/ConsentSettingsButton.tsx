'use client';

import { Icon, IconButton } from '@kystverket/styrbord';
import { useConsentStore } from '../../utility/consentContext';
import { useStoreValue } from '../../hooks/useStoreValue';
import styles from './ConsentSettingsButton.module.css';

/**
 * Flytende knapp nederst til høyre som åpner samtykkeinnstillingene igjen.
 *
 * Å trekke tilbake et samtykke skal være like enkelt som å gi det, så inngangen må være
 * tilgjengelig fra hvor som helst på siden — ikke bare nederst i bunnteksten, der den krever
 * at brukeren scroller helt ned for å finne den.
 *
 * Vises ikke mens banneret er oppe: banneret har allerede en «velg selv»-knapp, og to knapper
 * som gjør det samme i samme hjørne er bare forvirrende. Vises heller ikke når applikasjonen
 * ikke har noen tjenester som avhenger av samtykke, for da er det ingenting å administrere.
 */
export function ConsentSettingsButton() {
  const { store, translations, showsBanner, mounted } = useConsentStore();
  const activeUI = useStoreValue(store, (state) => state.activeUI);

  if (!mounted || !showsBanner || activeUI !== 'none') {
    return null;
  }

  return (
    <IconButton
      aria-label={translations.manageLink}
      tooltip={translations.manageLink}
      variant="outline"
      color="neutral"
      className={styles.button}
      onClick={() => store.getState().setActiveUI('dialog')}
    >
      <Icon material="settings" />
    </IconButton>
  );
}
