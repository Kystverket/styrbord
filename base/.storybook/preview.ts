import type { Preview } from '@storybook/react-vite';
import { themes } from 'storybook/theming';
import StyrbordDecorator from '../storybook/styrbordDecorator';

import '../storybook/storybook-style.scss';

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'nb-NO', title: 'Norsk bokmål' },
        { value: 'nn-NO', title: 'Norsk nynorsk' },
        { value: 'en-US', title: 'Engelsk' },
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
        order: ['Readme', 'Designsystemet Showcase', 'Typography', 'Page', 'Helpers', 'Form', 'Components'],
      },
    },
  },

  tags: ['autodocs'],
  decorators: [StyrbordDecorator],
};

export default preview;
