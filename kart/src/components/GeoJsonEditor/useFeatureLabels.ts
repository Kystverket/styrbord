import { useCallback, useEffect, useRef } from "react";
import type { MutableRefObject } from "react";
import type { Map as MaplibreMap, GeoJSONSource } from "maplibre-gl";
import type {
  FeatureCollection,
  Feature,
  Geometry,
  GeoJsonProperties,
} from "geojson";

const LABEL_SOURCE = "geojson-editor-labels";
const LABEL_LAYER = "geojson-editor-label";

/**
 * Manages MapLibre label source + layer for the GeoJsonEditor.
 *
 * Creates the symbol layer on mount, updates the label data whenever
 * `fc` or `getLabel` changes, and tears down the layer on cleanup.
 *
 * Returns `updateLabelSource` so callers (e.g. the import handler) can
 * push labels immediately without waiting for a value round-trip.
 */
export function useFeatureLabels({
  mapRef,
  mapReady,
  fc,
  getLabel,
}: {
  mapRef: MutableRefObject<MaplibreMap | null>;
  mapReady: boolean;
  fc: FeatureCollection | undefined;
  getLabel: (
    feature: Feature<Geometry, GeoJsonProperties>,
  ) => string | number | null | undefined;
}) {
  const getLabelRef = useRef(getLabel);
  getLabelRef.current = getLabel;

  const updateLabelSource = useCallback(
    (data: FeatureCollection | undefined) => {
      const map = mapRef.current;
      const currentGetLabel = getLabelRef.current;
      if (!map || !mapReady || !currentGetLabel) return;

      const labelledFc: FeatureCollection =
        data && data.features.length > 0
          ? {
              type: "FeatureCollection",
              features: data.features.map((feature) => ({
                ...feature,
                properties: {
                  ...feature.properties,
                  _label: currentGetLabel(feature) ?? "",
                },
              })),
            }
          : { type: "FeatureCollection", features: [] };

      const doUpdate = () => {
        const src = map.getSource(LABEL_SOURCE) as GeoJSONSource;
        if (src) {
          src.setData(labelledFc);
        }
      };

      if (map.isStyleLoaded()) {
        doUpdate();
      } else {
        map.once("load", doUpdate);
      }
    },
    [mapRef, mapReady],
  );

  // Create the label layer
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !mapReady) return;

    const ensureLayer = () => {
      if (!map.getSource(LABEL_SOURCE)) {
        map.addSource(LABEL_SOURCE, {
          type: "geojson",
          data: { type: "FeatureCollection", features: [] },
        });
      }
      if (!map.getLayer(LABEL_LAYER)) {
        map.addLayer({
          id: LABEL_LAYER,
          type: "symbol",
          source: LABEL_SOURCE,
          layout: {
            "text-field": ["get", "_label"],
            "text-size": 16,
            "text-anchor": "left",
            "text-offset": [1.2, 0],
            "text-allow-overlap": true,
            "text-optional": false,
          },
          paint: {
            "text-color": "#1a1a1a",
            "text-halo-color": "#ffffff",
            "text-halo-width": 2,
          },
        });
      }
    };

    if (map.isStyleLoaded()) {
      ensureLayer();
    } else {
      map.once("load", ensureLayer);
    }

    return () => {
      try {
        if (map.getLayer(LABEL_LAYER)) map.removeLayer(LABEL_LAYER);
        if (map.getSource(LABEL_SOURCE)) map.removeSource(LABEL_SOURCE);
      } catch {
        // map may already be destroyed
      }
    };
  }, [mapRef, mapReady]);

  // Update label data whenever fc or getLabel changes
  useEffect(() => {
    updateLabelSource(fc);
  }, [updateLabelSource, fc]);

  return { updateLabelSource };
}
