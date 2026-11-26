'use client';

import { useEffect, useRef, type MouseEvent, type ReactElement } from 'react';
import { useConsentStore } from '../../utility/consentContext';
import { useRegisterConsentDialog } from '../../utility/dialogRegistry';
import { useStoreValue } from '../../hooks/useStoreValue';
import { ConsentPreferencesActions, ConsentPreferencesFields } from '../ConsentPreferences/ConsentPreferences';
import styles from './ConsentPreferencesDialog.module.css';

/**
 * Innstillingsdialogen i `floating`-varianten (standard), der brukeren krysser av kategoriene
 * enkeltvis.
 *
 * Dialogen er modal, men åpnes bare når brukeren selv ber om det via «Velg selv» eller
 * innstillingsknappen — den tvinger aldri fram et valg. Rendrer ingenting i `banner`-varianten:
 * der åpnes innstillingene i selve banneret.
 *
 * Bygget på `<dialog>` direkte. `showModal()` gir fokusfelle, Escape og backdrop gratis, som er
 * hele grunnen til at vi ikke trenger et dialogbibliotek for å klare oss uten Styrbord.
 */
export function ConsentPreferencesDialog(): ReactElement | null {
  const { store, translations, mounted, layout } = useConsentStore();

  const activeUI = useStoreValue(store, (state) => state.activeUI);

  const dialogRef = useRef<HTMLDialogElement>(null);
  const floating = layout === 'floating';
  const open = floating && activeUI === 'dialog';

  // Melder fra om at dialogen finnes, slik at banneret og innstillingsknappen kan advare
  // dersom de står der uten den. Bare i `floating`: i `banner` er det banneret som tar over.
  useRegisterConsentDialog(floating);

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

  if (!mounted || !floating) {
    return null;
  }

  const { setActiveUI } = store.getState();

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
        <ConsentPreferencesFields />
      </div>

      <ConsentPreferencesActions className={styles.buttons} />
    </dialog>
  );
}
