import {
  EXPERIMENTAL_Suggestion as DsSuggestion,
  type SuggestionProps as DsSuggestionProps,
  Field,
  Label,
  ValidationMessage,
} from '@digdir/designsystemet-react';
import { LabelContent } from '~/main';

export type SuggestionProps = {
  label: string;
  required?: boolean;
  optional?: boolean;
  error?: string;
} & DsSuggestionProps;

function SuggestionRoot({ children, label, className, required, optional, error, ...props }: SuggestionProps) {
  return (
    <Field className={className}>
      <Label>
        <LabelContent text={label} required={required} optional={optional} />
      </Label>
      <DsSuggestion {...props}>{children}</DsSuggestion>
      {error && <ValidationMessage>{error}</ValidationMessage>}
    </Field>
  );
}

type SuggestionComponent = typeof SuggestionRoot & {
  Clear: typeof DsSuggestion.Clear;
  Empty: typeof DsSuggestion.Empty;
  Input: typeof DsSuggestion.Input;
  List: typeof DsSuggestion.List;
  Option: typeof DsSuggestion.Option;
};

export const Suggestion = Object.assign(SuggestionRoot, {
  Clear: DsSuggestion.Clear,
  Empty: DsSuggestion.Empty,
  Input: DsSuggestion.Input,
  List: DsSuggestion.List,
  Option: DsSuggestion.Option,
}) as SuggestionComponent;
