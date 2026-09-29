import { Textfield as DsTextField } from '@digdir/designsystemet-react';
import { HTMLInputAutoCompleteAttribute } from 'react';
import { LabelContent } from '~/main';
import { InputSize, inputWidthClass } from '~/utils/input/input';

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
  id?: string;
  type?: 'email' | 'hidden' | 'password' | 'tel' | 'text' | 'time' | 'url';
  width?: InputSize;
  autoComplete?: HTMLInputAutoCompleteAttribute;
}

export const TextInput = ({
  width = 'full',
  type = 'text',
  className,
  label,
  loading,
  required,
  optional,
  onChange,
  value,
  ...props
}: TextInputProps) => {
  return (
    <DsTextField
      className={`${className} ${inputWidthClass(width)}`}
      label={<LabelContent text={label} loading={loading} required={required} optional={optional} />}
      value={value ?? ''}
      onChange={(event) => {
        onChange?.(event.target.value);
      }}
      type={type}
      {...props}
    />
  );
};
