import { useEffect, useRef, useState } from "react";
import type { MutableRefObject } from "react";
import type { Map as MaplibreMap, MapMouseEvent } from "maplibre-gl";
import type { Geometry, GeoJsonProperties } from "geojson";

import type { InteractiveFeature } from "~/hooks/useFeatureInteraction";

/**
 * Manages hover detection for terra-draw features on the map.
 *
 * Tracks which feature is under the mouse cursor, updates cursor style,
 * and reports hover state back to the caller. Hover is suppressed while
 * a drawing mode (point/linestring/polygon) is active.
 */
export function useEditorHover({
  mapRef,
  mapReady,
  disabled,
  hoverable,
  onHover,
  activeModeRef,
}: {
  mapRef: MutableRefObject<MaplibreMap | null>;
  mapReady: boolean;
  disabled: boolean;
  hoverable: boolean;
  onHover?: (
    feature: InteractiveFeature | null,
    event: MapMouseEvent | null,
  ) => void;
  activeModeRef: MutableRefObject<string>;
}) {
  const [hoveredFeature, setHoveredFeature] =
    useState<InteractiveFeature | null>(null);
  const [hoverPosition, setHoverPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);

  const onHoverRef = useRef(onHover);
  onHoverRef.current = onHover;

  useEffect(() => {
    const map = mapRef.current;
    if (!map || !mapReady || disabled || !hoverable) return;

    let prevHoveredId: string | number | null = null;

    const handleMouseMove = (e: MapMouseEvent) => {
      const mode = activeModeRef.current;
      if (mode === "point" || mode === "linestring" || mode === "polygon") {
        if (prevHoveredId !== null) {
          prevHoveredId = null;
          setHoveredFeature(null);
          setHoverPosition(null);
          onHoverRef.current?.(null, null);
          map.getCanvas().style.cursor = "";
        }
        return;
      }

      const features = map.queryRenderedFeatures(e.point);
      const terraDrawFeature = features.find(
        (f) => f.properties?.mode && f.properties.mode !== "select",
      );

      if (terraDrawFeature) {
        const featureId =
          terraDrawFeature.id ?? terraDrawFeature.properties?.id ?? null;

        if (featureId !== prevHoveredId) {
          prevHoveredId = featureId;
          const feature: InteractiveFeature = {
            type: "Feature",
            id: featureId ?? undefined,
            geometry: terraDrawFeature.geometry as Geometry,
            properties: terraDrawFeature.properties as GeoJsonProperties,
          };
          setHoveredFeature(feature);
          onHoverRef.current?.(feature, e);
        }
        setHoverPosition({ x: e.point.x, y: e.point.y });
        map.getCanvas().style.cursor = "pointer";
      } else {
        if (prevHoveredId !== null) {
          prevHoveredId = null;
          setHoveredFeature(null);
          setHoverPosition(null);
          onHoverRef.current?.(null, null);
        }
        map.getCanvas().style.cursor = "";
      }
    };

    const handleMouseLeave = () => {
      prevHoveredId = null;
      setHoveredFeature(null);
      setHoverPosition(null);
      onHoverRef.current?.(null, null);
      map.getCanvas().style.cursor = "";
    };

    map.on("mousemove", handleMouseMove);
    map.on("mouseleave", handleMouseLeave);

    return () => {
      map.off("mousemove", handleMouseMove);
      map.off("mouseleave", handleMouseLeave);
      map.getCanvas().style.cursor = "";
    };
  }, [mapRef, mapReady, disabled, hoverable, activeModeRef]);

  return { hoveredFeature, hoverPosition };
}
