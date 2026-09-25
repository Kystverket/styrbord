import type { Meta, StoryObj } from '@storybook/react-vite';
import { ConsentDemo, languageArgTypes, languageArgs, type ConsentStoryArgs } from '../../../storybook/ConsentDemo';
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
  render: ({ language }) => (
    <ConsentDemo language={language} start="answered">
      <ConsentSettingsButton />
      <ConsentPreferencesDialog />
    </ConsentDemo>
  ),
};
