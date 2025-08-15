import { ReactNode } from 'react';
import style from './errorLabel.module.css';
import Icon from '../Icon/icon';
import Box from '../Box/box';
import { Label } from '@digdir/designsystemet-react';

export interface ErrorLabelProps {
  text?: string | null;
  error?: string | null;
  children?: ReactNode;
  align?: 'start' | 'center';
}

const ErrorLabel = ({ align = 'center', ...props }: ErrorLabelProps) => {
  const errorText = props.text ?? props.error;
  const errorHasText = typeof errorText === 'string' && errorText.length > 0;
  return (
    <Box gap={4}>
      {props.children && <div>{props.children}</div>}
      {errorHasText && (
        <Box horizontal align={align} gap={4} className={style.error}>
          <Icon material="error" filled className={style.icon} />
          <Label className={style.text}>{errorText}</Label>
        </Box>
      )}
    </Box>
  );
};

export default ErrorLabel;
