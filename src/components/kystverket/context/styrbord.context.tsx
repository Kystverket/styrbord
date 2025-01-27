import { createContext } from 'react';

export interface StyrbordContextProps {
  language?: {
    label?: {
      optional?: string;
      required?: string;
    };
  };
}

export const StyrbordContext = createContext({} as StyrbordContextProps);
