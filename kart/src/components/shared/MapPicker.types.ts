import type { Coordinate } from "~/utility/types";

/**
 * Common props shared by all map-based picker components
 * (CoordinatePicker, CoordinateDirectionPicker, etc.).
 */
export interface MapPickerBaseProps {
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
