import type { CoordinateGeoJSON } from '~/utility/types';
import type { MapPickerBaseProps } from '~/components/shared/MapPicker.types';

export interface CoordinatePickerProps extends MapPickerBaseProps {
  /** Controlled value — a GeoJSON Point Feature. */
  value: CoordinateGeoJSON | undefined;
  /** Called when the user places or changes the coordinate. */
  onChange: (value: CoordinateGeoJSON) => void;
}
