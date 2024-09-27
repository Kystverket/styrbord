import type { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';

import '../src/css/index.scss';

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
        order: ['Intro', 'Components', 'Form'],
      },
    },
  },

  tags: ['autodocs'],
};

export default preview;
