import { ReactNode } from 'react';
import { Surface, ValidationMessage } from '~/main';

export interface ErrorLabelProps {
  text?: string | null;
  error?: string | null;
  children?: ReactNode;
}

const ErrorLabel = ({ ...props }: ErrorLabelProps) => {
  const errorText = props.text ?? props.error;
  const errorHasText = typeof errorText === 'string' && errorText.length > 0;
  return (
    <Surface gap={1}>
      {props.children && <div>{props.children}</div>}
      {errorHasText && <ValidationMessage>{errorText}</ValidationMessage>}
    </Surface>
  );
};

export default ErrorLabel;
