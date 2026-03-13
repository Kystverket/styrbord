/**
 * Shared styles for select controls
 */

import { Circle, Fill, Stroke, Style } from 'ol/style';

/** Style for selection drawing (box, polygon, freehand) */
export const selectDrawStyle = new Style({
  stroke: new Stroke({
    color: 'rgba(255, 69, 31, 0.8)',
    width: 2,
    lineDash: [5, 5],
  }),
  fill: new Fill({
    color: 'rgba(255, 69, 31, 0.1)',
  }),
});

/** Default style for features in SelectLayer */
export const defaultStyle = new Style({
  fill: new Fill({ color: 'rgba(0, 6, 103, 0.3)' }),
  stroke: new Stroke({ color: 'var(--ds-color-accent-border-default)', width: 1 }),
  image: new Circle({
    radius: 8,
    fill: new Fill({ color: 'rgba(0, 6, 103, 1)' }),
    stroke: new Stroke({ color: 'var(--ds-color-accent-border-default)', width: 1 }),
  }),
});

/** Default style for selected features in SelectLayer */
export const defaultSelectedStyle = new Style({
  fill: new Fill({ color: 'rgba(0, 6, 103, 0.3)' }),
  stroke: new Stroke({ color: "#FF451F", width: 2 }),
  image: new Circle({
    radius: 8,
    fill: new Fill({ color: 'rgba(0, 6, 103, 1)' }),
    stroke: new Stroke({ color: "#FF451F", width: 2 }),
  }),
});
