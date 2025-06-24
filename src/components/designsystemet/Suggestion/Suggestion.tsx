import { EXPERIMENTAL_Suggestion as DsSuggestion, Spinner } from '@digdir/designsystemet-react';
import { ErrorLabel, InputLabel } from '~/main';
import { SupportedLanguage } from '~/utils/types';
import { useTranslation } from '~/i18n/translations';
import { ChangeEventHandler, useState } from 'react';

export type SuggestionValueType = string | number;

export type SuggestionValue = {
  value: SuggestionValueType;
  label?: string;
};

export interface SuggestionProps {
  /**
   * Markerer om komponenten er valgfri. Kan være en boolsk verdi eller en egendefinert streng som vises i merkelappen.
   */
  optional?: boolean | string | undefined;
  /**
   * Markerer om komponenten er obligatorisk. Kan være en boolsk verdi eller en egendefinert streng som vises i merkelappen.
   */
  required?: boolean | string | undefined;
  label?: string;
  /**
   * Forhåndsvalgt verdi i søkefeltet.
   */
  value?: SuggestionValueType;
  error?: boolean | string;
  /**
   * Deaktiverer søkefeltet.
   */
  disabled?: boolean;
  /**
   * Tilbakekall når søkefeltet mister fokus.
   */
  onBlur?: () => void;
  /**
   * Tilbakekal`l når verdien i søkefeltet endres.
   * @param value Ny verdi i søkefeltet.
   * @param isTyping Indikerer at brukeren skriver i feltet.
   *                 'false' indikerer at brukeren har valgt en verdi fra listen.
   */
  onChange?: (value: SuggestionValueType, isTyping: boolean) => undefined;
  /**
   * Listen over mulige valg.
   */
  options?: SuggestionValue[] | null;
  /**
   * Filtrering av valglisten. Kan være en boolsk verdi eller en egendefinert filtreringsfunksjon. 'false' betyr at ingen filtrering skjer.
   */
  filter?:
    | boolean
    | ((args: {
        index: number;
        text: string;
        value: string;
        optionElement: HTMLOptionElement;
        input: HTMLInputElement;
      }) => boolean);
  /**
   * Språkkode for oversettelser i komponenten.
   */
  language: SupportedLanguage;
}
export const Suggestion = ({ language = 'nb-NO', ...props }: SuggestionProps) => {
  const t = useTranslation(language);
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
            defaultValue={props.value}
            disabled={props.disabled}
            onChange={(event) => {
              const isTyping = (event.nativeEvent as InputEvent).inputType;
              props.onChange?.(event.target.value as SuggestionValueType, !!isTyping);
            }}
          />
          <DsSuggestion.Clear />
          <DsSuggestion.List>
            {(
              <DsSuggestion.Empty>
                {props.options ? (
                  t('ingen-treff')
                ) : (
                  <span
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                    }}
                  >
                    <Spinner aria-hidden="true" data-size="sm" /> {t('laster')}
                  </span>
                )}
              </DsSuggestion.Empty>
            )}
            {props.options?.map((option) => (
              <DsSuggestion.Option key={option.value}>{option.label ?? option.value}</DsSuggestion.Option>
            ))}
          </DsSuggestion.List>
        </DsSuggestion>
      </ErrorLabel>
    </InputLabel>
  );
};
