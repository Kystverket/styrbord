import type { Meta, StoryObj } from '@storybook/react';
import { Datepicker, DatepickerProps } from './Datepicker';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';
import { useState } from 'react';

const Wrapper = (props: DatepickerProps) => {
  const [value, setValue] = useState<Date | undefined>(props.value);

  const onChange = (v: Date | undefined) => {
    setValue(v);
    props.onChange?.(v);
  };

  return <Datepicker {...props} value={value} onChange={onChange} />;
};

const meta = {
  title: 'Form/Datepicker',
  component: Wrapper,
  decorators: [StyrbordDecorator],
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Wrapper>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps: DatepickerProps = {
  label: 'Datepicker',
  description: 'Description',
  value: undefined,
  onChange: (date) => console.log('onChange ', date),
};

export const Default: Story = {
  args: defaultProps,
};
export const WithoutCalendarIcon: Story = {
  args: { ...defaultProps, showCalendarIcon: false },
};

export const WithoutDescription: Story = {
  args: { ...defaultProps, description: '' },
};
export const WithValue: Story = {
  args: { ...defaultProps, value: new Date() },
};
export const Optional: Story = {
  args: { ...defaultProps, value: new Date(), optional: true },
};
export const OptionalText: Story = {
  args: { ...defaultProps, value: new Date(), optional: 'Spesialtilpasset Verdi' },
};
export const Required: Story = {
  args: { ...defaultProps, value: new Date(), required: true },
};

export const WithError: Story = {
  args: { ...defaultProps, value: new Date(), error: 'Error message' },
};

export const WithMinDate: Story = {
  args: {
    ...defaultProps,
    label: 'Date from today',
    description: 'Only future dates are selectable',
    minDate: new Date(),
  },
};

export const WithMaxDate: Story = {
  args: {
    ...defaultProps,
    label: 'Date until today',
    description: 'Only past and current dates are selectable',
    maxDate: new Date(),
  },
};

export const WithMinAndMaxDate: Story = {
  args: {
    ...defaultProps,
    label: 'Select date within 2 weeks',
    description: 'You can select from today and 2 weeks ahead in time',
    minDate: new Date(),
    maxDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), // 2 weeks from today
  },
};
