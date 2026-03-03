import { InputSize } from '~/utils/input/input';
export interface NumberInputProps {
    optional?: boolean | string | undefined;
    required?: boolean | string | undefined;
    className?: string;
    placeholder?: string;
    label?: string;
    description?: string;
    value: number | null | undefined;
    onBlur?: () => void;
    onChange?: (value?: number) => void;
    error?: string | boolean | null;
    disabled?: boolean;
    readOnly?: boolean;
    inputMode?: 'numeric' | 'decimal';
    prefix?: string;
    suffix?: string;
    min?: number;
    max?: number;
    align?: 'left' | 'right';
    size?: InputSize;
}
export declare const NumberInput: ({ size, inputMode, className, align, ...props }: NumberInputProps) => React.JSX.Element;
