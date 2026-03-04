import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import StyrbordDecorator from "../../../storybook/styrbordDecorator";
import { CoordinatePicker } from "./CoordinatePicker";
import type { CoordinateGeoJSON } from "~/utility/types";

const meta = {
  title: "Kart/CoordinatePicker",
  component: CoordinatePicker,
  decorators: [StyrbordDecorator],
  tags: ["autodocs", "kyv"],
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof CoordinatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

// ---- Default (empty) ----
export const Default: Story = {
  args: {
    label: "Plassering",
  },
};

// ---- Controlled with initial value ----
const ControlledTemplate = () => {
  const [value, setValue] = useState<CoordinateGeoJSON>({
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [10.3951, 63.4305],
    },
  });

  return (
    <div style={{ maxWidth: 700 }}>
      <CoordinatePicker
        label="Skiltplassering"
        value={value}
        onChange={setValue}
      />
      <pre
        style={{
          marginTop: 16,
          fontSize: 12,
          background: "#f5f5f5",
          padding: 12,
          borderRadius: 4,
        }}
      >
        {JSON.stringify(value, null, 2)}
      </pre>
    </div>
  );
};

export const WithInitialValue: Story = {
  render: () => <ControlledTemplate />,
};

// ---- With error ----
export const WithError: Story = {
  args: {
    label: "Plassering",
    error: "Koordinat er påkrevd",
  },
};

// ---- Disabled ----
export const Disabled: Story = {
  args: {
    label: "Plassering",
    value: {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [10.3951, 63.4305],
      },
    },
    disabled: true,
  },
};
