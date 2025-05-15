import type { Meta, StoryObj } from '@storybook/react';
import { TextInput, TextInputProps } from './TextInput';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';

const meta = {
  title: 'Designsystemet/TextInput',
  component: TextInput,
  decorators: [StyrbordDecorator],
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TextInput>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultArgs: TextInputProps = {
  onBlur: () => console.log('onBlur'),
  onChange: (value: string) => console.log(`onChange value: ${value}`),
  value: '',
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
  },
};

export const WithError: Story = {
  args: {
    ...defaultArgs,
    error: 'error',
  },
};

export const WithBoolError: Story = {
  args: {
    ...defaultArgs,
    error: true,
  },
};

export const Disabled: Story = {
  args: {
    ...defaultArgs,
    error: true,
    disabled: true,
  },
};

export const ReadOnly: Story = {
  args: {
    ...defaultArgs,
    error: true,
    readOnly: true,
  },
};
