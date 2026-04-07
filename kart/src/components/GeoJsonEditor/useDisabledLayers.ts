import { useEffect } from "react";
import type { MutableRefObject } from "react";
import type { Map as MaplibreMap, GeoJSONSource } from "maplibre-gl";
import type { FeatureCollection } from "geojson";

const SOURCE = "geojson-editor-disabled";
const FILL = "geojson-editor-disabled-fill";
const LINE = "geojson-editor-disabled-line";
const POINT_STROKE = "geojson-editor-disabled-point-stroke";
const POINT = "geojson-editor-disabled-point";

/**
 * Renders features as static MapLibre layers when the editor is disabled.
 *
 * When `disabled` is true, terra-draw is not initialised, so this hook
 * adds native GeoJSON source + layers to display the features read-only.
 */
export function useDisabledLayers({
  mapRef,
  mapReady,
  disabled,
  fc,
}: {
  mapRef: MutableRefObject<MaplibreMap | null>;
  mapReady: boolean;
  disabled: boolean;
  fc: FeatureCollection | undefined;
}) {
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !mapReady || !disabled || !fc || fc.features.length === 0)
      return;

    const addLayers = () => {
      if (map.getSource(SOURCE)) {
        (map.getSource(SOURCE) as GeoJSONSource).setData(fc);
        return;
      }

      map.addSource(SOURCE, { type: "geojson", data: fc });

      map.addLayer({
        id: FILL,
        type: "fill",
        source: SOURCE,
        filter: ["==", "$type", "Polygon"],
        paint: { "fill-color": "#ff451f", "fill-opacity": 0.2 },
      });
      map.addLayer({
        id: LINE,
        type: "line",
        source: SOURCE,
        filter: ["in", "$type", "LineString", "Polygon"],
        paint: { "line-color": "#ff451f", "line-width": 4 },
      });
      map.addLayer({
        id: POINT_STROKE,
        type: "circle",
        source: SOURCE,
        filter: ["==", "$type", "Point"],
        paint: { "circle-radius": 9, "circle-color": "#ffffff" },
      });
      map.addLayer({
        id: POINT,
        type: "circle",
        source: SOURCE,
        filter: ["==", "$type", "Point"],
        paint: { "circle-radius": 6, "circle-color": "#ff451f" },
      });
    };

    if (map.isStyleLoaded()) {
      addLayers();
    } else {
      map.once("load", addLayers);
    }

    return () => {
      try {
        for (const id of [POINT, POINT_STROKE, LINE, FILL]) {
          if (map.getLayer(id)) map.removeLayer(id);
        }
        if (map.getSource(SOURCE)) map.removeSource(SOURCE);
      } catch {
        // map may already be destroyed
      }
    };
  }, [mapRef, mapReady, disabled, fc]);
}
