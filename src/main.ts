import './css/index.scss';

export { default as Alert } from './components/kystverket/Alert/alert';
export type { AlertLevel } from './components/kystverket/Alert/alert.types';
export type { AlertProps } from './components/kystverket/Alert/alert';

export { default as Box } from './components/kystverket/Box/box';
export type { BoxProps } from './components/kystverket/Box/box';

export { default as ErrorLabelWrapper } from './components/kystverket/ErrorLabelWrapper/errorLabelWrapper';
export type { ErrorLabelWrapperProps } from './components/kystverket/ErrorLabelWrapper/errorLabelWrapper';

export { default as Icon } from './components/kystverket/Icon/icon';

export { Display, Headline, Title, Body, Label } from './components/kystverket/Typography/typography';
export type { TypographyProps, HeaderTypographyProps } from './components/kystverket/Typography/typography';

export { Button } from './components/designsystemet/Button/button';
export type { ButtonProps } from './components/designsystemet/Button/button';

export { default as BorderedRadioGroup } from './components/kystverket/BorderedRadioGroup/borderedRadioGroup';
export type { BorderedRadioGroupProps } from './components/kystverket/BorderedRadioGroup/borderedRadioGroup';

export * from '@digdir/designsystemet-react';
