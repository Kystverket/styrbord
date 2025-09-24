import type { Meta, StoryObj } from '@storybook/react';
import { DateTimePicker, DateTimePickerProps } from './DateTimePicker';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';
import { useState } from 'react';

const Wrapper = (props: DateTimePickerProps) => {
  const [value, setValue] = useState<Date | undefined>(props.value);

  const onChange = (v: Date | undefined) => {
    setValue(v);
    props.onChange?.(v);
  };

  return <DateTimePicker {...props} value={value} onChange={onChange} />;
};

const meta = {
  title: 'Form/DateTimepicker',
  component: Wrapper,
  decorators: [StyrbordDecorator],
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Wrapper>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps: DateTimePickerProps = {
  label: 'Datepicker',
  description: 'Description',
  value: undefined,
  onChange: (date) => console.log('onChange ', date),
};

export const Default: Story = {
  args: defaultProps,
};

export const WithoutDescription: Story = {
  args: { ...defaultProps, description: '' },
};

export const WithValue: Story = {
  args: { ...defaultProps, value: new Date() },
};

export const WithError: Story = {
  args: { ...defaultProps, value: new Date(), error: 'Error message' },
};
