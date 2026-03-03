export interface DatepickerProps {
    optional?: boolean | string | undefined;
    required?: boolean | string | undefined;
    label: string;
    dateFormat?: string;
    description?: string;
    error?: string;
    onBlur?: () => void;
    value: Date | undefined;
    onChange?: (date: Date | undefined) => void;
    showCalendarIcon?: boolean;
    minDate?: Date;
    maxDate?: Date;
}
export declare const Datepicker: ({ value, onChange, dateFormat, showCalendarIcon, minDate, maxDate, ...props }: DatepickerProps) => React.JSX.Element;
