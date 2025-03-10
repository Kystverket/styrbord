import { Box, ErrorLabel, Label } from '~/main';
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
  onBlur?: () => void;
  error?: string | boolean;
}

const BorderedRadioGroup = (props: BorderedRadioGroupProps) => {
  const errorText = typeof props.error === 'string' && props.error.length > 0 ? props.error : undefined;
  const hasError = !!props.error;

  return (
    <Box>
      <InputLabel text={props.label} subText={props.description} />
      <ErrorLabel text={errorText}>
        <div className={classes.radioGroup}>
          {props.options.map(({ label, value }) => (
            <button
              onClick={() => {
                props.onChange(value);
              }}
              onBlur={() => {
                props.onBlur?.();
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
              <span className={classes.radioBoxIndicator}></span>
              <Label size="md" className={classes.radioBoxText}>
                {label}
              </Label>
            </button>
          ))}
        </div>
      </ErrorLabel>
    </Box>
  );
};

export default BorderedRadioGroup;
