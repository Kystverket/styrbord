export type { Coordinate, CoordinateGeoJSON } from "~/utility/types";
import type { Coordinate, CoordinateGeoJSON } from "~/utility/types";
import type { MapPickerBaseProps } from "~/components/shared/MapPicker.types";

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

export interface CoordinateDirectionFieldProps extends MapPickerBaseProps {
  /** Controlled value. */
  value: CoordinateDirectionGeoJSON | undefined;
  /** Called when the user changes the coordinate or direction. */
  onChange: (value: CoordinateDirectionGeoJSON) => void;
}
