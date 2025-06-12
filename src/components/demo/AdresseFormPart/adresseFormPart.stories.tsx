import type { Meta, StoryObj } from '@storybook/react';
import { AdresseFormPart, AdresseFormPartProps } from './adresseFormPart';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';
import { useState } from 'react';

const meta = {
  title: 'Demo/AdresseFormPart',
  component: AdresseFormPart,
  decorators: [
    StyrbordDecorator,
    (Story, { args }) => {
      const [data, setData] = useState(args.data);
      return <Story args={{ ...args, data, onChange: setData }} />;
    },
  ],
  tags: ['autodocs', 'kyv'],
} satisfies Meta<typeof AdresseFormPart>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps: AdresseFormPartProps = {
  data: {
    vegadresse: '',
    postnummer: '',
    poststed: '',
  },
};

export const Default: Story = {
  args: defaultProps,
};
