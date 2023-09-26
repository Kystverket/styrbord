import { inputAnatomy as parts } from '@chakra-ui/anatomy';
import {
  createMultiStyleConfigHelpers,
} from '@chakra-ui/styled-system';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(parts.keys);

// default base style from the Input theme
const baseStyle = definePartsStyle({
  field: {
    width: '100%',
    minWidth: 0,
    outline: 0,
    position: 'relative',
    appearance: 'none',
    transitionProperty: 'common',
    transitionDuration: 'normal',
    _disabled: {
      opacity: 0.2,
      cursor: 'not-allowed',
    },
    fontSize: '18px',
    color: 'colorSchemes.navy.900',
    padding: '10px 20px',
    height: 'auto',
    boxShadow: 'none',
    borderRadius: 'none',
    borderColor: 'colorSchemes.navy.900',
    borderTopColor: 'colorSchemes.navy.900',
    borderRightColor: 'colorSchemes.navy.900',
    borderBottomColor: 'colorSchemes.navy.900',
    borderLeftColor: 'colorSchemes.navy.900',
    borderWidth: '1px',
    _hover: {
      boxShadow: 'none',
      borderColor: 'colorSchemes.navy.900',
      borderTopColor: 'colorSchemes.navy.900',
      borderRightColor: 'colorSchemes.navy.900',
      borderBottomColor: 'colorSchemes.navy.900',
      borderLeftColor: 'colorSchemes.navy.900',
    },
    _focusWithin: {
      boxShadow: 'none',
      borderWidth: '2px',
      borderColor: 'colorSchemes.navy.900',
      borderTopColor: 'colorSchemes.navy.900',
      borderRightColor: 'colorSchemes.navy.900',
      borderBottomColor: 'colorSchemes.navy.900',
      borderLeftColor: 'colorSchemes.navy.900',
      padding: '9px 19px',
    },
    _focusVisible: {
      boxShadow: 'none',
      borderWidth: '2px',
      borderColor: 'colorSchemes.navy.900',
      borderTopColor: 'colorSchemes.navy.900',
      borderRightColor: 'colorSchemes.navy.900',
      borderBottomColor: 'colorSchemes.navy.900',
      borderLeftColor: 'colorSchemes.navy.900',
      padding: '9px 19px',
    },
    _focus: {
      boxShadow: 'none',
      borderWidth: '2px',
      borderColor: 'colorSchemes.navy.900',
      borderTopColor: 'colorSchemes.navy.900',
      borderRightColor: 'colorSchemes.navy.900',
      borderBottomColor: 'colorSchemes.navy.900',
      borderLeftColor: 'colorSchemes.navy.900',
      padding: '9px 19px',
    },
  },
});

export const inputTheme = defineMultiStyleConfig({
  baseStyle,
  defaultProps: {
    size: 'md',
    variant: 'outline',
  },
});
