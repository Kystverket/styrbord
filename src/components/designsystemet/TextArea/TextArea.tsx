import { Textfield as DsTextField } from '@digdir/designsystemet-react';
import { LabelContent } from '~/main';
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
  id?: string;
}

export const TextArea = ({
  size = 'full',
  className,
  label,
  required,
  optional,
  onChange,
  value,
  ...props
}: TextAreaProps) => {
  return (
    <DsTextField
      className={`${className} ${inputSizeClass(size)}`}
      label={<LabelContent text={label} required={required} optional={optional} />}
      value={value ?? ''}
      onChange={(event) => {
        onChange?.(event.target.value);
      }}
      multiline
      {...props}
    />
  );
};
