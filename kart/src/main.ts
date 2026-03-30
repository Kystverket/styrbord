export { CoordinateDirectionField } from "./components/CoordinateDirectionField/CoordinateDirectionField";
export type {
  CoordinateDirectionFieldProps,
  CoordinateDirectionValue,
  Coordinate,
} from "./components/CoordinateDirectionField/CoordinateDirectionField.types";

export { CoordinateField } from "./components/CoordinateField/CoordinateField";
export type { CoordinateFieldProps } from "./components/CoordinateField/CoordinateField.types";
export type { CoordinateGeoJSON } from "./utility/types";

export { GeoJsonViewer } from "./components/GeoJsonViewer/GeoJsonViewer";
export type {
  GeoJsonViewerProps,
  GeoJsonStyle,
} from "./components/GeoJsonViewer/GeoJsonViewer.types";

export { GeoJsonEditor } from "./components/GeoJsonEditor/GeoJsonEditor";
export type {
  GeoJsonEditorProps,
  DrawMode,
} from "./components/GeoJsonEditor/GeoJsonEditor.types";

export { GeoJsonAnnotater } from "./components/GeoJsonAnnotater/GeoJsonAnnotater";
export type { GeoJsonAnnotaterProps } from "./components/GeoJsonAnnotater/GeoJsonAnnotater";

export { MapField } from "./components/MapField/MapField";
export type { MapFieldProps } from "./components/MapField/MapField.types";

export { LayerToggle } from "./components/LayerToggle/LayerToggle";
export type { LayerToggleProps } from "./components/LayerToggle/LayerToggle.types";

export { MapCenterAction } from "./components/shared/MapCenterAction";
export type { MapCenterActionProps } from "./components/shared/MapCenterAction";

// Hooks
export { useMaplibreMap } from "./hooks/useMaplibreMap";
export type { UseMaplibreMapOptions } from "./hooks/useMaplibreMap";
export { useCompassMarker } from "./hooks/useCompassMarker";
export type { UseCompassMarkerOptions } from "./hooks/useCompassMarker";
export { usePointMarker } from "./hooks/usePointMarker";
export type { UsePointMarkerOptions } from "./hooks/usePointMarker";
export { useMapLayers } from "./hooks/useMapLayers";
export type { UseMapLayersResult, LayerEntry } from "./hooks/useMapLayers";
export { useWmsFeatureInfo } from "./hooks/useWmsFeatureInfo";
export type {
  UseWmsFeatureInfoOptions,
  UseWmsFeatureInfoResult,
} from "./hooks/useWmsFeatureInfo";

// WMS GetFeatureInfo utilities
export type {
  CoordinateClickResult,
  WmsFeatureInfoResult,
} from "./utility/wmsGetFeatureInfo";
export { buildGetFeatureInfoUrl } from "./utility/wmsGetFeatureInfo";

// Utilities
export {
  EMPTY_STYLE,
  KARTVERKET_TOPO_BASE_LAYER,
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
export type { ViewBoundsProviderProps } from "./utility/viewBoundsContext";

// Layer system
export type {
  BaseLayerDefinition,
  LayerDefinition,
  LayerFilterConfig,
  CreateSimpleLayerOptions,
  SimpleGeoJsonLayerOptions,
  SimpleWmsLayerOptions,
  SimpleVectorTilesLayerOptions,
} from "./utility/layers.types";
export { BUILT_IN_LAYERS } from "./utility/layers.builtIn";
export { createSimpleLayer, isLayerIncluded } from "./utility/layers.helpers";

export {
  BuiltInLayersContext,
  BuiltInLayersProvider,
} from "./utility/builtInLayersContext";
export type {
  BuiltInLayersContextValue,
  BuiltInLayersProviderProps,
} from "./utility/builtInLayersContext";

export {
  CustomLayersContext,
  CustomLayersProvider,
} from "./utility/customLayersContext";
export type {
  CustomLayersContextValue,
  CustomLayersProviderProps,
} from "./utility/customLayersContext";

export {
  BaseLayersContext,
  BaseLayersProvider,
} from "./utility/baseLayersContext";
export type {
  BaseLayersContextValue,
  BaseLayersProviderProps,
} from "./utility/baseLayersContext";

export {
  WmsCatalogLayersContext,
  WmsCatalogLayersProvider,
} from "./utility/wmsCatalogLayersContext";
export type {
  WmsCatalogLayersContextValue,
  WmsCatalogLayersProviderProps,
  WmsCatalogLayer,
} from "./utility/wmsCatalogLayersContext";

export {
  STYRBORD_KART_TRANSLATIONS_NAMESPACE,
  StyrbordKartTranslations,
} from "./translations";
