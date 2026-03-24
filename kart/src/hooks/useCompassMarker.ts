import { useCallback, useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import type { CoordinateDirectionValue } from '~/components/CoordinateDirectionPicker/CoordinateDirectionPicker.types';
import { clampDirection } from '~/utility/coordinate';
import { createCompassMarkerElement, positionHandle } from '~/utility/compassMarker';

// ---------------------------------------------------------------------------
// Hook
// ---------------------------------------------------------------------------

export interface UseCompassMarkerOptions {
  /** The MapLibre map instance to attach the marker to. */
  mapRef: React.RefObject<maplibregl.Map | null>;
  /** Current combined coordinate + direction value. */
  currentValue: CoordinateDirectionValue;
  /** Whether all interaction is disabled. */
  disabled?: boolean;
  /** Called when the user drags the compass or handle to set a new direction. */
  onDirectionChange?: (next: CoordinateDirectionValue) => void;
}

/**
 * Manages a compass-needle marker on a MapLibre map.
 *
 * Handles:
 * - Creating the marker DOM (compass + drag handle)
 * - Adding / moving / removing the marker when coordinates change
 * - Rotation drag interaction to change direction
 * - Updating compass rotation + handle position when direction changes
 */
export function useCompassMarker({
  mapRef,
  currentValue,
  disabled = false,
  onDirectionChange,
}: UseCompassMarkerOptions) {
  const markerRef = useRef<maplibregl.Marker | null>(null);

  // Refs for custom marker DOM sub-elements
  const markerElRef = useRef<HTMLDivElement | null>(null);
  const compassElRef = useRef<HTMLDivElement | null>(null);
  const handleElRef = useRef<HTMLImageElement | null>(null);

  // Rotation drag state
  const isDraggingRotation = useRef(false);
  const lastDragEndRef = useRef(0);
  const disabledRef = useRef(disabled);

  // Keep refs up-to-date so stable closures read latest values
  const currentValueRef = useRef(currentValue);
  currentValueRef.current = currentValue;

  const onDirectionChangeRef = useRef(onDirectionChange);
  onDirectionChangeRef.current = onDirectionChange;

  useEffect(() => {
    disabledRef.current = disabled;
  }, [disabled]);

  // ----- Lazily create the marker DOM element -----
  const getOrCreateMarkerElement = useCallback(() => {
    if (markerElRef.current) return markerElRef.current;

    const { container, compass, handle } = createCompassMarkerElement();
    compassElRef.current = compass;
    handleElRef.current = handle;

    // --- Helper: calculate direction angle from pointer event ---
    const angleFromPointer = (e: PointerEvent): number => {
      const map = mapRef.current;
      const coord = currentValueRef.current.coordinate;
      if (!map || !coord) return 0;

      const markerScreen = map.project([coord.longitude, coord.latitude]);
      const rect = map.getContainer().getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const dx = mouseX - markerScreen.x;
      const dy = markerScreen.y - mouseY; // flip Y for geographic convention
      return clampDirection((Math.atan2(dx, dy) * 180) / Math.PI);
    };

    // --- Rotation drag handlers ---
    const onPointerDown = (e: PointerEvent) => {
      if (disabledRef.current) return;
      isDraggingRotation.current = true;
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
      e.stopPropagation();
      e.preventDefault();

      const angleDeg = angleFromPointer(e);
      const rounded = Math.round(angleDeg);
      onDirectionChangeRef.current?.({
        ...currentValueRef.current,
        direction: rounded,
      });
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDraggingRotation.current) return;
      const angleDeg = angleFromPointer(e);
      const rounded = Math.round(angleDeg);
      onDirectionChangeRef.current?.({
        ...currentValueRef.current,
        direction: rounded,
      });
    };

    const onPointerUp = (e: PointerEvent) => {
      if (isDraggingRotation.current) {
        isDraggingRotation.current = false;
        lastDragEndRef.current = Date.now();
        (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
        e.stopPropagation();
        e.preventDefault();
      }
    };

    // Suppress mouse/click compatibility events so they never reach the map canvas
    const suppressEvent = (e: Event) => {
      e.stopPropagation();
    };

    for (const el of [compass, handle]) {
      el.addEventListener('pointerdown', onPointerDown);
      el.addEventListener('pointermove', onPointerMove);
      el.addEventListener('pointerup', onPointerUp);
      el.addEventListener('mousedown', suppressEvent);
      el.addEventListener('click', suppressEvent);
    }

    // Set initial handle position
    const initDir = currentValueRef.current.direction ?? 0;
    positionHandle(compass, handle, initDir);

    markerElRef.current = container;
    return container;
  }, [mapRef]);

  // ----- Update compass rotation + handle position when direction changes -----
  useEffect(() => {
    const compass = compassElRef.current;
    const handle = handleElRef.current;
    if (!compass || !handle) return;
    positionHandle(compass, handle, currentValue.direction ?? 0);
  }, [currentValue.direction]);

  // ----- Create / update / remove MapLibre marker when coordinate changes -----
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    const coord = currentValue.coordinate;

    if (!coord) {
      if (markerRef.current) {
        markerRef.current.remove();
        markerRef.current = null;
      }
      return;
    }

    if (markerRef.current) {
      markerRef.current.setLngLat([coord.longitude, coord.latitude]);
    } else {
      const el = getOrCreateMarkerElement();
      markerRef.current = new maplibregl.Marker({
        element: el,
        anchor: 'center',
      })
        .setLngLat([coord.longitude, coord.latitude])
        .addTo(map);
    }
  }, [currentValue.coordinate, getOrCreateMarkerElement, mapRef]);

  /** Returns true if a rotation drag is active or ended very recently (< 200 ms). */
  const wasRecentlyDragging = useCallback(
    () => isDraggingRotation.current || Date.now() - lastDragEndRef.current < 200,
    [],
  );

  return { markerRef, wasRecentlyDragging };
}
