import type { Meta, StoryObj } from '@storybook/react';

import { Chip } from '@digdir/designsystemet-react';

export default {
  title: 'Komponenter/Chip/Removable',
  component: Chip.Removable,
} as Meta;

type Story = StoryObj<typeof Chip.Removable>;

export const Preview: Story = {
  args: {
    children: 'Nynorsk',
    size: 'md',
    'aria-label': 'Slett nynorsk',
    disabled: false,
  },
};
