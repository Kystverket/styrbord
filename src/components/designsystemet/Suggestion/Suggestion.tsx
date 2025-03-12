import { EXPERIMENTAL_Suggestion as DsSuggestion } from '@digdir/designsystemet-react';
import { FC } from 'react';
import { ErrorLabel, InputLabel, InputLabelFieldProps } from '~/main';

export type SuggestionValueType = string | number;

export type SuggestionValue = {
  value: SuggestionValueType;
  label?: string;
};

export type SuggestionProps = InputLabelFieldProps & {
  label?: string;
  value?: SuggestionValueType;
  error?: boolean | string;
  disabled?: boolean;
  onBlur?: () => undefined;
  onChange?: (value: SuggestionValueType) => undefined;
  options?: SuggestionValue[];
  filter?:
    | boolean
    | ((args: {
        index: number;
        text: string;
        value: string;
        optionElement: HTMLOptionElement;
        input: HTMLInputElement;
      }) => boolean);
};

export const Suggestion: FC = ({ ...props }: SuggestionProps) => {
  return (
    <InputLabel text={props.label} required={props.required} optional={props.optional}>
      <ErrorLabel text={typeof props.error === 'string' ? props.error : null}>
        <DsSuggestion filter={props.filter} onBlur={props.onBlur?.()}>
          <DsSuggestion.Input
            value={props.value}
            disabled={props.disabled}
            onChange={(event) => props.onChange?.(event.target.value as SuggestionValueType)}
          />
          <DsSuggestion.Clear />
          <DsSuggestion.List>
            <DsSuggestion.Empty>Tomt</DsSuggestion.Empty>
            {props.options?.map((v) => (
              <DsSuggestion.Option key={v.value} value={v.value}>
                {v.label ?? v.value}
              </DsSuggestion.Option>
            ))}
          </DsSuggestion.List>
        </DsSuggestion>
      </ErrorLabel>
    </InputLabel>
  );
};
