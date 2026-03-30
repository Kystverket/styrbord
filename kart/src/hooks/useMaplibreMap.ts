import { useContext, useEffect, useRef, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import type { Coordinate } from "~/utility/types";
import {
  clampLatitude,
  clampLongitude,
  roundToDecimals,
} from "~/utility/coordinate";
import { EMPTY_STYLE } from "~/utility/mapStyle";
import { ViewBoundsContext } from "~/utility/viewBoundsContext";
import { BaseLayersContext } from "~/utility/baseLayersContext";
import { BuiltInLayersContext } from "~/utility/builtInLayersContext";
import { CustomLayersContext } from "~/utility/customLayersContext";
import { WmsCatalogLayersContext } from "~/utility/wmsCatalogLayersContext";
import type {
  BaseLayerDefinition,
  LayerDefinition,
} from "~/utility/layers.types";

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
 * The map is created lazily — only once the container div enters the viewport.
 * This prevents "Too many active WebGL contexts" warnings when many map
 * components are rendered off-screen simultaneously (e.g. Storybook Docs).
 *
 * Returns refs for the container element and the map, plus a `mapReady` flag
 * that is `true` once the map instance has been created. Callers that set up
 * map event handlers or layers must include `mapReady` in their effect
 * dependency arrays so those effects re-run once the map is available.
 */
export function useMaplibreMap({
  initialCoordinate,
  disabled = false,
  onMapClick,
  height,
}: UseMaplibreMapOptions = {}) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);
  const [mapReady, setMapReady] = useState(false);
  const { viewBounds, defaultCenter, defaultZoom } =
    useContext(ViewBoundsContext);

  // ----- Layer contexts (all optional — graceful when no provider is present) -----
  const baseCtx = useContext(BaseLayersContext);
  const builtInCtx = useContext(BuiltInLayersContext);
  const customCtx = useContext(CustomLayersContext);
  const wmsCatalogCtx = useContext(WmsCatalogLayersContext);

  // Keep callbacks in refs so the map's one-time setup always reads the latest values.
  const disabledRef = useRef(disabled);
  useEffect(() => {
    disabledRef.current = disabled;
  }, [disabled]);

  const onMapClickRef = useRef(onMapClick);
  onMapClickRef.current = onMapClick;

  // ----- Enable / disable map interactions -----
  useEffect(() => {
    if (!mapReady) return;
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
  }, [disabled, mapReady]);

  // ----- Apply height to the container -----
  useEffect(() => {
    if (mapContainerRef.current) {
      mapContainerRef.current.style.height = height ?? "";
    }
  }, [height]);

  // ----- Initialise the map (once, lazily when container enters viewport) -----
  useEffect(() => {
    const container = mapContainerRef.current;
    if (!container || mapRef.current) return;

    const createMap = () => {
      if (mapRef.current) return; // guard against double-create (e.g. React StrictMode)

      const center: [number, number] = initialCoordinate
        ? [initialCoordinate.longitude, initialCoordinate.latitude]
        : [defaultCenter.longitude, defaultCenter.latitude];

      const map = new maplibregl.Map({
        container,
        style: EMPTY_STYLE,
        center,
        zoom: initialCoordinate ? 14 : defaultZoom,
        attributionControl: {},
      });

      mapRef.current = map;
      setMapReady(true);

      map.on("click", (e: maplibregl.MapMouseEvent) => {
        if (disabledRef.current) return;
        const { lng, lat } = e.lngLat;
        onMapClickRef.current?.({
          latitude: roundToDecimals(clampLatitude(lat), 6),
          longitude: roundToDecimals(clampLongitude(lng), 6),
        });
      });
    };

    const destroyMap = () => {
      const map = mapRef.current;
      if (!map) return;
      const canvas = map.getCanvas();
      const gl = canvas?.getContext("webgl2") ?? canvas?.getContext("webgl");
      const ext = gl?.getExtension("WEBGL_lose_context");
      map.remove();
      ext?.loseContext();
      mapRef.current = null;
      setMapReady(false);
    };

    // Create the map immediately if the container is already visible; otherwise
    // defer until it enters the viewport. This avoids creating many WebGL
    // contexts for off-screen components (e.g. Storybook Docs renders all stories).
    const rect = container.getBoundingClientRect();
    const vH = window.innerHeight || document.documentElement.clientHeight;
    const vW = window.innerWidth || document.documentElement.clientWidth;
    const inViewport =
      rect.bottom > 0 && rect.right > 0 && rect.top < vH && rect.left < vW;

    if (inViewport) {
      createMap();
      return destroyMap;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          observer.disconnect();
          createMap();
        }
      },
      { threshold: 0 },
    );
    observer.observe(container);

    return () => {
      observer.disconnect();
      destroyMap();
    };
  }, []);

  // ----- Fit map to viewBounds when they change -----
  useEffect(() => {
    if (!mapReady) return;
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
  }, [viewBounds, mapReady]);

  // ----- Sync base layer to the MapLibre instance -----
  const appliedBaseLayerRef = useRef<BaseLayerDefinition | null>(null);

  useEffect(() => {
    if (!mapReady) return;
    const map = mapRef.current;
    if (!map) return;

    const syncBaseLayer = () => {
      const desired = baseCtx.availableBaseLayers.find(
        (l) => l.id === baseCtx.activeBaseLayerId,
      );
      const current = appliedBaseLayerRef.current;

      // Nothing to do if the same base layer is already applied.
      if (current?.id === desired?.id) return;

      // Remove the previous base layer sources & layers.
      if (current) {
        removeFromMap(map, current);
      }

      // Add the new base layer at the bottom of the layer stack.
      if (desired) {
        // Determine the id of the first existing layer on the map so we can
        // insert the base layer *below* all overlays.
        const firstExistingLayerId = map.getStyle().layers?.[0]?.id;

        for (const [srcId, srcSpec] of Object.entries(desired.sources)) {
          if (!map.getSource(srcId)) {
            map.addSource(srcId, srcSpec);
          }
        }
        for (const layerSpec of desired.layers) {
          if (!map.getLayer(layerSpec.id)) {
            map.addLayer(layerSpec, firstExistingLayerId);
          }
        }
      }

      appliedBaseLayerRef.current = desired ?? null;
    };

    if (map.loaded()) {
      syncBaseLayer();
    } else {
      map.once("load", syncBaseLayer);
    }
  }, [baseCtx.activeBaseLayerId, baseCtx.availableBaseLayers, mapReady]);

  // ----- Sync overlay layers to the MapLibre instance -----
  const appliedLayerIdsRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    if (!mapReady) return;
    const map = mapRef.current;
    if (!map) return;

    const syncLayers = () => {
      // Merge built-in + custom definitions. Built-in render below custom.
      const allDefs: LayerDefinition[] = [
        ...builtInCtx.availableLayers,
        ...customCtx.layers,
        ...wmsCatalogCtx.layers,
      ];
      const allVisibleIds = new Set([
        ...builtInCtx.visibleLayerIds,
        ...customCtx.visibleLayerIds,
        ...wmsCatalogCtx.visibleLayerIds,
      ]);

      const desiredIds = new Set(allDefs.map((d) => d.id));
      const previousIds = appliedLayerIdsRef.current;

      // 1. Remove layers that are no longer in the definitions
      for (const prevId of previousIds) {
        if (!desiredIds.has(prevId)) {
          const def = findPreviousDef(prevId, allDefs);
          if (def) removeFromMap(map, def);
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
    wmsCatalogCtx.layers,
    wmsCatalogCtx.visibleLayerIds,
    mapReady,
  ]);

  // ----- Easter egg: hidden rounded triangle at deep zoom -----
  useEffect(() => {
    if (!mapReady) return;
    const map = mapRef.current;
    if (!map) return;

    const addEasterEgg = () => {
      if (map.getSource("easter-egg-src")) return;
      map.addSource("easter-egg-src", {
        type: "geojson",
        data: EASTER_EGG_GEOJSON,
      });
      map.addLayer({
        id: "easter-egg-fill",
        type: "fill",
        source: "easter-egg-src",
        minzoom: 16,
        paint: {
          "fill-color": ["get", "fill"],
          "fill-opacity": 0.85,
        },
      });
      map.addLayer({
        id: "easter-egg-outline",
        type: "line",
        source: "easter-egg-src",
        minzoom: 16,
        paint: {
          "line-color": ["get", "stroke"],
          "line-width": 2,
        },
      });
    };

    if (map.loaded()) {
      addEasterEgg();
    } else {
      map.once("load", addEasterEgg);
    }
  }, [mapReady]);

  return { mapContainerRef, mapRef, mapReady };
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

function removeFromMap(
  map: maplibregl.Map,
  def: LayerDefinition | BaseLayerDefinition,
) {
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

// ---------------------------------------------------------------------------
// Easter eggs – small rounded triangles visible only at deep zoom.
// ~25 m circumradius, corners smoothed with arcs.
// ---------------------------------------------------------------------------
const EASTER_EGG_GEOJSON: GeoJSON.FeatureCollection = {
  type: "FeatureCollection",
  features: [
    // Brown triangle at 59.2165629°N, 10.9500666°E
    {
      type: "Feature",
      properties: { fill: "#8B4513", stroke: "#5C2D0A" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [10.9501935, 59.2167004],
            [10.9501427, 59.2167364],
            [10.950092, 59.2167544],
            [10.9500666, 59.2167567],
            [10.9500412, 59.2167544],
            [10.9499905, 59.2167364],
            [10.9499397, 59.2167004],
            [10.9497705, 59.2165504],
            [10.949735, 59.2165099],
            [10.9497299, 59.2164784],
            [10.9497388, 59.216466],
            [10.9497553, 59.2164559],
            [10.9498111, 59.2164424],
            [10.9498974, 59.2164379],
            [10.9502358, 59.2164379],
            [10.9503221, 59.2164424],
            [10.9503779, 59.2164559],
            [10.9503944, 59.216466],
            [10.9504033, 59.2164784],
            [10.9503982, 59.2165099],
            [10.9503627, 59.2165504],
            [10.9501935, 59.2167004],
          ],
        ],
      },
    },
    // Red/pink triangle at 62.4595714°N, 6.1022856°E
    {
      type: "Feature",
      properties: { fill: "#E8466A", stroke: "#A1203E" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [6.1024125, 62.4597089],
            [6.1023617, 62.4597449],
            [6.102311, 62.4597629],
            [6.1022856, 62.4597652],
            [6.1022602, 62.4597629],
            [6.1022095, 62.4597449],
            [6.1021587, 62.4597089],
            [6.1019895, 62.4595589],
            [6.101954, 62.4595184],
            [6.1019489, 62.4594869],
            [6.1019578, 62.4594745],
            [6.1019743, 62.4594644],
            [6.1020301, 62.4594509],
            [6.1021164, 62.4594464],
            [6.1024548, 62.4594464],
            [6.1025411, 62.4594509],
            [6.1025969, 62.4594644],
            [6.1026134, 62.4594745],
            [6.1026223, 62.4594869],
            [6.1026172, 62.4595184],
            [6.1025817, 62.4595589],
            [6.1024125, 62.4597089],
          ],
        ],
      },
    },
  ],
};
