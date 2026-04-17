"use client";

import { useEffect, useMemo, useState, useCallback, useRef } from "react";
import type { GeoJSONSource } from "maplibre-gl";
import type maplibregl from "maplibre-gl";
import type {
  Feature,
  FeatureCollection,
  Geometry,
  GeoJsonProperties,
} from "geojson";

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
  LABEL_LAYER,
  removeLayers,
  toFeatureCollection,
  addHighlightLayers,
  updateHoverHighlight,
  updateSelectionHighlight,
  featureExpr,
} from "./GeoJsonViewer.utils";
import { LayerToggle } from "../LayerToggle/LayerToggle";
import { GeoJsonViewerHoverPopup } from "./GeoJsonViewerHoverPopup";
import { MapCenterAction } from "../shared/MapCenterAction";

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

const LABEL_SOURCE = "geojson-viewer-labels";

/** Stable default for the `getLabel` prop — avoids a new function reference on every render. */
const DEFAULT_GET_LABEL = (feature: Feature<Geometry, GeoJsonProperties>) =>
  feature.properties?.nummer ? `#${feature.properties.nummer}` : undefined;

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
  getLabel = DEFAULT_GET_LABEL,
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

  const { mapContainerRef, mapRef, mapReady, mapVersion } = useMaplibreMap({
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
    if (!map) return;

    const setup = () => {
      try {
        // Add or update the GeoJSON source
        const existingSource = map.getSource(SOURCE_ID);
        if (existingSource) {
          (existingSource as GeoJSONSource).setData(fc);
        } else {
          map.addSource(SOURCE_ID, { type: "geojson", data: fc });
        }

        // Add layers (idempotent — skipped if they already exist).
        // Paint properties use data-driven expressions so that individual
        // features can override the global style via their `properties`
        // (e.g. `properties.fillColor`, `properties.lineColor`).
        if (!map.getLayer(FILL_LAYER)) {
          map.addLayer({
            id: FILL_LAYER,
            type: "fill",
            source: SOURCE_ID,
            layout: { visibility: "visible" },
            paint: {
              "fill-color": featureExpr("fillColor", layerStyle.fillColor),
              "fill-opacity": featureExpr("fillOpacity", 1),
            },
          });
        }

        if (!map.getLayer(LINE_LAYER)) {
          map.addLayer({
            id: LINE_LAYER,
            type: "line",
            source: SOURCE_ID,
            layout: { visibility: "visible" },
            paint: {
              "line-color": featureExpr("lineColor", layerStyle.lineColor),
              "line-width": featureExpr("lineWidth", layerStyle.lineWidth),
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
              "circle-radius": [
                "+",
                featureExpr("pointRadius", layerStyle.pointRadius),
                featureExpr("pointStrokeWidth", layerStyle.pointStrokeWidth),
              ] as unknown as maplibregl.ExpressionSpecification,
              "circle-color": featureExpr(
                "pointStrokeColor",
                layerStyle.pointStrokeColor,
              ),
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
              "circle-radius": featureExpr(
                "pointRadius",
                layerStyle.pointRadius,
              ),
              "circle-color": featureExpr("pointColor", layerStyle.pointColor),
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
      } catch {
        // map may already be destroyed
      }
    };

    // Run setup as soon as the style is ready. isStyleLoaded() handles the
    // case where "load" already fired; once("load") handles the case where
    // it hasn't.  The base layer is now baked into the initial style by
    // useMaplibreMap so there is no ordering race.
    if (map.isStyleLoaded()) {
      setup();
    } else {
      map.once("load", setup);
    }

    return () => {
      map.off("load", setup);
      setLayersReady(false);
      removeLayers(map);
    };
  }, [fc, mapVersion]);

  // ----- Feature labels -----
  // Renders a symbol layer with labels computed via getLabel().
  // Uses a dedicated GeoJSON source so label text can be computed dynamically.
  const getLabelRef = useRef(getLabel);
  getLabelRef.current = getLabel;

  useEffect(() => {
    const map = mapRef.current;
    if (!map || !mapReady) return;

    const ensureLayer = () => {
      if (!map.getSource(LABEL_SOURCE)) {
        map.addSource(LABEL_SOURCE, {
          type: "geojson",
          data: { type: "FeatureCollection", features: [] },
        });
      }
      if (!map.getLayer(LABEL_LAYER)) {
        map.addLayer({
          id: LABEL_LAYER,
          type: "symbol",
          source: LABEL_SOURCE,
          layout: {
            "text-field": ["get", "_label"],
            "text-size": 16,
            "text-anchor": "left",
            "text-offset": [1.2, 0],
            "text-allow-overlap": true,
            "text-optional": false,
          },
          paint: {
            "text-color": "#1a1a1a",
            "text-halo-color": "#ffffff",
            "text-halo-width": 2,
          },
        });
      }
    };

    if (map.isStyleLoaded()) {
      ensureLayer();
    } else {
      map.once("load", ensureLayer);
    }

    return () => {
      map.off("load", ensureLayer);
      try {
        if (map.getLayer(LABEL_LAYER)) map.removeLayer(LABEL_LAYER);
        if (map.getSource(LABEL_SOURCE)) map.removeSource(LABEL_SOURCE);
      } catch {
        // map may already be destroyed
      }
    };
  }, [mapVersion]);

  // Update label data whenever fc or getLabel changes.
  useEffect(() => {
    const map = mapRef.current;
    const currentGetLabel = getLabelRef.current;
    if (!map || !mapReady || !currentGetLabel) return;

    const labelledFc: FeatureCollection =
      fc && fc.features.length > 0
        ? {
            type: "FeatureCollection",
            features: fc.features.map((feature) => ({
              ...feature,
              properties: {
                ...feature.properties,
                _label: currentGetLabel(feature) ?? "",
              },
            })),
          }
        : { type: "FeatureCollection", features: [] };

    const updateData = () => {
      const src = map.getSource(LABEL_SOURCE) as maplibregl.GeoJSONSource;
      if (src) {
        src.setData(labelledFc as GeoJSON.FeatureCollection);
      }
    };

    if (map.isStyleLoaded()) {
      updateData();
    } else {
      map.once("load", updateData);
    }
  }, [mapVersion, fc]);

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
