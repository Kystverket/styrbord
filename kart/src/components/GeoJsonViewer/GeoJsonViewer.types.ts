import type { Feature, FeatureCollection, GeoJsonProperties } from "geojson";
import type { Coordinate } from "~/utility/types";

/**
 * Styling options for the GeoJSON layers rendered on the map.
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

export interface GeoJsonViewerProps {
  /** GeoJSON data to display on the map. Accepts a Feature or FeatureCollection. */
  data:
    | Feature<any, GeoJsonProperties>
    | FeatureCollection<any, GeoJsonProperties>;
  /** Initial center of the map when no data bounds can be computed. Defaults to approx. center of Norway. */
  defaultCenter?: Coordinate;
  /** Initial zoom level when no data bounds can be computed. Defaults to 5. */
  defaultZoom?: number;
  /**
   * Whether to automatically fit the map view to the bounding box of the GeoJSON data.
   * Defaults to `true`.
   */
  fitBounds?: boolean;
  /** Padding (in pixels) applied when fitting bounds. Defaults to `40`. */
  fitBoundsPadding?: number;
  /** Styling overrides for the rendered GeoJSON layers. */
  style?: GeoJsonStyle;
  /** Height of the map container. Defaults to `"400px"`. */
  height?: string;
  /** Additional CSS class applied to the root element. */
  className?: string;
}
