import type { StorybookConfig } from '@storybook/react-vite';
import remarkGfm from 'remark-gfm';

const config: StorybookConfig = {
  stories: [
    '../storybook/**/*.mdx',
    '../storybook/**/*.stories.@(ts|tsx)',
    '../src/components/**/*.stories.@(ts|tsx)',
    '../src/data/**/*.stories.@(ts|tsx)',
  ],

  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@chromatic-com/storybook',
    'storybook-addon-tag-badges',
    {
      name: '@storybook/addon-docs',
      // MDX støtter ikke GitHub-markdown (tabeller, gjennomstreking, oppgavelister) uten remark-gfm.
      options: { mdxPluginOptions: { mdxCompileOptions: { remarkPlugins: [remarkGfm] } } },
    },
  ],

  core: {
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
