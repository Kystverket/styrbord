import type { Feature, Point } from "geojson";

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
export type CoordinateGeoJSON = Pick<Feature<Point>, "type" | "geometry">;
