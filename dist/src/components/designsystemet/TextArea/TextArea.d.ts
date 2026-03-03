import { InputSize } from '~/utils/input/input';
export declare const Textfield: null;
export interface TextAreaProps {
    optional?: boolean | string | undefined;
    required?: boolean | string | undefined;
    className?: string;
    placeholder?: string;
    label?: string;
    description?: string | React.ReactNode;
    value: string | null | undefined;
    onBlur?: () => void;
    onChange?: (value: string) => void;
    error?: string | boolean | null;
    disabled?: boolean;
    readOnly?: boolean;
    inputMode?: 'email' | 'tel' | 'search' | 'text' | 'none' | 'url' | 'numeric' | 'decimal';
    maxLength?: number;
    size?: InputSize;
}
export declare const TextArea: ({ size, className, ...props }: TextAreaProps) => React.JSX.Element;
