import type { Meta, StoryObj } from '@storybook/react';
import { Select, SelectProps } from './Select';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';

const meta = {
  title: 'Designsystemet/Select',
  component: Select,
  decorators: [StyrbordDecorator],
  tags: ['autodocs'],
  argTypes: {},
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
