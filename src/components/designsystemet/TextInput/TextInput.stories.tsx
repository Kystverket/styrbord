import type { Meta, StoryObj } from '@storybook/react';
import { TextInput, TextInputProps } from './TextInput';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';

const meta = {
  title: 'Form/TextInput',
  component: TextInput,
  decorators: [StyrbordDecorator],
  tags: ['autodocs', 'kyv'],
  argTypes: {},
} satisfies Meta<typeof TextInput>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultArgs: TextInputProps = {
  onBlur: () => console.log('onBlur'),
  onChange: (value: string) => console.log(`onChange value: ${value}`),
  value: '',
  label: 'This is a label',
  description: 'This is a description',
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

export const Disabled: Story = {
  args: {
    ...defaultArgs,
    disabled: true,
  },
};

export const ReadOnly: Story = {
  args: {
    ...defaultArgs,
    readOnly: true,
  },
};

export const Loading: Story = {
  args: {
    ...defaultArgs,
    loading: true,
  },
};
