import { Textfield } from '@digdir/designsystemet-react';
import classes from './NumberInput.module.scss';
import { InputLabel } from '~/main';

export interface NumberInputProps {
  optional?: boolean | string | undefined;
  required?: boolean | string | undefined;
  className?: string;
  placeholder?: string;
  label?: string;
  description?: string;
  value: number | null | undefined;
  onBlur?: () => void;
  onChange?: (number?: string) => void;
  error?: string | boolean | null;
  disabled?: boolean;
  readOnly?: boolean;
  inputMode?: 'tel' | 'numeric' | 'decimal';
  prefix?: string;
  suffix?: string;
  min?: number;
  max?: number;
  align?: 'left' | 'right';
}

export const NumberInput = ({ className, align = 'left', ...props }: NumberInputProps) => {
  return (
    <Textfield
      className={[className, classes['align-' + align]].join(' ')}
      label={
        <InputLabel
          text={props.label}
          subText={props.description}
          required={props.required}
          optional={props.optional}
          embedded
        />
      }
      readOnly={props.readOnly}
      placeholder={props.placeholder}
      disabled={props.disabled}
      value={props.value ?? ''}
      onBlur={props.onBlur}
      onChange={(event) => {
        props.onChange?.(event.target.value);
      }}
      inputMode={props.inputMode}
      error={props.error}
      prefix={props.prefix}
      suffix={props.suffix}
      type="numeric"
      min={props.min}
      max={props.max}
    />
  );
};
