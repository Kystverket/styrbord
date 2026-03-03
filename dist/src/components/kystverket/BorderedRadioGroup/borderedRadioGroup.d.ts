import { BorderedGroupProps } from '../BorderedToggleGroup/borderedGroup.types';
export type RadioGroupValueType = string | boolean | number;
export type BorderedRadioGroupProps = BorderedGroupProps & {
    value?: RadioGroupValueType;
    options: {
        label: string;
        value: RadioGroupValueType;
    }[];
    onChange?: (value: RadioGroupValueType) => void;
};
declare const BorderedRadioGroup: (props: BorderedRadioGroupProps) => React.JSX.Element;
export default BorderedRadioGroup;
