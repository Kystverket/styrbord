import { Checkbox as ChakraCheckbox } from '@chakra-ui/react';
import React from 'react';

type CheckboxSize = 'small' | 'medium' | 'large';

interface CheckboxProps {
    isChecked?: boolean
    isDisabled?: boolean
    label: string
    size: CheckboxSize
    onChange?(event: React.ChangeEvent<HTMLInputElement>): void
}

const translateCheckboxSize = (checkboxSize: CheckboxSize): string => {
  switch (checkboxSize) {
  case 'large':
    return 'lg';
  case 'medium':
    return 'md';
  case 'small':
    return 'sm';
  default:
    return 'md';
  }
};

function Checkbox({
  label, size, isChecked, isDisabled, onChange,
}: CheckboxProps) {
  return (
    <ChakraCheckbox
      isChecked={isChecked}
      isDisabled={isDisabled}
      onChange={onChange}
      size={translateCheckboxSize(size)}
      colorScheme="colorSchemes.navy"
    >
      {label}
    </ChakraCheckbox>
  );
}

Checkbox.defaultProps = {
  isChecked: false,
  isDisabled: false,
  onChange: () => { },
};

export { Checkbox };
