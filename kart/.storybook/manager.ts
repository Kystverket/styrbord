import { addons } from "storybook/manager-api";
import { defaultConfig } from "storybook-addon-tag-badges/manager-helpers";
import StyrbordTheme from "./StyrbordTheme";

addons.setConfig({
  theme: StyrbordTheme,
  tagBadges: [
    {
      tags: "ds-override",
      badge: {
        text: "🌈+⚓",
        bgColor: "#ffffff",
        fgColor: "#4aa4e7",
      } as any,
      display: {
        sidebar: ["component"],
        toolbar: false,
      },
    },
    {
      tags: "ds",
      badge: {
        text: "🌈",
        bgColor: "#ffffff",
        fgColor: "#e7a44a",
      } as any,
      display: {
        sidebar: ["component"],
        toolbar: false,
      },
    },
    {
      tags: "beta",
      badge: {
        text: "🔥 beta",
        bgColor: "#FFBBBB",
        fgColor: "#800000",
      } as any,
      display: {
        sidebar: ["component"],
        toolbar: false,
      },
    },
    {
      tags: "kyv",
      badge: {
        text: "⚓",
        bgColor: "transparent",
        fgColor: "#000667",
      } as any,
      display: {
        sidebar: ["component"],
        toolbar: false,
      },
    },
    {
      tags: "deprecated",
      badge: {
        text: "Deprecated",
        bgColor: "#ff00ff",
        fgColor: "#ffffff",
      } as any,
      display: {
        sidebar: ["component"],
        toolbar: false,
      },
    },
    // Place the default config after your custom matchers.
    ...defaultConfig,
  ],
});
