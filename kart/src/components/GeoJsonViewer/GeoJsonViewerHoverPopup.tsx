import type { ReactNode } from "react";
import type { InteractiveFeature } from "~/hooks/useFeatureInteraction";

import styles from "./GeoJsonViewerHoverPopup.module.css";

export interface GeoJsonViewerHoverPopupProps {
  /** The feature currently being hovered. */
  feature: InteractiveFeature;
  /** Position of the popup relative to the map container. */
  position: { x: number; y: number };
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
  hoverContent,
}: GeoJsonViewerHoverPopupProps) {
  const featureType = (feature.properties?.type as string | undefined) ?? "_";

  // Get custom render function for this feature type
  const renderFn = featureType ? hoverContent?.[featureType] : undefined;

  // Render content
  const content = renderFn ? (
    renderFn(feature)
  ) : (
    <DefaultHoverContent feature={feature} />
  );

  // Offset popup from cursor to avoid overlap
  const offsetX = 12;
  const offsetY = 12;

  return (
    <div
      className={styles.popup}
      style={{
        left: position.x + offsetX,
        top: position.y + offsetY,
      }}
      role="tooltip"
      aria-live="polite"
    >
      {content}
    </div>
  );
}

/**
 * Default hover content shown when no custom render function is provided.
 * Displays the feature type and any simple properties.
 */
function DefaultHoverContent({ feature }: { feature: InteractiveFeature }) {
  const featureType = feature.properties?.type;
  const name = feature.properties?.name;

  return (
    <div className={styles.defaultContent}>
      {featureType && (
        <span className={styles.featureType}>{String(featureType)}</span>
      )}
      {name && <span className={styles.featureName}>{String(name)}</span>}
      {!featureType && !name && (
        <span className={styles.featureType}>
          {feature.geometry?.type ?? "Feature"}
        </span>
      )}
    </div>
  );
}
