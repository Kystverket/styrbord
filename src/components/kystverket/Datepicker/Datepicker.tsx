import { createElement, HTMLProps } from 'react';
import ReactDatePicker, { registerLocale } from 'react-datepicker';
import { Field, Input, Label, ValidationMessage } from '@digdir/designsystemet-react';
import { Icon, LabelContent } from '~/main';
import classes from './Datepicker.module.css';

import { nb } from 'date-fns/locale/nb';

registerLocale('nb', nb);

export interface DatepickerProps {
  optional?: boolean | string | undefined;
  required?: boolean | string | undefined;
  label: string;
  dateFormat?: string;
  description?: string;
  error?: string;
  onBlur?: () => void;
  value: Date | undefined;
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

export const Datepicker = ({
  value,
  onChange,
  dateFormat = 'dd.MM.yyyy',
  showCalendarIcon = true,
  ...props
}: DatepickerProps) => {
  return (
    <Field>
      <Label style={{ display: 'block', width: 'fit-content' }}>
        <LabelContent text={props.label} required={props.required} optional={props.optional} />
      </Label>
      {props.description && <Field.Description>{props.description}</Field.Description>}
      <ReactDatePicker
        locale={'nb'}
        selected={value}
        dateFormat={dateFormat}
        placeholderText="dd.mm.åååå"
        onChange={(date) => onChange?.(date ?? undefined)}
        customInput={createElement(CustomInput, { showCalendarIcon })}
      />
      {props.error && <ValidationMessage>{props.error}</ValidationMessage>}
    </Field>
  );
};
