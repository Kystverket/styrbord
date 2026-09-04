import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    "../storybook/**/*.mdx",
    "../storybook/**/*.stories.@(ts|tsx)",
    "../src/components/**/*.stories.@(ts|tsx)",
  ],

  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@chromatic-com/storybook",
    "storybook-addon-tag-badges",
    "@storybook/addon-docs",
  ],

  core: {
    disableWhatsNewNotifications: true,
  },

  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  staticDirs: ["../assets"],

  docs: {},

  viteFinal: async (viteFinalConfig) => {
    viteFinalConfig.optimizeDeps = {
      ...viteFinalConfig.optimizeDeps,
      // maplibre-gl v6 locates its worker chunk at runtime via
      // `new URL("./maplibre-gl-worker.mjs", import.meta.url)`. Vite's dep
      // optimizer only pre-bundles the main entry, so that URL points into
      // the deps directory at a file that was never emitted. Serving
      // maplibre-gl straight from node_modules keeps the worker next to it.
      exclude: [
        ...(viteFinalConfig.optimizeDeps?.exclude ?? []),
        "maplibre-gl",
      ],
      esbuildOptions: {
        ...viteFinalConfig.optimizeDeps?.esbuildOptions,
        target: "es2022",
      },
    };
    return viteFinalConfig;
  },
};
export default config;
