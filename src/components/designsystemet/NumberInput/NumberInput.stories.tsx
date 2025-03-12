import type { Meta, StoryObj } from '@storybook/react';
import { NumberInput, NumberInputProps } from './NumberInput';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';

const meta = {
  title: 'Designsystemet/NumberInput',
  component: NumberInput,
  decorators: [StyrbordDecorator],
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof NumberInput>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultArgs: NumberInputProps = {
  onBlur: () => console.log('onBlur'),
  onChange: (value?: number) => console.log(`onChange value: ${value}`),
  value: 0,
  label: 'This is a label',
};

export const Default: Story = {
  args: defaultArgs,
};

export const Required: Story = {
  args: {
    ...defaultArgs,
    required: true,
  },
};

export const Optional: Story = {
  args: {
    ...defaultArgs,
    optional: true,
  },
};

export const OptionalText: Story = {
  args: {
    ...defaultArgs,
    optional: 'Spesialtilpasset verdi',
  },
};

export const WithPlaceholder: Story = {
  args: {
    ...defaultArgs,
    placeholder: 'placeholder',
    value: undefined,
  },
};

export const WithError: Story = {
  args: {
    ...defaultArgs,
    error: 'error',
  },
};

export const AlignRight: Story = {
  args: {
    ...defaultArgs,
    align: 'right',
    value: 123,
    suffix: 'kr',
  },
};
