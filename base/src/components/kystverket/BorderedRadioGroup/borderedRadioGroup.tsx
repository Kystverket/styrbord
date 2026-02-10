import { Box, Fieldset, LabelContent, Radio, ValidationMessage } from '~/main';
import classes from '../BorderedToggleGroup/borderedGroup.module.css';
import { BorderedGroupProps } from '../BorderedToggleGroup/borderedGroup.types';
import { inputContainerClass } from '../BorderedToggleGroup/borderedToggleGroup';

export type RadioGroupValueType = string | boolean | number;

export type BorderedRadioGroupProps = BorderedGroupProps & {
  value?: RadioGroupValueType;
  options: {
    label: string;
    value: RadioGroupValueType;
  }[];
  onChange?: (value: RadioGroupValueType) => void;
};

const BorderedRadioGroup = (props: BorderedRadioGroupProps) => {
  const errorText = typeof props.error === 'string' && props.error.length > 0 ? props.error : undefined;
  const hasError = !!props.error;

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
          {props.options.map((el) => (
            <div
              key={el.label}
              className={inputContainerClass(el.value === props.value)}
              onClick={() => {
                if (!props.disabled && !props.readonly) {
                  props.onChange?.(el.value);
                }
              }}
              style={{ cursor: props.disabled || props.readonly ? 'default' : 'pointer' }}
            >
              <Radio
                className={classes.input}
                data-color={hasError ? 'danger' : 'primary'}
                readOnly={props.readonly}
                disabled={props.disabled}
                checked={el.value === props.value}
                label={el.label}
                onChange={() => {
                  props.onChange?.(el.value);
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
