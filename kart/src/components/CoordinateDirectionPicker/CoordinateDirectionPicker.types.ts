import { Feature, Point } from "geojson";

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
 * The combined value of a placed coordinate and the direction it faces.
 */
export interface CoordinateDirectionValue {
  /** The selected coordinate, or null if not yet placed. */
  coordinate: Coordinate | null;
  /** Direction in degrees (0–360, where 0 = north, 90 = east), or null if not set. */
  direction: number | null;
}

export type CoordinateGeoJSON = Pick<Feature<Point>, "type" | "geometry">;

export type CoordinateDirectionGeoJSON = CoordinateGeoJSON & {
  properties: {
    direction: number;
  };
};

export interface CoordinateDirectionPickerProps {
  /** Controlled value. */
  value?: CoordinateDirectionGeoJSON;
  /** Called when the user changes the coordinate or direction. */
  onChange?: (value: CoordinateDirectionGeoJSON) => void;
  /** Initial center of the map when no value is set. Defaults to approx. center of Norway. */
  defaultCenter?: Coordinate;
  /** Initial zoom level of the map. Defaults to 5. */
  defaultZoom?: number;
  /** Label displayed above the component. */
  label?: string;
  /** Error message displayed below the inputs. */
  error?: string;
  /** Disables all interaction. */
  disabled?: boolean;
  /** Additional CSS class applied to the root element. */
  className?: string;
}
