import { useCallback, useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import type { CoordinateDirectionValue } from "~/components/CoordinateDirectionPicker/CoordinateDirectionPicker.types";
import { clampDirection } from "~/utility/coordinate";

// ---------------------------------------------------------------------------
// SVG assets
// ---------------------------------------------------------------------------

/** SVG data URL for the rotation drag handle — a circular grab indicator with arrows. */
const ROTATION_HANDLE_SVG = (() => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="11" fill="white" stroke="#000667" stroke-width="1.5" opacity="0.9"/>
    <path d="M12 4l-2.5 3h5L12 4z" fill="#000667"/>
    <path d="M12 20l2.5-3h-5L12 20z" fill="#000667"/>
    <path d="M4 12l3 2.5v-5L4 12z" fill="#000667"/>
    <path d="M20 12l-3-2.5v5L20 12z" fill="#000667"/>
    <circle cx="12" cy="12" r="2" fill="#000667"/>
  </svg>`;
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
})();

/**
 * Create an inline SVG string for a compass-needle style marker.
 * The primary (north) half points up in the given color, the opposite (south) half in grey.
 */
function createArrowSvg(color = "#df3c1b", borderColor = "#000667"): string {
  const grey = "#b0b0b0";
  return `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
    <circle cx="20" cy="20" r="18" fill="white" stroke="${borderColor}" stroke-width="2"/>
    <polygon points="20,4 25,19 20,17 15,19" fill="${color}"/>
    <polygon points="20,36 15,21 20,23 25,21" fill="${grey}"/>
    <circle cx="20" cy="20" r="2.5" fill="${color}"/>
  </svg>`;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

/** Distance (px) from center of the marker container to the rotation handle. */
const HANDLE_RADIUS = 35;
/** Half-size of the rotation handle image. */
const HANDLE_HALF = 12;
/** Center of the 100×100 marker container. */
const CONTAINER_CENTER = 50;

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

    // Container – sized to fit compass (40×40) + handle at HANDLE_RADIUS offset
    const container = document.createElement("div");
    container.style.width = "100px";
    container.style.height = "100px";
    container.style.position = "relative";
    container.style.pointerEvents = "none";

    // Compass element (centred in 100×100 container)
    const compass = document.createElement("div");
    compass.innerHTML = createArrowSvg();
    compass.style.position = "absolute";
    compass.style.left = "30px";
    compass.style.top = "30px";
    compass.style.width = "40px";
    compass.style.height = "40px";
    compass.style.cursor = "grab";
    compass.style.pointerEvents = "auto";
    container.appendChild(compass);
    compassElRef.current = compass;

    // Rotation handle
    const handle = document.createElement("img");
    handle.src = ROTATION_HANDLE_SVG;
    handle.width = 24;
    handle.height = 24;
    handle.style.position = "absolute";
    handle.style.cursor = "grab";
    handle.style.userSelect = "none";
    handle.style.pointerEvents = "auto";
    handle.draggable = false;
    container.appendChild(handle);
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
      el.addEventListener("pointerdown", onPointerDown);
      el.addEventListener("pointermove", onPointerMove);
      el.addEventListener("pointerup", onPointerUp);
      el.addEventListener("mousedown", suppressEvent);
      el.addEventListener("click", suppressEvent);
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
        anchor: "center",
      })
        .setLngLat([coord.longitude, coord.latitude])
        .addTo(map);
    }
  }, [currentValue.coordinate, getOrCreateMarkerElement, mapRef]);

  /** Returns true if a rotation drag is active or ended very recently (< 200 ms). */
  const wasRecentlyDragging = useCallback(
    () =>
      isDraggingRotation.current || Date.now() - lastDragEndRef.current < 200,
    [],
  );

  return { markerRef, wasRecentlyDragging };
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Update compass rotation and handle position for a given direction. */
function positionHandle(
  compass: HTMLElement,
  handle: HTMLElement,
  dirDeg: number,
): void {
  const dirRad = (dirDeg * Math.PI) / 180;
  compass.style.transform = `rotate(${dirDeg}deg)`;
  handle.style.left = `${CONTAINER_CENTER + Math.sin(dirRad) * HANDLE_RADIUS - HANDLE_HALF}px`;
  handle.style.top = `${CONTAINER_CENTER - Math.cos(dirRad) * HANDLE_RADIUS - HANDLE_HALF}px`;
}
