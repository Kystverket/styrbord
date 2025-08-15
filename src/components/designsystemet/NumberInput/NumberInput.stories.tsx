import type { Meta, StoryObj } from '@storybook/react';
import { NumberInput, NumberInputProps } from './NumberInput';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';
import { useState } from 'react';

const Wrapper = (props: NumberInputProps) => {
  const [value, setValue] = useState<number | undefined | null>(props.value);

  const onChange = (v: number | undefined) => {
    setValue(v);
    props.onChange?.(v);
  };

  return <NumberInput {...props} value={value} onChange={onChange} />;
};

const meta = {
  title: 'Form/NumberInput',
  component: Wrapper,
  decorators: [StyrbordDecorator],
  tags: ['autodocs', 'ds'],
  argTypes: {},
} satisfies Meta<typeof Wrapper>;

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

export const Decimal: Story = {
  args: {
    ...defaultArgs,
    inputMode: 'decimal',
    suffix: 'm',
  },
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

export const AlignRight: Story = {
  args: {
    ...defaultArgs,
    align: 'right',
    value: 123,
    suffix: 'kr',
  },
};
