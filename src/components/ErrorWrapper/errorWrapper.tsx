import { ReactNode } from 'react';
import style from './errorWrapper.module.css';
import { Label } from '../Typography/typography';
import Icon from '../Icon/icon';
import Box from '../Box/box';

export interface ErrorWrapperProps {
  error?: string | null;
  children: ReactNode;
}

const ErrorWrapper = (props: ErrorWrapperProps) => {
  const errorHasText = (props.error?.length ?? 0) > 0;
  return (
    <Box gap={1} className={errorHasText ? style.withErrors : style.noErrors}>
      <Box>{props.children}</Box>
      <Box horizontal align="center" gap={1} className={style.error}>
        <Icon material="error" filled className={style.icon} />
        <Label.Strong.Small className={`${style.text}`}>{props.error}</Label.Strong.Small>
      </Box>
    </Box>
  );
};

export default ErrorWrapper;
