import { useContext, useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import type { Coordinate } from "~/components/CoordinateDirectionPicker/CoordinateDirectionPicker.types";
import {
  clampLatitude,
  clampLongitude,
  roundToDecimals,
} from "~/utility/coordinate";
import {
  KARTVERKET_STYLE,
  DEFAULT_CENTER,
  DEFAULT_ZOOM,
} from "~/utility/mapStyle";
import { ViewBoundsContext } from "~/utility/viewBoundsContext";

export interface UseMaplibreMapOptions {
  /** Initial coordinate to center the map on. Falls back to `defaultCenter`. */
  initialCoordinate?: Coordinate | null;
  /** Default center when no initial coordinate is provided. */
  defaultCenter?: Coordinate;
  /** Default zoom level. */
  defaultZoom?: number;
  /** Whether the map is disabled (blocks click events). */
  disabled?: boolean;
  /** Called when the user clicks on the map. Receives the clicked coordinate. */
  onMapClick?: (coord: Coordinate) => void;
}

/**
 * Manages a MapLibre GL map instance.
 *
 * Returns refs for the container element and the map, so callers can add
 * markers, layers, or event handlers on top.
 */
export function useMaplibreMap({
  initialCoordinate,
  defaultCenter = DEFAULT_CENTER,
  defaultZoom = DEFAULT_ZOOM,
  disabled = false,
  onMapClick,
}: UseMaplibreMapOptions = {}) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);
  const { viewBounds } = useContext(ViewBoundsContext);

  // Keep callbacks in refs so the map's one-time setup always reads the latest values.
  const disabledRef = useRef(disabled);
  useEffect(() => {
    disabledRef.current = disabled;
  }, [disabled]);

  const onMapClickRef = useRef(onMapClick);
  onMapClickRef.current = onMapClick;

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

  return { mapContainerRef, mapRef };
}
