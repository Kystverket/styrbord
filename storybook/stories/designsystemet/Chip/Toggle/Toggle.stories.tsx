import type { Meta, StoryObj } from '@storybook/react';

import { Chip } from '@digdir/designsystemet-react';

const meta: Meta<typeof Chip.Toggle> = {
  title: 'Designsystemet/Chip/Toggle',
  component: Chip.Toggle,
};

export default meta;

type Story = StoryObj<typeof Chip.Toggle>;

export const Preview: Story = {
  args: {
    children: 'Nynorsk',
    size: 'md',
    selected: false,
    checkmark: false,
    disabled: false,
  },
};
