import { Label } from '@digdir/designsystemet-react';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Label> = {
  title: 'Form/Label',
  component: Label,
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Preview: Story = {
  args: {
    children: 'Vennligst skriv inn fødselsnummer. 11 tegn',
    weight: 'medium',
  },
};
