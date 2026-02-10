import { Box, Checkbox, Fieldset, LabelContent, ValidationMessage } from '~/main';
import classes from './borderedGroup.module.css';
import { BorderedGroupProps } from './borderedGroup.types';

export interface ToggleValue {
  key: string;
  label: string;
  value: boolean;
}

export type BorderedToggleGroupProps = BorderedGroupProps & {
  values: ToggleValue[];
  onChanges?: (values: ToggleValue[]) => void;
  onChange?: (value: ToggleValue) => void;
};

export const inputContainerClass = (isSelected: boolean) => {
  return [classes['input-container'], isSelected ? classes['is-on'] : classes['is-off']].join(' ');
};

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
        <div id={props.id} className={classes.toggleGroup} data-color={hasError ? 'danger' : 'neutral'}>
          {props.values.map((el) => (
            <div
              key={el.key ?? el.label}
              className={inputContainerClass(el.value)}
              onClick={(e) => {
                if (e.target === e.currentTarget && !props.disabled && !props.readonly) {
                  onClick(el.key ?? el.label, !el.value);
                }
              }}
              style={{ cursor: props.disabled || props.readonly ? 'default' : 'pointer' }}
            >
              <Checkbox
                className={classes.input}
                data-color={hasError ? 'danger' : 'primary'}
                readOnly={props.readonly}
                disabled={props.disabled}
                checked={el.value}
                label={el.label}
                onChange={(e) => {
                  onClick(el.key ?? el.label, e.target.checked);
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
