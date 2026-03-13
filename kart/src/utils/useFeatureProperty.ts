import { useCallback, useEffect, useState } from 'react';
import type { Feature } from 'ol';
import type { Geometry } from 'ol/geom';


export function useFeatureProperty<T>(
  feature: Feature<Geometry>,
  key: string,
): [T, (value: T) => void] {
  const [value, setValue] = useState<T>(() => feature.get(key));

  useEffect(() => {
    setValue(feature.get(key));

    const handler = () => setValue(feature.get(key));
    feature.on(`change:${key}` as any, handler);
    return () => feature.un(`change:${key}` as any, handler);
  }, [feature, key]);

  const update = useCallback(
    (newValue: T) => {
      feature.set(key, newValue);
    },
    [feature, key],
  );

  return [value, update];
}
