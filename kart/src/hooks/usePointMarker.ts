import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import type { Coordinate } from "~/utility/types";

export interface UsePointMarkerOptions {
  /** Ref to the MapLibre map instance. */
  mapRef: React.RefObject<maplibregl.Map | null>;
  /** The current coordinate, or null if no marker should be shown. */
  coordinate: Coordinate | null;
  /** Whether marker interaction is disabled. */
  disabled?: boolean;
}

/**
 * Manages a simple point marker (default MapLibre pin) on the map.
 *
 * Adds, moves, or removes the marker based on the `coordinate` value.
 */
export function usePointMarker({
  mapRef,
  coordinate,
  disabled = false,
}: UsePointMarkerOptions) {
  const markerRef = useRef<maplibregl.Marker | null>(null);

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    if (!coordinate) {
      // Remove marker when coordinate is cleared
      markerRef.current?.remove();
      markerRef.current = null;
      return;
    }

    const lngLat: [number, number] = [
      coordinate.longitude,
      coordinate.latitude,
    ];

    if (markerRef.current) {
      // Move existing marker
      markerRef.current.setLngLat(lngLat);
    } else {
      // Create new marker
      markerRef.current = new maplibregl.Marker().setLngLat(lngLat).addTo(map);
    }
  }, [coordinate, mapRef]);

  // Toggle marker interactivity based on disabled state
  useEffect(() => {
    const el = markerRef.current?.getElement();
    if (el) {
      el.style.pointerEvents = disabled ? "none" : "";
    }
  }, [disabled]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      markerRef.current?.remove();
      markerRef.current = null;
    };
  }, []);

  return { markerRef };
}
