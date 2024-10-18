import { ReactNode } from 'react';
import style from './errorLabelWrapper.module.css';
import { Label } from '../Typography/typography';
import Icon from '../Icon/icon';
import Box from '../Box/box';

export interface ErrorLabelWrapperProps {
  error?: string | null;
  children?: ReactNode;
}

const ErrorLabelWrapper = (props: ErrorLabelWrapperProps) => {
  const errorHasText = typeof props.error === 'string' && props.error.length > 0;
  return (
    <Box gap={4}>
      <div>{props.children}</div>
      {errorHasText && (
        <Box horizontal align="center" gap={4} className={style.error}>
          <Icon material="error" filled className={style.icon} />
          <Label size="sm" strong className={style.text}>
            {props.error}
          </Label>
        </Box>
      )}
    </Box>
  );
};

export default ErrorLabelWrapper;
