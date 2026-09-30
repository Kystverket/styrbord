import type { Preview } from "@storybook/react-vite";
import { setWorkerUrl } from "maplibre-gl";
import maplibreWorkerUrl from "maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url";
import { themes } from "storybook/theming";

import "@kystverket/styrbord/style.css";
import "../storybook/storybook-style.scss";

// maplibre-gl v6 cannot find its worker once bundled; see "maplibre-gl v6" in README.md.
setWorkerUrl(maplibreWorkerUrl);

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
        method: "alphabetical",
        order: [
          "Readme",
          "Demosider",
          "Typography",
          "Page",
          "Helpers",
          "Form",
          "Components",
        ],
      },
    },
  },

  tags: ["autodocs"],
};

export default preview;
