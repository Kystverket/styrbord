import { useState } from "react";
import type { Meta, StoryObj, StoryFn } from "@storybook/react-vite";
import type { FeatureCollection } from "geojson";
import StyrbordDecorator from "../../../storybook/styrbordDecorator";
import { MapField } from "./MapField";

const meta = {
  title: "Kart/MapField",
  component: MapField,
  decorators: [StyrbordDecorator],
  tags: ["autodocs", "kyv"],
  parameters: {
    layout: "padded",
    docs: {
      story: {
        inline: false,
        iframeHeight: "700px",
      },
    },
  },
} satisfies Meta<typeof MapField>;

export default meta;
type Story = StoryObj<typeof meta>;

// ---------------------------------------------------------------------------
// Sample data
// ---------------------------------------------------------------------------

const sampleData: FeatureCollection = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { nummer: 1, beskrivelse: "Ålesund Havn" },
      geometry: {
        type: "Point",
        coordinates: [6.151401, 62.469249],
      },
    },
    {
      type: "Feature",
      properties: { nummer: 2, beskrivelse: "Kråkenes Fyr" },
      geometry: {
        type: "Point",
        coordinates: [4.999, 62.032],
      },
    },
  ],
};

// ---------------------------------------------------------------------------
// 1. Default – label and description
// ---------------------------------------------------------------------------

export const Default: Story = {
  args: {
    label: "Stedsangivelse",
    description: "Marker stedene på kartet",
    height: "500px",
  },
};

// ---------------------------------------------------------------------------
// 2. With annotations
// ---------------------------------------------------------------------------

const WithAnnotationsTemplate: StoryFn<typeof MapField> = () => {
  const [data, setData] = useState<FeatureCollection>(
    structuredClone(sampleData),
  );

  return (
    <MapField
      label="Markeringer"
      description="Tegn inn og beskriv markeringene"
      height="500px"
      value={data}
      onChange={setData}
      fitBounds
      annotations={[{ name: "beskrivelse", type: "text" }]}
      validationErrors={{}}
      touchedState={{}}
    />
  );
};

export const WithAnnotations: Story = {
  render: WithAnnotationsTemplate,
};

// ---------------------------------------------------------------------------
// 3. With error
// ---------------------------------------------------------------------------

export const WithError: Story = {
  args: {
    label: "Stedsangivelse",
    description: "Marker stedene på kartet",
    height: "500px",
    error: "Det oppsto en feil ved innlastning av kartdata",
  },
};

// ---------------------------------------------------------------------------
// 4. Required field
// ---------------------------------------------------------------------------

export const Required: Story = {
  args: {
    label: "Stedsangivelse",
    description: "Marker stedene på kartet",
    required: true,
    height: "500px",
  },
};

// ---------------------------------------------------------------------------
// 5. Read-only (disabled)
// ---------------------------------------------------------------------------

export const ReadOnly: Story = {
  args: {
    label: "Stedsangivelse",
    description: "Disse markeringene kan ikke redigeres",
    disabled: true,
    value: sampleData,
    fitBounds: true,
    height: "500px",
  },
};
