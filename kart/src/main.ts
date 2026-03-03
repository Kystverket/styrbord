export { CoordinateDirectionPicker } from './components/CoordinateDirectionPicker/CoordinateDirectionPicker';
export type {
  CoordinateDirectionPickerProps,
  CoordinateDirectionValue,
  Coordinate,
} from './components/CoordinateDirectionPicker/CoordinateDirectionPicker.types';

// Hooks
export { useMaplibreMap } from './hooks/useMaplibreMap';
export type { UseMaplibreMapOptions } from './hooks/useMaplibreMap';
export { useCompassMarker } from './hooks/useCompassMarker';
export type { UseCompassMarkerOptions } from './hooks/useCompassMarker';

// Utilities
export { KARTVERKET_STYLE, DEFAULT_CENTER, DEFAULT_ZOOM } from './utility/mapStyle';
export { clampDirection, clampLatitude, clampLongitude, roundToDecimals } from './utility/coordinate';
export { ViewBoundsContext, ViewBoundsProvider } from './utility/viewBoundsContext';
