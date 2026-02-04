import { Textfield } from '@digdir/designsystemet-react';
import classes from './NumberInput.module.scss';
import { LabelContent } from '~/main';
import { InputSize, inputSizeClass } from '~/utils/input/input';
import { useEffect, useState } from 'react';

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
  id?: string;
}

export const NumberInput = ({
  size = 'full',
  inputMode = 'numeric',
  className,
  align = 'left',
  ...props
}: NumberInputProps) => {
  const [internalValue, setInternalValue] = useState<string | undefined | null>(props.value?.toString());

  useEffect(() => {
    if (props.value?.toString() !== internalValue) {
      setInternalValue(props.value?.toString());
    }
  }, [props.value]);

  return (
    <Textfield
      id={props.id}
      className={[className, inputSizeClass(size), classes['align-' + align]].join(' ')}
      label={<LabelContent text={props.label} required={props.required} optional={props.optional} />}
      description={props.description}
      readOnly={props.readOnly}
      placeholder={props.placeholder}
      disabled={props.disabled}
      value={internalValue ?? ''}
      onBlur={props.onBlur}
      onChange={(event) => {
        let v = event.target.value.replace(',', '.').replace(/[^0-9.,-]/g, '');
        while (v.split('.').length > 2) {
          v = v.replace('.', '');
        }
        if ([',', '.'].includes(v[v.length - 1]) || v === '-' || isNaN(Number(v))) {
          setInternalValue(v);
        } else if (v.length > 0) {
          setInternalValue(v);
          props.onChange?.(parseFloat(v));
        } else {
          setInternalValue('');
          props.onChange?.(undefined);
        }
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
