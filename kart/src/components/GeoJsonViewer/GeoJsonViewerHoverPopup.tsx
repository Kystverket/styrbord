import { useLayoutEffect, useRef, type ReactNode } from "react";
import type { LngLat, Map as MaplibreMap } from "maplibre-gl";
import type { InteractiveFeature } from "~/hooks/useFeatureInteraction";

import styles from "./GeoJsonViewerHoverPopup.module.css";

// Offset popup from cursor to avoid overlap
const OFFSET_X = 12;
const OFFSET_Y = 12;

export interface GeoJsonViewerHoverPopupProps {
  /** The feature currently being hovered. */
  feature: InteractiveFeature;
  /** Position of the popup relative to the map container. */
  position?: { x: number; y: number };
  /**
   * Pins the popup to a map coordinate instead of `position`, so it stays on
   * the feature while the map pans and zooms. Placement is written straight
   * to the element on every `move`, without re-rendering.
   */
  anchor?: { map: MaplibreMap; lngLat: LngLat };
  /**
   * Custom render functions for hover content based on the feature's `type` property.
   * Keys are the `properties.type` values; the function receives the hovered feature
   * and returns the content to display.
   */
  hoverContent?: Record<string, (feature: InteractiveFeature) => ReactNode>;
}

/**
 * Popup component that displays when hovering over a map feature.
 * Content is customizable per feature type via the `hoverContent` prop.
 */
export function GeoJsonViewerHoverPopup({
  feature,
  position,
  anchor,
  hoverContent,
}: GeoJsonViewerHoverPopupProps) {
  const ref = useRef<HTMLDivElement>(null);
  const map = anchor?.map;
  const lngLat = anchor?.lngLat;

  // Layout effect: placed before paint, so the popup never flashes at 0,0.
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || !map || !lngLat) return;
    const place = () => {
      const { x, y } = map.project(lngLat);
      el.style.left = `${x + OFFSET_X}px`;
      el.style.top = `${y + OFFSET_Y}px`;
    };
    place();
    map.on("move", place);
    return () => {
      map.off("move", place);
    };
  }, [map, lngLat]);

  const featureType = (feature.properties?.type as string | undefined) ?? "_";

  // Get custom render function for this feature type
  const renderFn = featureType ? hoverContent?.[featureType] : undefined;

  // Render content
  const content = renderFn ? (
    renderFn(feature)
  ) : (
    <DefaultHoverContent feature={feature} />
  );

  return (
    <div
      ref={ref}
      className={styles.popup}
      style={
        position && !anchor
          ? { left: position.x + OFFSET_X, top: position.y + OFFSET_Y }
          : undefined
      }
      role="tooltip"
      aria-live="polite"
    >
      {content}
    </div>
  );
}

/**
 * Default hover content shown when no custom render function is provided.
 * Shows the feature's `name`, falling back to its `type` property, then
 * its geometry type.
 */
function DefaultHoverContent({ feature }: { feature: InteractiveFeature }) {
  // `||`, not `??`: an empty name should fall through, not render a blank tooltip.
  const label =
    feature.properties?.name ||
    feature.properties?.type ||
    feature.geometry?.type ||
    "Feature";

  return <span>{String(label)}</span>;
}
