export interface DateTimePickerProps {
    optional?: boolean | string | undefined;
    required?: boolean | string | undefined;
    label: string;
    dateTimeFormat?: string;
    description?: string;
    error?: string;
    onBlur?: () => void;
    value: Date | undefined;
    timeInputLabel?: string;
    onChange?: (date: Date | undefined) => void;
    showCalendarIcon?: boolean;
    minDate?: Date;
    maxDate?: Date;
}
export declare const DateTimePicker: ({ value, onChange, dateTimeFormat, timeInputLabel, showCalendarIcon, minDate, maxDate, ...props }: DateTimePickerProps) => React.JSX.Element;
