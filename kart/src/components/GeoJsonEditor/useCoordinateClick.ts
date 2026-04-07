import { useEffect, useRef, useState } from "react";
import type { MutableRefObject } from "react";
import type { Map as MaplibreMap, MapMouseEvent } from "maplibre-gl";

import { useWmsFeatureInfo } from "~/hooks/useWmsFeatureInfo";
import type { Coordinate } from "~/utility/types";
import type { CoordinateClickResult } from "~/utility/wmsGetFeatureInfo";

/**
 * Manages coordinate-click → WMS GetFeatureInfo integration.
 *
 * Installs a map click listener that is suppressed while a drawing mode
 * is active. When the user clicks in a non-drawing mode, the clicked
 * coordinate is forwarded to `useWmsFeatureInfo` and the result is
 * passed to `onCoordinateClick`.
 */
export function useCoordinateClick({
  mapRef,
  mapReady,
  disabled,
  onCoordinateClick,
  activeModeRef,
}: {
  mapRef: MutableRefObject<MaplibreMap | null>;
  mapReady: boolean;
  disabled: boolean;
  onCoordinateClick?: (result: CoordinateClickResult) => void;
  activeModeRef: MutableRefObject<string>;
}) {
  const [clickedCoordinate, setClickedCoordinate] = useState<Coordinate | null>(
    null,
  );

  const onCoordinateClickRef = useRef(onCoordinateClick);
  onCoordinateClickRef.current = onCoordinateClick;

  const { result: featureInfoResult } = useWmsFeatureInfo({
    mapRef,
    coordinate: clickedCoordinate,
    enabled: !!onCoordinateClick,
  });

  useEffect(() => {
    if (featureInfoResult) {
      onCoordinateClickRef.current?.(featureInfoResult);
    }
  }, [featureInfoResult]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map || !mapReady || disabled || !onCoordinateClickRef.current) return;

    const handleClick = (e: MapMouseEvent) => {
      const mode = activeModeRef.current;
      if (mode === "point" || mode === "linestring" || mode === "polygon")
        return;

      const { lng, lat } = e.lngLat;
      setClickedCoordinate({ latitude: lat, longitude: lng });
    };

    map.on("click", handleClick);
    return () => {
      map.off("click", handleClick);
    };
  }, [mapRef, mapReady, disabled, activeModeRef]);
}
