import { Checkbox, Fieldset, LabelContent, ValidationMessage } from '~/main';
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

const BorderedToggleGroup = (props: BorderedToggleGroupProps) => {
  const errorText = typeof props.error === 'string' && props.error.length > 0 ? props.error : undefined;
  const hasError = !!props.error;

  if (!props.values) {
    return null;
  }

  return (
    <Fieldset disabled={props.disabled}>
      <Fieldset.Legend>
        <LabelContent text={props.label} required={props.required} optional={props.optional} />
      </Fieldset.Legend>
      {props.description && <Fieldset.Description>{props.description}</Fieldset.Description>}
      <div id={props.id} className={classes.toggleGroup} data-color={hasError ? 'danger' : undefined}>
        {props.values.map((el) => (
          <Checkbox
            key={el.key ?? el.label}
            variant="outline"
            readOnly={props.readonly}
            disabled={props.disabled}
            checked={el.value}
            label={el.label}
            onChange={(e) => {
              const newValue = e.target.checked;
              props.onChanges?.(props.values.map((v) => (v.key === el.key ? { ...v, value: newValue } : v)));
              props.onChange?.({ ...el, value: newValue });
              console.log('onChange', { ...el, value: newValue });
            }}
            onBlur={() => props.onBlur?.()}
          />
        ))}
      </div>
      {errorText && <ValidationMessage>{errorText}</ValidationMessage>}
    </Fieldset>
  );
};

export default BorderedToggleGroup;
