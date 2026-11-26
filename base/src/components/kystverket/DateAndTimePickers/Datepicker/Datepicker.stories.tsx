import type { Meta, StoryObj } from '@storybook/react-vite';
import { Datepicker, DatepickerProps } from './Datepicker';
import StyrbordDecorator from '../../../../../storybook/styrbordDecorator';
import { useState } from 'react';
import { InputSize } from '~/utils/input/input';

const sizes: InputSize[] = ['2xs', 'xs', 'sm', 'md', 'lg', 'fit', 'full'];

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
  parameters: {
    docs: {
      description: {
        component:
          'Tekstfelt for dato i formatet `dd.mm.åååå`, med en knapp som åpner nettleserens kalender. ' +
          'Datoen kan skrives med eller uten punktum, og med to- eller firesifret årstall; når feltet mister fokus, ' +
          'vises den som `dd.mm.åååå`. Et tosifret årstall tolkes som et år fra 80 år bakover til 19 år framover ' +
          '(i 2025: 1945–2044). ' +
          'En dato som ikke finnes (f.eks. `33.09.2001`) gir en egen feilmelding. ' +
          'Ugyldig tekst eller dato utenfor `minDate`/`maxDate` gir `onChange(undefined)` og en innebygd feilmelding når feltet mister fokus. ' +
          '`error` fra applikasjonen vises i stedet for den innebygde meldingen.',
      },
    },
  },
  argTypes: {
    width: {
      control: 'select',
      options: sizes,
    },
  },
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

export const Disabled: Story = {
  args: { ...defaultProps, value: new Date(), disabled: true },
};

export const ReadOnly: Story = {
  args: { ...defaultProps, value: new Date(), readOnly: true },
};
