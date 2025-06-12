import type { Meta, StoryObj } from '@storybook/react';
import { AdresseFormPart, AdresseFormPartProps } from './adresseFormPart';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';
import { useState } from 'react';

const meta = {
  title: 'Demo/AdresseFormPart',
  component: AdresseFormPart,
  decorators: [StyrbordDecorator],
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

export const Error: Story = {
  args: {
    ...defaultProps,
    validationErrors: { vegadresse: 'Dette feltet er påkrevd', postnummer: 'Ugyldig postnummer' },
  },
};

export const Interactive: Story = {
  args: defaultProps,
  decorators: [
    (Story, { args }) => {
      const [data, setData] = useState(args.data);
      return <Story args={{ ...args, data, onChange: setData }} />;
    },
  ],
};
