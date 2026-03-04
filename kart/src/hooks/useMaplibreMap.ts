import { useContext, useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import type { Coordinate } from "~/utility/types";
import {
  clampLatitude,
  clampLongitude,
  roundToDecimals,
} from "~/utility/coordinate";
import { KARTVERKET_STYLE } from "~/utility/mapStyle";
import { ViewBoundsContext } from "~/utility/viewBoundsContext";
import { BuiltInLayersContext } from "~/utility/builtInLayersContext";
import { CustomLayersContext } from "~/utility/customLayersContext";
import type { LayerDefinition } from "~/utility/layers.types";

export interface UseMaplibreMapOptions {
  /** Initial coordinate to center the map on. Falls back to context `defaultCenter`. */
  initialCoordinate?: Coordinate | null;
  /** Whether the map is disabled (blocks click events). */
  disabled?: boolean;
  /** Called when the user clicks on the map. Receives the clicked coordinate. */
  onMapClick?: (coord: Coordinate) => void;
  /** Height of the map container. Defaults to `"400px"`. */
  height?: string;
}

/**
 * Manages a MapLibre GL map instance.
 *
 * Returns refs for the container element and the map, so callers can add
 * markers, layers, or event handlers on top.
 */
export function useMaplibreMap({
  initialCoordinate,
  disabled = false,
  onMapClick,
  height,
}: UseMaplibreMapOptions = {}) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);
  const { viewBounds, defaultCenter, defaultZoom } =
    useContext(ViewBoundsContext);

  // ----- Layer contexts (both optional — graceful when no provider is present) -----
  const builtInCtx = useContext(BuiltInLayersContext);
  const customCtx = useContext(CustomLayersContext);

  // Keep callbacks in refs so the map's one-time setup always reads the latest values.
  const disabledRef = useRef(disabled);
  useEffect(() => {
    disabledRef.current = disabled;
  }, [disabled]);

  const onMapClickRef = useRef(onMapClick);
  onMapClickRef.current = onMapClick;

  // ----- Enable / disable map interactions -----
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    if (disabled) {
      map.dragPan.disable();
      map.scrollZoom.disable();
      map.boxZoom.disable();
      map.dragRotate.disable();
      map.keyboard.disable();
      map.doubleClickZoom.disable();
      map.touchZoomRotate.disable();
    } else {
      map.dragPan.enable();
      map.scrollZoom.enable();
      map.boxZoom.enable();
      map.dragRotate.enable();
      map.keyboard.enable();
      map.doubleClickZoom.enable();
      map.touchZoomRotate.enable();
    }
  }, [disabled]);

  // ----- Apply height to the container -----
  useEffect(() => {
    if (mapContainerRef.current) {
      mapContainerRef.current.style.height = height ?? "";
    }
  }, [height]);

  // ----- Initialise the map (once) -----
  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    const center: [number, number] = initialCoordinate
      ? [initialCoordinate.longitude, initialCoordinate.latitude]
      : [defaultCenter.longitude, defaultCenter.latitude];

    const map = new maplibregl.Map({
      container: mapContainerRef.current,
      style: KARTVERKET_STYLE,
      center,
      zoom: initialCoordinate ? 14 : defaultZoom,
      attributionControl: {},
    });

    mapRef.current = map;

    map.on("click", (e: maplibregl.MapMouseEvent) => {
      if (disabledRef.current) return;
      const { lng, lat } = e.lngLat;
      onMapClickRef.current?.({
        latitude: roundToDecimals(clampLatitude(lat), 6),
        longitude: roundToDecimals(clampLongitude(lng), 6),
      });
    });

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  // ----- Fit map to viewBounds when they change -----
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !viewBounds || viewBounds.length === 0) return;

    const coords = viewBounds.flat();
    if (coords.length === 0) return;

    let minLng = Infinity;
    let maxLng = -Infinity;
    let minLat = Infinity;
    let maxLat = -Infinity;

    for (const [lng, lat] of coords) {
      if (lng < minLng) minLng = lng;
      if (lng > maxLng) maxLng = lng;
      if (lat < minLat) minLat = lat;
      if (lat > maxLat) maxLat = lat;
    }

    map.fitBounds(
      [
        [minLng, minLat],
        [maxLng, maxLat],
      ],
      { padding: 20, duration: 300 },
    );
  }, [viewBounds]);

  // ----- Sync context layers to the MapLibre instance -----
  const appliedLayerIdsRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    const syncLayers = () => {
      // Merge built-in + custom definitions. Built-in render below custom.
      const allDefs: LayerDefinition[] = [
        ...builtInCtx.availableLayers,
        ...customCtx.layers,
      ];
      const allVisibleIds = new Set([
        ...builtInCtx.visibleLayerIds,
        ...customCtx.visibleLayerIds,
      ]);

      const desiredIds = new Set(allDefs.map((d) => d.id));
      const previousIds = appliedLayerIdsRef.current;

      // 1. Remove layers that are no longer in the definitions
      for (const prevId of previousIds) {
        if (!desiredIds.has(prevId)) {
          const def = findPreviousDef(prevId, allDefs);
          if (def) removeDefFromMap(map, def);
          previousIds.delete(prevId);
        }
      }

      // 2. Add new layers / update visibility
      for (const def of allDefs) {
        const isOnMap = previousIds.has(def.id);
        const shouldBeVisible = allVisibleIds.has(def.id);

        if (!isOnMap) {
          // Add sources
          for (const [srcId, srcSpec] of Object.entries(def.sources)) {
            if (!map.getSource(srcId)) {
              map.addSource(srcId, srcSpec);
            }
          }
          // Add layers
          for (const layerSpec of def.layers) {
            if (!map.getLayer(layerSpec.id)) {
              map.addLayer(layerSpec);
            }
            map.setLayoutProperty(
              layerSpec.id,
              "visibility",
              shouldBeVisible ? "visible" : "none",
            );
          }
          previousIds.add(def.id);
        } else {
          // Already on map — just update visibility
          for (const layerSpec of def.layers) {
            if (map.getLayer(layerSpec.id)) {
              map.setLayoutProperty(
                layerSpec.id,
                "visibility",
                shouldBeVisible ? "visible" : "none",
              );
            }
          }
        }
      }
    };

    // The map might still be loading its initial style. Wait for "load" if so.
    if (map.loaded()) {
      syncLayers();
    } else {
      map.once("load", syncLayers);
    }
  }, [
    builtInCtx.availableLayers,
    builtInCtx.visibleLayerIds,
    customCtx.layers,
    customCtx.visibleLayerIds,
  ]);

  return { mapContainerRef, mapRef };
}

// ---------------------------------------------------------------------------
// Helpers (module-level to avoid re-creation)
// ---------------------------------------------------------------------------

function findPreviousDef(
  id: string,
  currentDefs: LayerDefinition[],
): LayerDefinition | undefined {
  return currentDefs.find((d) => d.id === id);
}

function removeDefFromMap(map: maplibregl.Map, def: LayerDefinition) {
  for (const layerSpec of def.layers) {
    if (map.getLayer(layerSpec.id)) {
      map.removeLayer(layerSpec.id);
    }
  }
  for (const srcId of Object.keys(def.sources)) {
    if (map.getSource(srcId)) {
      map.removeSource(srcId);
    }
  }
}
