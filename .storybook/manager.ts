import { addons } from '@storybook/manager-api';
import { defaultConfig, type TagBadgeParameters } from 'storybook-addon-tag-badges';
import StyrbordTheme from './StyrbordTheme';

addons.setConfig({
  theme: StyrbordTheme,
  tagBadges: [
    {
      tags: 'kyv',
      badge: {
        text: '⚓',
        bgColor: '#ffffff',
        fgColor: '#000667',
      },
      display: {
        sidebar: ['component'],
        toolbar: false,
      },
    },
    {
      tags: 'kyv-ds-hybrid',
      badge: {
        text: '🤖',
        bgColor: '#ffffff',
        fgColor: '#653635',
      },
      display: {
        sidebar: ['component'],
        toolbar: false,
      },
    },
    {
      tags: 'ds',
      badge: {
        text: 'ds.no',
        bgColor: '#ffffff',
        fgColor: '#653635',
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
