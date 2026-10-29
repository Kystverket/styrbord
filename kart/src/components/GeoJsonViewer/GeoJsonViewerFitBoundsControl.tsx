import { useEffect, useMemo, useState, type RefObject } from "react";
import { createPortal } from "react-dom";
import type * as maplibregl from "maplibre-gl";
import type { FeatureCollection } from "geojson";

import { computeBounds } from "~/utility/geojson";
import { useTranslation } from "~/translations";
import styles from "./GeoJsonViewerFitBoundsControl.module.css";

export interface GeoJsonViewerFitBoundsControlProps {
  /** Reference to the MapLibre map instance. */
  mapRef: RefObject<maplibregl.Map | null>;
  /** The map instance counter from `useMaplibreMap`; changes when the map is recreated. */
  mapVersion: number;
  /** The features to fit the map to. */
  fc: FeatureCollection;
  /** Padding (in pixels) applied when fitting bounds. */
  padding: number;
}

/** Material Symbols `location_searching`, weight 300, 20 px. */
function ShowAllIcon() {
  return (
    <svg
      className={styles.icon}
      width="20"
      height="20"
      viewBox="0 -960 960 960"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M454-78v-87.23q-119-10.85-198.46-90.31Q176.08-335 165.23-454H78v-52h87.23q10.85-119 90.31-198.96Q335-784.92 454-794.77V-882h52v87.23q119 9.85 198.46 89.81Q783.92-625 794.77-506H882v52h-87.23q-10.85 119-90.31 198.46Q625-176.08 506-165.23V-78h-52Zm26-138q110 0 187-77t77-187q0-110-77-187t-187-77q-110 0-187 77t-77 187q0 110 77 187t187 77Z" />
    </svg>
  );
}

/**
 * Map control, below zoom and fullscreen, that fits the map to all features —
 * for getting back to the data after panning or zooming away.
 */
export function GeoJsonViewerFitBoundsControl({
  mapRef,
  mapVersion,
  fc,
  padding,
}: GeoJsonViewerFitBoundsControlProps) {
  const { t } = useTranslation();
  const [container, setContainer] = useState<HTMLElement | null>(null);

  const bounds = useMemo(() => computeBounds(fc), [fc]);
  const hasBounds = bounds !== null;

  useEffect(() => {
    const map = mapRef.current;
    if (!map || !hasBounds) {
      return;
    }

    const element = document.createElement("div");
    element.className = "maplibregl-ctrl maplibregl-ctrl-group";
    const control: maplibregl.IControl = {
      onAdd: () => element,
      onRemove: () => element.remove(),
    };
    map.addControl(control, "bottom-right");
    // Bottom controls stack upwards; move this one back down, above only the attribution.
    const stack = element.parentElement;
    stack?.insertBefore(
      element,
      stack.querySelector(":scope > .maplibregl-ctrl-attrib"),
    );
    setContainer(element);

    return () => {
      map.removeControl(control);
      setContainer(null);
    };
  }, [mapVersion, hasBounds]);

  if (!container || !bounds) {
    return null;
  }

  const label = t(
    fc.features.length > 1
      ? "fitBoundsControl.showAll"
      : "fitBoundsControl.showOne",
  );

  return createPortal(
    <button
      type="button"
      onClick={() =>
        mapRef.current?.fitBounds(bounds, {
          padding,
          maxZoom: 16,
          duration: 300,
        })
      }
      aria-label={label}
      title={label}
    >
      <ShowAllIcon />
    </button>,
    container,
  );
}
