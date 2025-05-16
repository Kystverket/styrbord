import type { Meta, StoryObj } from '@storybook/react';
import { TextArea, TextAreaProps } from './TextArea';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';

const meta = {
  title: 'Komponenter/TextArea',
  component: TextArea,
  decorators: [StyrbordDecorator],
  tags: ['autodocs', 'kyv-ds-hybrid'],
  argTypes: {},
} satisfies Meta<typeof TextArea>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultArgs: TextAreaProps = {
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

export const ReadOnly: Story = {
  args: {
    ...defaultArgs,
    error: false,
    readOnly: true,
  },
};

export const Disabled: Story = {
  args: {
    ...defaultArgs,
    error: false,
    disabled: true,
  },
};

export const WithCounter: Story = {
  args: {
    ...defaultArgs,
    maxLength: 500,
  },
};
