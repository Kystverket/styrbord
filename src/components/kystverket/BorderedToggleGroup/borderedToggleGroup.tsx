import { Box, Checkbox, Fieldset, LabelContent, ValidationMessage } from '~/main';
import classes from './borderedToggleGroup.module.css';
import { ReactNode } from 'react';

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
  error?: string;
  readonly?: boolean;
  required?: boolean;
  disabled?: boolean;
  optional?: boolean | string;
}

const BorderedRadioGroup = (props: BorderedToggleGroupProps) => {
  const errorText = typeof props.error === 'string' && props.error.length > 0 ? props.error : undefined;
  const hasError = !!props.error;

  const onClick = (key: string, newValue: boolean) => {
    if (props.readonly) return;

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
      <Fieldset
        disabled={props.disabled}
        className={
          classes['fieldset'] +
          (props.disabled ? ' ' + classes['is-disabled'] : props.readonly ? ' ' + classes['is-readonly'] : '')
        }
      >
        <Fieldset.Legend>
          <LabelContent text={props.label} required={props.required} optional={props.optional} />
        </Fieldset.Legend>
        {props.description && <Fieldset.Description>{props.description}</Fieldset.Description>}
        <div className={classes.toggleGroup} data-color={hasError ? 'danger' : 'neutral'}>
          {props.values.map((el) => (
            <div
              key={el.key}
              className={el.value ? classes['is-on'] : classes['is-off']}
              onClick={(e) => {
                onClick(el.key, !el.value);
                e.preventDefault();
              }}
            >
              <Checkbox
                data-color={hasError ? 'danger' : 'primary'}
                readOnly={props.readonly}
                disabled={props.disabled}
                checked={el.value}
                label={el.label}
                onChange={(e) => {
                  onClick(el.key, e.target.checked);
                }}
                onBlur={() => {
                  props.onBlur?.();
                }}
              />
            </div>
          ))}
        </div>
        {errorText && <ValidationMessage>{errorText}</ValidationMessage>}
      </Fieldset>
    </Box>
  );
};

export default BorderedRadioGroup;
