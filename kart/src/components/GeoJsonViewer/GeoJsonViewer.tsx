import { useEffect, useMemo } from "react";
import type { FeatureCollection } from "geojson";
import type maplibregl from "maplibre-gl";
import type { GeoJSONSource } from "maplibre-gl";

import styles from "~/components/shared/MapPicker.module.css";
import type { GeoJsonStyle, GeoJsonViewerProps } from "./GeoJsonViewer.types";
import { DEFAULT_CENTER, DEFAULT_ZOOM } from "~/utility/mapStyle";
import { useMaplibreMap } from "~/hooks/useMaplibreMap";

// ---------------------------------------------------------------------------
// Defaults
// ---------------------------------------------------------------------------

const DEFAULT_STYLE: Required<GeoJsonStyle> = {
  fillColor: "rgba(0, 6, 103, 0.2)",
  lineColor: "#000667",
  lineWidth: 2,
  pointRadius: 6,
  pointColor: "#df3c1b",
  pointStrokeColor: "#000667",
  pointStrokeWidth: 2,
};

const SOURCE_ID = "geojson-data";
const FILL_LAYER = "geojson-fill";
const LINE_LAYER = "geojson-line";
const POINT_STROKE_LAYER = "geojson-point-stroke";
const POINT_LAYER = "geojson-point";
const ALL_LAYERS = [POINT_LAYER, POINT_STROKE_LAYER, LINE_LAYER, FILL_LAYER];

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
function toFeatureCollection(
  data: GeoJsonViewerProps["data"],
): FeatureCollection {
  if (data.type === "FeatureCollection") {
    const fc = data as FeatureCollection;
    return { type: "FeatureCollection", features: fc.features };
  }
  return { type: "FeatureCollection", features: [data] } as FeatureCollection;
}

/** Remove all GeoJSON layers and the source from the map, ignoring errors. */
function removeLayers(map: maplibregl.Map) {
  try {
    for (const id of ALL_LAYERS) {
      if (map.getLayer(id)) map.removeLayer(id);
    }
    if (map.getSource(SOURCE_ID)) map.removeSource(SOURCE_ID);
  } catch {
    // map may already be destroyed
  }
}

/**
 * Compute a bounding box `[minLng, minLat, maxLng, maxLat]` from a
 * FeatureCollection by visiting every coordinate.
 */
function computeBounds(
  fc: FeatureCollection,
): [number, number, number, number] | null {
  let minLng = Infinity;
  let maxLng = -Infinity;
  let minLat = Infinity;
  let maxLat = -Infinity;
  let found = false;

  function visit(coords: unknown): void {
    if (!Array.isArray(coords)) return;
    if (typeof coords[0] === "number" && typeof coords[1] === "number") {
      const [lng, lat] = coords as [number, number];
      if (lng < minLng) minLng = lng;
      if (lng > maxLng) maxLng = lng;
      if (lat < minLat) minLat = lat;
      if (lat > maxLat) maxLat = lat;
      found = true;
    } else {
      for (const child of coords) visit(child);
    }
  }

  for (const feature of fc.features) {
    if (feature.geometry && "coordinates" in feature.geometry) {
      visit(feature.geometry.coordinates);
    }
  }

  return found ? [minLng, minLat, maxLng, maxLat] : null;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

/**
 * GeoJsonViewer — display GeoJSON data on an interactive Kartverket map.
 *
 * Renders Point, LineString, Polygon (and their Multi-variants) using
 * MapLibre GL layers. The map auto-fits to the data bounds by default.
 */
export function GeoJsonViewer({
  data,
  defaultCenter = DEFAULT_CENTER,
  defaultZoom = DEFAULT_ZOOM,
  fitBounds = true,
  fitBoundsPadding = 40,
  style: styleProp,
  height,
  className,
}: GeoJsonViewerProps) {
  const layerStyle: Required<GeoJsonStyle> = {
    ...DEFAULT_STYLE,
    ...styleProp,
  };

  // Strip foreign members and normalise to FeatureCollection
  const fc = useMemo(() => toFeatureCollection(data), [data]);

  const { mapContainerRef, mapRef } = useMaplibreMap({
    defaultCenter,
    defaultZoom,
  });

  // ----- Single effect: add / update GeoJSON source + layers -----
  useEffect(() => {
    const map = mapRef.current;
    if (!map) {
      console.warn("[GeoJsonViewer] mapRef.current is null — effect skipped");
      return;
    }

    const setup = () => {
      try {
        // Add or update the GeoJSON source
        const existingSource = map.getSource(SOURCE_ID);
        if (existingSource) {
          (existingSource as GeoJSONSource).setData(fc);
        } else {
          map.addSource(SOURCE_ID, { type: "geojson", data: fc });
        }

        // Add layers (idempotent — skipped if they already exist)
        if (!map.getLayer(FILL_LAYER)) {
          map.addLayer({
            id: FILL_LAYER,
            type: "fill",
            source: SOURCE_ID,
            layout: { visibility: "visible" },
            paint: { "fill-color": layerStyle.fillColor },
          });
        }

        if (!map.getLayer(LINE_LAYER)) {
          map.addLayer({
            id: LINE_LAYER,
            type: "line",
            source: SOURCE_ID,
            layout: { visibility: "visible" },
            paint: {
              "line-color": layerStyle.lineColor,
              "line-width": layerStyle.lineWidth,
            },
          });
        }

        if (!map.getLayer(POINT_STROKE_LAYER)) {
          map.addLayer({
            id: POINT_STROKE_LAYER,
            type: "circle",
            source: SOURCE_ID,
            layout: { visibility: "visible" },
            paint: {
              "circle-radius":
                layerStyle.pointRadius + layerStyle.pointStrokeWidth,
              "circle-color": layerStyle.pointStrokeColor,
            },
          });
        }

        if (!map.getLayer(POINT_LAYER)) {
          map.addLayer({
            id: POINT_LAYER,
            type: "circle",
            source: SOURCE_ID,
            layout: { visibility: "visible" },
            paint: {
              "circle-radius": layerStyle.pointRadius,
              "circle-color": layerStyle.pointColor,
            },
          });
        }

        // Fit bounds
        if (fitBounds) {
          const bounds = computeBounds(fc);
          if (bounds) {
            map.fitBounds(bounds, {
              padding: fitBoundsPadding,
              duration: 300,
            });
          }
        }

        // Force re-layout + repaint to ensure vector layers composite
        // on top of the raster base tiles.
        map.resize();
        map.triggerRepaint();

        // Diagnostic — check the browser console to verify layers exist
        // and features were parsed by the source.
        console.info(
          "[GeoJsonViewer] layers:",
          map.getStyle().layers.map((l) => l.id),
          "| source features:",
          map.querySourceFeatures(SOURCE_ID).length,
        );
      } catch (err) {
        console.error("[GeoJsonViewer] Error adding source/layers:", err);
      }
    };

    // Catch any internal MapLibre errors
    const onError = (e: unknown) =>
      console.error("[GeoJsonViewer] Map error:", e);
    map.on("error", onError);

    // Use map.on (not .once) so map.off reliably removes the exact handler.
    map.on("load", setup);

    // Also try immediately — covers the case where the map already loaded
    // (e.g. data prop changed after initial mount).
    if (map.isStyleLoaded()) {
      setup();
    }

    return () => {
      map.off("error", onError);
      map.off("load", setup);
      removeLayers(map);
    };
  }, [fc, mapRef]);

  return (
    <div
      ref={mapContainerRef}
      className={[styles.mapContainer, className].filter(Boolean).join(" ")}
      style={height ? { height } : undefined}
    />
  );
}

export default GeoJsonViewer;
