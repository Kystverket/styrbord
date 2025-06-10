import type { Meta, StoryObj } from '@storybook/react';
import { SkadeinnmeldingForm, SkadeinnmeldingFormProps } from './skadeinnmeldingForm';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';
import { defaultSkadeinnmeldingData } from '../skadeinnmelding.data';
import { useState } from 'react';

const meta = {
  title: 'Demo/SkadeinnmeldingSkjema',
  component: SkadeinnmeldingForm,
  decorators: [
    StyrbordDecorator,
    (Story, { args }) => {
      const [data, setData] = useState(args.data);
      return <Story args={{ ...args, data, onChange: setData }} />;
    },
  ],
  tags: ['autodocs', 'kyv'],
} satisfies Meta<typeof SkadeinnmeldingForm>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps: SkadeinnmeldingFormProps = {
  data: defaultSkadeinnmeldingData,
};

export const Default: Story = {
  args: defaultProps,
};
