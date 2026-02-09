import { ReactNode } from 'react';

export type BorderedGroupProps = {
  label?: string;
  description?: ReactNode | string;
  onBlur?: () => void;
  error?: string;
  readonly?: boolean;
  required?: boolean;
  disabled?: boolean;
  optional?: boolean | string;
  id?: string;
};
