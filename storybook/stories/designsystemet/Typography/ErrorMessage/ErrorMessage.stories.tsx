import type { Meta, StoryObj } from '@storybook/react';

import { ErrorMessage } from '@digdir/designsystemet-react';

const meta: Meta<typeof ErrorMessage> = {
  title: 'Designsystemet/Typography/ErrorMessage',
  component: ErrorMessage,
};

export default meta;

type Story = StoryObj<typeof ErrorMessage>;

export const Preview: Story = {
  args: {
    children: 'Dette er en beskrivende feilmelding.',
    spacing: false,
    size: 'md',
    error: true,
  },
};
