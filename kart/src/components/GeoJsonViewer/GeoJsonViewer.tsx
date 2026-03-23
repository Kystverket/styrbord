import { useEffect, useMemo } from "react";
import type { GeoJSONSource } from "maplibre-gl";

import styles from "~/components/shared/MapPicker.module.css";
import type { GeoJsonStyle, GeoJsonViewerProps } from "./GeoJsonViewer.types";
import { computeBounds } from "~/utility/geojson";
import { useMaplibreMap } from "~/hooks/useMaplibreMap";
import {
  DEFAULT_STYLE,
  FILL_LAYER,
  LINE_LAYER,
  POINT_LAYER,
  POINT_STROKE_LAYER,
  SOURCE_ID,
  removeLayers,
  toFeatureCollection,
} from "./GeoJsonViewer.utils";
import { LayerToggle } from "../LayerToggle/LayerToggle";

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
  fitBounds = true,
  fitBoundsPadding = 40,
  geoJsonStyle: styleProp,
  showLayerToggle = false,
  height,
  className,
  disabled,
}: GeoJsonViewerProps) {
  const layerStyle: Required<GeoJsonStyle> = {
    ...DEFAULT_STYLE,
    ...styleProp,
  };

  // Strip foreign members and normalise to FeatureCollection
  const fc = useMemo(() => toFeatureCollection(data), [data]);

  const { mapContainerRef, mapRef } = useMaplibreMap({
    disabled,
    height,
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
    >
      {showLayerToggle && <LayerToggle />}
    </div>
  );
}

export default GeoJsonViewer;
