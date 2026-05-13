import { Field, Input, Label, ValidationMessage } from '@digdir/designsystemet-react';
import { InputSize, LabelContent } from '~/main';
import { inputSizeClass } from '~/utils/input/input';

export interface DatepickerProps {
  className?: string;
  loading?: boolean;
  size?: InputSize;
  optional?: boolean | string | undefined;
  required?: boolean | string | undefined;
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
  return (
    <Field className={`${className} ${inputSizeClass(size)}`}>
      <Label style={{ display: 'block', width: 'fit-content' }}>
        <LabelContent text={label} required={required} optional={optional} loading={loading} />
      </Label>
      {props.description && <Field.Description>{props.description}</Field.Description>}
      <Input
        type="date"
        value={toDateString(value)}
        min={toDateString(minDate)}
        max={toDateString(maxDate)}
        disabled={props.disabled}
        onBlur={props.onBlur}
        onChange={(e) => {
          const val = e.target.value;
          onChange?.(val ? new Date(val + 'T00:00:00') : undefined);
        }}
      />
      {props.error && <ValidationMessage>{props.error}</ValidationMessage>}
    </Field>
  );
};
