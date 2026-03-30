import { useEffect, useState, type RefObject } from 'react';
import type maplibregl from 'maplibre-gl';
import styles from './MapCenterAction.module.css';

export interface MapCenterActionProps {
  /** Ref to the MapLibre map instance. */
  mapRef: RefObject<maplibregl.Map | null>;
  /**
   * Controls visibility.
   * - `true` — always visible
   * - `false` — always hidden
   * - `undefined` — auto-detect (visible on touch devices)
   */
  visible?: boolean;
}

// ---------------------------------------------------------------------------
// Crosshair SVG — thin + with a small center dot
// ---------------------------------------------------------------------------

function CrosshairIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true" className={styles.crosshairSvg}>
      {/* Horizontal line */}
      <line x1="0" y1="20" x2="16" y2="20" stroke="currentColor" strokeWidth="1.5" />
      <line x1="24" y1="20" x2="40" y2="20" stroke="currentColor" strokeWidth="1.5" />
      {/* Vertical line */}
      <line x1="20" y1="0" x2="20" y2="16" stroke="currentColor" strokeWidth="1.5" />
      <line x1="20" y1="24" x2="20" y2="40" stroke="currentColor" strokeWidth="1.5" />
      {/* Center circle */}
      <circle cx="20" cy="20" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Target / click icon for the button
// ---------------------------------------------------------------------------

function TargetIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

/**
 * MapCenterAction — renders a crosshair at the map center and a button
 * that triggers a synthetic click at the center of the map.
 *
 * Shown by default on touch-primary devices (pointer: coarse).
 * Can be overridden with the `visible` prop.
 */
export function MapCenterAction({ mapRef, visible }: MapCenterActionProps) {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice(window.matchMedia('(pointer: coarse)').matches);
  }, []);

  const show = visible ?? isTouchDevice;

  if (!show) return null;

  const handleClick = () => {
    const map = mapRef.current;
    if (!map) return;

    const canvas = map.getCanvas();
    const rect = canvas.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Dispatch synthetic events at the map center to trigger both terra-draw
    // and MapLibre click handlers.
    //
    // 1. pointermove — terra-draw's linestring/polygon modes track the last
    //    mouse position for provisional "rubber band" rendering. Without this,
    //    the provisional coordinate stays at the user's last real mouse
    //    position and a vertex is committed there instead of at center.
    //
    // 2. pointerdown + pointerup — terra-draw detects clicks from this pair
    //    (it ignores plain 'click' events). The pair without drag movement
    //    triggers the active mode's onClick handler.
    //
    // 3. click — MapLibre's map event system listens for DOM click events to
    //    fire map.on('click'). This is needed for onMapClick in components
    //    like CoordinateField that don't use terra-draw.
    const shared: PointerEventInit = {
      clientX: centerX,
      clientY: centerY,
      bubbles: true,
      pointerId: 1,
      isPrimary: true,
      pointerType: 'touch',
      button: 0,
      buttons: 1,
    };

    canvas.dispatchEvent(new PointerEvent('pointermove', shared));
    canvas.dispatchEvent(new PointerEvent('pointerdown', shared));
    canvas.dispatchEvent(new PointerEvent('pointerup', { ...shared, buttons: 0 }));
    canvas.dispatchEvent(
      new MouseEvent('click', {
        clientX: centerX,
        clientY: centerY,
        bubbles: true,
        button: 0,
      }),
    );
  };

  return (
    <>
      <div className={styles.crosshair}>
        <CrosshairIcon />
      </div>
      <button type="button" className={styles.actionButton} onClick={handleClick} aria-label="Velg i sentrum av kartet">
        <TargetIcon />
        <span>Velg her</span>
      </button>
    </>
  );
}

export default MapCenterAction;
