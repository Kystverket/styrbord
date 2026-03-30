import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import StyrbordDecorator from "../../../storybook/styrbordDecorator";
import { CoordinateField } from "./CoordinateField";
import type { CoordinateGeoJSON } from "~/utility/types";
import type { CoordinateFieldProps } from "./CoordinateField.types";

const meta = {
  title: "Kart/CoordinateField",
  component: CoordinateField,
  decorators: [StyrbordDecorator],
  tags: ["autodocs", "kyv"],
  parameters: {
    layout: "padded",
    docs: {
      story: {
        // Render each story in its own iframe in the docs page so that
        // the MapLibre/terra-draw instance is fully isolated — the same
        // context as the focused canvas view where clicking works.
        inline: false,
        iframeHeight: "600px",
      },
    },
  },
} satisfies Meta<typeof CoordinateField>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Wrapper that provides controlled state for stories. */
const Controlled = (
  props: Partial<CoordinateFieldProps> & { initialValue?: CoordinateGeoJSON },
) => {
  const { initialValue, ...rest } = props;
  const [value, setValue] = useState<CoordinateGeoJSON | undefined>(
    initialValue,
  );
  return <CoordinateField value={value} onChange={setValue} {...rest} />;
};

const noop = () => {};

// ---- Default (empty) ----
export const Default: Story = {
  args: { value: undefined, onChange: noop },
  render: () => <Controlled label="Plassering" />,
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
      <CoordinateField
        label="Skiltplassering"
        value={value}
        onChange={setValue}
        showCenterAction
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
  args: { value: undefined, onChange: noop },
  render: () => <ControlledTemplate />,
};

// ---- With error ----
export const WithError: Story = {
  args: { value: undefined, onChange: noop },
  render: () => <Controlled label="Plassering" error="Koordinat er påkrevd" />,
};

// ---- Custom height ----
export const TallMap: Story = {
  args: { value: undefined, onChange: noop },
  render: () => <Controlled height="1600px" />,
  parameters: {
    docs: { story: { iframeHeight: "1750px" } },
  },
};

// ---- Disabled ----
export const Disabled: Story = {
  args: { value: undefined, onChange: noop },
  render: () => (
    <Controlled
      label="Plassering"
      initialValue={{
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [10.3951, 63.4305],
        },
      }}
      disabled
    />
  ),
};
