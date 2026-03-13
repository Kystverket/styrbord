import { useCallback, useEffect, useState } from 'react';
import type { Feature } from 'ol';
import type { Geometry, Point } from 'ol/geom';
import { toLonLat, fromLonLat } from 'ol/proj';


export function useFeatureCoordinates(
  feature: Feature<Geometry>,
): [number, number, (lon: number, lat: number) => void] {
  const geom = feature.getGeometry() as Point;

  const getLonLat = (): [number, number] => {
    const [lon, lat] = toLonLat(geom.getCoordinates());
    return [lon, lat];
  };

  const [[lon, lat], setCoords] = useState(getLonLat);

  useEffect(() => {
    setCoords(getLonLat());

    const handler = () => setCoords(getLonLat());
    geom.on('change', handler);
    return () => geom.un('change', handler);
  }, [feature]);

  const update = useCallback(
    (newLon: number, newLat: number) => {
      geom.setCoordinates(fromLonLat([newLon, newLat]));
    },
    [feature],
  );

  return [lon, lat, update];
}
