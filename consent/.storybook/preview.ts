import type { Preview } from '@storybook/react-vite';
import { themes } from 'storybook/theming';
import StyrbordDecorator from '../storybook/styrbordDecorator';

// Den eneste stilimporten, akkurat som i en applikasjon: designtokenene følger med denne fila.
// At Storybook klarer seg med den er samtidig beviset på at pakken står på egne bein.
import '../src/css/index.css';

export const globalTypes = {
  colorScheme: {
    name: 'Color scheme',
    description: 'Applies data-color-scheme to the story wrapper',
    toolbar: {
      icon: 'mirror',
      items: [
        { value: 'light', title: 'Light' },
        { value: 'dark', title: 'Dark' },
      ],
      showName: true,
      dynamicTitle: true,
    },
  },
};

const preview: Preview = {
  parameters: {
    docs: {
      theme: themes.light,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['Readme', 'Samtykke'],
      },
    },
  },

  tags: ['autodocs'],
  decorators: [StyrbordDecorator],
};

export default preview;
