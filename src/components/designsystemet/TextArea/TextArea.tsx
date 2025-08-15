import { Textfield as DsTextField } from '@digdir/designsystemet-react';
import { FieldLabelContent } from '~/main';
import { InputSize, inputSizeClass } from '~/utils/input/input';

export const Textfield = null;

export interface TextAreaProps {
  optional?: boolean | string | undefined;
  required?: boolean | string | undefined;
  className?: string;
  placeholder?: string;
  label?: string;
  description?: string | React.ReactNode;
  value: string | null | undefined;
  onBlur?: () => void;
  onChange?: (value: string) => void;
  error?: string | boolean | null;
  disabled?: boolean;
  readOnly?: boolean;
  inputMode?: 'email' | 'tel' | 'search' | 'text' | 'none' | 'url' | 'numeric' | 'decimal';
  maxLength?: number;
  size?: InputSize;
}

export const TextArea = ({ size = 'full', className, ...props }: TextAreaProps) => {
  return (
    <DsTextField
      className={`${className} ${inputSizeClass(size)}`}
      label={<FieldLabelContent text={props.label} required={props.required} optional={props.optional} />}
      description={props.description}
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
      multiline
      counter={props.maxLength}
    />
  );
};
