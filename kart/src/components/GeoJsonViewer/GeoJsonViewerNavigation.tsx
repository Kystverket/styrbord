import { useEffect, useMemo, useState, type RefObject } from "react";
import type * as maplibregl from "maplibre-gl";
import type { FeatureCollection } from "geojson";

import { computeBounds } from "~/utility/geojson";
import { useTranslation } from "~/translations";
import styles from "./GeoJsonViewerNavigation.module.css";

type Bounds = [number, number, number, number];

export interface GeoJsonViewerNavigationProps {
  /** Reference to the MapLibre map instance. */
  mapRef: RefObject<maplibregl.Map | null>;
  /** The features to navigate between. */
  fc: FeatureCollection;
  /** Padding (in pixels) applied when fitting bounds. */
  padding: number;
}

function FitIcon() {
  return (
    <svg
      className={styles.icon}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 9V4h5" />
      <path d="M20 9V4h-5" />
      <path d="M4 15v5h5" />
      <path d="M20 15v5h-5" />
    </svg>
  );
}

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      className={styles.icon}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline
        points={direction === "left" ? "15 18 9 12 15 6" : "9 18 15 12 9 6"}
      />
    </svg>
  );
}

/**
 * Map overlay that fits the map to all features, or steps between them one
 * at a time — for getting back to the data after panning or zooming away.
 */
export function GeoJsonViewerNavigation({
  mapRef,
  fc,
  padding,
}: GeoJsonViewerNavigationProps) {
  const { t } = useTranslation();
  const [index, setIndex] = useState<number | null>(null);

  const allBounds = useMemo(() => computeBounds(fc), [fc]);
  const featureBounds = useMemo(
    () =>
      fc.features
        .map((feature) =>
          computeBounds({ type: "FeatureCollection", features: [feature] }),
        )
        .filter((bounds): bounds is Bounds => bounds !== null),
    [fc],
  );

  useEffect(() => {
    setIndex(null);
  }, [fc]);

  if (!allBounds) {
    return null;
  }

  const total = featureBounds.length;

  const fitTo = (bounds: Bounds) => {
    mapRef.current?.fitBounds(bounds, { padding, maxZoom: 16, duration: 300 });
  };

  const showAll = () => {
    setIndex(null);
    fitTo(allBounds);
  };

  const step = (direction: 1 | -1) => {
    let next: number;
    if (index === null) {
      next = direction === 1 ? 0 : total - 1;
    } else {
      next = (index + direction + total) % total;
    }
    setIndex(next);
    fitTo(featureBounds[next]);
  };

  return (
    <div className={styles.root}>
      <button type="button" className={styles.button} onClick={showAll}>
        <FitIcon />
        {t(
          total > 1 ? "featureNavigation.showAll" : "featureNavigation.showOne",
        )}
      </button>
      {total > 1 && (
        <div className={styles.stepper}>
          <button
            type="button"
            className={styles.iconButton}
            onClick={() => step(-1)}
            aria-label={t("featureNavigation.previous")}
            title={t("featureNavigation.previous")}
          >
            <ChevronIcon direction="left" />
          </button>
          <span className={styles.position} aria-live="polite">
            {index === null
              ? t("featureNavigation.count", { total })
              : t("featureNavigation.position", { current: index + 1, total })}
          </span>
          <button
            type="button"
            className={styles.iconButton}
            onClick={() => step(1)}
            aria-label={t("featureNavigation.next")}
            title={t("featureNavigation.next")}
          >
            <ChevronIcon direction="right" />
          </button>
        </div>
      )}
    </div>
  );
}
