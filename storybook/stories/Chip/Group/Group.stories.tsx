import type { Meta, StoryFn } from '@storybook/react';

import { Chip } from '@digdir/designsystemet-react';

const meta: Meta<typeof Chip.Group> = {
  title: 'Komponenter/Chip/Group',
  component: Chip.Group,
};

export default meta;

type Story = StoryFn<typeof Chip.Group>;

export const Preview: Story = (args) => (
  <Chip.Group {...args}>
    <Chip.Toggle>Nynorsk</Chip.Toggle>
    <Chip.Toggle>Bokmål</Chip.Toggle>
  </Chip.Group>
);

Preview.args = {
  size: 'sm',
};
