import { Textfield as DsTextField } from '@digdir/designsystemet-react';
import { FC } from 'react';
import { InputLabel, InputLabelFieldProps } from '~/main';

export type TextInputMode = 'email' | 'tel' | 'search' | 'text' | 'none' | 'url' | 'numeric' | 'decimal' | undefined;

export const Textfield = null;

export type TextInputProps = InputLabelFieldProps & {
  className?: string;
  placeholder?: string;
  label?: string;
  description?: string;
  value: string | null | undefined;
  onBlur?: () => void;
  onChange: (value: string) => void;
  error?: string | boolean | null;
  disabled?: boolean;
  readOnly?: boolean;
  inputMode?: TextInputMode;
  prefix?: string;
  suffix?: string;
  type?: 'email' | 'hidden' | 'password' | 'tel' | 'text' | 'time' | 'url';
};

export const TextInput: FC<TextInputProps> = ({ type = 'text', className, ...props }) => {
  return (
    <DsTextField
      className={className}
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
      type={type}
    />
  );
};
