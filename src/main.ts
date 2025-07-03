import './css/index.scss';

export type { SupportedLanguage, ScreenSize } from './utils/types';

/*
    Egenproduserte komponenter
*/

export { default as Alert } from './components/kystverket/Alert/alert';
export type { AlertLevel } from './components/kystverket/Alert/alert.types';
export type { AlertProps } from './components/kystverket/Alert/alert';

export { default as Box } from './components/kystverket/Box/box';
export type { BoxProps } from './components/kystverket/Box/box';

export { default as Stepper } from './components/kystverket/Stepper/stepper';
export type { StepperProps } from './components/kystverket/Stepper/stepper';

export { default as ErrorLabel } from './components/kystverket/ErrorLabel/errorLabel';
export { default as ErrorLabelWrapper } from './components/kystverket/ErrorLabel/errorLabel';
export type { ErrorLabelProps as ErrorLabelProps } from './components/kystverket/ErrorLabel/errorLabel';
export type { ErrorLabelProps as ErrorLabelWrapperProps } from './components/kystverket/ErrorLabel/errorLabel';

export { default as InputLabel } from './components/kystverket/InputLabel/inputLabel';
export type { InputLabelProps } from './components/kystverket/InputLabel/inputLabel';

export { default as Icon } from './components/kystverket/Icon/icon';
export type { IconId } from './components/kystverket/Icon/icon.types';

export * from './components/kystverket/Image/image';

export { Body, Label, Accent } from './components/kystverket/Typography/typography';
export type { TypographyProps } from './components/kystverket/Typography/typography';

export { default as BorderedToggleGroup } from './components/kystverket/BorderedToggleGroup/borderedToggleGroup';
export type { BorderedToggleGroupProps } from './components/kystverket/BorderedToggleGroup/borderedToggleGroup';

export { default as BorderedRadioGroup } from './components/kystverket/BorderedRadioGroup/borderedRadioGroup';
export type { BorderedRadioGroupProps } from './components/kystverket/BorderedRadioGroup/borderedRadioGroup';

export { Summary } from './components/kystverket/Summary/summary';
export type { SummaryProps, SummaryRowProps } from './components/kystverket/Summary/summary.types';

export { Logo } from './components/kystverket/Logo/Logo';
export type { LogoProps, LogoVariant } from './components/kystverket/Logo/Logo';

export { Footer } from './components/kystverket/Footer/Footer';
export type { FooterProps } from './components/kystverket/Footer/Footer';

export { Header } from './components/kystverket/Header/Header';
export type { HeaderProps } from './components/kystverket/Header/Header';

export { Datepicker } from './components/kystverket/Datepicker/Datepicker';
export type { DatepickerProps } from './components/kystverket/Datepicker/Datepicker';

/*
    Komponenter fra Designsystemet
*/

export { Button } from './components/designsystemet/Button/Button';
export type { ButtonProps } from './components/designsystemet/Button/Button';

export { Suggestion } from './components/designsystemet/Suggestion/Suggestion';
export type {
  SuggestionProps,
  SuggestionValue,
  SuggestionValueType,
} from './components/designsystemet/Suggestion/Suggestion';

export { TextInput, Textfield } from './components/designsystemet/TextInput/TextInput';
export type { TextInputProps } from './components/designsystemet/TextInput/TextInput';

export { NumberInput } from './components/designsystemet/NumberInput/NumberInput';
export type { NumberInputProps } from './components/designsystemet/NumberInput/NumberInput';

export { TextArea } from './components/designsystemet/TextArea/TextArea';
export type { TextAreaProps } from './components/designsystemet/TextArea/TextArea';

export type { InputSize } from './utils/input/input';

export { default as Card } from './components/designsystemet/Card/Card';
export type { CardProps } from './components/designsystemet/Card/Card';

export { Select } from './components/designsystemet/Select/Select';
export type { SelectProps, SelectOption } from './components/designsystemet/Select/Select';

export { default as Tabs } from './components/designsystemet/Tabs/Tabs';
export type { TabsProps } from './components/designsystemet/Tabs/Tabs';

export { Details } from './components/designsystemet/Details/Details';
export type { DetailsProps } from './components/designsystemet/Details/Details';

export { default as Table } from './components/designsystemet/Table/Table';

export * from '@digdir/designsystemet-react';
