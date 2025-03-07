import './css/index.scss';

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
export type { InputLabelProps, InputLabelFieldProps } from './components/kystverket/InputLabel/inputLabel';

export { default as Icon } from './components/kystverket/Icon/icon';

export { Display, Headline, Title, Body, Label, Accent } from './components/kystverket/Typography/typography';
export type { TypographyProps, HeaderTypographyProps } from './components/kystverket/Typography/typography';

export { default as BorderedToggleGroup } from './components/kystverket/BorderedToggleGroup/borderedToggleGroup';
export type { BorderedToggleGroupProps } from './components/kystverket/BorderedToggleGroup/borderedToggleGroup';

export { default as BorderedRadioGroup } from './components/kystverket/BorderedRadioGroup/borderedRadioGroup';
export type { BorderedRadioGroupProps } from './components/kystverket/BorderedRadioGroup/borderedRadioGroup';

export { Summary } from './components/kystverket/Summary/summary';
export type { SummaryProps, SummaryRowProps } from './components/kystverket/Summary/summary.types';

export { Logo } from './components/kystverket/Logo/Logo';
export type { LogoProps } from './components/kystverket/Logo/Logo';

export { Footer } from './components/kystverket/Footer/Footer';
export type { FooterProps } from './components/kystverket/Footer/Footer';

/*
    Komponenter fra Designsystemet
*/

export { Button } from './components/designsystemet/Button/Button';
export type { ButtonProps } from './components/designsystemet/Button/Button';

export { Link } from '@digdir/designsystemet-react';
export type { LinkProps } from '@digdir/designsystemet-react';

export { SkipLink } from '@digdir/designsystemet-react';
export type { SkipLinkProps } from '@digdir/designsystemet-react';
