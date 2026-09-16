import type { LayerSpecification } from "maplibre-gl";
import type {
  LayerDefinition,
  LayerFilterConfig,
  CreateSimpleLayerOptions,
} from "~/utility/layers.types";
import {
  VECTOR_TILE_DEFAULT_COLOR,
  VIEW_FILL_COLOR,
  VIEW_FILL_OPACITY,
  VIEW_LINE_COLOR,
  VIEW_POINT_COLOR,
  VIEW_POINT_STROKE_COLOR,
} from "~/utility/mapColors";

// ---------------------------------------------------------------------------
// Include / exclude filter utilities
// ---------------------------------------------------------------------------

/** Check whether `include` is the active filter key. */
function isIncludeFilter(
  config: LayerFilterConfig,
): config is { include: string[] } {
  return "include" in config;
}

/**
 * Returns `true` when the given layer id passes the filter.
 *
 * - No config → always visible
 * - `{ include }` → only the listed ids are visible
 * - `{ exclude }` → everything *except* the listed ids is visible
 */
export function isLayerIncluded(
  layerId: string,
  filter?: LayerFilterConfig,
): boolean {
  if (!filter) return true;
  if (isIncludeFilter(filter)) return filter.include.includes(layerId);
  return !filter.exclude.includes(layerId);
}

// ---------------------------------------------------------------------------
// Simple layer factory (higher-level API for custom layers)
// ---------------------------------------------------------------------------

/**
 * Create a `LayerDefinition` from a simplified description.
 *
 * Consumers who need full MapLibre control can construct
 * `LayerDefinition` directly; this helper covers common cases.
 */
export function createSimpleLayer(
  opts: CreateSimpleLayerOptions,
): LayerDefinition {
  const base: Pick<
    LayerDefinition,
    "id" | "label" | "category" | "defaultVisible" | "metadata"
  > = {
    id: opts.id,
    label: opts.label,
    category: opts.category,
    defaultVisible: opts.defaultVisible ?? true,
    metadata: opts.metadata,
  };

  const sourceId = `custom-${opts.id}`;

  switch (opts.type) {
    case "geojson": {
      return {
        ...base,
        sources: {
          [sourceId]: {
            type: "geojson",
            data: opts.data as GeoJSON.GeoJSON,
          },
        },
        layers: [
          {
            id: `${sourceId}-fill`,
            type: "fill",
            source: sourceId,
            paint: {
              "fill-color": opts.fillColor ?? VIEW_FILL_COLOR,
              "fill-opacity": opts.fillOpacity ?? VIEW_FILL_OPACITY,
            },
            filter: ["==", "$type", "Polygon"],
          } as LayerSpecification,
          {
            id: `${sourceId}-line`,
            type: "line",
            source: sourceId,
            paint: {
              "line-color": opts.lineColor ?? VIEW_LINE_COLOR,
              "line-width": 2,
            },
            filter: ["==", "$type", "LineString"],
          } as LayerSpecification,
          {
            id: `${sourceId}-circle`,
            type: "circle",
            source: sourceId,
            paint: {
              "circle-color": opts.pointColor ?? VIEW_POINT_COLOR,
              "circle-radius": 5,
              "circle-stroke-color": VIEW_POINT_STROKE_COLOR,
              "circle-stroke-width": 1,
            },
            filter: ["==", "$type", "Point"],
          } as LayerSpecification,
        ],
      };
    }

    case "wms": {
      return {
        ...base,
        sources: {
          [sourceId]: {
            type: "raster",
            tiles: [opts.url],
            tileSize: 256,
            attribution: opts.attribution,
          },
        },
        layers: [
          {
            id: `${sourceId}-raster`,
            type: "raster",
            source: sourceId,
          } as LayerSpecification,
        ],
      };
    }

    case "vector-tiles": {
      const renderAs = opts.renderAs ?? "fill";
      const layerSpec: Record<string, unknown> = {
        id: `${sourceId}-${renderAs}`,
        type: renderAs,
        source: sourceId,
        "source-layer": opts.sourceLayer,
      };

      if (renderAs === "fill") {
        layerSpec.paint = {
          "fill-color": opts.color ?? VECTOR_TILE_DEFAULT_COLOR,
        };
      } else if (renderAs === "line") {
        layerSpec.paint = {
          "line-color": opts.color ?? VECTOR_TILE_DEFAULT_COLOR,
          "line-width": 2,
        };
      } else {
        layerSpec.paint = {
          "circle-color": opts.color ?? VECTOR_TILE_DEFAULT_COLOR,
          "circle-radius": 5,
        };
      }

      return {
        ...base,
        sources: {
          [sourceId]: {
            type: "vector",
            tiles: [opts.url],
          },
        },
        layers: [layerSpec as LayerSpecification],
      };
    }
  }
}
