import type { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';

import '../storybook/storybook-style.scss';

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
};

export default preview;
