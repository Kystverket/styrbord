import type { Meta, StoryObj } from "@storybook/react-vite";
import StyrbordDecorator from "../../../storybook/styrbordDecorator";
import { LayerToggle } from "./LayerToggle";
import { BaseLayersProvider } from "~/utility/baseLayersContext";
import { BuiltInLayersProvider } from "~/utility/builtInLayersContext";
import { CustomLayersProvider } from "~/utility/customLayersContext";
import { ViewBoundsProvider } from "~/utility/viewBoundsContext";
import { useMaplibreMap } from "~/hooks/useMaplibreMap";
import { KARTVERKET_TOPO_BASE_LAYER } from "~/utility/mapStyle";
import type { BaseLayerDefinition } from "~/utility/layers.types";
import type { LayerSpecification } from "maplibre-gl";
import { WmsCatalogLayersProvider } from "~/main";

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
      <BaseLayersProvider>
        <WmsCatalogLayersProvider
          capabilitiesUrl="https://services.kystverket.no/wms.ashx?service=WMS&request=GetCapabilities"
          attribution='&copy; <a href="https://www.kystverket.no/">Kystverket</a>'
        >
          <MapWithLayerToggle />
        </WmsCatalogLayersProvider>
      </BaseLayersProvider>
    </ViewBoundsProvider>
  ),
};

/** Starts open so layers are immediately visible. */
export const StartOpen: Story = {
  render: () => (
    <ViewBoundsProvider>
      <BaseLayersProvider>
        <BuiltInLayersProvider>
          <CustomLayersProvider>
            <MapWithLayerToggle defaultOpen />
          </CustomLayersProvider>
        </BuiltInLayersProvider>
      </BaseLayersProvider>
    </ViewBoundsProvider>
  ),
};

/** Only a subset of built-in layers (using include filter). */
export const FilteredLayers: Story = {
  render: () => (
    <ViewBoundsProvider>
      <BaseLayersProvider>
        <BuiltInLayersProvider include={["Havnedata", "Bilder"]}>
          <CustomLayersProvider>
            <MapWithLayerToggle defaultOpen />
          </CustomLayersProvider>
        </BuiltInLayersProvider>
      </BaseLayersProvider>
    </ViewBoundsProvider>
  ),
};

// ---------------------------------------------------------------------------
// Extra base layers for the multi-base-layer story
// ---------------------------------------------------------------------------

const KARTVERKET_SEA_BASE_LAYER: BaseLayerDefinition = {
  id: "kartverket-sea",
  label: "Sjøkart",
  sources: {
    "kartverket-sea": {
      type: "raster",
      tiles: [
        "https://cache.kartverket.no/v1/wmts/1.0.0/sjokartraster/default/webmercator/{z}/{y}/{x}.png",
      ],
      tileSize: 256,
      maxzoom: 18,
      attribution: '&copy; <a href="https://www.kartverket.no/">Kartverket</a>',
    },
  },
  layers: [
    {
      id: "kartverket-sea-raster",
      type: "raster",
      source: "kartverket-sea",
    } as LayerSpecification,
  ],
};

const KARTVERKET_GRAATONE_BASE_LAYER: BaseLayerDefinition = {
  id: "kartverket-graatone",
  label: "Gråtone",
  sources: {
    "kartverket-graatone": {
      type: "raster",
      tiles: [
        "https://cache.kartverket.no/v1/wmts/1.0.0/topograatone/default/webmercator/{z}/{y}/{x}.png",
      ],
      tileSize: 256,
      maxzoom: 18,
      attribution: '&copy; <a href="https://www.kartverket.no/">Kartverket</a>',
    },
  },
  layers: [
    {
      id: "kartverket-graatone-raster",
      type: "raster",
      source: "kartverket-graatone",
    } as LayerSpecification,
  ],
};

/** Multiple base layers — demonstrates the radio-button base layer switcher. */
export const MultipleBaseLayers: Story = {
  render: () => (
    <ViewBoundsProvider>
      <BaseLayersProvider
        baseLayers={[
          KARTVERKET_TOPO_BASE_LAYER,
          KARTVERKET_SEA_BASE_LAYER,
          KARTVERKET_GRAATONE_BASE_LAYER,
        ]}
      >
        <BuiltInLayersProvider>
          <CustomLayersProvider>
            <MapWithLayerToggle defaultOpen />
          </CustomLayersProvider>
        </BuiltInLayersProvider>
      </BaseLayersProvider>
    </ViewBoundsProvider>
  ),
};
