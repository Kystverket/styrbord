import { createElement, HTMLProps } from 'react';
import ReactDatePicker, { registerLocale } from 'react-datepicker';
import { Field, Input, Label, ValidationMessage } from '@digdir/designsystemet-react';
import { Icon, LabelContent } from '~/main';
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
  onChange?: (date: Date | undefined) => void;
  showCalendarIcon?: boolean;
}

const CustomInput = (props: HTMLProps<HTMLInputElement> & { showCalendarIcon: boolean }) => {
  const { showCalendarIcon, ...inputProps } = props;

  if (showCalendarIcon) {
    return (
      <div className={classes.inputWrapper}>
        <Input {...inputProps} inputMode="numeric" type="text" />
        <Icon className={classes.inputIcon} material="calendar_month" aria-hidden="true" />
      </div>
    );
  }
  return <Input {...inputProps} inputMode="numeric" type="text" />;
};

export const DateTimePicker = ({
  value,
  onChange,
  dateTimeFormat = 'dd.MM.yyyy, HH:mm',
  timeInputLabel = 'Time: ',
  showCalendarIcon = true,
  ...props
}: DateTimePickerProps) => {
  return (
    <Field className={classes.input}>
      <Label style={{ display: 'block', width: 'fit-content' }}>
        <LabelContent text={props.label} required={props.required} optional={props.optional} />
      </Label>
      {props.description && <Field.Description>{props.description}</Field.Description>}
      <ReactDatePicker
        locale={'nb'}
        selected={value}
        dateFormat={dateTimeFormat}
        onChange={(date) => onChange?.(date ?? undefined)}
        customInput={createElement(CustomInput, { showCalendarIcon })}
        showTimeInput
        placeholderText="dd.mm.åååå, tt:mm"
        timeInputLabel={timeInputLabel}
      />
      {props.error && <ValidationMessage>{props.error}</ValidationMessage>}
    </Field>
  );
};
