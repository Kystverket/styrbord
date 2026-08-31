import type { Meta, StoryObj } from '@storybook/react-vite';
import { TimePicker, TimePickerProps } from './TimePicker';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';
import { useState } from 'react';

const Wrapper = (props: TimePickerProps) => {
  const [value, setValue] = useState<Date | undefined>(props.value);

  const onChange = (v: Date | undefined) => {
    setValue(v);
    props.onChange?.(v);
  };

  return <TimePicker {...props} value={value} onChange={onChange} />;
};

const meta = {
  title: 'Form/TimePicker',
  component: Wrapper,
  decorators: [StyrbordDecorator, (Story) => <Story />],
  tags: ['autodocs', 'kyv'],
  argTypes: {},
} satisfies Meta<typeof Wrapper>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps: TimePickerProps = {
  label: 'TimePicker',
  description: 'Description',
  size: 'fit',
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

export const Disabled: Story = {
  args: { ...defaultProps, value: new Date(), disabled: true },
};

export const ReadOnly: Story = {
  args: { ...defaultProps, value: new Date(), readOnly: true },
};

export const States: Story = {
  args: defaultProps,
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Wrapper {...defaultProps} label="Default" value={new Date()} />
      <Wrapper {...defaultProps} label="Disabled" value={new Date()} disabled />
      <Wrapper {...defaultProps} label="Read only" value={new Date()} readOnly />
    </div>
  ),
};
