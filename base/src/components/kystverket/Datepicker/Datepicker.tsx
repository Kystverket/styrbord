import { createElement, HTMLProps, useState, useEffect } from 'react';
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
  minDate?: Date; // Minimum selectable date. Dates before this will be greyed out and non-selectable.
  maxDate?: Date; // Maximum selectable date. Dates after this will be greyed out and non-selectable.
  popperPlacement?: 'top' | 'bottom' | 'left' | 'right'; // Controls where the calendar popup appears
  withPortal?: boolean; // Use portal for calendar popup (good for dialogs and mobile)
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
  minDate,
  maxDate,
  popperPlacement = 'top',
  withPortal,
  ...props
}: DatepickerProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Sjekk om vi er på mobil
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || /Mobi|Android/i.test(navigator.userAgent));
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const usePortal = isMobile && (withPortal ?? false);

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
        minDate={minDate}
        maxDate={maxDate}
        onBlur={props.onBlur}
        popperPlacement={popperPlacement}
        {...(usePortal && { withPortal: true, fixedHeight: true })}
      />
      {props.error && <ValidationMessage>{props.error}</ValidationMessage>}
    </Field>
  );
};
