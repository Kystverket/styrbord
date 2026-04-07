"use client";

import { useEffect, useMemo, useState, useCallback, useRef } from "react";
import type {
  FeatureCollection,
  Feature,
  Geometry,
  GeoJsonProperties,
} from "geojson";
import type maplibregl from "maplibre-gl";

import mapStyles from "~/components/shared/MapPicker.module.css";
import editorStyles from "./GeoJsonEditor.module.css";
import { useMaplibreMap } from "~/hooks/useMaplibreMap";
import { useWmsFeatureInfo } from "~/hooks/useWmsFeatureInfo";
import { computeBounds } from "~/utility/geojson";
import type { Coordinate } from "~/utility/types";
import { toFeatureCollection } from "../GeoJsonViewer/GeoJsonViewer.utils";
import type { DrawMode, GeoJsonEditorProps } from "./GeoJsonEditor.types";
import { useTerraDraw } from "./useTerraDraw";
import { GeoJsonEditorToolbar } from "./GeoJsonEditorToolbar";
import { LayerToggle } from "../LayerToggle/LayerToggle";
import { ensureCollectionConsistency } from "~/utility/collection";
import { GeoJsonViewerHoverPopup } from "../GeoJsonViewer/GeoJsonViewerHoverPopup";
import type { InteractiveFeature } from "~/hooks/useFeatureInteraction";
import { MapCenterAction } from "../shared/MapCenterAction";

// ---------------------------------------------------------------------------
// Defaults
// ---------------------------------------------------------------------------

const ALL_MODES: DrawMode[] = ["point", "linestring", "polygon"];

/** Stable default for the `getLabel` prop — avoids a new function reference on every render. */
const DEFAULT_GET_LABEL = (feature: Feature<Geometry, GeoJsonProperties>) =>
  feature.properties?.nummer ? `#${feature.properties.nummer}` : undefined;

const LABEL_SOURCE = "geojson-editor-labels";
const LABEL_LAYER = "geojson-editor-label";

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

/**
 * GeoJsonEditor — draw and edit GeoJSON points, lines, and polygons
 * on an interactive Kartverket map.
 *
 * Uses terra-draw for interactive drawing and editing. Emits the full
 * FeatureCollection via `onChange` on every change.
 *
 * Supports feature hover (with customizable content per type) and selection
 * callbacks when using terra-draw's select mode.
 */
export function GeoJsonEditor({
  value,
  onChange,
  modes = ALL_MODES,
  editable = true,
  deletable = true,
  fitBounds = false,
  fitBoundsPadding = 40,
  showLayerToggle = true,
  height,
  className,
  disabled = false,
  hoverable = true,
  onHover,
  onSelect,
  hoverContent,
  onCoordinateClick,
  onImportError,
  showCenterAction,
  singleFeature = false,
  getLabel = DEFAULT_GET_LABEL,
}: GeoJsonEditorProps) {
  const { mapContainerRef, mapRef, mapReady } = useMaplibreMap({
    disabled,
    height,
  });

  // ----- Coordinate click → WMS feature info -----
  const [clickedCoordinate, setClickedCoordinate] = useState<Coordinate | null>(
    null,
  );

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

  // Install map click listener for coordinate click (suppressed during drawing)
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !mapReady || disabled || !onCoordinateClickRef.current) return;

    const handleClick = (e: maplibregl.MapMouseEvent) => {
      // Suppress during active drawing (point/linestring/polygon placement).
      const mode = activeModeRef.current;
      if (mode === "point" || mode === "linestring" || mode === "polygon")
        return;

      const { lng, lat } = e.lngLat;
      setClickedCoordinate({ latitude: lat, longitude: lng });
    };

    map.on("click", handleClick);
    return () => {
      map.off("click", handleClick);
    };
  }, [mapRef, mapReady, disabled]);

  // Track hover state
  const [hoveredFeature, setHoveredFeature] =
    useState<InteractiveFeature | null>(null);
  const [hoverPosition, setHoverPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);

  // Keep onHover callback in ref to avoid re-creating effect
  const onHoverRef = useRef(onHover);
  onHoverRef.current = onHover;

  // Tracks whether the last onChange was fired by this component (to skip the round-trip reload).
  const isInternalChangeRef = useRef(false);

  // Memoise modes key so that a new but identical array reference from the
  // parent does not cause terra-draw to be torn down and recreated.
  const terraDrawModesKey = modes.join(",");
  const terraDrawModes = useMemo(
    () => terraDrawModesKey.split(",").filter(Boolean) as DrawMode[],
    [terraDrawModesKey],
  );

  const terraDrawResult = useTerraDraw({
    mapRef,
    mapReady,
    modes: terraDrawModes,
    editable,
    deletable,
    disabled,
    singleFeature,
    onChange: (data) => {
      if (!onChange) return;
      isInternalChangeRef.current = true;
      onChange(ensureCollectionConsistency(data));
    },
    onSelect,
  });

  const {
    activeMode,
    setActiveMode,
    deleteSelected,
    hasSelection,
    isReady: terraDrawReady,
  } = terraDrawResult;

  // Keep activeModeRef in sync so the click/hover handlers can check it.
  const activeModeRef = useRef<string>("static");
  activeModeRef.current = activeMode;

  const { replaceFeatures: replaceTerraDraw } = terraDrawResult as unknown as {
    replaceFeatures: (v: FeatureCollection | undefined) => void;
  };

  // Normalise incoming value
  const fc = useMemo(
    () => (value ? toFeatureCollection(value) : undefined),
    [value],
  );

  // Label ref and updater need to be defined before handleImport
  const getLabelRef = useRef(getLabel);
  getLabelRef.current = getLabel;

  /**
   * Push label data into the MapLibre source for the given FeatureCollection.
   * Called both from the fc-driven effect and directly after import so labels
   * appear immediately without waiting for a value round-trip.
   */
  const updateLabelSource = useCallback(
    (data: FeatureCollection | undefined) => {
      const map = mapRef.current;
      const currentGetLabel = getLabelRef.current;
      if (!map || !mapReady || !currentGetLabel) return;

      const labelledFc: FeatureCollection =
        data && data.features.length > 0
          ? {
              type: "FeatureCollection",
              features: data.features.map((feature) => ({
                ...feature,
                properties: {
                  ...feature.properties,
                  _label: currentGetLabel(feature) ?? "",
                },
              })),
            }
          : { type: "FeatureCollection", features: [] };

      const doUpdate = () => {
        const src = map.getSource(LABEL_SOURCE) as maplibregl.GeoJSONSource;
        if (src) {
          src.setData(labelledFc);
        }
      };

      if (map.isStyleLoaded()) {
        doUpdate();
      } else {
        map.once("load", doUpdate);
      }
    },
    [mapRef, mapReady],
  );

  // ----- Import GeoJSON from file -----
  const handleImport = useCallback(
    (imported: FeatureCollection) => {
      const existingFeatures = terraDrawResult.getSnapshot();

      const importedFeatures: Feature<Geometry, GeoJsonProperties>[] = [];

      for (const feature of imported.features) {
        // Strip id and nummer from imported features so they get fresh identities
        const props = { ...feature.properties };
        delete props.id;
        delete props.nummer;
        importedFeatures.push({ ...feature, properties: props });
      }

      const allFeatures = [...existingFeatures, ...importedFeatures];

      replaceTerraDraw({
        type: "FeatureCollection",
        features: allFeatures,
      });

      const combined: FeatureCollection = {
        type: "FeatureCollection",
        features: allFeatures,
      };

      const consistent = ensureCollectionConsistency(combined);

      if (onChange) {
        isInternalChangeRef.current = true;
        onChange(consistent);
      }

      // Update labels immediately so they appear without waiting for
      // a value round-trip through the parent.
      updateLabelSource(consistent);

      // Fit map to bounds of the full collection after import
      const map = mapRef.current;
      if (map) {
        const bounds = computeBounds(combined);
        if (bounds) {
          map.fitBounds(bounds, {
            padding: fitBoundsPadding,
            maxZoom: 16,
            duration: 300,
          });
        }
      }
    },
    [
      onChange,
      terraDrawResult,
      replaceTerraDraw,
      updateLabelSource,
      mapRef,
      fitBoundsPadding,
    ],
  );

  // Sync external value changes into terra-draw.
  // Skips round-trips caused by our own onChange calls.
  useEffect(() => {
    if (!terraDrawReady) {
      // Reset the round-trip guard when terra-draw is not ready (e.g. after
      // Strict Mode cleanup destroys and re-creates the instance). Without
      // this, the stale `true` value from the previous mount would cause the
      // next sync to be skipped, leaving the new instance with no features.
      isInternalChangeRef.current = false;
      return;
    }

    if (isInternalChangeRef.current) {
      isInternalChangeRef.current = false;
      return;
    }

    replaceTerraDraw(fc ?? { type: "FeatureCollection", features: [] });
  }, [fc, replaceTerraDraw, terraDrawReady]);

  // ----- Disabled (read-only) rendering via plain MapLibre layers -----
  // When disabled, terra-draw is not initialised so we render features
  // directly onto the map using native GeoJSON source + layers.
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !mapReady || !disabled || !fc || fc.features.length === 0)
      return;

    const SOURCE = "geojson-editor-disabled";
    const FILL = "geojson-editor-disabled-fill";
    const LINE = "geojson-editor-disabled-line";
    const POINT_STROKE = "geojson-editor-disabled-point-stroke";
    const POINT = "geojson-editor-disabled-point";

    const addLayers = () => {
      if (map.getSource(SOURCE)) {
        (map.getSource(SOURCE) as maplibregl.GeoJSONSource).setData(fc);
        return;
      }

      map.addSource(SOURCE, { type: "geojson", data: fc });

      map.addLayer({
        id: FILL,
        type: "fill",
        source: SOURCE,
        filter: ["==", "$type", "Polygon"],
        paint: { "fill-color": "#ff451f", "fill-opacity": 0.2 },
      });
      map.addLayer({
        id: LINE,
        type: "line",
        source: SOURCE,
        filter: ["in", "$type", "LineString", "Polygon"],
        paint: { "line-color": "#ff451f", "line-width": 4 },
      });
      map.addLayer({
        id: POINT_STROKE,
        type: "circle",
        source: SOURCE,
        filter: ["==", "$type", "Point"],
        paint: { "circle-radius": 9, "circle-color": "#ffffff" },
      });
      map.addLayer({
        id: POINT,
        type: "circle",
        source: SOURCE,
        filter: ["==", "$type", "Point"],
        paint: { "circle-radius": 6, "circle-color": "#ff451f" },
      });
    };

    if (map.isStyleLoaded()) {
      addLayers();
    } else {
      map.once("load", addLayers);
    }

    return () => {
      try {
        for (const id of [POINT, POINT_STROKE, LINE, FILL]) {
          if (map.getLayer(id)) map.removeLayer(id);
        }
        if (map.getSource(SOURCE)) map.removeSource(SOURCE);
      } catch {
        // map may already be destroyed
      }
    };
  }, [mapRef, mapReady, disabled, fc]);

  // Fit bounds to initial data (only once — skip re-fitting after user edits)
  const hasFittedBoundsRef = useRef(false);

  useEffect(() => {
    const map = mapRef.current;
    if (!map || !mapReady || !fc || !fitBounds || hasFittedBoundsRef.current)
      return;

    const bounds = computeBounds(fc);
    if (!bounds) return;

    hasFittedBoundsRef.current = true;

    const fit = () => {
      map.fitBounds(bounds, {
        padding: fitBoundsPadding,
        maxZoom: 16,
        duration: 300,
      });
    };

    if (map.isStyleLoaded()) {
      fit();
    } else {
      map.once("load", fit);
    }
  }, [fc, fitBounds, fitBoundsPadding, mapRef, mapReady]);

  // ----- Feature labels -----
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
      try {
        if (map.getLayer(LABEL_LAYER)) map.removeLayer(LABEL_LAYER);
        if (map.getSource(LABEL_SOURCE)) map.removeSource(LABEL_SOURCE);
      } catch {
        // map may already be destroyed
      }
    };
  }, [mapRef, mapReady]);

  // Update label data whenever fc or getLabel changes — no teardown, just setData.
  useEffect(() => {
    updateLabelSource(fc);
  }, [updateLabelSource, fc]);

  // Hover detection for terra-draw features
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !mapReady || disabled || !hoverable) return;

    let prevHoveredId: string | number | null = null;

    const handleMouseMove = (e: maplibregl.MapMouseEvent) => {
      // Suppress hover while actively drawing
      const mode = activeModeRef.current;
      if (mode === "point" || mode === "linestring" || mode === "polygon") {
        if (prevHoveredId !== null) {
          prevHoveredId = null;
          setHoveredFeature(null);
          setHoverPosition(null);
          onHoverRef.current?.(null, null);
          map.getCanvas().style.cursor = "";
        }
        return;
      }

      // Query all rendered features at the mouse position
      const features = map.queryRenderedFeatures(e.point);

      // Find terra-draw features (they have the 'mode' property set by terra-draw)
      const terraDrawFeature = features.find(
        (f) => f.properties?.mode && f.properties.mode !== "select",
      );

      if (terraDrawFeature) {
        const featureId =
          terraDrawFeature.id ?? terraDrawFeature.properties?.id ?? null;

        if (featureId !== prevHoveredId) {
          prevHoveredId = featureId;
          const feature: InteractiveFeature = {
            type: "Feature",
            id: featureId ?? undefined,
            geometry: terraDrawFeature.geometry as Geometry,
            properties: terraDrawFeature.properties as GeoJsonProperties,
          };
          setHoveredFeature(feature);
          onHoverRef.current?.(feature, e);
        }
        setHoverPosition({ x: e.point.x, y: e.point.y });
        map.getCanvas().style.cursor = "pointer";
      } else {
        if (prevHoveredId !== null) {
          prevHoveredId = null;
          setHoveredFeature(null);
          setHoverPosition(null);
          onHoverRef.current?.(null, null);
        }
        map.getCanvas().style.cursor = "";
      }
    };

    const handleMouseLeave = () => {
      prevHoveredId = null;
      setHoveredFeature(null);
      setHoverPosition(null);
      onHoverRef.current?.(null, null);
      map.getCanvas().style.cursor = "";
    };

    map.on("mousemove", handleMouseMove);
    map.on("mouseleave", handleMouseLeave);

    return () => {
      map.off("mousemove", handleMouseMove);
      map.off("mouseleave", handleMouseLeave);
      map.getCanvas().style.cursor = "";
    };
  }, [mapRef, mapReady, disabled, hoverable]);

  return (
    <div
      className={[editorStyles.editorWrapper, className]
        .filter(Boolean)
        .join(" ")}
    >
      <div ref={mapContainerRef} className={mapStyles.mapContainer}>
        {!disabled && !singleFeature && (
          <GeoJsonEditorToolbar
            modes={modes}
            activeMode={activeMode}
            hasSelection={hasSelection}
            deletable={deletable}
            editable={editable}
            onSetMode={setActiveMode}
            onDelete={deleteSelected}
            onImport={handleImport}
            onImportError={onImportError}
          />
        )}
        {showLayerToggle && <LayerToggle />}
        {!disabled && (
          <MapCenterAction
            mapRef={mapRef}
            visible={
              showCenterAction &&
              (activeMode === "point" ||
                activeMode === "linestring" ||
                activeMode === "polygon")
            }
          />
        )}
        {hoverable && hoveredFeature && hoverPosition && (
          <GeoJsonViewerHoverPopup
            feature={hoveredFeature}
            position={hoverPosition}
            hoverContent={hoverContent}
          />
        )}
      </div>
    </div>
  );
}

export default GeoJsonEditor;
