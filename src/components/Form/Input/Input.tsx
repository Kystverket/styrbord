import {
  Input as ChakraInput, FormControl, FormErrorMessage, FormHelperText, FormLabel,
} from '@chakra-ui/react';
import React from 'react';

interface InputProps {
    isRequired?: boolean
    isDisabled?: boolean
    key: string,
    label: string
    helpText?: string
    errorText?: string
    variant?: 'default' | 'floating';
}

function Input({
  key, label, helpText, errorText, isRequired, isDisabled, variant,
}: InputProps) {
  return (
    <FormControl
      variant={variant}
      id={key}
      isRequired={isRequired}
      isInvalid={!!errorText}
      isDisabled={isDisabled}
    >
      {variant !== 'floating' && <FormLabel>{label}</FormLabel>}
      <ChakraInput placeholder="" />
      {/*
      It is important that the Label comes after the Control due to css selectors when floating
      */}
      {variant === 'floating' && <FormLabel>{label}</FormLabel>}
      <FormHelperText>{helpText}</FormHelperText>
      <FormErrorMessage>{errorText}</FormErrorMessage>
    </FormControl>
  );
}

Input.defaultProps = {
  variant: 'default',
  helpText: null,
  errorText: null,
  isDisabled: false,
  isRequired: false,
};

export { Input };
