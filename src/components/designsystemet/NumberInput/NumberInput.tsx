import { Textfield } from '@digdir/designsystemet-react';
import classes from './NumberInput.module.scss';
import { InputLabel } from '~/main';
import { InputSize, inputSizeClass } from '~/utils/input/input';

export interface NumberInputProps {
  optional?: boolean | string | undefined;
  required?: boolean | string | undefined;
  className?: string;
  placeholder?: string;
  label?: string;
  description?: string;
  value: number | null | undefined;
  onBlur?: () => void;
  onChange?: (value?: number) => void;
  error?: string | boolean | null;
  disabled?: boolean;
  readOnly?: boolean;
  inputMode?: 'numeric' | 'decimal';
  prefix?: string;
  suffix?: string;
  min?: number;
  max?: number;
  align?: 'left' | 'right';
  size?: InputSize;
}

export const NumberInput = ({
  size = 'full',
  inputMode = 'numeric',
  className,
  align = 'left',
  ...props
}: NumberInputProps) => {
  return (
    <Textfield
      className={[className, inputSizeClass(size), classes['align-' + align]].join(' ')}
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
        props.onChange?.(event.target.value ? parseFloat(event.target.value) : undefined);
      }}
      inputMode={inputMode}
      error={props.error}
      prefix={props.prefix}
      suffix={props.suffix}
      type="text"
      min={props.min}
      max={props.max}
    />
  );
};
