import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    '@chakra-ui/storybook-addon',
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  refs: {
    '@chakra-ui/react': {
      disable: true,
    },
  },
  docs: {
    autodocs: "tag",
  },/*
  features: {
    emotionAlias: false,
  },*/
};
export default config;
