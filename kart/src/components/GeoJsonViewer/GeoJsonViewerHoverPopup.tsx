import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import type { LngLat, Map as MaplibreMap } from "maplibre-gl";
import type { InteractiveFeature } from "~/hooks/useFeatureInteraction";

import styles from "./GeoJsonViewerHoverPopup.module.css";

// Offset popup from cursor to avoid overlap
const OFFSET_X = 12;
const OFFSET_Y = 12;

export interface GeoJsonViewerHoverPopupProps {
  /**
   * The feature currently being hovered, or `null` when nothing is.
   * Keep the component mounted while hover is enabled: its root is the live
   * region that announces the popup, and a live region must already be in
   * the DOM for screen readers to pick up what is added to it.
   */
  feature: InteractiveFeature | null;
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
 *
 * Escape hides the popup until another feature is hovered (WCAG 1.4.13).
 */
export function GeoJsonViewerHoverPopup({
  feature,
  position,
  anchor,
  hoverContent,
}: GeoJsonViewerHoverPopupProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [dismissed, setDismissed] = useState<InteractiveFeature | null>(null);
  const visible = feature !== null && feature !== dismissed;
  const map = anchor?.map;
  const lngLat = anchor?.lngLat;

  // Layout effect: placed before paint, so the popup never flashes at 0,0.
  useLayoutEffect(() => {
    const el = ref.current;
    if (!visible || !el || !map || !lngLat) return;
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
  }, [visible, map, lngLat]);

  // Listen on the document: the pointer is over the map, but keyboard focus
  // can be anywhere on the page.
  useEffect(() => {
    if (!visible) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDismissed(feature);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [visible, feature]);

  return (
    <div className={styles.liveRegion} aria-live="polite" aria-atomic="true">
      {visible && (
        <div
          ref={ref}
          className={styles.popup}
          style={
            position && !anchor
              ? { left: position.x + OFFSET_X, top: position.y + OFFSET_Y }
              : undefined
          }
        >
          <HoverContent feature={feature} hoverContent={hoverContent} />
        </div>
      )}
    </div>
  );
}

function HoverContent({
  feature,
  hoverContent,
}: {
  feature: InteractiveFeature;
  hoverContent: GeoJsonViewerHoverPopupProps["hoverContent"];
}) {
  const featureType = (feature.properties?.type as string | undefined) ?? "_";
  const renderFn = hoverContent?.[featureType];
  return renderFn ? (
    renderFn(feature)
  ) : (
    <DefaultHoverContent feature={feature} />
  );
}

/** Property keys tried, in order, for the default hover label. Matched case-insensitively. */
const LABEL_KEYS = ["name", "navn", "type"];

/** First non-empty property whose key matches one of `keys`, ignoring case. */
function findLabelProperty(
  properties: InteractiveFeature["properties"],
  keys: string[],
): unknown {
  if (!properties) return undefined;
  const entries = Object.entries(properties);
  for (const key of keys) {
    const match = entries.find(
      ([k, v]) => k.toLowerCase() === key && v != null && v !== "",
    );
    if (match) return match[1];
  }
  return undefined;
}

/**
 * Default hover content shown when no custom render function is provided.
 * Shows the first non-empty of the feature's `name`, `navn` and `type`
 * properties (keys matched case-insensitively), then its geometry type.
 */
function DefaultHoverContent({ feature }: { feature: InteractiveFeature }) {
  // `||`, not `??`: an empty name should fall through, not render a blank tooltip.
  const label =
    findLabelProperty(feature.properties, LABEL_KEYS) ||
    feature.geometry?.type ||
    "Feature";

  return <span>{String(label)}</span>;
}
