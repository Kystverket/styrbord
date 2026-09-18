import type { Meta, StoryObj } from '@storybook/react-vite';
import { ConsentDemo, languageArgTypes, languageArgs, type ConsentStoryArgs } from '../../../storybook/ConsentDemo';
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
 * Banneret alene, uten dialogen bak «Velg selv» — nyttig for å se selve flaten, men i en
 * applikasjon skal `ConsentPreferencesDialog` alltid være mountet ved siden av.
 *
 * Merk at banneret ikke er en modal: det låser verken fokus eller siden bak seg. Et samtykke
 * som er framtvunget ved å sperre innholdet er ikke gyldig etter GDPR, og de tre valgene er
 * derfor også likestilte visuelt.
 */
export const Default: Story = {
  render: ({ language }) => (
    <ConsentDemo language={language}>
      <ConsentBanner />
    </ConsentDemo>
  ),
};
