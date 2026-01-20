import { Select as DsSelect, Field, Label, ValidationMessage } from '@digdir/designsystemet-react';
import { LabelContent } from '~/main';
import { useState } from 'react';
import './Select.override.scss';

export type SelectOption = {
  value: string;
  label?: string;
};

export interface SelectProps {
  className?: string;
  optional?: boolean | string | undefined;
  required?: boolean | string | undefined;
  label?: string;
  description?: string;
  value?: string;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  onBlur?: () => void;
  onChange?: (value: string) => void;
  options?: SelectOption[];
}

export const Select = ({ ...props }: SelectProps) => {
  const valueProps = props.value ? { value: props.value } : { defaultValue: '' };
  const [isOpen, setIsOpen] = useState(false);
  const classNames = [props.className, 'override', isOpen ? 'select-open' : ''].filter(Boolean).join(' ');

  return (
    <Field>
      <Label>
        <LabelContent text={props.label} required={props.required} optional={props.optional} />
      </Label>
      {props.description && <Field.Description>{props.description}</Field.Description>}
      <DsSelect
        className={classNames}
        width="full"
        onChange={(event) => {
          props.onChange?.(event.target.value);
          setIsOpen(false);
        }}
        onBlur={() => {
          props.onBlur?.();
          setIsOpen(false);
        }}
        onMouseDown={() => setIsOpen((prev) => !prev)}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ' || event.key === 'ArrowDown' || event.key === 'ArrowUp') {
            setIsOpen(true);
          } else if (event.key === 'Escape') {
            setIsOpen(false);
          }
        }}
        {...valueProps}
      >
        {props.placeholder && (
          <DsSelect.Option disabled value="">
            {props.placeholder}
          </DsSelect.Option>
        )}

        {!props.placeholder && (!props.value || !props.options?.find((o) => o.value === props.value)) && (
          <DsSelect.Option disabled value=""></DsSelect.Option>
        )}

        {props.options?.map((v) => (
          <DsSelect.Option key={v.value} value={v.value}>
            {v.label ?? v.value}
          </DsSelect.Option>
        ))}
      </DsSelect>
      {props.error && <ValidationMessage>{props.error}</ValidationMessage>}
    </Field>
  );
};
