import { useId } from 'react';
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
  const generatedId = useId();
  const groupName = props.id ?? generatedId;
  const errorId = useId();
  const errorText = typeof props.error === 'string' && props.error.length > 0 ? props.error : undefined;
  const hasError = !!props.error;

  return (
    <Fieldset disabled={props.disabled}>
      <Fieldset.Legend>
        <LabelContent text={props.label} required={props.required} optional={props.optional} />
      </Fieldset.Legend>
      {props.description && <Fieldset.Description>{props.description}</Fieldset.Description>}
      <div id={groupName} className={classes.toggleGroup} data-color={hasError ? 'danger' : undefined}>
        {props.options.map((el) => (
          <Radio
            key={String(el.value)}
            name={groupName}
            variant="outline"
            readOnly={props.readonly}
            disabled={props.disabled}
            checked={el.value === props.value}
            label={el.label}
            value={String(el.value)}
            onChange={() => props.onChange?.(el.value)}
            onBlur={() => props.onBlur?.()}
            aria-invalid={hasError ? true : undefined}
            aria-describedby={errorText ? errorId : undefined}
          />
        ))}
      </div>
      {/*
        Vi kobler feilmeldingen til radioknappene selv. ds-field (designsystemet-web) gjør det bare for en
        feilmelding som er direkte barn av fieldset-et, og bare hvis den fantes da radioknappene ble rendret,
        så en feil som dukker opp etter innsending blir aldri koblet. div-en holder ds-field unna, så id-en
        ikke havner to ganger i aria-describedby når feilen finnes fra start.
      */}
      {errorText && (
        <div>
          <ValidationMessage id={errorId}>{errorText}</ValidationMessage>
        </div>
      )}
    </Fieldset>
  );
};

export default BorderedRadioGroup;
