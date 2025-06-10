import { createContext } from 'react';

export interface FormContextProps {
  lookupPoststed: (postnummer: string) => Promise<string>;
  submit: (dataAsString: string) => Promise<string>;
}

const lookupPoststedDummy = async (postnummer: string): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const dummies = [
        'Duckburg',
        'Mouseton',
        'St. Canard',
        'Spoonerville',
        'Ducklair Tower',
        'Fort Duckburg',
        `Quacktown`,
        `Duck Avenger's Villa`,
        'Ducklantis',
        'New Quackmore',
      ];
      resolve(dummies[parseInt(postnummer) % dummies.length]);
    }, 500);
  });
};

const submitDummy = async (data: string): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1500);
  });
};

export const FormContext = createContext<FormContextProps>({
  lookupPoststed: lookupPoststedDummy,
  submit: submitDummy,
});
