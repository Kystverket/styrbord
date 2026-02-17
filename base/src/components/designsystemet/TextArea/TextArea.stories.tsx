import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TextArea, TextAreaProps } from './TextArea';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';

const meta = {
  title: 'Form/TextArea',
  component: TextArea,
  decorators: [StyrbordDecorator],
  tags: ['autodocs', 'ds-override'],
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: '[Dokumentasjon fra Designsystemet](https://designsystemet.no/no/components/docs/textarea/overview)',
      },
    },
  },
} satisfies Meta<typeof TextArea>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultArgs: TextAreaProps = {
  onBlur: () => console.log('onBlur'),
  onChange: (value: string) => console.log(`onChange value: ${value}`),
  value: '',
  label: 'This is a label',
};

const renderInteractive: Story['render'] = (args) => {
  const [value, setValue] = useState(args.value ?? '');

  return (
    <TextArea
      {...args}
      value={value}
      onChange={(nextValue) => {
        setValue(nextValue);
        args.onChange?.(nextValue);
      }}
    />
  );
};

export const Default: Story = {
  args: defaultArgs,
  render: renderInteractive,
};

export const Required: Story = {
  args: {
    ...defaultArgs,
    required: true,
  },
  render: renderInteractive,
};

export const Optional: Story = {
  args: {
    ...defaultArgs,
    optional: true,
  },
  render: renderInteractive,
};

export const OptionalText: Story = {
  args: {
    ...defaultArgs,
    optional: 'Spesialtilpasset verdi',
  },
  render: renderInteractive,
};

export const WithPlaceholder: Story = {
  args: {
    ...defaultArgs,
    placeholder: 'placeholder',
  },
  render: renderInteractive,
};

export const WithError: Story = {
  args: {
    ...defaultArgs,
    error: 'error',
  },
  render: renderInteractive,
};

export const ReadOnly: Story = {
  args: {
    ...defaultArgs,
    error: false,
    readOnly: true,
  },
  render: renderInteractive,
};

export const Disabled: Story = {
  args: {
    ...defaultArgs,
    error: false,
    disabled: true,
  },
  render: renderInteractive,
};

export const WithCounter: Story = {
  args: {
    ...defaultArgs,
    maxLength: 500,
  },
  render: renderInteractive,
};
