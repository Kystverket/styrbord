import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  ConsentDemo,
  languageArgTypes,
  languageArgs,
  onlyNecessaryServices,
  type ConsentStoryArgs,
} from '../../../storybook/ConsentDemo';
import { CookieConsent, ManageConsentLink } from './CookieConsent';
import styles from './CookieConsent.stories.module.css';

const meta: Meta<ConsentStoryArgs> = {
  title: 'Samtykke/CookieConsent',
  component: CookieConsent,
  tags: ['autodocs', 'kyv'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: languageArgTypes,
  args: languageArgs,
};

export default meta;
type Story = StoryObj<ConsentStoryArgs>;

/**
 * Flatene slik en applikasjon normalt mounter dem: banneret vises til brukeren har svart,
 * innstillingene åpnes derfra, og innstillingsknappen står igjen i hjørnet etterpå.
 *
 * Standardvarianten `banner` legger banneret øverst i innholdet, og «Velg selv» utvider
 * banneret med avkrysningsbokser. Bytt til `modal` under Controls for et banner som ligger fast
 * over innholdet og innstillinger i en modal dialog.
 *
 * Trykk «Nullstill samtykke» for å få banneret tilbake — svaret lagres i en informasjonskapsel
 * og forsvinner ellers ikke ved reload.
 */
export const Default: Story = {
  render: ({ language, layout }) => (
    <ConsentDemo language={language} layout={layout}>
      <CookieConsent />
    </ConsentDemo>
  ),
};

/**
 * `layout="modal"`: banneret ligger fast nederst over innholdet, og innstillingene åpnes i en
 * modal dialog. For applikasjoner som ikke kan ta inn et banner øverst i layouten.
 */
export const Modal: Story = {
  args: { layout: 'modal' },
  render: ({ language, layout }) => (
    <ConsentDemo language={language} layout={layout}>
      <CookieConsent />
    </ConsentDemo>
  ),
};

/**
 * Uten tjenester som avhenger av samtykke er det ingenting å spørre om, og verken banner eller
 * innstillingsknapp vises. Resten av samtykkeløsningen mountes likevel, så `useConsent` virker
 * som før.
 */
export const UtenSporingstjenester: Story = {
  render: ({ language, layout }) => (
    <ConsentDemo language={language} layout={layout} services={onlyNecessaryServices}>
      <CookieConsent />
    </ConsentDemo>
  ),
};

/**
 * `ManageConsentLink` er alternativet til den flytende knappen: en vanlig tekstlenke som kan
 * stå i bunnteksten eller midt i en personvernerklæring.
 */
export const MedTekstlenke: Story = {
  render: ({ language, layout }) => (
    <ConsentDemo language={language} layout={layout} start="answered">
      <CookieConsent />
      <section className={styles.prose}>
        <h2>Informasjonskapsler</h2>
        <p>
          Du kan når som helst <ManageConsentLink /> og endre hva vi får lov til å måle.
        </p>
      </section>
    </ConsentDemo>
  ),
};
