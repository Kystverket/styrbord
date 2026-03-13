/**
 * Shared styles and utilities for draw controls
 */

import { Circle, Fill, Icon as OlIcon, Stroke, Style } from 'ol/style';
import type { FeatureLike } from 'ol/Feature';
import rotatableMarkerDefaultUrl from '../../assets/rotatableMarker_default.png';
import rotatableMarkerSelectedUrl from '../../assets/rotatableMarker_selected.png';

/** Default style for drawn features */
export const drawStyle = new Style({
  stroke: new Stroke({
    color: 'rgba(0, 6, 103, 0.8)',
    width: 2,
  }),
  fill: new Fill({
    color: 'rgba(0, 6, 103, 0.3)',
  }),
  image: new Circle({
    radius: 8,
    fill: new Fill({ 
                color: 'rgba(0, 6, 103, 1)' 
              }),
    stroke: new Stroke({ 
                  color: 'rgba(0, 6, 103, 0.8)', 
                  width: 2 
                }),
  }),
});

/** Style function for skilt mode — reads heading from the feature */
export function skiltStyle(feature: FeatureLike): Style {
  const heading = (feature.get('heading') ?? 0) as number;
  return new Style({
    image: new OlIcon({
      src: rotatableMarkerDefaultUrl,
      rotation: heading * (Math.PI / 180),
      rotateWithView: false,
    }),
  });
}

/** Style function for selected skilt */
export function skiltSelectedStyle(feature: FeatureLike): Style {
  const heading = (feature.get('heading') ?? 0) as number;
  return new Style({
    image: new OlIcon({
      src: rotatableMarkerSelectedUrl,
      rotation: heading * (Math.PI / 180),
      rotateWithView: false,
    }),
  });
}

/** Selection highlight style (lines & polygons only, no point image) */
export const defaultSelectedStyle = new Style({
  stroke: new Stroke({
    color: '#FF451F',
    width: 2,
  }),
  fill: new Fill({
    color: 'rgba(255, 69, 31, 0.15)',
  }),
  image: new Circle({
    radius: 8,
    fill: new Fill({ color: 'rgba(0, 6, 103, 1)' }),
    stroke: new Stroke({ color: '#FF451F', width: 3 }),
  }),
});
