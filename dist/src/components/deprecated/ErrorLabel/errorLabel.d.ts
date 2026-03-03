import { ReactNode } from 'react';
export interface ErrorLabelProps {
    text?: string | null;
    error?: string | null;
    children?: ReactNode;
}
declare const ErrorLabel: ({ ...props }: ErrorLabelProps) => React.JSX.Element;
export default ErrorLabel;
