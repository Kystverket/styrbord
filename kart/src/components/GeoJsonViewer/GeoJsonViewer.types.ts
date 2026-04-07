import type {
  Feature,
  FeatureCollection,
  GeoJsonProperties,
  Geometry,
} from "geojson";
import type { ReactNode } from "react";
import type maplibregl from "maplibre-gl";

import type { MapBaseProps } from "../shared/MapPicker.types";
import type { InteractiveFeature } from "~/hooks/useFeatureInteraction";
import type { CoordinateClickResult } from "~/utility/wmsGetFeatureInfo";

/**
 * Per-feature style properties that can be set on individual GeoJSON feature
 * `properties` to override the global `geoJsonStyle` defaults.
 *
 * Any feature that does **not** include a given property will fall back to
 * the corresponding value from the `geoJsonStyle` prop (or its default).
 *
 * @example
 * ```json
 * {
 *   "type": "Feature",
 *   "properties": { "fillColor": "#ff0000", "fillOpacity": 0.5 },
 *   "geometry": { "type": "Polygon", "coordinates": [...] }
 * }
 * ```
 */
export interface FeatureStyleProperties {
  /** Fill color for this polygon feature. */
  fillColor?: string;
  /** Fill opacity for this polygon feature (0–1). */
  fillOpacity?: number;
  /** Line/outline color for this feature. */
  lineColor?: string;
  /** Line width in pixels for this feature. */
  lineWidth?: number;
  /** Point circle color for this feature. */
  pointColor?: string;
  /** Point circle radius in pixels for this feature. */
  pointRadius?: number;
  /** Point circle stroke color for this feature. */
  pointStrokeColor?: string;
  /** Point circle stroke width in pixels for this feature. */
  pointStrokeWidth?: number;
}

/**
 * Styling options for the GeoJSON layers rendered on the map.
 *
 * These values serve as defaults for all features. Individual features can
 * override them by setting the corresponding {@link FeatureStyleProperties}
 * on their `properties` object.
 */
export interface GeoJsonStyle {
  /** Fill color for polygons. Defaults to `"rgba(0, 6, 103, 0.2)"`. */
  fillColor?: string;
  /** Outline color for polygons and line color for LineStrings. Defaults to `"#000667"`. */
  lineColor?: string;
  /** Line width in pixels. Defaults to `2`. */
  lineWidth?: number;
  /** Point circle radius in pixels. Defaults to `6`. */
  pointRadius?: number;
  /** Point circle color. Defaults to `"#df3c1b"`. */
  pointColor?: string;
  /** Point circle stroke color. Defaults to `"#000667"`. */
  pointStrokeColor?: string;
  /** Point circle stroke width in pixels. Defaults to `2`. */
  pointStrokeWidth?: number;
}

export interface GeoJsonViewerProps extends MapBaseProps {
  /**
   * GeoJSON data to display on the map. Accepts a Feature or FeatureCollection.
   *
   * Individual features can include {@link FeatureStyleProperties} in their
   * `properties` object to override the global `geoJsonStyle` defaults on a
   * per-feature basis (e.g. different fill colors per polygon).
   */
  data:
    | Feature<Geometry, GeoJsonProperties>
    | FeatureCollection<Geometry, GeoJsonProperties>;
  /**
   * Whether to automatically fit the map view to the bounding box of the GeoJSON data.
   * Defaults to `true`.
   */
  fitBounds?: boolean;
  /** Padding (in pixels) applied when fitting bounds. Defaults to `40`. */
  fitBoundsPadding?: number;
  /** Styling overrides for the rendered GeoJSON layers. */
  geoJsonStyle?: GeoJsonStyle;
  /** Additional CSS class applied to the root element. */
  className?: string;
  /** Whether to show the layer toggle control on the map. Defaults to `false`. */
  showLayerToggle?: boolean;
  /**
   * Whether features can be hovered to show tooltips. Defaults to `true`.
   */
  hoverable?: boolean;
  /**
   * Whether features can be clicked to select them. Defaults to `true`.
   */
  selectable?: boolean;
  /**
   * Called when the hovered feature changes.
   * Receives the feature and the original mouse event, or null when hover ends.
   */
  onHover?: (
    feature: InteractiveFeature | null,
    event: maplibregl.MapMouseEvent | null,
  ) => void;
  /**
   * Called when the selection changes.
   * Receives array of selected features, or null when selection is cleared.
   */
  onSelect?: (features: InteractiveFeature[] | null) => void;
  /**
   * Custom render functions for hover content based on the feature's `type` property.
   * Keys are the `properties.type` values; the function receives the hovered feature
   * and returns the content to display in the hover popup.
   *
   * If a feature's type is not in this map, the default content (type name) is shown.
   */
  hoverContent?: Record<string, (feature: InteractiveFeature) => ReactNode>;

  /**
   * Called when the user clicks on the map. The result includes the clicked
   * coordinate and WMS GetFeatureInfo results for all visible WMS catalog layers.
   */
  onCoordinateClick?: (result: CoordinateClickResult) => void;

  /**
   * Show rotated direction arrows for point features that have a
   * `properties.direction` value (0–360°). Defaults to `false`.
   */
  showDirectionArrows?: boolean;

  /**
   * Function that computes a label for each feature. Return `null` or
   * `undefined` to skip labelling a feature. Defaults to showing
   * `#<nummer>` when a `nummer` property exists.
   */
  getLabel?: (
    feature: Feature<Geometry, GeoJsonProperties>,
  ) => string | number | null | undefined;
}
