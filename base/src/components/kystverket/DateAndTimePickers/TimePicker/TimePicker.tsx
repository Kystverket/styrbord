import { Field, Input, Label, ValidationMessage } from '@digdir/designsystemet-react';
import { Icon, IconButton, InputSize, LabelContent } from '~/main';
import { inputSizeClass } from '~/utils/input/input';
import { useRef } from 'react';
import styles from '../PickerInput.module.css';

export interface TimePickerProps {
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
  minTime?: Date;
  maxTime?: Date;
  disabled?: boolean;
  readOnly?: boolean;
}

const toTimeString = (date: Date | undefined): string => {
  if (!date) return '';
  const h = date.getHours().toString().padStart(2, '0');
  const mi = date.getMinutes().toString().padStart(2, '0');
  return `${h}:${mi}`;
};

export const TimePicker = ({
  size = 'full',
  className,
  label,
  loading,
  required,
  optional,
  onChange,
  value,
  minTime,
  maxTime,
  ...props
}: TimePickerProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Field className={[className, inputSizeClass(size)].filter(Boolean).join(' ')}>
      <Label style={{ display: 'block', width: 'fit-content' }}>
        <LabelContent text={label} required={required} optional={optional} loading={loading} />
      </Label>
      {props.description && <Field.Description>{props.description}</Field.Description>}
      <div className={styles.wrapper}>
        <Input
          ref={inputRef}
          className={styles.input}
          type="time"
          value={toTimeString(value)}
          min={toTimeString(minTime)}
          max={toTimeString(maxTime)}
          disabled={props.disabled}
          readOnly={props.readOnly}
          onBlur={props.onBlur}
          onChange={(e) => {
            const val = e.target.value;
            if (!val) {
              onChange?.(undefined);
              return;
            }
            const [hours, minutes] = val.split(':').map(Number);
            const next = new Date(value ?? new Date());
            next.setHours(hours, minutes, 0, 0);
            onChange?.(next);
          }}
        />
        <IconButton
          className={styles.pickerButton}
          variant="outline"
          color="neutral"
          type="button"
          disabled={props.disabled}
          tabIndex={props.readOnly ? -1 : 0}
          aria-hidden={props.readOnly}
          aria-label="Åpne klokkeslettvelger"
          onClick={() => {
            if (props.readOnly) return;
            inputRef.current?.showPicker?.();
          }}
        >
          <Icon material="schedule" />
        </IconButton>
      </div>
      {props.error && <ValidationMessage>{props.error}</ValidationMessage>}
    </Field>
  );
};
