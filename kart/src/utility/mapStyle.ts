import type maplibregl from "maplibre-gl";
import type { LayerSpecification } from "maplibre-gl";
import type { Coordinate } from "~/utility/types";
import type { BaseLayerDefinition } from "~/utility/layers.types";

/** Default center: roughly central Norway. */
export const DEFAULT_CENTER: Coordinate = { latitude: 65.0, longitude: 14.0 };

/** Default zoom level for the overview map. */
export const DEFAULT_ZOOM = 5;

/** Bounding box covering mainland Norway: [[west, south], [east, north]]. */
export const DEFAULT_BOUNDS: [[number, number], [number, number]] = [
  [3.0, 57.5],
  [32.0, 71.5],
];

/**
 * An empty style used as the initial MapLibre style.
 *
 * Base layers are managed dynamically via the `BaseLayersContext`,
 * so the map starts with a blank canvas.
 */
export const EMPTY_STYLE: maplibregl.StyleSpecification = {
  version: 8,
  sources: {},
  layers: [],
};

/** Kartverket topographic raster base layer. */
export const KARTVERKET_TOPO_BASE_LAYER: BaseLayerDefinition = {
  id: "kartverket-topo",
  label: "Topografisk",
  sources: {
    "kartverket-topo": {
      type: "raster",
      tiles: [
        "https://cache.kartverket.no/v1/wmts/1.0.0/topo/default/webmercator/{z}/{y}/{x}.png",
      ],
      tileSize: 256,
      maxzoom: 18,
      attribution: '&copy; <a href="https://www.kartverket.no/">Kartverket</a>',
    },
  },
  layers: [
    {
      id: "kartverket-topo-raster",
      type: "raster",
      source: "kartverket-topo",
    } as LayerSpecification,
  ],
};
