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
 * framtvunget ved å sperre innholdet er ikke gyldig etter GDPR, og «Godta» og «Avslå» er derfor
 * også likestilte visuelt.
 *
 * I standardvarianten `floating` må `ConsentPreferencesDialog` stå mountet ved siden av, som her:
 * «Velg selv» setter `activeUI` til `dialog`, og da skjuler banneret seg selv. Er ikke dialogen
 * der til å ta over, forsvinner banneret uten at noe kommer i stedet.
 *
 * Med `layout="banner"` ligger det øverst i innholdet, og «Velg selv» utvider banneret med
 * innstillingene.
 */
export const Default: Story = {
  render: ({ language, layout }) => (
    <ConsentDemo language={language} layout={layout}>
      <ConsentBanner />
      <ConsentPreferencesDialog />
    </ConsentDemo>
  ),
};
