import type { Meta, StoryObj } from "@storybook/react-vite";
import StyrbordDecorator from "../../../storybook/styrbordDecorator";
import { LayerToggle } from "./LayerToggle";
import { BuiltInLayersProvider } from "~/utility/builtInLayersContext";
import { CustomLayersProvider } from "~/utility/customLayersContext";
import { ViewBoundsProvider } from "~/utility/viewBoundsContext";
import { useMaplibreMap } from "~/hooks/useMaplibreMap";

// ---------------------------------------------------------------------------
// Meta
// ---------------------------------------------------------------------------

const meta = {
  title: "Kart/LayerToggle",
  component: LayerToggle,
  decorators: [StyrbordDecorator],
  tags: ["autodocs", "kyv"],
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof LayerToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

// ---------------------------------------------------------------------------
// Helper: wraps the control in a real map + layer providers
// ---------------------------------------------------------------------------

const mapContainerStyle: React.CSSProperties = {
  position: "relative",
  width: "100%",
  height: 500,
  borderRadius: 8,
  overflow: "hidden",
};

function MapWithLayerToggle({ defaultOpen }: { defaultOpen?: boolean }) {
  const { mapContainerRef } = useMaplibreMap({ height: "500px" });

  return (
    <div ref={mapContainerRef} style={mapContainerStyle}>
      <LayerToggle defaultOpen={defaultOpen} />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Stories
// ---------------------------------------------------------------------------

/** Default — collapsed, with built-in layers available. */
export const Default: Story = {
  render: () => (
    <ViewBoundsProvider>
      <BuiltInLayersProvider>
        <CustomLayersProvider>
          <MapWithLayerToggle />
        </CustomLayersProvider>
      </BuiltInLayersProvider>
    </ViewBoundsProvider>
  ),
};

/** Starts open so layers are immediately visible. */
export const StartOpen: Story = {
  render: () => (
    <ViewBoundsProvider>
      <BuiltInLayersProvider>
        <CustomLayersProvider>
          <MapWithLayerToggle defaultOpen />
        </CustomLayersProvider>
      </BuiltInLayersProvider>
    </ViewBoundsProvider>
  ),
};

/** Only a subset of built-in layers (using include filter). */
export const FilteredLayers: Story = {
  render: () => (
    <ViewBoundsProvider>
      <BuiltInLayersProvider include={["Havnedata", "Bilder"]}>
        <CustomLayersProvider>
          <MapWithLayerToggle defaultOpen />
        </CustomLayersProvider>
      </BuiltInLayersProvider>
    </ViewBoundsProvider>
  ),
};
