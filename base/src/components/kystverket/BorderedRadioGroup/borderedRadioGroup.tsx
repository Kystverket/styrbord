import { Fieldset, LabelContent, Radio, ValidationMessage } from '~/main';
import classes from '../BorderedToggleGroup/borderedGroup.module.css';
import { BorderedGroupProps } from '../BorderedToggleGroup/borderedGroup.types';

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
    <Fieldset disabled={props.disabled}>
      <Fieldset.Legend>
        <LabelContent text={props.label} required={props.required} optional={props.optional} />
      </Fieldset.Legend>
      {props.description && <Fieldset.Description>{props.description}</Fieldset.Description>}
      <div id={props.id} className={classes.toggleGroup} data-color={hasError ? 'danger' : undefined}>
        {props.options.map((el) => (
          <Radio
            key={String(el.value)}
            name={props.id}
            variant="outline"
            readOnly={props.readonly}
            disabled={props.disabled}
            checked={el.value === props.value}
            label={el.label}
            value={String(el.value)}
            onChange={() => props.onChange?.(el.value)}
            onBlur={() => props.onBlur?.()}
          />
        ))}
      </div>
      {errorText && <ValidationMessage>{errorText}</ValidationMessage>}
    </Fieldset>
  );
};

export default BorderedRadioGroup;
