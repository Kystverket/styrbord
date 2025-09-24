import { createElement, HTMLProps } from 'react';
import ReactDatePicker, { registerLocale } from 'react-datepicker';
import { Field, Input, Label, ValidationMessage } from '@digdir/designsystemet-react';
import { LabelContent } from '~/main';
import classes from './DateTimePicker.module.css';

import { nb } from 'date-fns/locale/nb';

registerLocale('nb', nb);

export interface DateTimePickerProps {
  optional?: boolean | string | undefined;
  required?: boolean | string | undefined;
  label: string;
  dateTimeFormat?: string;
  description?: string;
  error?: string;
  value: Date | undefined;
  timeInputLabel?: string;
  showTimeSelect?: boolean;
  onChange?: (date: Date | undefined) => void;
}

const CustomInput = (props: HTMLProps<HTMLInputElement>) => {
  return <Input {...props} inputMode="numeric" type="text" />;
};

export const DateTimePicker = ({
  value,
  onChange,
  dateTimeFormat = 'dd.MM.YYYY, HH:mm',
  timeInputLabel = 'Time: ',
  ...props
}: DateTimePickerProps) => {
  return (
    <Field className={classes.input}>
      <Label style={{ display: 'block' }}>
        <LabelContent text={props.label} required={props.required} optional={props.optional} />
      </Label>
      {props.description && <Field.Description>{props.description}</Field.Description>}
      <ReactDatePicker
        locale={'nb'}
        selected={value}
        dateFormat={dateTimeFormat}
        onChange={(date) => onChange?.(date ?? undefined)}
        customInput={createElement(CustomInput)}
        showTimeInput
        timeInputLabel={timeInputLabel}
      />
      {props.error && <ValidationMessage>{props.error}</ValidationMessage>}
    </Field>
  );
};
