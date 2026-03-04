/**
 * Common props shared by all map components
 */
export interface MapBaseProps {
  /** Disables all interaction. */
  disabled?: boolean;
  /** Additional CSS class applied to the root element. */
  className?: string;
  /** Height of the map container. Defaults to `"400px"`. */
  height?: string;
}

/**
 * Common props shared by all map-based picker components
 * (CoordinatePicker, CoordinateDirectionPicker, etc.).
 */
export interface MapPickerBaseProps extends MapBaseProps {
  /** Label displayed above the component. */
  label?: string;
  /** Error message displayed below the inputs. */
  error?: string;
}
