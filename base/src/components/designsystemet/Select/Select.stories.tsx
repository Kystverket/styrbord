import type { Meta, StoryObj } from '@storybook/react';
import { Select, SelectProps } from './Select';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';

const meta = {
  title: 'Form/Select',
  component: Select,
  decorators: [StyrbordDecorator],
  tags: ['autodocs', 'ds-override'],
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: '[Dokumentasjon fra Designsystemet](https://designsystemet.no/no/components/docs/select/overview)',
      },
    },
  },
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps: SelectProps = {
  label: 'Hmm',
  onChange: (value) => console.log('onChange ' + value),
  value: undefined,
  placeholder: 'Velg en',
  options: [
    { label: 'Donald Duck', value: 'dd' },
    { label: 'Skrue McDuck', value: 'smd' },
    { label: 'Gulbrand Gråstein', value: 'gg' },
    { label: 'Rikerud', value: 'rr' },
  ],
};

export const Default: Story = {
  args: defaultProps,
};

export const WithValue: Story = {
  args: {
    ...defaultProps,
    value: defaultProps.options![1].value,
  },
};

export const WithoutPlaceholderWithoutValue: Story = {
  args: {
    ...defaultProps,
    value: undefined,
    placeholder: undefined,
  },
};

export const WithoutPlaceholderWithValue: Story = {
  args: {
    ...defaultProps,
    value: defaultProps.options![1].value,
    placeholder: undefined,
  },
};

export const Optional: Story = {
  args: { ...defaultProps, value: defaultProps.options![1].value, optional: true },
};
export const OptionalText: Story = {
  args: { ...defaultProps, value: defaultProps.options![1].value, optional: 'Spesialtilpasset Verdi' },
};
export const Required: Story = {
  args: { ...defaultProps, value: defaultProps.options![1].value, required: true },
};
