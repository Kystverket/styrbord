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
  title: 'Komponenter/Datepicker',
  component: Wrapper,
  decorators: [StyrbordDecorator],
  tags: ['autodocs', 'kyv'],
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

export const WithValue: Story = {
  args: { ...defaultProps, value: new Date() },
};

export const WithError: Story = {
  args: { ...defaultProps, value: new Date(), error: 'Error message' },
};
