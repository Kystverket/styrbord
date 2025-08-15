import { Textfield as DsTextField } from '@digdir/designsystemet-react';
import { HTMLInputAutoCompleteAttribute } from 'react';
import { FieldLabelContent } from '~/main';
import { InputSize, inputSizeClass } from '~/utils/input/input';
export const Textfield = null;

export interface TextInputProps {
  optional?: boolean | string | undefined;
  required?: boolean | string | undefined;
  className?: string;
  placeholder?: string;
  label?: string;
  description?: string;
  value: string | null | undefined;
  onBlur?: () => void;
  onChange?: (value: string) => void;
  error?: string | null;
  disabled?: boolean;
  readOnly?: boolean;
  loading?: boolean;
  inputMode?: 'email' | 'tel' | 'search' | 'text' | 'none' | 'url' | 'numeric' | 'decimal';
  prefix?: string;
  suffix?: string;
  type?: 'email' | 'hidden' | 'password' | 'tel' | 'text' | 'time' | 'url';
  size?: InputSize;
  autoComplete?: HTMLInputAutoCompleteAttribute;
}

export const TextInput = ({ autoComplete, size = 'full', type = 'text', className, ...props }: TextInputProps) => {
  return (
    <DsTextField
      className={`${className} ${inputSizeClass(size)}`}
      label={
        <FieldLabelContent
          text={props.label}
          loading={props.loading}
          required={props.required}
          optional={props.optional}
        />
      }
      description={props.description}
      readOnly={props.readOnly}
      autoComplete={autoComplete}
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
