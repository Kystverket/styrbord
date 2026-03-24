import { useEffect, useMemo, useState, useCallback, useRef } from 'react';
import type { FeatureCollection, Feature, Geometry, GeoJsonProperties } from 'geojson';
import type maplibregl from 'maplibre-gl';

import mapStyles from '~/components/shared/MapPicker.module.css';
import editorStyles from './GeoJsonEditor.module.css';
import { useMaplibreMap } from '~/hooks/useMaplibreMap';
import { useWmsFeatureInfo } from '~/hooks/useWmsFeatureInfo';
import { computeBounds } from '~/utility/geojson';
import type { Coordinate } from '~/utility/types';
import { toFeatureCollection } from '../GeoJsonViewer/GeoJsonViewer.utils';
import type { DrawMode, GeoJsonEditorProps } from './GeoJsonEditor.types';
import { useTerraDraw } from './useTerraDraw';
import { useDirectionalPoints } from './useDirectionalPoints';
import type { DirectionalPointFeature } from './useDirectionalPoints';
import { GeoJsonEditorToolbar } from './GeoJsonEditorToolbar';
import { LayerToggle } from '../LayerToggle/LayerToggle';
import { ensureCollectionConsistency } from '~/utility/collection';
import { GeoJsonViewerHoverPopup } from '../GeoJsonViewer/GeoJsonViewerHoverPopup';
import type { InteractiveFeature } from '~/hooks/useFeatureInteraction';
import { MapCenterAction } from '../shared/MapCenterAction';

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
  fitBounds = false,
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
  showCenterAction,
  singleFeature = false,
}: GeoJsonEditorProps) {
  const { mapContainerRef, mapRef } = useMaplibreMap({
    disabled,
    height,
  });

  // ----- Coordinate click → WMS feature info -----
  const [clickedCoordinate, setClickedCoordinate] = useState<Coordinate | null>(null);
  const activeModeRef = useRef<string>('static');
  /** Tracks the "combined" active mode across both terra-draw and directional-point systems. */
  const [combinedMode, setCombinedMode] = useState<string>(singleFeature ? modes[0] : 'static');

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
      // Suppress during active drawing (point/linestring/polygon/directional-point placement).
      const mode = activeModeRef.current;
      if (mode === 'point' || mode === 'linestring' || mode === 'polygon' || mode === 'directional-point') return;

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
      // Cross-deselect: when terra-draw selects, deselect directional points
      directionalPointsRef.current?.deselect();
      onSelect?.(features as InteractiveFeature[] | null);
    },
    [onSelect],
  );

  // Ref to directional points result — needed for cross-deselect in terra-draw callback
  const directionalPointsRef = useRef<{ deselect: () => void } | null>(null);

  // Ref for the combined onChange emitter — defined later, referenced in useTerraDraw/useDirectionalPoints callbacks
  const emitCombinedRef = useRef<(terraData?: FeatureCollection) => void>(() => {});

  // Terra-draw modes: filter out 'directional-point' since terra-draw doesn't handle it
  const terraDrawModes = useMemo(
    () => modes.filter((m): m is Exclude<DrawMode, 'directional-point'> => m !== 'directional-point'),
    [modes],
  );

  const terraDrawResult = useTerraDraw({
    mapRef,
    modes: terraDrawModes,
    editable,
    deletable,
    disabled,
    singleFeature,
    onChange: (data) => {
      emitCombinedRef.current(data);
    },
    onSelect: handleTerraDrawSelect,
  });

  const {
    activeMode: terraActiveMode,
    setActiveMode: setTerraActiveMode,
    deleteSelected: terraDeleteSelected,
    hasSelection: terraHasSelection,
  } = terraDrawResult;

  // Keep activeModeRef in sync so the click handler can check it.
  activeModeRef.current = combinedMode;

  // ----- Directional points hook -----
  const directionalPoints = useDirectionalPoints({
    mapRef,
    disabled,
    activeMode: combinedMode,
    singleFeature,
    onChange: () => {
      emitCombinedRef.current();
    },
    onSelect: (feature) => {
      if (feature) {
        // Cross-deselect: when directional point selected, deselect terra-draw
        setTerraActiveMode('static');
        onSelect?.([feature as unknown as InteractiveFeature]);
      }
    },
  });

  // Keep ref in sync for cross-deselect from terra-draw callback
  directionalPointsRef.current = directionalPoints;

  // ----- Combined onChange emission -----
  const emitCombined = useCallback(
    (terraData?: FeatureCollection) => {
      if (!onChange) return;

      const terraFeatures = terraData?.features ?? terraDrawResult.getSnapshot();
      const dirFeatures = directionalPoints.getFeatures();

      const combined: FeatureCollection = {
        type: 'FeatureCollection',
        features: [...terraFeatures, ...dirFeatures],
      };
      onChange(ensureCollectionConsistency(combined));
    },
    [onChange, terraDrawResult, directionalPoints],
  );

  // Keep emitCombinedRef in sync
  emitCombinedRef.current = emitCombined;

  // ----- Mode coordination -----
  const setActiveMode = useCallback(
    (mode: string) => {
      if (mode === 'directional-point') {
        // Directional-point mode: set terra-draw to static
        setTerraActiveMode('static');
      } else {
        // Any other mode: deselect directional points, set terra-draw mode
        directionalPoints.deselect();
        setTerraActiveMode(mode);
      }
      setCombinedMode(mode);
    },
    [setTerraActiveMode, directionalPoints],
  );

  // Keep combinedMode in sync with terra-draw's mode changes (e.g. auto-deselect)
  useEffect(() => {
    if (combinedMode !== 'directional-point') {
      setCombinedMode(terraActiveMode);
    }
  }, [terraActiveMode, combinedMode]);

  // Combined selection state
  const hasSelection = terraHasSelection || directionalPoints.hasSelection;

  // Combined delete
  const deleteSelected = useCallback(() => {
    if (directionalPoints.hasSelection) {
      directionalPoints.deleteSelected();
    } else {
      terraDeleteSelected();
    }
  }, [directionalPoints, terraDeleteSelected]);

  const loadInitialData = (
    terraDrawResult as unknown as {
      loadInitialData: (v: FeatureCollection | undefined) => void;
    }
  ).loadInitialData;

  // Normalise incoming value
  const fc = useMemo(() => (value ? toFeatureCollection(value) : undefined), [value]);

  // Extract stable loadFeatures ref to avoid re-running this effect on every render
  const { loadFeatures: loadDirectionalFeatures } = directionalPoints;

  // Load initial data — partition between terra-draw and directional points
  useEffect(() => {
    if (!fc) return;

    const dirFeatures: DirectionalPointFeature[] = [];
    const otherFeatures: Feature<Geometry, GeoJsonProperties>[] = [];

    for (const feature of fc.features) {
      if (feature.properties?.mode === 'directional-point') {
        dirFeatures.push(feature as DirectionalPointFeature);
      } else {
        otherFeatures.push(feature);
      }
    }

    if (loadInitialData) {
      loadInitialData({ type: 'FeatureCollection', features: otherFeatures });
    }
    if (dirFeatures.length > 0) {
      loadDirectionalFeatures(dirFeatures);
    }
  }, [fc, loadInitialData, loadDirectionalFeatures]);

  // Fit bounds to initial data (only once — skip re-fitting after user edits)
  const hasFittedBoundsRef = useRef(false);

  useEffect(() => {
    const map = mapRef.current;
    if (!map || !fc || !fitBounds || hasFittedBoundsRef.current) return;

    const bounds = computeBounds(fc);
    if (!bounds) return;

    hasFittedBoundsRef.current = true;

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
      // Suppress hover while actively drawing
      const mode = activeModeRef.current;
      if (mode === 'point' || mode === 'linestring' || mode === 'polygon' || mode === 'directional-point') {
        if (prevHoveredId !== null) {
          prevHoveredId = null;
          setHoveredFeature(null);
          setHoverPosition(null);
          onHoverRef.current?.(null, null);
          map.getCanvas().style.cursor = '';
        }
        return;
      }

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
    <div className={[editorStyles.editorWrapper, className].filter(Boolean).join(' ')}>
      {!disabled && !singleFeature && (
        <GeoJsonEditorToolbar
          modes={modes}
          activeMode={combinedMode}
          hasSelection={hasSelection}
          deletable={deletable}
          editable={editable}
          onSetMode={setActiveMode}
          onDelete={deleteSelected}
        />
      )}
      <div ref={mapContainerRef} className={mapStyles.mapContainer}>
        {showLayerToggle && <LayerToggle />}
        {!disabled && (
          <MapCenterAction
            mapRef={mapRef}
            visible={
              showCenterAction &&
              (combinedMode === 'point' ||
                combinedMode === 'linestring' ||
                combinedMode === 'polygon' ||
                combinedMode === 'directional-point')
            }
          />
        )}
        {hoverable && hoveredFeature && hoverPosition && (
          <GeoJsonViewerHoverPopup feature={hoveredFeature} position={hoverPosition} hoverContent={hoverContent} />
        )}
      </div>
    </div>
  );
}

export default GeoJsonEditor;
