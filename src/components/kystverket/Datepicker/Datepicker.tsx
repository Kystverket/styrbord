import { createElement, forwardRef, HTMLProps } from 'react';
import ReactDatePicker, { registerLocale } from 'react-datepicker';
import { Input } from '@digdir/designsystemet-react';
import { ErrorLabel, InputLabel, InputLabelFieldProps } from '~/main';

import { nb } from 'date-fns/locale/nb';

registerLocale('nb', nb);

export interface DatepickerProps extends InputLabelFieldProps {
  label: string;
  dateFormat?: string;
  description?: string;
  error?: string;
  onBlur?: () => void;
  value: Date | undefined;
  onChange: (date: Date | undefined) => void;
}

const CustomInput = (props: HTMLProps<HTMLInputElement>) => {
  return <Input {...props} inputMode="numeric" type="text" />;
};

export const Datepicker = ({ value, onChange, dateFormat = 'dd.MM.YYYY', ...props }: DatepickerProps) => {
  return (
    <InputLabel text={props.label} subText={props.description} required={props.required} optional={props.optional}>
      <ErrorLabel text={props.error}>
        <ReactDatePicker
          locale={'nb'}
          selected={value}
          dateFormat={dateFormat}
          onChange={(date) => onChange(date ?? undefined)}
          customInput={createElement(forwardRef(CustomInput))}
        />
      </ErrorLabel>
    </InputLabel>
  );
};
