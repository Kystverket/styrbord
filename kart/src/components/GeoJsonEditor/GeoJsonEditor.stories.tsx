import { useState } from "react";
import type { Meta, StoryObj, StoryFn } from "@storybook/react-vite";
import type { FeatureCollection } from "geojson";
import StyrbordDecorator from "../../../storybook/styrbordDecorator";
import { GeoJsonEditor } from "./GeoJsonEditor";
import { ViewBoundsProvider } from "~/utility/viewBoundsContext";
import { BaseLayersProvider } from "~/utility/baseLayersContext";
import { BuiltInLayersProvider } from "~/utility/builtInLayersContext";
import { CustomLayersProvider } from "~/utility/customLayersContext";

const meta = {
  title: "Kart/GeoJsonEditor",
  component: GeoJsonEditor,
  decorators: [StyrbordDecorator],
  tags: ["autodocs", "kyv"],
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof GeoJsonEditor>;

export default meta;
type Story = StoryObj<typeof meta>;

// ---- Default: empty editor with all modes ----
export const Default: Story = {};

// ---- Pre-loaded FeatureCollection for editing ----
const sampleData: FeatureCollection = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { name: "Ålesund havn" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [6.151401, 62.469249],
            [6.151305, 62.468719],
            [6.152655, 62.468677],
            [6.152711, 62.469208],
            [6.151401, 62.469249],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { name: "Trondheim" },
      geometry: { type: "Point", coordinates: [10.3951, 63.4305] },
    },
    {
      type: "Feature",
      properties: { name: "Kystlinje" },
      geometry: {
        type: "LineString",
        coordinates: [
          [5.3221, 60.3913],
          [6.151, 62.469],
          [10.395, 63.43],
        ],
      },
    },
  ],
};

export const WithInitialData: Story = {
  args: {
    value: sampleData,
  },
};

// ---- Points only ----
export const PointsOnly: Story = {
  args: {
    modes: ["point"],
  },
};

// ---- Lines only ----
export const LinesOnly: Story = {
  args: {
    modes: ["linestring"],
  },
};

// ---- Polygons only ----
export const PolygonsOnly: Story = {
  args: {
    modes: ["polygon"],
  },
};

// ---- Disabled ----
export const Disabled: Story = {
  args: {
    value: sampleData,
    disabled: true,
  },
};

// ---- Tall map ----
export const TallMap: Story = {
  args: {
    height: "1200px",
  },
};

// ---- Controlled: show onChange output ----
const ControlledTemplate: StoryFn<typeof GeoJsonEditor> = () => {
  const [data, setData] = useState<FeatureCollection>({
    type: "FeatureCollection",
    features: [],
  });

  return (
    <div>
      <GeoJsonEditor value={data} onChange={setData} />
      <pre
        style={{
          marginTop: 16,
          padding: 12,
          background: "#f5f5f5",
          borderRadius: 8,
          fontSize: "0.8rem",
          maxHeight: 300,
          overflow: "auto",
        }}
      >
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
};

export const Controlled: Story = {
  render: ControlledTemplate,
};

// ---- With layer toggle ----
export const WithLayerToggle: Story = {
  render: () => (
    <ViewBoundsProvider>
      <BaseLayersProvider>
        <BuiltInLayersProvider>
          <CustomLayersProvider>
            <GeoJsonEditor value={sampleData} showLayerToggle />
          </CustomLayersProvider>
        </BuiltInLayersProvider>
      </BaseLayersProvider>
    </ViewBoundsProvider>
  ),
};
