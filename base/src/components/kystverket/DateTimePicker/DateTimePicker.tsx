import { Field, Input, Label, ValidationMessage } from '@digdir/designsystemet-react';
import { LabelContent } from '~/main';
import { InputSize, inputSizeClass } from '~/utils/input/input';

export interface DateTimePickerProps {
  className?: string;
  optional?: boolean | string | undefined;
  required?: boolean | string | undefined;
  label: string;
  description?: string;
  error?: string;
  loading?: boolean;
  onBlur?: () => void;
  value: Date | undefined;
  onChange?: (date: Date | undefined) => void;
  minDate?: Date;
  maxDate?: Date;
  size?: InputSize;
  disabled?: boolean;
}

const toDateTimeString = (date: Date | undefined): string => {
  if (!date) return '';
  const y = date.getFullYear().toString().padStart(4, '0');
  const mo = (date.getMonth() + 1).toString().padStart(2, '0');
  const d = date.getDate().toString().padStart(2, '0');
  const h = date.getHours().toString().padStart(2, '0');
  const mi = date.getMinutes().toString().padStart(2, '0');
  return `${y}-${mo}-${d}T${h}:${mi}`;
};

export const DateTimePicker = ({
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
}: DateTimePickerProps) => {
  return (
    <Field className={`${className} ${inputSizeClass(size)}`}>
      <Label style={{ display: 'block', width: 'fit-content' }}>
        <LabelContent text={label} required={required} optional={optional} loading={loading} />
      </Label>
      {props.description && <Field.Description>{props.description}</Field.Description>}
      <Input
        type="datetime-local"
        value={toDateTimeString(value)}
        min={toDateTimeString(minDate)}
        max={toDateTimeString(maxDate)}
        disabled={props.disabled}
        onBlur={props.onBlur}
        onChange={(e) => {
          const val = e.target.value;
          onChange?.(val ? new Date(val) : undefined);
        }}
      />
      {props.error && <ValidationMessage>{props.error}</ValidationMessage>}
    </Field>
  );
};
