import { ReactNode } from 'react';
import { Box, ValidationMessage } from '~/main';

export interface ErrorLabelProps {
  text?: string | null;
  error?: string | null;
  children?: ReactNode;
}

const ErrorLabel = ({ ...props }: ErrorLabelProps) => {
  const errorText = props.text ?? props.error;
  const errorHasText = typeof errorText === 'string' && errorText.length > 0;
  return (
    <Box gap={4}>
      {props.children && <div>{props.children}</div>}
      {errorHasText && <ValidationMessage>{errorText}</ValidationMessage>}
    </Box>
  );
};

export default ErrorLabel;
