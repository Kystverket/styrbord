import { addons } from '@storybook/manager-api';
import { defaultConfig, type TagBadgeParameters } from 'storybook-addon-tag-badges';
import StyrbordTheme from './StyrbordTheme';

addons.setConfig({
  theme: StyrbordTheme,
  tagBadges: [
    {
      tags: 'ds-override',
      badge: {
        text: 'ds+kyv',
        bgColor: '#4aa4e7',
        fgColor: '#ffffff',
      },
      display: {
        sidebar: ['component'],
        toolbar: false,
      },
    },
    {
      tags: 'beta',
      badge: {
        text: 'beta',
        bgColor: '#ff0000',
        fgColor: '#ffffff',
      },
      display: {
        sidebar: ['component'],
        toolbar: false,
      },
    },
    {
      tags: 'kyv',
      badge: {
        text: 'kyv',
        bgColor: '#000667',
        fgColor: '#ffffff',
      },
      display: {
        sidebar: ['component'],
        toolbar: false,
      },
    },
    {
      tags: 'deprecated',
      badge: {
        text: 'Deprecated',
        bgColor: '#ff00ff',
        fgColor: '#ffffff',
      },
      display: {
        sidebar: ['component'],
        toolbar: false,
      },
    },
    // Place the default config after your custom matchers.
    ...defaultConfig,
  ] satisfies TagBadgeParameters,
});
