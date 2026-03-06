import type { Feature, FeatureCollection, GeoJsonProperties, Geometry } from 'geojson';

import type { MapBaseProps } from '../shared/MapPicker.types';

/** Drawing modes available in the editor toolbar. */
export type DrawMode = 'point' | 'linestring' | 'polygon';

export interface GeoJsonEditorProps extends MapBaseProps {
  /** Current GeoJSON value (controlled). Accepts a Feature or FeatureCollection. */
  value?: Feature<Geometry, GeoJsonProperties> | FeatureCollection<Geometry, GeoJsonProperties>;

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
}
