import { ValidationMessage } from '~/main';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ValidationMessage> = {
  title: 'Components/ValidationMessage',
  component: ValidationMessage,
  parameters: {
    docs: {
      description: {
        component: '[Dokumentasjon fra Designsystemet](https://designsystemet.no/no/components/validation-message)',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ValidationMessage>;

export const Preview: Story = {
  args: {
    children: 'Dette er en valideringsmelding.',
  },
};
