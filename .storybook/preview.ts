import type { Preview } from "@storybook/react";

import '@digdir/designsystemet-css';
import '../src/css/index.scss';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
