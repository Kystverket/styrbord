import type { FeatureCollection } from 'geojson';
import type maplibregl from 'maplibre-gl';

import type { GeoJsonStyle, GeoJsonViewerProps } from './GeoJsonViewer.types';

// ---------------------------------------------------------------------------
// Defaults & Constants
// ---------------------------------------------------------------------------

export const DEFAULT_STYLE: Required<GeoJsonStyle> = {
  fillColor: 'rgba(0, 6, 103, 0.2)',
  lineColor: '#000667',
  lineWidth: 2,
  pointRadius: 6,
  pointColor: '#df3c1b',
  pointStrokeColor: '#000667',
  pointStrokeWidth: 2,
};

export const SOURCE_ID = 'geojson-data';
export const FILL_LAYER = 'geojson-fill';
export const LINE_LAYER = 'geojson-line';
export const POINT_STROKE_LAYER = 'geojson-point-stroke';
export const POINT_LAYER = 'geojson-point';
export const ALL_LAYERS = [POINT_LAYER, POINT_STROKE_LAYER, LINE_LAYER, FILL_LAYER];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Normalise a Feature or FeatureCollection into a **clean** FeatureCollection.
 *
 * Strips non-standard top-level members (e.g. `crs`, `name`) that originate
 * from legacy GeoJSON files and can cause MapLibre's internal geojson-vt
 * worker to silently discard features.
 */
export function toFeatureCollection(data: GeoJsonViewerProps['data']): FeatureCollection {
  if (data.type === 'FeatureCollection') {
    const fc = data as FeatureCollection;
    return { type: 'FeatureCollection', features: fc.features };
  }
  return { type: 'FeatureCollection', features: [data] } as FeatureCollection;
}

/** Remove all GeoJSON layers and the source from the map, ignoring errors. */
export function removeLayers(map: maplibregl.Map) {
  try {
    for (const id of ALL_LAYERS) {
      if (map.getLayer(id)) map.removeLayer(id);
    }
    if (map.getSource(SOURCE_ID)) map.removeSource(SOURCE_ID);
  } catch {
    // map may already be destroyed
  }
}
