export type { Coordinate, CoordinateGeoJSON } from "~/utility/types";
import type { Coordinate, CoordinateGeoJSON } from "~/utility/types";

/**
 * The combined value of a placed coordinate and the direction it faces.
 */
export interface CoordinateDirectionValue {
  /** The selected coordinate, or null if not yet placed. */
  coordinate: Coordinate | null;
  /** Direction in degrees (0–360, where 0 = north, 90 = east), or null if not set. */
  direction: number | null;
}

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
