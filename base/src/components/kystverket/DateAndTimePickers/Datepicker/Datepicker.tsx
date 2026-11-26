import { Field, Label, ValidationMessage } from '@digdir/designsystemet-react';
import { InputSize, LabelContent } from '~/main';
import { inputWidthClass } from '~/utils/input/input';
import { PickerControl } from '../PickerControl/PickerControl';
import { dateKind } from '../PickerControl/pickerKinds';
import { usePickerText } from '../PickerControl/usePickerText';
import styles from '../PickerControl/PickerControl.module.css';

export interface DatepickerProps {
  className?: string;
  loading?: boolean;
  /** Defaults to a fixed width that fits a date. */
  width?: InputSize;
  optional?: boolean | string;
  required?: boolean | string;
  label: string;
  description?: string;
  /** Takes precedence over the built-in format and min/max messages. */
  error?: string;
  onBlur?: () => void;
  value: Date | undefined;
  /** Called with a valid date, or `undefined` when the field is emptied or the typed text is invalid. */
  onChange?: (date: Date | undefined) => void;
  minDate?: Date;
  maxDate?: Date;
  disabled?: boolean;
  readOnly?: boolean;
}

export const Datepicker = ({
  width,
  className,
  label,
  loading,
  required,
  optional,
  onChange,
  onBlur,
  value,
  minDate,
  maxDate,
  disabled,
  readOnly,
  ...props
}: DatepickerProps) => {
  const { error, control } = usePickerText({
    kind: dateKind,
    value,
    min: minDate,
    max: maxDate,
    disabled,
    readOnly,
    onChange: (date) => onChange?.(date),
    onBlur,
  });

  const shownError = props.error || error;

  return (
    <Field className={[className, width ? inputWidthClass(width) : styles.dateWidth].filter(Boolean).join(' ')}>
      <Label style={{ display: 'block', width: 'fit-content' }}>
        <LabelContent text={label} required={required} optional={optional} loading={loading} />
      </Label>
      {props.description && <Field.Description>{props.description}</Field.Description>}
      <PickerControl {...control} />
      {shownError && <ValidationMessage>{shownError}</ValidationMessage>}
    </Field>
  );
};
