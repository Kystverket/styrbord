import { Field, Label, ValidationMessage } from '@digdir/designsystemet-react';
import { InputSize, LabelContent } from '~/main';
import { inputWidthClass } from '~/utils/input/input';
import { PickerControl } from '../PickerControl/PickerControl';
import { timeKind } from '../PickerControl/pickerKinds';
import { usePickerText } from '../PickerControl/usePickerText';

export interface TimePickerProps {
  /** Id on the underlying `<input>`, e.g. for linking from an ErrorSummary. Generated if omitted. */
  id?: string;
  className?: string;
  loading?: boolean;
  width?: InputSize;
  optional?: boolean | string;
  required?: boolean | string;
  label: string;
  description?: string;
  /** Takes precedence over the built-in format and min/max messages. */
  error?: string;
  onBlur?: () => void;
  /** Only the time of day is shown; the date part is kept when the time changes. */
  value: Date | undefined;
  /**
   * Called with `value`'s date (today if there is none) at the chosen time, or `undefined` when
   * the field is emptied or the typed text is invalid.
   */
  onChange?: (date: Date | undefined) => void;
  /** Only the time of day is compared. */
  minTime?: Date;
  /** Only the time of day is compared. */
  maxTime?: Date;
  disabled?: boolean;
  readOnly?: boolean;
}

export const TimePicker = ({
  width = 'full',
  className,
  label,
  loading,
  required,
  optional,
  onChange,
  onBlur,
  value,
  minTime,
  maxTime,
  disabled,
  readOnly,
  ...props
}: TimePickerProps) => {
  const { error, control } = usePickerText({
    kind: timeKind,
    value,
    min: minTime,
    max: maxTime,
    disabled,
    readOnly,
    onChange: (time) => {
      if (!time) {
        onChange?.(undefined);
        return;
      }
      const next = new Date(value ?? new Date());
      next.setHours(time.getHours(), time.getMinutes(), 0, 0);
      onChange?.(next);
    },
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
