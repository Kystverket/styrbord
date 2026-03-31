import type {
  Feature,
  FeatureCollection,
  GeoJsonProperties,
  Geometry,
} from "geojson";
import type { ReactNode } from "react";
import type maplibregl from "maplibre-gl";

import type { ImportErrorReason } from "./GeoJsonEditorToolbar";

import type { MapBaseProps } from "../shared/MapPicker.types";
import type { InteractiveFeature } from "~/hooks/useFeatureInteraction";
import type { CoordinateClickResult } from "~/utility/wmsGetFeatureInfo";

/** Drawing modes available in the editor toolbar. */
export type DrawMode = "point" | "linestring" | "polygon" | "directional-point";

export interface GeoJsonEditorProps extends MapBaseProps {
  /** Current GeoJSON value (controlled). Accepts a Feature or FeatureCollection. */
  value?:
    | Feature<Geometry, GeoJsonProperties>
    | FeatureCollection<Geometry, GeoJsonProperties>;

  /** Called whenever features are created, edited, or deleted. */
  onChange?: (data: FeatureCollection) => void;

  /**
   * Which drawing modes to show in the toolbar.
   * Defaults to all three: `["point", "linestring", "polygon"]`.
   */
  modes?: DrawMode[];

  /** Whether existing features can be selected and edited. Defaults to `true`. */
  editable?: boolean;

  /** Whether selected features can be deleted. Defaults to `true`. */
  deletable?: boolean;

  /**
   * Whether the map should auto-fit to the data bounds when `value` is first provided.
   * Defaults to `true`.
   */
  fitBounds?: boolean;

  /** Padding (in pixels) applied when fitting bounds. Defaults to `40`. */
  fitBoundsPadding?: number;

  /** Whether to show the layer toggle control on the map. Defaults to `false`. */
  showLayerToggle?: boolean;

  /**
   * Whether features can be hovered to show tooltips. Defaults to `true`.
   */
  hoverable?: boolean;

  /**
   * Called when the hovered feature changes.
   * Receives the feature and the original mouse event, or null when hover ends.
   */
  onHover?: (
    feature: InteractiveFeature | null,
    event: maplibregl.MapMouseEvent | null,
  ) => void;

  /**
   * Called when the selection changes (via click or terra-draw selection).
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
   * Called when the user clicks on the map (while not actively drawing).
   * The result includes the clicked coordinate and WMS GetFeatureInfo
   * results for all visible WMS catalog layers.
   */
  onCoordinateClick?: (result: CoordinateClickResult) => void;

  /**
   * Called when a GeoJSON file import fails.
   * Receives a machine-readable reason and a human-readable detail message.
   */
  onImportError?: (reason: ImportErrorReason, detail: string) => void;

  /**
   * When `true`, only one feature can exist at a time. The feature type is
   * determined by `modes[0]` (which should contain exactly one mode).
   *
   * - The toolbar is hidden and drawing mode is auto-activated.
   * - Placing a new feature automatically replaces the existing one.
   *
   * This allows GeoJsonEditor to be used as a drop-in replacement for
   * `CoordinateField` (with `modes: ['point']`) or
   * `CoordinateDirectionField` (with `modes: ['directional-point']`).
   */
  singleFeature?: boolean;

  getLabel?: (
    feature: Feature<Geometry, GeoJsonProperties>,
  ) => string | number | null | undefined;
}
