'use client';

import type { ReactElement } from 'react';
import { useConsentStore } from '../../utility/consentContext';
import { useMissingConsentDialogWarning } from '../../utility/dialogRegistry';
import { useStoreValue } from '../../hooks/useStoreValue';
import styles from './ConsentSettingsButton.module.css';

/**
 * Tannhjulet på innstillingsknappen.
 *
 * Tegnet som inline SVG framfor et ikonbibliotek eller en ikonfont: pakken skal kunne brukes
 * uten at applikasjonen laster noe annet enn den ene CSS-fila.
 */
function SettingsIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px">
      <path
        color="currentColor"
        d="M480-96q-79.38 0-149.19-30T208.5-208.5Q156-261 126-330.81T96-480q0-81 31-151.5t82.5-123Q261-807 329-837.5T470-868q23 0 45 3t45 9q-8 45 5.5 82t42.03 60.96q28.53 23.96 68 33T759-681q-24 57 8.01 108.5 32.01 51.49 95.08 53.4.95 10.49 1.43 19.55T864-480q0 78-30.24 147.98-30.24 69.99-82.08 122.6t-121.92 83.01Q559.68-96 480-96Zm-60-456q25 0 42.5-17.5T480-612q0-25-17.5-42.5T420-672q-25 0-42.5 17.5T360-612q0 25 17.5 42.5T420-552Zm-96 192q25 0 42.5-17.5T384-420q0-25-17.5-42.5T324-480q-25 0-42.5 17.5T264-420q0 25 17.5 42.5T324-360Zm275.79 36q15.21 0 25.71-10.29t10.5-25.5q0-15.21-10.29-25.71t-25.5-10.5q-15.21 0-25.71 10.29t-10.5 25.5q0 15.21 10.29 25.71t25.5 10.5ZM480-168q125 0 214.5-84.5T792-462q-45-18-75-55.5T679-603q-76-11-129-63t-63-126q-63-4-120.5 19.5t-102 66.5Q220-663 194-604.5T168-480q0 129.67 91.16 220.84Q350.33-168 480-168Zm0-311Z"
      />
    </svg>
  );
}

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
export function ConsentSettingsButton(): ReactElement | null {
  const { store, translations, showsBanner, mounted } = useConsentStore();
  const activeUI = useStoreValue(store, (state) => state.activeUI);

  const visible = mounted && showsBanner && activeUI === 'none';
  useMissingConsentDialogWarning('ConsentSettingsButton', visible);

  if (!visible) {
    return null;
  }

  return (
    <button
      type="button"
      className={styles.button}
      data-color="neutral"
      aria-label={translations.manageLink}
      title={translations.manageLink}
      onClick={() => store.getState().setActiveUI('dialog')}
    >
      <SettingsIcon />
    </button>
  );
}
