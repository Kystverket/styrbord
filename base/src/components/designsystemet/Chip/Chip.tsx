import {
  Chip as DSChip,
  ChipButtonProps,
  ChipRemovableProps,
  ChipCheckboxProps,
  ChipRadioProps,
} from '@digdir/designsystemet-react';
import { FC } from 'react';

export const ChipButton: FC<ChipButtonProps & { ref?: React.Ref<HTMLButtonElement> }> = ({
  children,
  ref,
  ...rest
}) => {
  return (
    <DSChip.Button ref={ref} {...rest}>
      <span>{children}</span>
    </DSChip.Button>
  );
};

export const ChipRemovable: FC<ChipRemovableProps & { ref?: React.Ref<HTMLButtonElement>; subtle?: boolean }> = ({
  children,
  subtle,
  className,
  ref,
  ...rest
}) => {
  return (
    <DSChip.Removable className={[subtle && 'subtle', className].filter(Boolean).join(' ')} ref={ref} {...rest}>
      <span>{children}</span>
    </DSChip.Removable>
  );
};

export const ChipCheckbox: FC<ChipCheckboxProps & { ref?: React.Ref<HTMLLabelElement> }> = ({
  children,
  ref,
  ...rest
}) => {
  return (
    <DSChip.Checkbox ref={ref} {...rest}>
      <span>{children}</span>
    </DSChip.Checkbox>
  );
};

export const ChipRadio: FC<ChipRadioProps & { ref?: React.Ref<HTMLLabelElement> }> = ({ children, ref, ...rest }) => {
  return (
    <DSChip.Radio ref={ref} {...rest}>
      <span>{children}</span>
    </DSChip.Radio>
  );
};
