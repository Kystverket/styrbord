import { Select as DsSelect } from '@digdir/designsystemet-react';
import { InputLabel, ErrorLabel } from '~/main';

export type SelectOption = {
  value: string;
  label?: string;
};

export interface SelectProps {
  optional?: boolean | string | undefined;
  required?: boolean | string | undefined;
  label?: string;
  value?: string;
  placeholder: string;
  error?: boolean | string;
  disabled?: boolean;
  onBlur?: () => void;
  onChange: (value: string) => void;
  options?: SelectOption[];
}

export const Select = ({ ...props }: SelectProps) => {
  const valueProps = props.value ? { value: props.value } : { defaultValue: '' };

  return (
    <InputLabel text={props.label} required={props.required} optional={props.optional}>
      <ErrorLabel text={typeof props.error === 'string' ? props.error : null}>
        <DsSelect
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
      </ErrorLabel>
    </InputLabel>
  );
};
