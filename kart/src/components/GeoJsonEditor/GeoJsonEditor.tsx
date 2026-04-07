"use client";

import { useEffect, useMemo, useCallback, useRef } from "react";
import type {
  FeatureCollection,
  Feature,
  Geometry,
  GeoJsonProperties,
} from "geojson";

import mapStyles from "~/components/shared/MapPicker.module.css";
import editorStyles from "./GeoJsonEditor.module.css";
import { useMaplibreMap } from "~/hooks/useMaplibreMap";
import { computeBounds } from "~/utility/geojson";
import { toFeatureCollection } from "../GeoJsonViewer/GeoJsonViewer.utils";
import type { DrawMode, GeoJsonEditorProps } from "./GeoJsonEditor.types";
import { useTerraDraw } from "./useTerraDraw";
import { GeoJsonEditorToolbar } from "./GeoJsonEditorToolbar";
import { LayerToggle } from "../LayerToggle/LayerToggle";
import { ensureCollectionConsistency } from "~/utility/collection";
import { GeoJsonViewerHoverPopup } from "../GeoJsonViewer/GeoJsonViewerHoverPopup";
import { MapCenterAction } from "../shared/MapCenterAction";
import { useCoordinateClick } from "./useCoordinateClick";
import { useEditorHover } from "./useEditorHover";
import { useFeatureLabels } from "./useFeatureLabels";
import { useDisabledLayers } from "./useDisabledLayers";
import { useFitBounds } from "./useFitBounds";

// ---------------------------------------------------------------------------
// Defaults
// ---------------------------------------------------------------------------

const ALL_MODES: DrawMode[] = ["point", "linestring", "polygon"];

/** Stable default for the `getLabel` prop — avoids a new function reference on every render. */
const DEFAULT_GET_LABEL = (feature: Feature<Geometry, GeoJsonProperties>) =>
  feature.properties?.nummer ? `#${feature.properties.nummer}` : undefined;

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

  // Keep activeModeRef in sync so the click/hover hooks can check it.
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

  // ----- Extracted hooks -----
  useCoordinateClick({
    mapRef,
    mapReady,
    disabled,
    onCoordinateClick,
    activeModeRef,
  });

  const { hoveredFeature, hoverPosition } = useEditorHover({
    mapRef,
    mapReady,
    disabled,
    hoverable,
    onHover,
    activeModeRef,
  });

  const { updateLabelSource } = useFeatureLabels({
    mapRef,
    mapReady,
    fc,
    getLabel,
  });

  useDisabledLayers({ mapRef, mapReady, disabled, fc });

  useFitBounds({ mapRef, mapReady, fc, fitBounds, fitBoundsPadding });

  // ----- Import GeoJSON from file -----
  const handleImport = useCallback(
    (imported: FeatureCollection) => {
      const existingFeatures = terraDrawResult.getSnapshot();

      const importedFeatures: Feature<Geometry, GeoJsonProperties>[] = [];

      for (const feature of imported.features) {
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

      updateLabelSource(consistent);

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
      isInternalChangeRef.current = false;
      return;
    }

    if (isInternalChangeRef.current) {
      isInternalChangeRef.current = false;
      return;
    }

    replaceTerraDraw(fc ?? { type: "FeatureCollection", features: [] });
  }, [fc, replaceTerraDraw, terraDrawReady]);

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
