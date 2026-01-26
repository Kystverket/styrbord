import type { Meta, StoryObj } from '@storybook/react';
import { Datepicker, DatepickerProps } from './Datepicker';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';
import { useState, useRef } from 'react';
import { Dialog, Button, Heading } from '~/main';

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
  decorators: [StyrbordDecorator, (Story) => <Story />],
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
    label: 'Dato fra i dag',
    description: 'Kun framtidige datoer kan velges',
    minDate: new Date(),
  },
};

export const WithMaxDate: Story = {
  args: {
    ...defaultProps,
    label: 'Dato til i dag',
    description: 'Kun tidligere og dagens dato kan velges',
    maxDate: new Date(),
  },
};

export const WithMinAndMaxDate: Story = {
  args: {
    ...defaultProps,
    label: 'Velg dato innen 2 uker',
    description: 'Du kan velge dato fra i dag og inntil 2 uker frem i tid',
    minDate: new Date(),
    maxDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), // 2 weeks from today
  },
};

export const PopperPlacement: Story = {
  args: {
    ...defaultProps,
    label: 'Plassering av popup',
    description: 'Endre plassering av kalender-popup via "popperPlacement" prop',
    popperPlacement: 'top',
  },
  argTypes: {
    popperPlacement: {
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right'],
    },
  },
  decorators: [
    StyrbordDecorator,
    (Story) => (
      <div
        style={{
          minHeight: '400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{}}>
          <Story />
        </div>
      </div>
    ),
  ],
};

export const InDialogNearEdge: Story = {
  args: {
    ...defaultProps,
    withPortal: true,
  },
  decorators: [
    StyrbordDecorator,
    (Story) => {
      const dialogRef = useRef<HTMLDialogElement>(null);

      return (
        <>
          <Button onClick={() => dialogRef.current?.showModal()}>Åpne Dialog</Button>
          <Dialog ref={dialogRef} style={{ maxWidth: '400px', maxHeight: '200px' }}>
            <Heading style={{ marginBottom: '16px' }}>Dialog med Datepicker</Heading>
            <div style={{ marginBottom: '24px' }}>
              <Story />
            </div>
            <Button variant="filled" onClick={() => dialogRef.current?.close()}>
              Lukk Dialog
            </Button>
          </Dialog>
        </>
      );
    },
  ],
};