import { Feature } from 'ol';
import { Geometry } from 'ol/geom';
import { createEmpty, extend as extendExtent } from 'ol/extent';
import { useCallback } from 'react';
import { useMap } from '../MapProvider';

export interface ZoomToFeaturesOptions {
  padding?: number[];
  maxZoom?: number;
  duration?: number;
}

export function useZoomToFeatures() {
  const { map } = useMap();

  return useCallback(
    (features: Feature<Geometry>[], options?: ZoomToFeaturesOptions) => {
      if (features.length === 0) return;

      const extent = features.reduce((acc, f) => {
        const geom = f.getGeometry();
        return geom ? extendExtent(acc, geom.getExtent()) : acc;
      }, createEmpty());

      if (extent.every(isFinite)) {
        const currentZoom = map.getView().getZoom() ?? 10;
        map.getView().fit(extent, {
          padding: options?.padding ?? [100, 100, 100, 100],
          maxZoom: options?.maxZoom ?? Math.max(currentZoom, 16),
          duration: options?.duration ?? 500,
        });
      }
    },
    [map],
  );
}
