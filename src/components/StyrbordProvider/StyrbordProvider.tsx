import '../../styles/variables.css';

import React from 'react';
import { ChakraProvider, ChakraProviderProps } from "@chakra-ui/react";
/**
 * StyrbordProvider er komponenten som gir de andre komponentene riktig tema og stil.
 * Se https://chakra-ui.com/getting-started/cra-guide#2-provider-setup.
 */
export const StyrbordProvider = ({ children, ...props }: ChakraProviderProps) => (
    <ChakraProvider {...props}>
        {children}
    </ChakraProvider>
);