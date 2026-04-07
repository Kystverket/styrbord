import type { CoordinateDirectionGeoJSON } from "~/utility/types";
import type { MapPickerBaseProps } from "~/components/shared/MapPicker.types";

export interface CoordinateDirectionFieldProps extends MapPickerBaseProps {
  /** Controlled value — a GeoJSON Point Feature with a direction property. */
  value: CoordinateDirectionGeoJSON | undefined;
  /** Called when the user places, moves, or changes the direction of the point. */
  onChange: (value: CoordinateDirectionGeoJSON) => void;
}
