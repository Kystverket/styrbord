export { CoordinateDirectionPicker } from "./components/CoordinateDirectionPicker/CoordinateDirectionPicker";
export type {
  CoordinateDirectionPickerProps,
  CoordinateDirectionValue,
  Coordinate,
} from "./components/CoordinateDirectionPicker/CoordinateDirectionPicker.types";

export { CoordinatePicker } from "./components/CoordinatePicker/CoordinatePicker";
export type { CoordinatePickerProps } from "./components/CoordinatePicker/CoordinatePicker.types";
export type { CoordinateGeoJSON } from "./utility/types";

export { GeoJsonViewer } from "./components/GeoJsonViewer/GeoJsonViewer";
export type {
  GeoJsonViewerProps,
  GeoJsonStyle,
} from "./components/GeoJsonViewer/GeoJsonViewer.types";

// Hooks
export { useMaplibreMap } from "./hooks/useMaplibreMap";
export type { UseMaplibreMapOptions } from "./hooks/useMaplibreMap";
export { useCompassMarker } from "./hooks/useCompassMarker";
export type { UseCompassMarkerOptions } from "./hooks/useCompassMarker";
export { usePointMarker } from "./hooks/usePointMarker";
export type { UsePointMarkerOptions } from "./hooks/usePointMarker";

// Utilities
export {
  KARTVERKET_STYLE,
  DEFAULT_CENTER,
  DEFAULT_ZOOM,
} from "./utility/mapStyle";
export {
  clampDirection,
  clampLatitude,
  clampLongitude,
  roundToDecimals,
} from "./utility/coordinate";
export {
  ViewBoundsContext,
  ViewBoundsProvider,
} from "./utility/viewBoundsContext";
