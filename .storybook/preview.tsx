import type { Preview } from "@storybook/react";
import React from 'react';

import { StyrbordProvider } from '../src/components/StyrbordProvider/StyrbordProvider';

const preview: Preview = {
  decorators: [
    (Story) => (
      <StyrbordProvider>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </StyrbordProvider>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;