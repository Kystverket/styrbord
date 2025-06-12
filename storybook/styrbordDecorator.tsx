import { PartialStoryFn } from '@storybook/types';

import './storybook-style.scss';
import 'material-symbols';
import { FormContext } from '~/components/demo/form.context';

const lookupPoststed = async (postnummer: string): Promise<string> => {
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

const submit = async (data: string): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1500);
  });
};

const StyrbordDecorator = (Story: PartialStoryFn) => (
  <FormContext.Provider
    value={{
      lookupPoststed,
      submit,
    }}
  >
    <Story />
  </FormContext.Provider>
);

export default StyrbordDecorator;
