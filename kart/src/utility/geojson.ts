import type { FeatureCollection } from 'geojson';

/**
 * Compute a bounding box `[minLng, minLat, maxLng, maxLat]` from a
 * FeatureCollection by visiting every coordinate.
 */
export function computeBounds(fc: FeatureCollection): [number, number, number, number] | null {
  let minLng = Infinity;
  let maxLng = -Infinity;
  let minLat = Infinity;
  let maxLat = -Infinity;
  let found = false;

  function visit(coords: unknown): void {
    if (!Array.isArray(coords)) return;
    if (typeof coords[0] === 'number' && typeof coords[1] === 'number') {
      const [lng, lat] = coords as [number, number];
      if (lng < minLng) minLng = lng;
      if (lng > maxLng) maxLng = lng;
      if (lat < minLat) minLat = lat;
      if (lat > maxLat) maxLat = lat;
      found = true;
    } else {
      for (const child of coords) visit(child);
    }
  }

  for (const feature of fc.features) {
    if (feature.geometry && 'coordinates' in feature.geometry) {
      visit(feature.geometry.coordinates);
    }
  }

  return found ? [minLng, minLat, maxLng, maxLat] : null;
}
