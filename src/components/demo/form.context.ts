import { createContext } from 'react';

export interface FormContextProps {
  lookupPoststed: null | ((postnummer: string) => Promise<string>);
  submit: null | ((dataAsString: string) => Promise<string>);
}
export const FormContext = createContext<FormContextProps>({
  lookupPoststed: null,
  submit: null,
});
