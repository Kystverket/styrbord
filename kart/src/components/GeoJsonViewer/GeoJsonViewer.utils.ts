import type { FeatureCollection } from "geojson";
import type maplibregl from "maplibre-gl";

import type { GeoJsonStyle, GeoJsonViewerProps } from "./GeoJsonViewer.types";

// ---------------------------------------------------------------------------
// Defaults & Constants
// ---------------------------------------------------------------------------

export const DEFAULT_STYLE: Required<GeoJsonStyle> = {
  fillColor: "rgba(0, 6, 103, 0.2)",
  lineColor: "#000667",
  lineWidth: 2,
  pointRadius: 6,
  pointColor: "#df3c1b",
  pointStrokeColor: "#000667",
  pointStrokeWidth: 2,
};

export const SOURCE_ID = "geojson-data";
export const FILL_LAYER = "geojson-fill";
export const LINE_LAYER = "geojson-line";
export const POINT_STROKE_LAYER = "geojson-point-stroke";
export const POINT_LAYER = "geojson-point";
export const ALL_LAYERS = [
  POINT_LAYER,
  POINT_STROKE_LAYER,
  LINE_LAYER,
  FILL_LAYER,
];

// Hover highlight layers
export const HOVER_FILL_LAYER = "geojson-hover-fill";
export const HOVER_LINE_LAYER = "geojson-hover-line";
export const HOVER_POINT_LAYER = "geojson-hover-point";

// Selection highlight layers
export const SELECTED_FILL_LAYER = "geojson-selected-fill";
export const SELECTED_LINE_LAYER = "geojson-selected-line";
export const SELECTED_POINT_LAYER = "geojson-selected-point";

export const HIGHLIGHT_LAYERS = [
  HOVER_FILL_LAYER,
  HOVER_LINE_LAYER,
  HOVER_POINT_LAYER,
  SELECTED_FILL_LAYER,
  SELECTED_LINE_LAYER,
  SELECTED_POINT_LAYER,
];

// All interactive layers (for querying features)
export const INTERACTIVE_LAYERS = [FILL_LAYER, LINE_LAYER, POINT_LAYER];

// Highlight colors
export const HOVER_COLOR = "rgba(0, 98, 186, 0.4)";
export const SELECTED_COLOR = "#0062ba";
export const SELECTED_GLOW_COLOR = "rgba(0, 98, 186, 0.5)";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Normalise a Feature or FeatureCollection into a **clean** FeatureCollection.
 *
 * Strips non-standard top-level members (e.g. `crs`, `name`) that originate
 * from legacy GeoJSON files and can cause MapLibre's internal geojson-vt
 * worker to silently discard features.
 */
export function toFeatureCollection(
  data: GeoJsonViewerProps["data"],
): FeatureCollection {
  if (data.type === "FeatureCollection") {
    const fc = data as FeatureCollection;
    return { type: "FeatureCollection", features: fc.features };
  }
  return { type: "FeatureCollection", features: [data] } as FeatureCollection;
}

/** Remove all GeoJSON layers and the source from the map, ignoring errors. */
export function removeLayers(map: maplibregl.Map) {
  try {
    for (const id of [...ALL_LAYERS, ...HIGHLIGHT_LAYERS]) {
      if (map.getLayer(id)) map.removeLayer(id);
    }
    if (map.getSource(SOURCE_ID)) map.removeSource(SOURCE_ID);
  } catch {
    // map may already be destroyed
  }
}

/**
 * Add highlight layers for hover and selection effects.
 * These layers use filters to show only specific features.
 */
export function addHighlightLayers(
  map: maplibregl.Map,
  style: Required<GeoJsonStyle>,
) {
  // ----- Hover layers (subtle highlight) -----
  if (!map.getLayer(HOVER_FILL_LAYER)) {
    map.addLayer({
      id: HOVER_FILL_LAYER,
      type: "fill",
      source: SOURCE_ID,
      layout: { visibility: "visible" },
      paint: {
        "fill-color": HOVER_COLOR,
        "fill-opacity": 0.5,
      },
      filter: ["==", ["get", "__hover"], true], // Initially matches nothing
    });
  }

  if (!map.getLayer(HOVER_LINE_LAYER)) {
    map.addLayer({
      id: HOVER_LINE_LAYER,
      type: "line",
      source: SOURCE_ID,
      layout: { visibility: "visible" },
      paint: {
        "line-color": SELECTED_COLOR,
        "line-width": style.lineWidth + 2,
        "line-opacity": 0.6,
      },
      filter: ["==", ["get", "__hover"], true],
    });
  }

  if (!map.getLayer(HOVER_POINT_LAYER)) {
    map.addLayer({
      id: HOVER_POINT_LAYER,
      type: "circle",
      source: SOURCE_ID,
      layout: { visibility: "visible" },
      paint: {
        "circle-radius": style.pointRadius + 4,
        "circle-color": HOVER_COLOR,
        "circle-opacity": 0.6,
      },
      filter: ["==", ["get", "__hover"], true],
    });
  }

  // ----- Selection layers (glow/outline effect) -----
  // Outer glow for fill (rendered behind)
  if (!map.getLayer(SELECTED_FILL_LAYER)) {
    map.addLayer({
      id: SELECTED_FILL_LAYER,
      type: "line",
      source: SOURCE_ID,
      layout: { visibility: "visible" },
      paint: {
        "line-color": SELECTED_COLOR,
        "line-width": 4,
        "line-blur": 3,
        "line-opacity": 0.8,
      },
      filter: ["==", ["get", "__selected"], true],
    });
  }

  // Selection outline for lines
  if (!map.getLayer(SELECTED_LINE_LAYER)) {
    map.addLayer({
      id: SELECTED_LINE_LAYER,
      type: "line",
      source: SOURCE_ID,
      layout: { visibility: "visible" },
      paint: {
        "line-color": SELECTED_COLOR,
        "line-width": style.lineWidth + 4,
        "line-blur": 3,
        "line-opacity": 0.8,
      },
      filter: ["==", ["get", "__selected"], true],
    });
  }

  // Selection glow for points
  if (!map.getLayer(SELECTED_POINT_LAYER)) {
    map.addLayer({
      id: SELECTED_POINT_LAYER,
      type: "circle",
      source: SOURCE_ID,
      layout: { visibility: "visible" },
      paint: {
        "circle-radius": style.pointRadius + 6,
        "circle-color": SELECTED_GLOW_COLOR,
        "circle-blur": 0.5,
        "circle-opacity": 0.9,
      },
      filter: ["==", ["get", "__selected"], true],
    });
  }
}

/**
 * Update the filter on hover highlight layers to show only the specified feature.
 * Pass null to hide all hover highlights.
 */
export function updateHoverHighlight(
  map: maplibregl.Map,
  featureId: string | number | null,
) {
  const filter =
    featureId !== null
      ? ["==", ["id"], featureId]
      : ["==", ["get", "__hover"], true]; // Matches nothing

  for (const layerId of [
    HOVER_FILL_LAYER,
    HOVER_LINE_LAYER,
    HOVER_POINT_LAYER,
  ]) {
    if (map.getLayer(layerId)) {
      map.setFilter(layerId, filter as maplibregl.FilterSpecification);
    }
  }
}

/**
 * Update the filter on selection highlight layers to show only the specified features.
 * Pass empty array to hide all selection highlights.
 */
export function updateSelectionHighlight(
  map: maplibregl.Map,
  featureIds: (string | number)[],
) {
  const filter =
    featureIds.length > 0
      ? ["in", ["id"], ["literal", featureIds]]
      : ["==", ["get", "__selected"], true]; // Matches nothing

  for (const layerId of [
    SELECTED_FILL_LAYER,
    SELECTED_LINE_LAYER,
    SELECTED_POINT_LAYER,
  ]) {
    if (map.getLayer(layerId)) {
      map.setFilter(layerId, filter as maplibregl.FilterSpecification);
    }
  }
}
