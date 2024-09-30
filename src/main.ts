import './css/index.scss';

export { default as Alert } from './components/Alert/alert';
export type { AlertLevel } from './components/Alert/alert.types';
export type { AlertProps } from './components/Alert/alert';

export { default as Box } from './components/Box/box';
export type { BoxProps } from './components/Box/box';

export { default as ErrorLabelWrapper } from './components/ErrorLabelWrapper/errorLabelWrapper';
export type { ErrorLabelWrapperProps } from './components/ErrorLabelWrapper/errorLabelWrapper';

export { default as Icon } from './components/Icon/icon';

export { Display, Headline, Title, Body, Label } from './components/Typography/typography';
export type { TypographyProps, HeaderTypographyProps } from './components/Typography/typography';

export { Button } from './components/Button/button';
export type { ButtonProps } from './components/Button/button';

export * from '@digdir/designsystemet-react';
