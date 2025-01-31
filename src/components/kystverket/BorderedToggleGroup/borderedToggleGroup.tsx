import { Box, ErrorLabel, Fieldset, Icon, Label, Radio, RadioGroup } from '~/main';
import classes from './borderedToggleGroup.module.css';
import { ReactNode } from 'react';
import InputLabel from '../InputLabel/inputLabel';

export type RadioGroupValueType = string | boolean | number;

export type ToggleValue = [string, boolean];
export type ToggleGroupValues = ToggleValue[];

export interface BorderedToggleGroupProps {
  label?: string;
  description?: ReactNode | string;
  values: ToggleGroupValues;
  onChanges?: (values: ToggleGroupValues) => void;
  onChange?: (value: ToggleValue) => void;
  error?: string | boolean;
}

const BorderedRadioGroup = (props: BorderedToggleGroupProps) => {
  const errorText = typeof props.error === 'string' && props.error.length > 0 ? props.error : undefined;
  const hasError = !!props.error;

  const onClick = (label: string, newValue: boolean) => {
    const newValues = props.values.map(([l, v]) => [l, l === label ? newValue : v] as ToggleValue);
    if (props.onChanges) props.onChanges(newValues);
    if (props.onChange) props.onChange([label, newValue]);
  };

  return (
    <Box>
      <InputLabel text={props.label} subText={props.description} />
      <ErrorLabel text={errorText}>
        <div className={classes.toggleGroup}>
          {props.values.map(([label, value]) => (
            <button
              onClick={() => {
                onClick(label, !value);
              }}
              className={
                classes.toggleBox +
                ' ' +
                (value ? classes.toggledTrue : classes.toggledFalse) +
                ' ' +
                (hasError ? classes.toggleBoxError : '')
              }
              key={label}
            >
              <span className={classes.toggleBoxIndicator}>
                <Icon className={classes.toggleBoxIndicatorIcon} material="check" />
              </span>
              <Label size="md" className={classes.toggleBoxText}>
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
