import type { Meta, StoryObj } from '@storybook/react-vite';
import { ConsentDemo, languageArgTypes, languageArgs, type ConsentStoryArgs } from '../../../storybook/ConsentDemo';
import { ConsentPreferencesDialog } from '../ConsentPreferencesDialog/ConsentPreferencesDialog';
import { ConsentBanner } from './ConsentBanner';

const meta: Meta<ConsentStoryArgs> = {
  title: 'Samtykke/ConsentBanner',
  component: ConsentBanner,
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
 * Banneret er ikke en modal: det låser verken fokus eller siden bak seg. Et samtykke som er
 * framtvunget ved å sperre innholdet er ikke gyldig etter GDPR, og de tre valgene er derfor
 * også likestilte visuelt.
 *
 * `ConsentPreferencesDialog` står mountet ved siden av, som den må gjøre i en applikasjon også:
 * «Velg selv» setter `activeUI` til `dialog`, og da skjuler banneret seg selv. Er ikke dialogen
 * der til å ta over, forsvinner banneret uten at noe kommer i stedet, og brukeren sitter igjen
 * uten vei videre.
 */
export const Default: Story = {
  render: ({ language }) => (
    <ConsentDemo language={language}>
      <ConsentBanner />
      <ConsentPreferencesDialog />
    </ConsentDemo>
  ),
};
