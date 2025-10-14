import { Box, Field, Label, LabelContent, ValidationMessage } from '~/main';
import classes from './borderedRadioGroup.module.css';
import { ReactNode } from 'react';

export type RadioGroupValueType = string | boolean | number;

export interface BorderedRadioGroupProps {
  label?: string;
  description?: ReactNode | string;
  value?: RadioGroupValueType;
  options: {
    label: string;
    value: RadioGroupValueType;
  }[];
  onChange?: (value: RadioGroupValueType) => void;
  onBlur?: () => void;
  error?: string;
  required?: boolean;
  optional?: boolean | string;
}

const BorderedRadioGroup = (props: BorderedRadioGroupProps) => {
  const errorText = typeof props.error === 'string' && props.error.length > 0 ? props.error : undefined;
  const hasError = !!props.error;

  return (
    <Box container="inline-size">
      <Field>
        <Label>
          <LabelContent text={props.label} required={props.required} optional={props.optional} />
        </Label>
        {props.description && <Field.Description>{props.description}</Field.Description>}
        <div className={classes.radioGroup}>
          {props.options.map(({ label, value }) => (
            <button
              onClick={() => {
                props.onChange?.(value);
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
              <span className={classes.radioBoxText}>{label}</span>
            </button>
          ))}
        </div>
        {errorText && <ValidationMessage>{errorText}</ValidationMessage>}
      </Field>
    </Box>
  );
};

export default BorderedRadioGroup;
