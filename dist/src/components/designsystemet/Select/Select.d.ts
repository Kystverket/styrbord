export type SelectOption = {
    value: string;
    label?: string;
};
export interface SelectProps {
    className?: string;
    optional?: boolean | string | undefined;
    required?: boolean | string | undefined;
    label?: string;
    description?: string;
    value?: string;
    placeholder?: string;
    error?: string;
    disabled?: boolean;
    onBlur?: () => void;
    onChange?: (value: string) => void;
    options?: SelectOption[];
}
export declare const Select: ({ ...props }: SelectProps) => React.JSX.Element;
