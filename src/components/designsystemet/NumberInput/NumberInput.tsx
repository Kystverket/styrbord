import { Textfield } from '@digdir/designsystemet-react';
import classes from './NumberInput.module.scss';
import { FieldLabelContent } from '~/main';
import { InputSize, inputSizeClass } from '~/utils/input/input';
import { useState } from 'react';

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
  const [internalValue, setInternalValue] = useState<string | undefined | null>(props.value?.toString());

  return (
    <Textfield
      className={[className, inputSizeClass(size), classes['align-' + align]].join(' ')}
      label={<FieldLabelContent text={props.label} required={props.required} optional={props.optional} />}
      description={props.description}
      readOnly={props.readOnly}
      placeholder={props.placeholder}
      disabled={props.disabled}
      value={internalValue ?? ''}
      onBlur={props.onBlur}
      onChange={(event) => {
        const v = event.target.value.replace(',', '.').replace(/[^0-9.,-]/g, '');
        if ([',', '.'].includes(v[v.length - 1])) {
          setInternalValue(v);
        } else if (v.length > 0) {
          setInternalValue(parseFloat(v).toString());
        } else {
          setInternalValue('');
        }
        props.onChange?.(v ? parseFloat(v) : undefined);
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
