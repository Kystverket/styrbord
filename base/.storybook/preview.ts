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
  sizeScale: {
    name: 'Størrelsesskala',
    description: 'Prototype for SAK-1157: dagens størrelsesskala eller forslaget med felles 4 px-skala',
    toolbar: {
      icon: 'ruler',
      items: [
        { value: 'current', title: 'Dagens skala' },
        { value: 'proposal', title: 'Forslag (4 px)' },
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
        order: [
          'Readme',
          'Changelog',
          'Foundations',
          ['Colors', 'Color Collections', 'Typography', 'Icon', 'Images and Illustrations', 'Logo', '*'],
          'Components',
          ['Actions', 'Form', 'Feedback', 'Navigation', 'Overlays', 'Data display', 'Layout'],
          'Page',
          'Patterns',
          ['Introduksjon', 'Showcase', 'Forms', 'Dashboards', 'Pages', '*'],
          'Utilities',
          'Deprecated',
        ],
      },
    },
  },

  tags: ['autodocs'],
  decorators: [StyrbordDecorator],
};

export default preview;
