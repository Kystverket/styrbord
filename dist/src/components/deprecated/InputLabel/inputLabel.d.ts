import { ReactNode } from 'react';
export interface InputLabelProps {
    optional?: boolean | string | undefined;
    required?: boolean | string | undefined;
    text?: string | null;
    subText?: ReactNode | string | null;
    children?: ReactNode;
    embedded?: boolean;
    loading?: boolean;
}
declare const InputLabel: ({ text, subText, loading, optional, required, embedded, children, }: InputLabelProps) => React.JSX.Element | null;
export default InputLabel;
