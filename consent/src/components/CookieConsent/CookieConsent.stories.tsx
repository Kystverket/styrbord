import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box, Heading, Paragraph } from '@kystverket/styrbord';
import {
  ConsentDemo,
  languageArgTypes,
  languageArgs,
  onlyNecessaryServices,
  type ConsentStoryArgs,
} from '../../../storybook/ConsentDemo';
import { CookieConsent, ManageConsentLink } from './CookieConsent';

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
 * Alle tre flatene på én gang, slik en applikasjon normalt mounter dem: banneret vises til
 * brukeren har svart, dialogen åpnes derfra, og innstillingsknappen står igjen i hjørnet
 * etterpå.
 *
 * Trykk «Nullstill samtykke» for å få banneret tilbake — svaret lagres i en informasjonskapsel
 * og forsvinner ellers ikke ved reload.
 */
export const Default: Story = {
  render: ({ language }) => (
    <ConsentDemo language={language}>
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
  render: ({ language }) => (
    <ConsentDemo language={language} services={onlyNecessaryServices}>
      <CookieConsent />
    </ConsentDemo>
  ),
};

/**
 * `ManageConsentLink` er alternativet til den flytende knappen: en vanlig tekstlenke som kan
 * stå i bunnteksten eller midt i en personvernerklæring.
 */
export const MedTekstlenke: Story = {
  render: ({ language }) => (
    <ConsentDemo language={language} start="answered">
      <Box gap={8} p={24}>
        <Heading level={2} data-size="xs">
          Informasjonskapsler
        </Heading>
        <Paragraph>
          Du kan når som helst <ManageConsentLink /> og endre hva vi får lov til å måle.
        </Paragraph>
      </Box>
      <CookieConsent />
    </ConsentDemo>
  ),
};
