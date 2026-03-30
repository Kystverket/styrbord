import { useContext, useEffect, useRef, useState } from "react";
import type maplibregl from "maplibre-gl";
import type { Coordinate } from "~/utility/types";
import { WmsCatalogLayersContext } from "~/utility/wmsCatalogLayersContext";
import { fetchFeatureInfo } from "~/utility/wmsGetFeatureInfo";
import type {
  CoordinateClickResult,
  WmsFeatureInfoResult,
} from "~/utility/wmsGetFeatureInfo";

export interface UseWmsFeatureInfoOptions {
  /** Ref to the MapLibre map instance (needed for bounds / size). */
  mapRef: React.RefObject<maplibregl.Map | null>;
  /** The coordinate to query. Set to `null` when no query is pending. */
  coordinate: Coordinate | null;
  /** Whether the hook is active. Defaults to `true`. */
  enabled?: boolean;
}

export interface UseWmsFeatureInfoResult {
  /** Whether a GetFeatureInfo query is currently in flight. */
  loading: boolean;
  /** The latest result, or null if no query has been made yet. */
  result: CoordinateClickResult | null;
}

/**
 * Hook that queries WMS GetFeatureInfo for all visible WMS catalog layers
 * when a coordinate is provided.
 *
 * Automatically cancels in-flight requests when a new coordinate is set.
 */
export function useWmsFeatureInfo({
  mapRef,
  coordinate,
  enabled = true,
}: UseWmsFeatureInfoOptions): UseWmsFeatureInfoResult {
  const { baseUrl, catalogEntries, visibleLayerIds } = useContext(
    WmsCatalogLayersContext,
  );

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<CoordinateClickResult | null>(null);

  // Keep an AbortController ref so we can cancel when a new click arrives.
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    // Cancel any previous in-flight request.
    abortRef.current?.abort();
    abortRef.current = null;

    if (!enabled || !coordinate || !baseUrl) {
      return;
    }

    const map = mapRef.current;
    if (!map) return;

    // Determine which catalog entries are visible.
    const visibleEntries = catalogEntries.filter((entry) =>
      visibleLayerIds.has(`wms-catalog-${entry.name}`),
    );
    console.log("Visible WMS catalog entries:", visibleEntries, catalogEntries);
    if (visibleEntries.length === 0) {
      // No visible WMS layers — still report the coordinate with empty results.
      setResult({ coordinate, layerResults: [] });
      return;
    }

    // Map viewport bounds and size.
    const mapBounds = map.getBounds();
    const bounds = {
      west: mapBounds.getWest(),
      south: mapBounds.getSouth(),
      east: mapBounds.getEast(),
      north: mapBounds.getNorth(),
    };
    const canvas = map.getCanvas();
    const size = { width: canvas.width, height: canvas.height };

    const controller = new AbortController();
    abortRef.current = controller;

    setLoading(true);

    Promise.all(
      visibleEntries.map((entry) =>
        fetchFeatureInfo(
          baseUrl,
          `wms-catalog-${entry.name}`,
          entry.name,
          coordinate,
          bounds,
          size,
          controller.signal,
        ),
      ),
    )
      .then((layerResults: WmsFeatureInfoResult[]) => {
        if (controller.signal.aborted) return;
        setResult({ coordinate, layerResults });
      })
      .finally(() => {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      });

    return () => {
      controller.abort();
    };
  }, [coordinate, enabled, baseUrl, catalogEntries, visibleLayerIds, mapRef]);

  return { loading, result };
}
