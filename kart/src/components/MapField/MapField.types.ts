import type { FeatureCollection, GeoJsonProperties, Geometry } from "geojson";

import type { GeoJsonEditorProps } from "../GeoJsonEditor/GeoJsonEditor.types";
import type { GeoJsonAnnotaterProps } from "../GeoJsonAnnotater/GeoJsonAnnotater";

export interface MapFieldProps extends Omit<
  GeoJsonEditorProps,
  "value" | "onChange"
> {
  /** Current GeoJSON FeatureCollection value (controlled). */
  value?: FeatureCollection<Geometry, GeoJsonProperties>;

  /** Called whenever features are created, edited, or deleted. */
  onChange?: (data: FeatureCollection<Geometry>) => void;

  /** Label displayed above the map. */
  label?: string;

  /** Description displayed below the label. */
  description?: string;

  /** Mark the field as required. Pass a string to customise the tag text. */
  required?: boolean | string;

  /** Mark the field as optional. Pass a string to customise the tag text. */
  optional?: boolean | string;

  error?: string | null | undefined;

  /**
   * Annotation definitions passed to GeoJsonAnnotater.
   * When provided, annotation inputs are rendered below the map for each feature.
   */
  annotations?: GeoJsonAnnotaterProps["annotations"];

  showUntouchedValidationErrors?: boolean;

  validationErrors?: Record<string, string>;

  touchedState?: Record<string, boolean>;
}
