import '../../styles/variables.css';

import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import { inputTheme } from '../Form/Input/Input.theme.ts';

const activeLabelStyles = {
  transform: 'scale(0.85) translateY(-26px)',
  color: 'colorSchemes.navy.900',
};

const theme = extendTheme({
  styles: {
    global: {
      body: {
        'font-size': '18px',
      },
    },
  },
  components: {
    Input: inputTheme,
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles,
              },
            },
            'input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label': {
              ...activeLabelStyles,
            },
            label: {
              top: 0,
              left: 0,
              zIndex: 2,
              position: 'absolute',
              backgroundColor: 'white',
              pointerEvents: 'none',
              mx: 3,
              px: 1,
              my: 3,
              transformOrigin: 'left top',
              fontWeight: 'normal',
              color: '#AAA',
            },
          },
        },
      },
    },
  },
  textStyles: {
    md: {
      // you can also use responsive styles
      fontSize: ['18px', '18px'],
      fontWeight: 'bold',
      lineHeight: '110%',
      letterSpacing: '-2%',
    },
  },
  colors: {
    navy: '#000667',
    rust: '#ff451f',
    sky: '#a9e5fb',
    sand: '#f9f6f3',
    sea: '#0596cb',
    grey: '#5d5d5d',
    forest: '#3ba460',
    colorSchemes: {
      navy: {
        100: '#aeb2ff',
        200: '#858cff',
        300: '#5c66ff',
        400: '#333fff',
        500: '#0b19ff',
        600: '#000de1',
        700: '#000bb8',
        800: '#000890',
        900: '#000667',
      },
    },
  },
});

/**
 * StyrbordProvider er komponenten som gir de andre komponentene riktig tema og stil.
 * Se https://chakra-ui.com/getting-started/cra-guide#2-provider-setup.
 */
export function StyrbordProvider({ children } : { children: React.ReactNode}) : React.ReactNode {
  return (
    <ChakraProvider cssVarsRoot=":root" theme={theme}>
      {children}
    </ChakraProvider>
  );
}
