import type { Feature, FeatureCollection } from "geojson";
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
// Feature ids
// ---------------------------------------------------------------------------

/**
 * The id MapLibre keeps for `id`, or `undefined` if it can't keep it. MapLibre
 * only stores non-negative integer feature ids; a string is run through
 * `parseInt`, so `"42"` survives (as `42`) and `"application-42"` does not.
 */
function mapLibreId(id: Feature["id"]): number | undefined {
  const n = typeof id === "string" && /^\d+$/.test(id) ? Number(id) : id;
  return typeof n === "number" && Number.isSafeInteger(n) && n >= 0
    ? n
    : undefined;
}

const withIdsCache = new WeakMap<object, Feature | FeatureCollection>();

/**
 * `data` with an id on every feature. Ids MapLibre can keep are left alone;
 * the rest get one above the highest existing id, so the two never collide.
 * Returns `data` itself when nothing needs an id, and the same copy for the
 * same input otherwise — a new object would make the map reload the source.
 */
function withFeatureIds(
  data: Feature | FeatureCollection,
): Feature | FeatureCollection {
  const features = data.type === "FeatureCollection" ? data.features : [data];
  if (features.every((f) => mapLibreId(f.id) !== undefined)) return data;

  const cached = withIdsCache.get(data);
  if (cached) return cached;

  // reduce, not Math.max(...spread): a large collection overflows the stack.
  let next =
    features.reduce((max, f) => Math.max(max, mapLibreId(f.id) ?? -1), -1) + 1;
  const withIds = features.map((f) =>
    mapLibreId(f.id) !== undefined ? f : { ...f, id: next++ },
  );
  const result =
    data.type === "FeatureCollection"
      ? { ...data, features: withIds }
      : withIds[0];
  withIdsCache.set(data, result);
  return result;
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
    "id" | "label" | "category" | "description" | "defaultVisible" | "metadata"
  > = {
    id: opts.id,
    label: opts.label,
    category: opts.category,
    description: opts.description,
    defaultVisible: opts.defaultVisible ?? true,
    metadata: opts.metadata,
  };

  const sourceId = `custom-${opts.id}`;

  switch (opts.type) {
    case "geojson": {
      return {
        ...base,
        legend: {
          fillColor: opts.fillColor ?? VIEW_FILL_COLOR,
          fillOpacity: opts.fillOpacity ?? VIEW_FILL_OPACITY,
          lineColor: opts.lineColor ?? VIEW_LINE_COLOR,
        },
        sources: {
          // Hover and selection tell features apart by id; without one,
          // features with equal properties would count as one. Inline data
          // keeps the ids it has; data from a URL can't be read in advance,
          // so MapLibre numbers those features by position instead.
          [sourceId]:
            typeof opts.data === "string"
              ? { type: "geojson", data: opts.data, generateId: true }
              : { type: "geojson", data: withFeatureIds(opts.data) },
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
