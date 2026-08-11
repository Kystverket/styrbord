import { Field, Input, Label, ValidationMessage } from '@digdir/designsystemet-react';
import { Icon, IconButton, InputSize, LabelContent } from '~/main';
import { inputSizeClass } from '~/utils/input/input';
import { useRef } from 'react';
import styles from './Datepicker.module.css';

export interface DatepickerProps {
  className?: string;
  loading?: boolean;
  size?: InputSize;
  optional?: boolean | string;
  required?: boolean | string;
  label: string;
  description?: string;
  error?: string;
  onBlur?: () => void;
  value: Date | undefined;
  onChange?: (date: Date | undefined) => void;
  minDate?: Date;
  maxDate?: Date;
  disabled?: boolean;
}

const toDateString = (date: Date | undefined): string => {
  if (!date) return '';
  const y = date.getFullYear().toString().padStart(4, '0');
  const m = (date.getMonth() + 1).toString().padStart(2, '0');
  const d = date.getDate().toString().padStart(2, '0');
  return `${y}-${m}-${d}`;
};

export const Datepicker = ({
  size = 'full',
  className,
  label,
  loading,
  required,
  optional,
  onChange,
  value,
  minDate,
  maxDate,
  ...props
}: DatepickerProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Field className={`${className} ${inputSizeClass(size)}`}>
      <Label style={{ display: 'block', width: 'fit-content' }}>
        <LabelContent text={label} required={required} optional={optional} loading={loading} />
      </Label>
      {props.description && <Field.Description>{props.description}</Field.Description>}
      <div className={styles.wrapper}>
        <Input
          ref={inputRef}
          className={styles.input}
          type="date"
          value={toDateString(value)}
          style={{ borderRadius: '4px 0 0 4px' }}
          min={toDateString(minDate)}
          max={toDateString(maxDate)}
          disabled={props.disabled}
          onBlur={props.onBlur}
          onChange={(e) => {
            const val = e.target.value;
            onChange?.(val ? new Date(val + 'T00:00:00') : undefined);
          }}
        />
        <IconButton
          className={styles.pickerButton}
          style={{ borderRadius: '0 4px 4px 0' }}
          variant="outline"
          color="neutral"
          type="button"
          disabled={props.disabled}
          aria-label="Åpne datovelger"
          onClick={() => inputRef.current?.showPicker?.()}
        >
          <Icon material="calendar_month" />
        </IconButton>
      </div>
      {props.error && <ValidationMessage>{props.error}</ValidationMessage>}
    </Field>
  );
};
