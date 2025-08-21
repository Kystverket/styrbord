import { Select as DsSelect, Field, Label, ValidationMessage } from '@digdir/designsystemet-react';
import { LabelContent } from '~/main';

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

  return (
    <Field>
      <Label>
        <LabelContent text={props.label} required={props.required} optional={props.optional} />
      </Label>
      {props.description && <Field.Description>{props.description}</Field.Description>}
      <DsSelect
        className={props.className}
        width="full"
        onChange={(event) => props.onChange?.(event.target.value)}
        onBlur={() => {
          props.onBlur?.();
        }}
        {...valueProps}
      >
        {props.placeholder && (
          <DsSelect.Option disabled value="">
            {props.placeholder}
          </DsSelect.Option>
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
