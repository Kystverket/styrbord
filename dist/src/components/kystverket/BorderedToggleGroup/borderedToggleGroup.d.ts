import { BorderedGroupProps } from './borderedGroup.types';
export interface ToggleValue {
    key: string;
    label: string;
    value: boolean;
}
export type BorderedToggleGroupProps = BorderedGroupProps & {
    values: ToggleValue[];
    onChanges?: (values: ToggleValue[]) => void;
    onChange?: (value: ToggleValue) => void;
};
declare const BorderedRadioGroup: (props: BorderedToggleGroupProps) => React.JSX.Element | null;
export default BorderedRadioGroup;
