import { useMemo, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import type { FeatureCollection } from "geojson";
import { Button } from "@kystverket/styrbord";
import { colors } from "@kystverket/styrbord-tokens/colors";
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
import { createSimpleLayer } from "~/utility/layers.helpers";

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
  borderRadius: 8,
  overflow: "hidden",
};

function MapWithLayerToggle({
  defaultOpen,
  height = 500,
}: {
  defaultOpen?: boolean;
  height?: number;
}) {
  const { mapContainerRef } = useMaplibreMap({ height: `${height}px` });

  return (
    <div ref={mapContainerRef} style={{ ...mapContainerStyle, height }}>
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

// ---------------------------------------------------------------------------
// GeoJSON layers passed in by the application
// ---------------------------------------------------------------------------

const token = colors.light;

interface Tiltak {
  id: string;
  filename: string;
  date: string;
  status: string;
  color: string;
  borderColor: string;
  /** Polygon centre, [lng, lat]. */
  center: [number, number];
}

function square([lng, lat]: [number, number], size = 0.02): FeatureCollection {
  return {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {},
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [lng - size, lat - size / 2],
              [lng + size, lat - size / 2],
              [lng + size, lat + size / 2],
              [lng - size, lat + size / 2],
              [lng - size, lat - size / 2],
            ],
          ],
        },
      },
    ],
  };
}

const INITIAL_TILTAK: Tiltak[] = [
  {
    id: "tiltak-1",
    filename: "tillatelse-til-tiltak-wgs84[1]",
    date: "16.10.2026",
    status: "Ettersending av informasjon",
    color: token.primary.baseDefault,
    borderColor: token.primary.baseDefault,
    center: [5.32, 60.39],
  },
  {
    id: "tiltak-2",
    filename: "tillatelse-til-tiltak-wgs84",
    date: "14.10.2026",
    status: "Søknad",
    color: token.danger.baseDefault,
    borderColor: token.danger.borderDefault,
    center: [5.27, 60.41],
  },
];

function MapWithGeoJsonLayers() {
  const [tiltak, setTiltak] = useState(INITIAL_TILTAK);

  // The application maps its own data to layer definitions. Memoise it so
  // the provider only re-checks the layers when the data actually changes.
  const layers = useMemo(
    () =>
      tiltak.map((t) =>
        createSimpleLayer({
          type: "geojson",
          id: t.id,
          label: t.filename,
          description: `${t.date} · ${t.status}`,
          category: "Tiltak",
          data: square(t.center),
          fillColor: t.color,
          lineColor: t.borderColor,
        }),
      ),
    [tiltak],
  );

  const addTiltak = () =>
    setTiltak((prev) => [
      ...prev,
      {
        id: `tiltak-${Date.now()}`,
        filename: `nytt-tiltak-${prev.length + 1}.geojson`,
        date: "10.11.2026",
        status: "Utkast",
        color: token.success.baseDefault,
        borderColor: token.success.borderDefault,
        center: [5.3 + prev.length * 0.03, 60.36],
      },
    ]);

  const removeLast = () => setTiltak((prev) => prev.slice(0, -1));

  // New data for an existing id — the map updates the source in place.
  const moveFirst = () =>
    setTiltak((prev) =>
      prev.map((t, i) =>
        i === 0 ? { ...t, center: [t.center[0] + 0.02, t.center[1]] } : t,
      ),
    );

  return (
    <>
      <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
        <Button data-size="sm" variant="outline" onClick={addTiltak}>
          Legg til fil
        </Button>
        <Button data-size="sm" variant="outline" onClick={removeLast}>
          Fjern siste fil
        </Button>
        <Button data-size="sm" variant="outline" onClick={moveFirst}>
          Flytt første fil
        </Button>
      </div>
      <BaseLayersProvider
        baseLayers={[KARTVERKET_TOPO_BASE_LAYER, KARTVERKET_SEA_BASE_LAYER]}
      >
        <BuiltInLayersProvider>
          <CustomLayersProvider layers={layers}>
            <MapWithLayerToggle defaultOpen height={800} />
          </CustomLayersProvider>
        </BuiltInLayersProvider>
      </BaseLayersProvider>
    </>
  );
}

/**
 * GeoJSON files supplied by the application through
 * `<CustomLayersProvider layers={...}>`. Each file becomes its own layer with a
 * colour swatch and a description line. Adding, removing and changing the
 * data of a file updates both the map and the menu.
 */
export const WithGeoJsonLayers: Story = {
  render: () => (
    <ViewBoundsProvider
      defaultCenter={{ latitude: 60.39, longitude: 5.3 }}
      defaultZoom={11}
    >
      <MapWithGeoJsonLayers />
    </ViewBoundsProvider>
  ),
};
