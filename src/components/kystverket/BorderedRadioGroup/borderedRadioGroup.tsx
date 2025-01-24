import { Box, ErrorLabel, Fieldset, Icon, Radio, RadioGroup } from '~/main';
import classes from './borderedRadioGroup.module.css';
import { ReactNode } from 'react';
import InputLabel from '../InputLabel/inputLabel';

export type RadioGroupValueType = string | boolean | number;

export interface BorderedRadioGroupProps {
  label?: string;
  description?: ReactNode | string;
  value?: RadioGroupValueType;
  options: {
    label: string;
    value: RadioGroupValueType;
  }[];
  onChange: (value: RadioGroupValueType) => void;
  error?: string | boolean;
}

const BorderedRadioGroup = (props: BorderedRadioGroupProps) => {
  const errorText = typeof props.error === 'string' && props.error.length > 0 ? props.error : undefined;
  const hasError = !!props.error;

  return (
    <InputLabel text={props.label} subText={props.description}>
      <ErrorLabel text={errorText}>
        <Box horizontal gap={16} wrap>
          {props.options.map(({ label, value }) => (
            <button
              onClick={() => {
                props.onChange(value);
              }}
              className={
                classes.radioBox +
                ' ' +
                (props.value === value ? classes.radioBoxActive : '') +
                ' ' +
                (hasError ? classes.radioBoxError : '')
              }
              key={label}
            >
              <Icon material="radio_button_unchecked" filled={props.value === value} />
              <span>{label}</span>
            </button>
          ))}
        </Box>
      </ErrorLabel>
    </InputLabel>
  );
};

export default BorderedRadioGroup;
