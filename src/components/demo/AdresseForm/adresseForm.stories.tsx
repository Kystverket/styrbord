import type { Meta, StoryObj } from '@storybook/react';
import { AdresseForm, AdresseFormProps } from './adresseForm';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';
import { useState } from 'react';
import { Box } from '~/main';

const meta = {
  title: 'Demo/AdresseSkjema',
  component: AdresseForm,
  decorators: [
    StyrbordDecorator,
    (Story, { args }) => {
      const [data, setData] = useState(args.data);
      return (
        <Box gap={16}>
          <Story args={{ ...args, data, onChange: setData }} />
        </Box>
      );
    },
  ],
  tags: ['autodocs', 'kyv'],
} satisfies Meta<typeof AdresseForm>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps: AdresseFormProps = {
  data: {
    vegadresse: '',
    postnummer: '',
    poststed: '',
  },
};

export const Default: Story = {
  args: defaultProps,
};
