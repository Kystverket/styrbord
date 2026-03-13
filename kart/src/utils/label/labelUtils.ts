/**
 * Shared label utilities for map layers.
 */

import type { Feature } from 'ol';
import type { FeatureLike } from 'ol/Feature';
import type { Geometry } from 'ol/geom';
import { Style } from 'ol/style';
import { createLabelText } from './labelUtils.styles';

/** A label getter can be a property name or a function that returns the label text. */
export type LabelGetter = string | ((feature: Feature<Geometry>) => string);

/**
 * Resolve the label text for a feature.
 *
 * @param feature  The feature to get the label for.
 * @param getter   A property name or function. When omitted an empty string is returned.
 */
export function getLabelText(feature: Feature<Geometry>, getter?: LabelGetter): string {
  if (!getter) return '';
  if (typeof getter === 'function') return getter(feature);
  return feature.get(getter) ?? '';
}

export function createStyleWithLabel(
  baseStyle: Style,
  feature: FeatureLike,
  labelTitle?: LabelGetter,
): Style {
  const labelText = getLabelText(feature as Feature<Geometry>, labelTitle);

  return new Style({
    fill: baseStyle.getFill() ?? undefined,
    stroke: baseStyle.getStroke() ?? undefined,
    image: baseStyle.getImage() ?? undefined,
    text: createLabelText(labelText),
  });
}
