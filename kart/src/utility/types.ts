import type { Feature, Point } from 'geojson';

/**
 * A geographic coordinate in WGS84 (EPSG:4326).
 */
export interface Coordinate {
  /** Latitude in decimal degrees (-90 to 90). */
  latitude: number;
  /** Longitude in decimal degrees (-180 to 180). */
  longitude: number;
}

/**
 * A GeoJSON Feature representing a single point on the map.
 */
export type CoordinateGeoJSON = Feature<Point, Record<string, unknown>>;

/**
 * A GeoJSON Feature representing a single point with a direction (0–360°).
 * The direction is stored in `properties.direction` as a clockwise bearing
 * from north (0 = north, 90 = east, 180 = south, 270 = west).
 */
export type CoordinateDirectionGeoJSON = Feature<Point, Record<string, unknown> & { direction: number }>;
