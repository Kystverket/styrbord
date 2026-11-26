import type { Meta, StoryObj } from '@storybook/react-vite';
import { ConsentDemo, languageArgTypes, languageArgs, type ConsentStoryArgs } from '../../../storybook/ConsentDemo';
import { ConsentBanner } from '../ConsentBanner/ConsentBanner';
import { ConsentPreferencesDialog } from '../ConsentPreferencesDialog/ConsentPreferencesDialog';
import { ConsentSettingsButton } from './ConsentSettingsButton';

const meta: Meta<ConsentStoryArgs> = {
  title: 'Samtykke/ConsentSettingsButton',
  component: ConsentSettingsButton,
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
 * Knappen slik den ser ut etter at brukeren har svart på banneret. Den vises ikke mens banneret
 * står oppe — banneret har allerede en «Velg selv»-knapp, og to innganger til det samme i
 * samme hjørne er bare forvirrende.
 */
export const Default: Story = {
  render: ({ language, layout }) => (
    <ConsentDemo language={language} layout={layout} start="answered">
      {/* Innstillingene åpnes i banneret (`banner`) eller i dialogen (`modal`), så begge står her. */}
      <ConsentBanner />
      <ConsentSettingsButton />
      <ConsentPreferencesDialog />
    </ConsentDemo>
  ),
};

/**
 * Med `layout="modal"` åpner knappen innstillingene i en modal dialog, slik i 2.x. Knappen gjør
 * det samme i begge varianter — setter `activeUI` til `dialog` — og det er varianten som avgjør
 * om banneret utvides eller dialogen åpnes.
 *
 * Her trengs bare dialogen ved siden av knappen; banneret er ikke med fordi brukeren alt har
 * svart.
 */
export const Modal: Story = {
  args: { layout: 'modal' },
  render: ({ language, layout }) => (
    <ConsentDemo language={language} layout={layout} start="answered">
      <ConsentSettingsButton />
      <ConsentPreferencesDialog />
    </ConsentDemo>
  ),
};
