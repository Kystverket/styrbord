import { Field, Label, ValidationMessage } from '@digdir/designsystemet-react';
import { InputSize, LabelContent } from '~/main';
import { inputWidthClass } from '~/utils/input/input';
import { PickerControl } from '../PickerControl/PickerControl';
import { dateTimeKind } from '../PickerControl/pickerKinds';
import { usePickerText } from '../PickerControl/usePickerText';

export interface DateTimePickerProps {
  /** Id on the underlying `<input>`, e.g. for linking from an ErrorSummary. Generated if omitted. */
  id?: string;
  className?: string;
  optional?: boolean | string | undefined;
  required?: boolean | string | undefined;
  label: string;
  description?: string;
  /** Takes precedence over the built-in format and min/max messages. */
  error?: string;
  loading?: boolean;
  onBlur?: () => void;
  value: Date | undefined;
  /** Called with a valid date and time, or `undefined` when the field is emptied or the typed text is invalid. */
  onChange?: (date: Date | undefined) => void;
  /** Compared to the minute. */
  minDate?: Date;
  /** Compared to the minute. */
  maxDate?: Date;
  width?: InputSize;
  disabled?: boolean;
  readOnly?: boolean;
}

export const DateTimePicker = ({
  width = 'full',
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
}: DateTimePickerProps) => {
  const { error, control } = usePickerText({
    kind: dateTimeKind,
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
    <Field className={[className, inputWidthClass(width)].filter(Boolean).join(' ')}>
      <Label style={{ display: 'block', width: 'fit-content' }}>
        <LabelContent text={label} required={required} optional={optional} loading={loading} />
      </Label>
      {props.description && <Field.Description>{props.description}</Field.Description>}
      <PickerControl {...control} id={props.id} />
      {shownError && <ValidationMessage>{shownError}</ValidationMessage>}
    </Field>
  );
};
