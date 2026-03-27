import { useCallback, useEffect, useRef, useState } from 'react';
import type { MutableRefObject } from 'react';
import type { Map as MaplibreMap } from 'maplibre-gl';
import maplibregl from 'maplibre-gl';
import type { Feature, Point } from 'geojson';

import { clampDirection } from '~/utility/coordinate';
import { getUuid } from '~/utility/uuid';
import { createCompassMarkerElement, positionHandle } from '~/utility/compassMarker';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface DirectionalPointFeature extends Feature<Point> {
  properties: {
    id: string;
    direction: number;
    mode: 'directional-point';
    [key: string]: unknown;
  };
}

interface MarkerEntry {
  featureId: string;
  marker: maplibregl.Marker;
  compass: HTMLDivElement;
  handle: HTMLImageElement;
  container: HTMLDivElement;
}

export interface UseDirectionalPointsOptions {
  mapRef: MutableRefObject<MaplibreMap | null>;
  /** Must be `true` before the click handler is installed (set by `useMaplibreMap`). */
  mapReady: boolean;
  disabled: boolean;
  /** Current active editor mode — the hook only places points when this is 'directional-point'. */
  activeMode: string;
  /** When true, only one directional point is allowed — new points replace existing ones. */
  singleFeature?: boolean;
  onChange?: () => void;
  onSelect?: (feature: DirectionalPointFeature | null) => void;
}

export interface UseDirectionalPointsResult {
  /** Whether a directional point is currently selected. */
  hasSelection: boolean;
  /** Delete the currently selected directional point. */
  deleteSelected: () => void;
  /** Get all directional-point features for merging into the emitted FeatureCollection. */
  getFeatures: () => DirectionalPointFeature[];
  /** Load initial directional-point features (called once on mount). */
  loadFeatures: (features: DirectionalPointFeature[]) => void;
  /** Replace all directional-point features (clears existing markers before loading). */
  replaceFeatures: (features: DirectionalPointFeature[]) => void;
  /** Deselect any selected directional point. */
  deselect: () => void;
}

// ---------------------------------------------------------------------------
// Selection styling
// ---------------------------------------------------------------------------

const SELECTED_SHADOW = '0 0 0 3px rgba(0, 98, 186, 0.5)';
const DEFAULT_SHADOW = 'none';

function setSelectedStyle(container: HTMLDivElement, selected: boolean) {
  const compass = container.querySelector('div') as HTMLElement | null;
  if (!compass) return;
  compass.style.outline = selected ? '2px solid #0062ba' : 'none';
  compass.style.outlineOffset = selected ? '2px' : '';
  compass.style.borderRadius = selected ? '50%' : '';
  compass.style.boxShadow = selected ? SELECTED_SHADOW : DEFAULT_SHADOW;
}

// ---------------------------------------------------------------------------
// Hook
// ---------------------------------------------------------------------------

export function useDirectionalPoints({
  mapRef,
  mapReady,
  disabled,
  activeMode,
  singleFeature = false,
  onChange,
  onSelect,
}: UseDirectionalPointsOptions): UseDirectionalPointsResult {
  const featuresRef = useRef<DirectionalPointFeature[]>([]);
  const markersRef = useRef<MarkerEntry[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedIdRef = useRef<string | null>(null);
  const initialLoaded = useRef(false);

  // Keep refs in sync
  const activeModeRef = useRef(activeMode);
  activeModeRef.current = activeMode;
  const disabledRef = useRef(disabled);
  disabledRef.current = disabled;
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;
  const onSelectRef = useRef(onSelect);
  onSelectRef.current = onSelect;

  selectedIdRef.current = selectedId;

  const singleFeatureRef = useRef(singleFeature);
  singleFeatureRef.current = singleFeature;

  // ----- Create a compass marker for a feature -----
  const createMarkerForFeature = useCallback(
    (feature: DirectionalPointFeature) => {
      const map = mapRef.current;
      if (!map) return;

      const { container, compass, handle } = createCompassMarkerElement();
      const [lng, lat] = feature.geometry.coordinates;
      const dir = feature.properties.direction ?? 0;
      positionHandle(compass, handle, dir);

      // --- Drag state for repositioning ---
      let isDraggingPosition = false;
      let dragStartLngLat: maplibregl.LngLat | null = null;
      let dragStartMarkerLngLat: [number, number] | null = null;

      // --- Rotation drag state ---
      let isDraggingRotation = false;

      const getFeature = () => featuresRef.current.find((f) => f.properties.id === feature.properties.id);

      const angleFromPointer = (e: PointerEvent): number => {
        const f = getFeature();
        if (!map || !f) return 0;
        const [fLng, fLat] = f.geometry.coordinates;
        const markerScreen = map.project([fLng, fLat]);
        const rect = map.getContainer().getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const dx = mouseX - markerScreen.x;
        const dy = markerScreen.y - mouseY;
        return clampDirection((Math.atan2(dx, dy) * 180) / Math.PI);
      };

      // --- Handle rotation drag ---
      const onHandlePointerDown = (e: PointerEvent) => {
        if (disabledRef.current) return;
        isDraggingRotation = true;
        (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
        e.stopPropagation();
        e.preventDefault();
        selectFeature(feature.properties.id);
        const rounded = Math.round(angleFromPointer(e));
        updateDirection(feature.properties.id, rounded);
      };

      const onHandlePointerMove = (e: PointerEvent) => {
        if (!isDraggingRotation) return;
        const rounded = Math.round(angleFromPointer(e));
        updateDirection(feature.properties.id, rounded);
      };

      const onHandlePointerUp = (e: PointerEvent) => {
        if (isDraggingRotation) {
          isDraggingRotation = false;
          (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
          e.stopPropagation();
          e.preventDefault();
        }
      };

      // --- Compass body drag (reposition) ---
      const onCompassPointerDown = (e: PointerEvent) => {
        if (disabledRef.current) return;
        e.stopPropagation();
        e.preventDefault();

        // Select on click
        selectFeature(feature.properties.id);

        isDraggingPosition = true;
        (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);

        const rect = map.getContainer().getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        dragStartLngLat = map.unproject([mouseX, mouseY]);

        const f = getFeature();
        if (f) {
          dragStartMarkerLngLat = [f.geometry.coordinates[0], f.geometry.coordinates[1]];
        }

        // Disable map drag while repositioning
        map.dragPan.disable();
      };

      const onCompassPointerMove = (e: PointerEvent) => {
        if (!isDraggingPosition || !dragStartLngLat || !dragStartMarkerLngLat) return;

        const rect = map.getContainer().getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const currentLngLat = map.unproject([mouseX, mouseY]);

        const dLng = currentLngLat.lng - dragStartLngLat.lng;
        const dLat = currentLngLat.lat - dragStartLngLat.lat;

        const newLng = dragStartMarkerLngLat[0] + dLng;
        const newLat = dragStartMarkerLngLat[1] + dLat;

        updatePosition(feature.properties.id, newLng, newLat);
      };

      const onCompassPointerUp = (e: PointerEvent) => {
        if (isDraggingPosition) {
          isDraggingPosition = false;
          dragStartLngLat = null;
          dragStartMarkerLngLat = null;
          (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
          e.stopPropagation();
          e.preventDefault();
          map.dragPan.enable();
        }
      };

      // Suppress mouse/click compatibility events
      const suppressEvent = (e: Event) => {
        e.stopPropagation();
      };

      // Wire up handle events
      handle.addEventListener('pointerdown', onHandlePointerDown);
      handle.addEventListener('pointermove', onHandlePointerMove);
      handle.addEventListener('pointerup', onHandlePointerUp);
      handle.addEventListener('mousedown', suppressEvent);
      handle.addEventListener('click', suppressEvent);

      // Wire up compass body events
      compass.addEventListener('pointerdown', onCompassPointerDown);
      compass.addEventListener('pointermove', onCompassPointerMove);
      compass.addEventListener('pointerup', onCompassPointerUp);
      compass.addEventListener('mousedown', suppressEvent);
      compass.addEventListener('click', suppressEvent);

      const marker = new maplibregl.Marker({
        element: container,
        anchor: 'center',
      })
        .setLngLat([lng, lat])
        .addTo(map);

      const entry: MarkerEntry = {
        featureId: feature.properties.id,
        marker,
        compass,
        handle,
        container,
      };
      markersRef.current.push(entry);
    },
    [mapRef],
  );

  // ----- Helper: select a directional point -----
  const selectFeature = useCallback((id: string) => {
    // Deselect previous
    const prevId = selectedIdRef.current;
    if (prevId) {
      const prevEntry = markersRef.current.find((m) => m.featureId === prevId);
      if (prevEntry) setSelectedStyle(prevEntry.container, false);
    }
    // Select new
    setSelectedId(id);
    const entry = markersRef.current.find((m) => m.featureId === id);
    if (entry) setSelectedStyle(entry.container, true);
    const feature = featuresRef.current.find((f) => f.properties.id === id);
    onSelectRef.current?.(feature ?? null);
  }, []);

  // ----- Helper: update direction of a feature -----
  const updateDirection = useCallback((id: string, direction: number) => {
    featuresRef.current = featuresRef.current.map((f) =>
      f.properties.id === id
        ? {
            ...f,
            properties: { ...f.properties, direction },
          }
        : f,
    );
    // Update visual
    const entry = markersRef.current.find((m) => m.featureId === id);
    if (entry) positionHandle(entry.compass, entry.handle, direction);
    onChangeRef.current?.();
  }, []);

  // ----- Helper: update position of a feature -----
  const updatePosition = useCallback((id: string, lng: number, lat: number) => {
    featuresRef.current = featuresRef.current.map((f) =>
      f.properties.id === id
        ? {
            ...f,
            geometry: { ...f.geometry, coordinates: [lng, lat] },
          }
        : f,
    );
    // Update marker position
    const entry = markersRef.current.find((m) => m.featureId === id);
    if (entry) entry.marker.setLngLat([lng, lat]);
    onChangeRef.current?.();
  }, []);

  // ----- Map click handler: place new directional point -----
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !mapReady || disabled) return;

    const handleClick = (e: maplibregl.MapMouseEvent) => {
      if (activeModeRef.current !== 'directional-point') return;

      // Mark as loaded so controlled value round-trips won't re-create markers
      initialLoaded.current = true;

      // In single-feature mode, remove all existing markers before placing a new one.
      if (singleFeatureRef.current && featuresRef.current.length > 0) {
        for (const entry of markersRef.current) {
          entry.marker.remove();
        }
        markersRef.current = [];
        featuresRef.current = [];
        setSelectedId(null);
      }

      const id = getUuid();
      const feature: DirectionalPointFeature = {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [e.lngLat.lng, e.lngLat.lat],
        },
        properties: {
          id,
          direction: 0,
          mode: 'directional-point',
        },
      };

      featuresRef.current = [...featuresRef.current, feature];
      createMarkerForFeature(feature);
      onChangeRef.current?.();
    };

    map.on('click', handleClick);
    return () => {
      map.off('click', handleClick);
    };
  }, [mapRef, mapReady, disabled, createMarkerForFeature]);

  // ----- Deselect -----
  const deselect = useCallback(() => {
    const prevId = selectedIdRef.current;
    if (prevId) {
      const prevEntry = markersRef.current.find((m) => m.featureId === prevId);
      if (prevEntry) setSelectedStyle(prevEntry.container, false);
    }
    setSelectedId(null);
    onSelectRef.current?.(null);
  }, []);

  // ----- Delete selected -----
  const deleteSelected = useCallback(() => {
    const id = selectedIdRef.current;
    if (!id) return;

    // Remove marker from map
    const entry = markersRef.current.find((m) => m.featureId === id);
    if (entry) entry.marker.remove();
    markersRef.current = markersRef.current.filter((m) => m.featureId !== id);

    // Remove feature
    featuresRef.current = featuresRef.current.filter((f) => f.properties.id !== id);

    setSelectedId(null);
    onSelectRef.current?.(null);
    onChangeRef.current?.();
  }, []);

  // ----- Get features for merging into FeatureCollection -----
  const getFeatures = useCallback((): DirectionalPointFeature[] => {
    return featuresRef.current;
  }, []);

  // ----- Load initial features -----
  const loadFeatures = useCallback(
    (features: DirectionalPointFeature[]) => {
      if (initialLoaded.current) return;
      initialLoaded.current = true;

      featuresRef.current = features;
      for (const feature of features) {
        // Skip if a marker already exists for this feature (e.g. from a controlled round-trip)
        if (markersRef.current.some((m) => m.featureId === feature.properties.id)) continue;
        createMarkerForFeature(feature);
      }
    },
    [createMarkerForFeature],
  );

  // ----- Replace all features (clears existing markers then loads new ones) -----
  const replaceFeatures = useCallback(
    (features: DirectionalPointFeature[]) => {
      for (const entry of markersRef.current) {
        entry.marker.remove();
      }
      markersRef.current = [];
      featuresRef.current = [];
      setSelectedId(null);
      initialLoaded.current = false;

      if (features.length === 0) return;

      featuresRef.current = features;
      initialLoaded.current = true;
      for (const feature of features) {
        createMarkerForFeature(feature);
      }
    },
    [createMarkerForFeature],
  );

  // ----- Cleanup markers on unmount -----
  useEffect(() => {
    return () => {
      for (const entry of markersRef.current) {
        entry.marker.remove();
      }
      markersRef.current = [];
    };
  }, []);

  return {
    hasSelection: selectedId !== null,
    deleteSelected,
    getFeatures,
    loadFeatures,
    replaceFeatures,
    deselect,
  };
}
