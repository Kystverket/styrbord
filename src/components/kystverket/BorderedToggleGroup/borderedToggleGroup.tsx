import { Box, ErrorLabel, Icon, Label } from '~/main';
import classes from './borderedToggleGroup.module.css';
import { ReactNode } from 'react';
import InputLabel from '../InputLabel/inputLabel';

export interface ToggleValue {
  key: string;
  label: string;
  value: boolean;
}

export interface BorderedToggleGroupProps {
  label?: string;
  description?: ReactNode | string;
  values: ToggleValue[];
  onChanges?: (values: ToggleValue[]) => void;
  onChange?: (value: ToggleValue) => void;
  onBlur?: () => void;
  error?: string | boolean;
}

const BorderedRadioGroup = (props: BorderedToggleGroupProps) => {
  const errorText = typeof props.error === 'string' && props.error.length > 0 ? props.error : undefined;
  const hasError = !!props.error;

  const onClick = (key: string, newValue: boolean) => {
    if (props.onChanges && props.values) {
      const newValues = props.values.map((e) => (e.key === key ? { ...e, value: newValue } : e));
      props.onChanges(newValues);
    }
    if (props.onChange && props.values) {
      const oldValue = props.values.find((e) => e.key === key);
      if (!oldValue) {
        return;
      }
      props.onChange({ ...oldValue, value: newValue });
    }
  };

  if (!props.values) {
    return null;
  }

  return (
    <Box container="inline-size">
      <InputLabel text={props.label} subText={props.description} />
      <ErrorLabel text={errorText}>
        <div className={classes.toggleGroup}>
          {props.values.map((el) => (
            <button
              onClick={() => {
                onClick(el.key, !el.value);
              }}
              onBlur={() => {
                props.onBlur?.();
              }}
              className={
                classes.toggleBox +
                ' ' +
                (el.value ? classes.toggledTrue : classes.toggledFalse) +
                ' ' +
                (hasError ? classes.toggleBoxError : '')
              }
              key={el.key}
            >
              <span className={classes.toggleBoxIndicator}>
                <Icon className={classes.toggleBoxIndicatorIcon} material="check" />
              </span>
              <Label size="md" className={classes.toggleBoxText}>
                {el.label}
              </Label>
            </button>
          ))}
        </div>
      </ErrorLabel>
    </Box>
  );
};

export default BorderedRadioGroup;
