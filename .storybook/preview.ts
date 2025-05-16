import type { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';

import '../storybook/style.scss';
import 'material-symbols';

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
        order: ['Readme', 'Designsystemet Showcase', 'Komponenter', 'Side', 'Helpers', 'Form'],
      },
    },
  },

  tags: ['autodocs'],
};

export default preview;
