/**
 * Shared SVG assets and positioning helpers for compass-needle markers.
 *
 * Used by both the `useCompassMarker` hook (CoordinateDirectionPicker) and
 * the `useDirectionalPoints` hook (GeoJsonEditor directional-point mode).
 */

// ---------------------------------------------------------------------------
// SVG assets
// ---------------------------------------------------------------------------

/** SVG data URL for the rotation drag handle — a circular grab indicator with arrows. */
export const ROTATION_HANDLE_SVG = (() => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="11" fill="white" stroke="#000667" stroke-width="1.5" opacity="0.9"/>
    <path d="M12 4l-2.5 3h5L12 4z" fill="#000667"/>
    <path d="M12 20l2.5-3h-5L12 20z" fill="#000667"/>
    <path d="M4 12l3 2.5v-5L4 12z" fill="#000667"/>
    <path d="M20 12l-3-2.5v5L20 12z" fill="#000667"/>
    <circle cx="12" cy="12" r="2" fill="#000667"/>
  </svg>`;
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
})();

/**
 * Create an inline SVG string for a compass-needle style marker.
 * The primary (north) half points up in the given color, the opposite (south) half in grey.
 */
export function createArrowSvg(color = '#df3c1b', borderColor = '#000667'): string {
  const grey = '#b0b0b0';
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
export const HANDLE_RADIUS = 35;
/** Half-size of the rotation handle image. */
export const HANDLE_HALF = 12;
/** Center of the 100×100 marker container. */
export const CONTAINER_CENTER = 50;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Update compass rotation and handle position for a given direction. */
export function positionHandle(compass: HTMLElement, handle: HTMLElement, dirDeg: number): void {
  const dirRad = (dirDeg * Math.PI) / 180;
  compass.style.transform = `rotate(${dirDeg}deg)`;
  handle.style.left = `${CONTAINER_CENTER + Math.sin(dirRad) * HANDLE_RADIUS - HANDLE_HALF}px`;
  handle.style.top = `${CONTAINER_CENTER - Math.cos(dirRad) * HANDLE_RADIUS - HANDLE_HALF}px`;
}

/**
 * Build the DOM for a compass-marker container (100×100px) with a compass
 * needle and a rotation handle.
 *
 * Returns `{ container, compass, handle }` — the caller is responsible for
 * adding event listeners and managing the MapLibre Marker.
 */
export function createCompassMarkerElement(): {
  container: HTMLDivElement;
  compass: HTMLDivElement;
  handle: HTMLImageElement;
} {
  const container = document.createElement('div');
  container.style.width = '100px';
  container.style.height = '100px';
  container.style.pointerEvents = 'none';

  // Compass element (centred in 100×100 container)
  const compass = document.createElement('div');
  compass.innerHTML = createArrowSvg();
  compass.style.position = 'absolute';
  compass.style.left = '30px';
  compass.style.top = '30px';
  compass.style.width = '40px';
  compass.style.height = '40px';
  compass.style.cursor = 'grab';
  compass.style.pointerEvents = 'auto';
  container.appendChild(compass);

  // Rotation handle
  const handle = document.createElement('img');
  handle.src = ROTATION_HANDLE_SVG;
  handle.width = 24;
  handle.height = 24;
  handle.style.position = 'absolute';
  handle.style.cursor = 'grab';
  handle.style.userSelect = 'none';
  handle.style.pointerEvents = 'auto';
  handle.draggable = false;
  container.appendChild(handle);

  return { container, compass, handle };
}
