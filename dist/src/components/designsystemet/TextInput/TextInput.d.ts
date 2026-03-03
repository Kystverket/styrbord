import { HTMLInputAutoCompleteAttribute } from 'react';
import { InputSize } from '~/utils/input/input';
export interface TextInputProps {
    optional?: boolean | string | undefined;
    required?: boolean | string | undefined;
    className?: string;
    placeholder?: string;
    label?: string;
    description?: string;
    value: string | null | undefined;
    onBlur?: () => void;
    onChange?: (value: string) => void;
    error?: string | null;
    disabled?: boolean;
    readOnly?: boolean;
    loading?: boolean;
    inputMode?: 'email' | 'tel' | 'search' | 'text' | 'none' | 'url' | 'numeric' | 'decimal';
    prefix?: string;
    suffix?: string;
    type?: 'email' | 'hidden' | 'password' | 'tel' | 'text' | 'time' | 'url';
    size?: InputSize;
    autoComplete?: HTMLInputAutoCompleteAttribute;
}
export declare const TextInput: ({ autoComplete, size, type, className, ...props }: TextInputProps) => React.JSX.Element;
