import { useEffect, useMemo } from "react";
import type { FeatureCollection } from "geojson";

import styles from "~/components/shared/MapPicker.module.css";
import { useMaplibreMap } from "~/hooks/useMaplibreMap";
import { computeBounds } from "~/utility/geojson";
import { toFeatureCollection } from "../GeoJsonViewer/GeoJsonViewer.utils";
import type { DrawMode, GeoJsonEditorProps } from "./GeoJsonEditor.types";
import { useTerraDraw } from "./useTerraDraw";
import { GeoJsonEditorToolbar } from "./GeoJsonEditorToolbar";
import { LayerToggle } from "../LayerToggle/LayerToggle";
import { ensureCollectionConsistency } from "~/utility/collection";

// ---------------------------------------------------------------------------
// Defaults
// ---------------------------------------------------------------------------

const ALL_MODES: DrawMode[] = ["point", "linestring", "polygon"];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

/**
 * GeoJsonEditor — draw and edit GeoJSON points, lines, and polygons
 * on an interactive Kartverket map.
 *
 * Uses terra-draw for interactive drawing and editing. Emits the full
 * FeatureCollection via `onChange` on every change.
 */
export function GeoJsonEditor({
  value,
  onChange,
  modes = ALL_MODES,
  editable = true,
  deletable = true,
  fitBounds = true,
  fitBoundsPadding = 40,
  showLayerToggle = false,
  height,
  className,
  disabled = false,
}: GeoJsonEditorProps) {
  const { mapContainerRef, mapRef } = useMaplibreMap({
    disabled,
    height,
  });

  const terraDrawResult = useTerraDraw({
    mapRef,
    modes,
    editable,
    deletable,
    disabled,
    onChange: (data) => {
      onChange?.(ensureCollectionConsistency(data));
    },
  });

  const { activeMode, setActiveMode, deleteSelected, hasSelection } =
    terraDrawResult;
  const loadInitialData = (
    terraDrawResult as unknown as {
      loadInitialData: (v: FeatureCollection | undefined) => void;
    }
  ).loadInitialData;

  // Normalise incoming value
  const fc = useMemo(
    () => (value ? toFeatureCollection(value) : undefined),
    [value],
  );

  // Load initial data into terra-draw once it's ready
  useEffect(() => {
    if (fc && loadInitialData) {
      loadInitialData(fc);
    }
  }, [fc, loadInitialData]);

  // Fit bounds to initial data
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !fc || !fitBounds) return;

    const bounds = computeBounds(fc);
    if (!bounds) return;

    const fit = () => {
      map.fitBounds(bounds, { padding: fitBoundsPadding, duration: 300 });
    };

    if (map.isStyleLoaded()) {
      fit();
    } else {
      map.once("load", fit);
    }
  }, [fc, fitBounds, fitBoundsPadding, mapRef]);

  return (
    <div
      ref={mapContainerRef}
      className={[styles.mapContainer, className].filter(Boolean).join(" ")}
    >
      {!disabled && (
        <GeoJsonEditorToolbar
          modes={modes}
          activeMode={activeMode}
          hasSelection={hasSelection}
          deletable={deletable}
          editable={editable}
          onSetMode={setActiveMode}
          onDelete={deleteSelected}
        />
      )}
      {showLayerToggle && <LayerToggle />}
    </div>
  );
}

export default GeoJsonEditor;
