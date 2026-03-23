import { useEffect, useMemo, useState, useCallback, useRef } from 'react';
import type { FeatureCollection, Feature, Geometry, GeoJsonProperties } from 'geojson';
import type maplibregl from 'maplibre-gl';

import styles from '~/components/shared/MapPicker.module.css';
import { useMaplibreMap } from '~/hooks/useMaplibreMap';
import { useWmsFeatureInfo } from '~/hooks/useWmsFeatureInfo';
import { computeBounds } from '~/utility/geojson';
import type { Coordinate } from '~/utility/types';
import { toFeatureCollection } from '../GeoJsonViewer/GeoJsonViewer.utils';
import type { DrawMode, GeoJsonEditorProps } from './GeoJsonEditor.types';
import { useTerraDraw } from './useTerraDraw';
import { GeoJsonEditorToolbar } from './GeoJsonEditorToolbar';
import { LayerToggle } from '../LayerToggle/LayerToggle';
import { ensureCollectionConsistency } from '~/utility/collection';
import { GeoJsonViewerHoverPopup } from '../GeoJsonViewer/GeoJsonViewerHoverPopup';
import type { InteractiveFeature } from '~/hooks/useFeatureInteraction';

// ---------------------------------------------------------------------------
// Defaults
// ---------------------------------------------------------------------------

const ALL_MODES: DrawMode[] = ['point', 'linestring', 'polygon'];

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
  fitBounds = true,
  fitBoundsPadding = 40,
  showLayerToggle = false,
  height,
  className,
  disabled = false,
  hoverable = true,
  onHover,
  onSelect,
  hoverContent,
  onCoordinateClick,
}: GeoJsonEditorProps) {
  const { mapContainerRef, mapRef } = useMaplibreMap({
    disabled,
    height,
  });

  // ----- Coordinate click → WMS feature info -----
  const [clickedCoordinate, setClickedCoordinate] = useState<Coordinate | null>(null);
  const activeModeRef = useRef<string>('static');

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
    if (!map || disabled || !onCoordinateClickRef.current) return;

    const handleClick = (e: maplibregl.MapMouseEvent) => {
      // Suppress during active drawing (point/linestring/polygon placement).
      const mode = activeModeRef.current;
      if (mode === 'point' || mode === 'linestring' || mode === 'polygon') return;

      const { lng, lat } = e.lngLat;
      setClickedCoordinate({ latitude: lat, longitude: lng });
    };

    map.on('click', handleClick);
    return () => {
      map.off('click', handleClick);
    };
  }, [mapRef, disabled]);

  // Track hover state
  const [hoveredFeature, setHoveredFeature] = useState<InteractiveFeature | null>(null);
  const [hoverPosition, setHoverPosition] = useState<{ x: number; y: number } | null>(null);

  // Keep onHover callback in ref to avoid re-creating effect
  const onHoverRef = useRef(onHover);
  onHoverRef.current = onHover;

  // Handle selection changes from terra-draw
  const handleTerraDrawSelect = useCallback(
    (features: Feature<Geometry, GeoJsonProperties>[] | null) => {
      onSelect?.(features as InteractiveFeature[] | null);
    },
    [onSelect],
  );

  const terraDrawResult = useTerraDraw({
    mapRef,
    modes,
    editable,
    deletable,
    disabled,
    onChange: (data) => {
      onChange?.(ensureCollectionConsistency(data));
    },
    onSelect: handleTerraDrawSelect,
  });

  const { activeMode, setActiveMode, deleteSelected, hasSelection } = terraDrawResult;

  // Keep activeModeRef in sync so the click handler can check it.
  activeModeRef.current = activeMode;

  const loadInitialData = (
    terraDrawResult as unknown as {
      loadInitialData: (v: FeatureCollection | undefined) => void;
    }
  ).loadInitialData;

  // Normalise incoming value
  const fc = useMemo(() => (value ? toFeatureCollection(value) : undefined), [value]);

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
      map.once('load', fit);
    }
  }, [fc, fitBounds, fitBoundsPadding, mapRef]);

  // Hover detection for terra-draw features
  useEffect(() => {
    const map = mapRef.current;
    if (!map || disabled || !hoverable) return;

    let prevHoveredId: string | number | null = null;

    const handleMouseMove = (e: maplibregl.MapMouseEvent) => {
      // Query all rendered features at the mouse position
      const features = map.queryRenderedFeatures(e.point);

      // Find terra-draw features (they have the 'mode' property set by terra-draw)
      const terraDrawFeature = features.find((f) => f.properties?.mode && f.properties.mode !== 'select');

      if (terraDrawFeature) {
        const featureId = terraDrawFeature.id ?? terraDrawFeature.properties?.id ?? null;

        if (featureId !== prevHoveredId) {
          prevHoveredId = featureId;
          const feature: InteractiveFeature = {
            type: 'Feature',
            id: featureId ?? undefined,
            geometry: terraDrawFeature.geometry as Geometry,
            properties: terraDrawFeature.properties as GeoJsonProperties,
          };
          setHoveredFeature(feature);
          onHoverRef.current?.(feature, e);
        }
        setHoverPosition({ x: e.point.x, y: e.point.y });
        map.getCanvas().style.cursor = 'pointer';
      } else {
        if (prevHoveredId !== null) {
          prevHoveredId = null;
          setHoveredFeature(null);
          setHoverPosition(null);
          onHoverRef.current?.(null, null);
        }
        map.getCanvas().style.cursor = '';
      }
    };

    const handleMouseLeave = () => {
      prevHoveredId = null;
      setHoveredFeature(null);
      setHoverPosition(null);
      onHoverRef.current?.(null, null);
      map.getCanvas().style.cursor = '';
    };

    map.on('mousemove', handleMouseMove);
    map.on('mouseleave', handleMouseLeave);

    return () => {
      map.off('mousemove', handleMouseMove);
      map.off('mouseleave', handleMouseLeave);
      map.getCanvas().style.cursor = '';
    };
  }, [mapRef, disabled, hoverable]);

  return (
    <div ref={mapContainerRef} className={[styles.mapContainer, className].filter(Boolean).join(' ')}>
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
      {hoverable && hoveredFeature && hoverPosition && (
        <GeoJsonViewerHoverPopup feature={hoveredFeature} position={hoverPosition} hoverContent={hoverContent} />
      )}
    </div>
  );
}

export default GeoJsonEditor;
