import type { Coordinate } from "~/utility/types";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

/** Result of a WMS GetFeatureInfo query for a single layer. */
export interface WmsFeatureInfoResult {
  /** Layer definition id (e.g. "wms-catalog-layerName"). */
  layerId: string;
  /** Original WMS layer name from GetCapabilities. */
  layerName: string;
  /** Raw HTML returned by the WMS server. Empty string on error. */
  html: string;
}

/** Aggregated result of a coordinate click with WMS feature info lookups. */
export interface CoordinateClickResult {
  /** The coordinate that was clicked. */
  coordinate: Coordinate;
  /** Per-layer GetFeatureInfo results for all visible WMS catalog layers. */
  layerResults: WmsFeatureInfoResult[];
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

interface MapBounds {
  west: number;
  south: number;
  east: number;
  north: number;
}

interface MapSize {
  width: number;
  height: number;
}

/**
 * Build a WMS 1.3.0 GetFeatureInfo URL.
 *
 * Uses CRS=EPSG:4326 so the BBOX is in lat/lon order (as mandated by
 * WMS 1.3.0 for geographic CRSes) and I/J pixel coordinates.
 */
export function buildGetFeatureInfoUrl(
  baseUrl: string,
  layerName: string,
  coordinate: Coordinate,
  bounds: MapBounds,
  size: MapSize,
): string {
  // Compute I (column) and J (row) pixel positions.
  // WMS 1.3.0 + EPSG:4326: axis order is lat, lon.
  // BBOX = minLat, minLon, maxLat, maxLon
  const i = Math.round(
    ((coordinate.longitude - bounds.west) / (bounds.east - bounds.west)) *
      size.width,
  );
  const j = Math.round(
    ((bounds.north - coordinate.latitude) / (bounds.north - bounds.south)) *
      size.height,
  );

  const params: Record<string, string> = {
    SERVICE: "WMS",
    VERSION: "1.3.0",
    REQUEST: "GetFeatureInfo",
    LAYERS: layerName,
    QUERY_LAYERS: layerName,
    CRS: "EPSG:4326",
    BBOX: `${bounds.south},${bounds.west},${bounds.north},${bounds.east}`,
    WIDTH: String(size.width),
    HEIGHT: String(size.height),
    INFO_FORMAT: "text/html",
    I: String(i),
    J: String(j),
    FEATURE_COUNT: "10",
  };

  const separator = baseUrl.includes("?") ? "&" : "?";
  const qs = Object.entries(params)
    .map(([k, v]) => `${k}=${encodeURIComponent(v)}`)
    .join("&");
  return `${baseUrl}${separator}${qs}`;
}

/**
 * Fetch WMS GetFeatureInfo for a single layer.
 *
 * Returns an empty features array (rather than throwing) when the request
 * fails so that one failing layer doesn't block the others.
 */
export async function fetchFeatureInfo(
  baseUrl: string,
  layerId: string,
  layerName: string,
  coordinate: Coordinate,
  bounds: MapBounds,
  size: MapSize,
  signal?: AbortSignal,
): Promise<WmsFeatureInfoResult> {
  const url = buildGetFeatureInfoUrl(
    baseUrl,
    layerName,
    coordinate,
    bounds,
    size,
  );

  try {
    const res = await fetch(url, { signal });
    if (!res.ok) {
      return { layerId, layerName, html: "" };
    }
    const html = await res.text();
    return { layerId, layerName, html };
  } catch {
    // Network error, abort, or parse failure
    return { layerId, layerName, html: "" };
  }
}
