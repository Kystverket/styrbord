import { useEffect, useRef } from "react";
import type { MutableRefObject } from "react";
import type { Map as MaplibreMap, GeoJSONSource } from "maplibre-gl";
import type { FeatureCollection } from "geojson";

const IMAGE_NAME = "direction-arrow";
const SOURCE_ID = "direction-arrow-source";
const LAYER_ID = "direction-arrow-layer";

// North-pointing arrow SVG (0° = up). MapLibre rotates clockwise from north.
const ARROW_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
  <polygon points="16,2 26,28 16,22 6,28" fill="#df3c1b" stroke="#000667" stroke-width="1.5" stroke-linejoin="round"/>
</svg>`;

function loadArrowImage(): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const blob = new Blob([ARROW_SVG], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const img = new Image(32, 32);
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve(img);
    };
    img.onerror = reject;
    img.src = url;
  });
}

/** Build a FeatureCollection containing only Point features with a direction property. */
function buildDirectionFc(fc: FeatureCollection | undefined): FeatureCollection {
  if (!fc) return { type: "FeatureCollection", features: [] };
  return {
    type: "FeatureCollection",
    features: fc.features.filter(
      (f) =>
        f.geometry?.type === "Point" &&
        f.properties?.direction != null,
    ),
  };
}

/**
 * Adds and maintains a rotated direction-arrow symbol layer on the map.
 *
 * Only Point features with a `properties.direction` value (0–360°) get an arrow.
 * The arrow points in the geographic bearing direction (clockwise from north).
 *
 * When `enabled` is false, the hook does nothing.
 */
export function useDirectionArrow({
  mapRef,
  mapReady,
  fc,
  enabled,
}: {
  mapRef: MutableRefObject<MaplibreMap | null>;
  mapReady: boolean;
  fc: FeatureCollection | undefined;
  enabled: boolean;
}) {
  // Always up-to-date fc for use inside async callbacks
  const fcRef = useRef(fc);
  fcRef.current = fc;

  // Set up the image, source, and layer
  useEffect(() => {
    if (!enabled) return;
    const map = mapRef.current;
    if (!map || !mapReady) return;

    let cancelled = false;

    const setup = async () => {
      try {
        if (!map.hasImage(IMAGE_NAME)) {
          const img = await loadArrowImage();
          if (cancelled) return;
          if (!map.hasImage(IMAGE_NAME)) {
            map.addImage(IMAGE_NAME, img);
          }
        }

        if (cancelled) return;

        if (!map.getSource(SOURCE_ID)) {
          map.addSource(SOURCE_ID, {
            type: "geojson",
            data: buildDirectionFc(fcRef.current),
          });
        }

        if (!map.getLayer(LAYER_ID)) {
          map.addLayer({
            id: LAYER_ID,
            type: "symbol",
            source: SOURCE_ID,
            layout: {
              "icon-image": IMAGE_NAME,
              "icon-rotate": ["get", "direction"] as unknown as number,
              "icon-rotation-alignment": "map",
              "icon-allow-overlap": true,
              "icon-size": 1,
            },
          });
        }
      } catch (err) {
        if (!cancelled) {
          console.error("[useDirectionArrow] Failed to set up direction layer:", err);
        }
      }
    };

    if (map.isStyleLoaded()) {
      setup();
    } else {
      map.once("load", setup);
    }

    return () => {
      cancelled = true;
      try {
        if (map.getLayer(LAYER_ID)) map.removeLayer(LAYER_ID);
        if (map.getSource(SOURCE_ID)) map.removeSource(SOURCE_ID);
      } catch {
        // map may already be destroyed
      }
    };
  }, [mapRef, mapReady, enabled]);

  // Update source data whenever fc changes
  useEffect(() => {
    if (!enabled) return;
    const map = mapRef.current;
    if (!map || !mapReady) return;

    const update = () => {
      const src = map.getSource(SOURCE_ID) as GeoJSONSource | undefined;
      if (src) {
        src.setData(buildDirectionFc(fc));
      }
    };

    if (map.isStyleLoaded()) {
      update();
    } else {
      map.once("load", update);
    }
  }, [mapRef, mapReady, fc, enabled]);
}
