import { Textfield as DsTextField } from '@digdir/designsystemet-react';
import classes from './TextInput.module.scss';
import { InputLabel, InputLabelFieldProps } from '~/main';

export type TextAreaMode = 'email' | 'tel' | 'search' | 'text' | 'none' | 'url' | 'numeric' | 'decimal' | undefined;

export const Textfield = null;

export type TextAreaProps = InputLabelFieldProps & {
  className?: string;
  placeholder?: string;
  label?: string;
  description?: string;
  value: string | null | undefined;
  onBlur?: () => void;
  onChange?: (value: string) => void;
  error?: string | boolean | null;
  disabled?: boolean;
  readOnly?: boolean;
  inputMode?: TextAreaMode;
  maxLength?: number;
  rows?: number;
};

export const TextArea = ({ className, ...props }: TextAreaProps) => {
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
      rows={props.rows}
      multiline
      counter={props.maxLength}
    />
  );
};
