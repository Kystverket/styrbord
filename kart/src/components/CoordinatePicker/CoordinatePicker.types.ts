import type { Coordinate, CoordinateGeoJSON } from "~/utility/types";

export interface CoordinatePickerProps {
  /** Controlled value — a GeoJSON Point Feature. */
  value?: CoordinateGeoJSON;
  /** Called when the user places or changes the coordinate. */
  onChange?: (value: CoordinateGeoJSON) => void;
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
