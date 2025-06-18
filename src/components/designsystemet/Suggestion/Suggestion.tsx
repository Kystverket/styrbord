import { EXPERIMENTAL_Suggestion as DsSuggestion } from '@digdir/designsystemet-react';
import { ErrorLabel, InputLabel } from '~/main';

export type SuggestionValueType = string | number;

export type SuggestionValue = {
  value: SuggestionValueType;
  label?: string;
};

export interface SuggestionProps {
  optional?: boolean | string | undefined;
  required?: boolean | string | undefined;
  label?: string;
  value?: SuggestionValueType;
  error?: boolean | string;
  disabled?: boolean;
  onBlur?: () => void;
  onChange?: (value: SuggestionValueType, isTyping: boolean) => undefined;
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
}

export const Suggestion = ({ ...props }: SuggestionProps) => {
  return (
    <InputLabel text={props.label} required={props.required} optional={props.optional}>
      <ErrorLabel text={typeof props.error === 'string' ? props.error : null}>
        <DsSuggestion
          filter={props.filter}
          onBlur={() => {
            props.onBlur?.();
          }}
        >
          <DsSuggestion.Input
            value={props.value}
            disabled={props.disabled}
            onChange={(event) => {
              const isTyping = (event.nativeEvent as InputEvent).inputType;
              props.onChange?.(event.target.value as SuggestionValueType, !isTyping);
            }}
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
