import { createElement, HTMLProps } from 'react';
import ReactDatePicker, { registerLocale } from 'react-datepicker';
import { Field, Input, Label, ValidationMessage } from '@digdir/designsystemet-react';
import { FieldLabelContent } from '~/main';

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
}

const CustomInput = (props: HTMLProps<HTMLInputElement>) => {
  return <Input {...props} inputMode="numeric" type="text" />;
};

export const Datepicker = ({ value, onChange, dateFormat = 'dd.MM.YYYY', ...props }: DatepickerProps) => {
  return (
    <Field>
      <Label>
        <FieldLabelContent text={props.label} required={props.required} optional={props.optional} />
      </Label>
      {props.description && <Field.Description>{props.description}</Field.Description>}
      <ReactDatePicker
        locale={'nb'}
        selected={value}
        dateFormat={dateFormat}
        onChange={(date) => onChange?.(date ?? undefined)}
        customInput={createElement(CustomInput)}
      />
      {props.error && <ValidationMessage>{props.error}</ValidationMessage>}
    </Field>
  );
};
