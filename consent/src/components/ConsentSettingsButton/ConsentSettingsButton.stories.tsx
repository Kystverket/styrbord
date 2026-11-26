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
 *
 * I standardvarianten `floating` åpner den innstillingene i en modal dialog.
 */
export const Default: Story = {
  render: ({ language, layout }) => (
    <ConsentDemo language={language} layout={layout} start="answered">
      {/* Innstillingene åpnes i dialogen (`floating`) eller i banneret (`banner`), så begge står her. */}
      <ConsentBanner />
      <ConsentSettingsButton />
      <ConsentPreferencesDialog />
    </ConsentDemo>
  ),
};

/**
 * Med `layout="banner"` åpner knappen innstillingene i banneret øverst på siden, og flytter fokus
 * dit. Knappen gjør det samme i begge varianter — setter `activeUI` til `dialog` — og det er
 * varianten som avgjør om dialogen åpnes eller banneret utvides.
 *
 * Her trengs bare banneret ved siden av knappen; det er banneret som viser innstillingene.
 */
export const Toppbanner: Story = {
  args: { layout: 'banner' },
  render: ({ language, layout }) => (
    <ConsentDemo language={language} layout={layout} start="answered">
      <ConsentBanner />
      <ConsentSettingsButton />
    </ConsentDemo>
  ),
};
