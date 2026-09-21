import { addons } from 'storybook/manager-api';
import { defaultConfig, type TagBadgeParameters } from 'storybook-addon-tag-badges/manager-helpers';
import StyrbordTheme from './StyrbordTheme';

addons.setConfig({
  theme: StyrbordTheme,
  tagBadges: [
    {
      tags: 'ds-override',
      badge: {
        text: '🌈+⚓',
        bgColor: '#ffffff',
        fgColor: '#4aa4e7',
      },
      display: {
        sidebar: ['component'],
        toolbar: false,
      },
    },
    {
      tags: 'ds',
      badge: {
        text: '🌈',
        bgColor: '#ffffff',
        fgColor: '#e7a44a',
      },
      display: {
        sidebar: ['component'],
        toolbar: false,
      },
    },
    {
      tags: 'beta',
      badge: {
        text: '🔥 beta',
        bgColor: '#FFBBBB',
        fgColor: '#800000',
      },
      display: {
        sidebar: ['component', 'group'],
        toolbar: false,
      },
    },
    {
      tags: 'kyv',
      badge: {
        text: '⚓',
        bgColor: 'transparent',
        fgColor: '#000667',
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
