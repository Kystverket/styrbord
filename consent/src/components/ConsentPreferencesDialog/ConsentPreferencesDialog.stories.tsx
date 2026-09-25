import type { Meta, StoryObj } from '@storybook/react-vite';
import { ConsentDemo, languageArgTypes, languageArgs, type ConsentStoryArgs } from '../../../storybook/ConsentDemo';
import { ConsentPreferencesDialog } from './ConsentPreferencesDialog';

const meta: Meta<ConsentStoryArgs> = {
  title: 'Samtykke/ConsentPreferencesDialog',
  component: ConsentPreferencesDialog,
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
 * Dialogen åpnet med én gang.
 *
 * Kategoriene og kapseltabellene er utledet av tjenestelista — det er ingen fast liste i
 * komponenten. Plausible havner i «alltid på»-seksjonen fordi den går uten samtykke, mens
 * Hotjar og PostHog får hver sin bryter.
 */
export const Default: Story = {
  render: ({ language }) => (
    <ConsentDemo language={language} start="dialog">
      <ConsentPreferencesDialog />
    </ConsentDemo>
  ),
};
