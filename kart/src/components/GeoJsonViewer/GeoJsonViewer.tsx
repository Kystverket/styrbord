import { useEffect, useMemo, useState, useCallback, useRef } from "react";
import type { GeoJSONSource } from "maplibre-gl";
import type maplibregl from "maplibre-gl";

import styles from "~/components/shared/MapPicker.module.css";
import type { GeoJsonStyle, GeoJsonViewerProps } from "./GeoJsonViewer.types";
import { computeBounds } from "~/utility/geojson";
import { useMaplibreMap } from "~/hooks/useMaplibreMap";
import {
  useFeatureInteraction,
  type InteractiveFeature,
} from "~/hooks/useFeatureInteraction";
import { useWmsFeatureInfo } from "~/hooks/useWmsFeatureInfo";
import type { Coordinate } from "~/utility/types";
import {
  DEFAULT_STYLE,
  FILL_LAYER,
  LINE_LAYER,
  POINT_LAYER,
  POINT_STROKE_LAYER,
  SOURCE_ID,
  INTERACTIVE_LAYERS,
  removeLayers,
  toFeatureCollection,
  addHighlightLayers,
  updateHoverHighlight,
  updateSelectionHighlight,
} from "./GeoJsonViewer.utils";
import { LayerToggle } from "../LayerToggle/LayerToggle";
import { GeoJsonViewerHoverPopup } from "./GeoJsonViewerHoverPopup";
import { MapCenterAction } from "../shared/MapCenterAction";

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

/**
 * GeoJsonViewer — display GeoJSON data on an interactive Kartverket map.
 *
 * Renders Point, LineString, Polygon (and their Multi-variants) using
 * MapLibre GL layers. The map auto-fits to the data bounds by default.
 *
 * Supports feature hover (with customizable content per type) and selection
 * (single or multi-select with Ctrl/Cmd).
 */
export function GeoJsonViewer({
  data,
  fitBounds = true,
  fitBoundsPadding = 40,
  geoJsonStyle: styleProp,
  showLayerToggle = true,
  height,
  className,
  disabled,
  hoverable = true,
  selectable = true,
  onHover,
  onSelect,
  hoverContent,
  onCoordinateClick,
  showCenterAction,
}: GeoJsonViewerProps) {
  const layerStyle: Required<GeoJsonStyle> = {
    ...DEFAULT_STYLE,
    ...styleProp,
  };

  // Strip foreign members and normalise to FeatureCollection
  const fc = useMemo(() => toFeatureCollection(data), [data]);

  // Track whether layers are ready for interaction
  const [layersReady, setLayersReady] = useState(false);

  // Track hover popup position
  const [hoverPosition, setHoverPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);

  // ----- Coordinate click → WMS feature info -----
  const [clickedCoordinate, setClickedCoordinate] = useState<Coordinate | null>(
    null,
  );

  const handleMapClick = useCallback(
    (coord: Coordinate) => {
      if (onCoordinateClick) {
        setClickedCoordinate(coord);
      }
    },
    [onCoordinateClick],
  );

  const { mapContainerRef, mapRef, mapReady } = useMaplibreMap({
    disabled,
    height,
    onMapClick: onCoordinateClick ? handleMapClick : undefined,
  });

  const onCoordinateClickRef = useRef(onCoordinateClick);
  onCoordinateClickRef.current = onCoordinateClick;

  const { result: featureInfoResult } = useWmsFeatureInfo({
    mapRef,
    coordinate: clickedCoordinate,
    enabled: !!onCoordinateClick,
  });

  useEffect(() => {
    if (featureInfoResult) {
      onCoordinateClickRef.current?.(featureInfoResult);
    }
  }, [featureInfoResult]);

  // ----- Feature interaction hook -----
  const handleHover = useCallback(
    (
      feature: InteractiveFeature | null,
      event: maplibregl.MapMouseEvent | null,
    ) => {
      onHover?.(feature, event);

      // Update hover highlight
      const map = mapRef.current;
      if (map && layersReady) {
        const featureId = feature?.id ?? null;
        updateHoverHighlight(map, featureId);
      }

      // Update hover popup position
      if (event && feature) {
        setHoverPosition({ x: event.point.x, y: event.point.y });
      } else {
        setHoverPosition(null);
      }
    },
    [onHover, mapRef, layersReady],
  );

  const handleSelect = useCallback(
    (features: InteractiveFeature[] | null) => {
      onSelect?.(features);

      // Update selection highlight
      const map = mapRef.current;
      if (map && layersReady) {
        const featureIds =
          features
            ?.map((f) => f.id)
            .filter((id): id is string | number => id !== undefined) ?? [];
        updateSelectionHighlight(map, featureIds);
      }
    },
    [onSelect, mapRef, layersReady],
  );

  const { hoveredFeature } = useFeatureInteraction({
    mapRef,
    layerIds: INTERACTIVE_LAYERS,
    sourceId: SOURCE_ID,
    enabled: layersReady && !disabled,
    hoverable,
    selectable,
    onHover: handleHover,
    onSelect: handleSelect,
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

        // Add highlight layers for hover and selection effects
        addHighlightLayers(map, layerStyle);

        // Mark layers as ready for interaction
        setLayersReady(true);

        // Fit bounds
        if (fitBounds) {
          const bounds = computeBounds(fc);
          if (bounds) {
            map.fitBounds(bounds, {
              padding: fitBoundsPadding,
              maxZoom: 16,
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
      setLayersReady(false);
      removeLayers(map);
    };
  }, [fc, mapRef, mapReady]);

  return (
    <div
      ref={mapContainerRef}
      className={[styles.mapContainer, className].filter(Boolean).join(" ")}
    >
      {showLayerToggle && <LayerToggle />}
      {!disabled && (
        <MapCenterAction mapRef={mapRef} visible={showCenterAction} />
      )}
      {hoverable && hoveredFeature && hoverPosition && (
        <GeoJsonViewerHoverPopup
          feature={hoveredFeature}
          position={hoverPosition}
          hoverContent={hoverContent}
        />
      )}
    </div>
  );
}

export default GeoJsonViewer;
