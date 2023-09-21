import '../../styles/variables.css';

import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
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
