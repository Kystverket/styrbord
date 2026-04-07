import { useEffect, useRef } from "react";
import type { MutableRefObject } from "react";
import type { Map as MaplibreMap } from "maplibre-gl";
import type { FeatureCollection } from "geojson";

import { computeBounds } from "~/utility/geojson";

/**
 * Fits the map to the bounds of the given FeatureCollection — once only.
 *
 * After the first successful fit the hook becomes a no-op, so user-driven
 * viewport changes and subsequent data edits are not overridden.
 */
export function useFitBounds({
  mapRef,
  mapReady,
  fc,
  fitBounds,
  fitBoundsPadding,
}: {
  mapRef: MutableRefObject<MaplibreMap | null>;
  mapReady: boolean;
  fc: FeatureCollection | undefined;
  fitBounds: boolean;
  fitBoundsPadding: number;
}) {
  const hasFittedRef = useRef(false);

  useEffect(() => {
    const map = mapRef.current;
    if (!map || !mapReady || !fc || !fitBounds || hasFittedRef.current) return;

    const bounds = computeBounds(fc);
    if (!bounds) return;

    hasFittedRef.current = true;

    const fit = () => {
      map.fitBounds(bounds, {
        padding: fitBoundsPadding,
        maxZoom: 16,
        duration: 300,
      });
    };

    if (map.isStyleLoaded()) {
      fit();
    } else {
      map.once("load", fit);
    }
  }, [fc, fitBounds, fitBoundsPadding, mapRef, mapReady]);
}
