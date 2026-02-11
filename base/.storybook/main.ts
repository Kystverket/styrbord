import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../storybook/**/*.mdx', '../storybook/**/*.stories.@(ts|tsx)', '../src/components/**/*.stories.@(ts|tsx)'],

  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    'storybook-addon-tag-badges',
  ],

  core: {
    builder: '@storybook/builder-vite',
    disableWhatsNewNotifications: true,
  },

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  staticDirs: ['../assets'],

  docs: {},
};
export default config;
