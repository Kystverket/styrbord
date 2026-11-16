import { useEffect, useRef, useState, useCallback } from "react";
import type { Feature, GeoJsonProperties, Geometry } from "geojson";
import type * as maplibregl from "maplibre-gl";

/**
 * A GeoJSON feature with an optional numeric ID for MapLibre compatibility.
 */
export type InteractiveFeature = Feature<Geometry, GeoJsonProperties> & {
  id?: string | number;
  /** MapLibre source and layer the feature was hovered or clicked on. */
  source?: string;
  layer?: { id: string };
};

export interface UseFeatureInteractionOptions {
  /** Reference to the MapLibre map instance. */
  mapRef: React.RefObject<maplibregl.Map | null>;
  /** Layer IDs to query for features. */
  layerIds: string[];
  /** Source ID for the GeoJSON data. */
  sourceId: string;
  /** Whether feature interaction is enabled. Defaults to `true`. */
  enabled?: boolean;
  /** Whether hover interaction is enabled. Defaults to `true`. */
  hoverable?: boolean;
  /** Whether click/selection interaction is enabled. Defaults to `true`. */
  selectable?: boolean;
  /**
   * Called when hovered feature changes.
   * Receives the feature and the original mouse event, or null when hover ends.
   */
  onHover?: (
    feature: InteractiveFeature | null,
    event: maplibregl.MapMouseEvent | null,
  ) => void;
  /**
   * Called when selection changes.
   * Receives array of selected features, or null when selection is cleared.
   */
  onSelect?: (features: InteractiveFeature[] | null) => void;
}

export interface UseFeatureInteractionResult {
  /** Currently hovered feature, or null. */
  hoveredFeature: InteractiveFeature | null;
  /** Currently selected features. */
  selectedFeatures: InteractiveFeature[];
  /** Whether any feature is currently selected. */
  hasSelection: boolean;
  /** Programmatically clear the selection. */
  clearSelection: () => void;
  /** Programmatically select features by their IDs. */
  selectByIds: (ids: (string | number)[]) => void;
}

type FeatureKey = (feature: InteractiveFeature) => string | number;

/** Same feature (by `key`) with the same properties. */
function isSameFeature(
  a: InteractiveFeature | null,
  b: InteractiveFeature | null,
  key: FeatureKey,
): boolean {
  if (!a || !b) return a === b;
  return (
    key(a) === key(b) &&
    JSON.stringify(a.properties) === JSON.stringify(b.properties)
  );
}

/**
 * `selected` with each feature from a source in `changedSources` matched
 * against the features rendered in `layerIds`: its fresh copy if still there,
 * dropped if not. Others are kept as they are. `null` when nothing changed.
 */
function refreshSelection(
  map: maplibregl.Map,
  layerIds: string[],
  changedSources: Set<string>,
  selected: InteractiveFeature[],
  key: FeatureKey,
): InteractiveFeature[] | null {
  const layers = layerIds.filter((id) => map.getLayer(id));
  const rendered = map.queryRenderedFeatures({
    layers,
  }) as InteractiveFeature[];
  // A feature crossing tile edges is returned once per tile.
  const byKey = new Map(rendered.map((f) => [key(f), f]));
  const next = selected.flatMap((f) =>
    f.source && changedSources.has(f.source) ? (byKey.get(key(f)) ?? []) : f,
  );
  const changed =
    next.length !== selected.length ||
    next.some((f, i) => !isSameFeature(f, selected[i], key));
  return changed ? next : null;
}

/**
 * Hook for managing feature hover and selection interactions on a MapLibre map.
 *
 * Features are queried using `queryRenderedFeatures` when the user hovers or clicks.
 * Supports multi-selection via Ctrl/Cmd modifier keys.
 */
export function useFeatureInteraction({
  mapRef,
  layerIds,
  sourceId,
  enabled = true,
  hoverable = true,
  selectable = true,
  onHover,
  onSelect,
}: UseFeatureInteractionOptions): UseFeatureInteractionResult {
  const [hoveredFeature, setHoveredFeature] =
    useState<InteractiveFeature | null>(null);
  const [selectedFeatures, setSelectedFeatures] = useState<
    InteractiveFeature[]
  >([]);

  // Keep callbacks in refs to avoid effect re-runs
  const onHoverRef = useRef(onHover);
  onHoverRef.current = onHover;

  const onSelectRef = useRef(onSelect);
  onSelectRef.current = onSelect;

  // Track previous hover state for change detection
  const prevHoveredIdRef = useRef<string | number | null>(null);

  // Read when a source's data changes, outside the render that set them.
  const hoveredRef = useRef(hoveredFeature);
  hoveredRef.current = hoveredFeature;
  const selectedRef = useRef(selectedFeatures);
  selectedRef.current = selectedFeatures;
  // Last pointer position over the map, to hover again after a data change.
  const lastMouseEventRef = useRef<maplibregl.MapMouseEvent | null>(null);

  /**
   * Get a stable ID for a feature.
   * Uses feature.id if available, otherwise generates from properties.
   */
  const getFeatureId = useCallback(
    (feature: InteractiveFeature): string | number => {
      // Fallback: use stringified properties as ID (not ideal but works)
      const id = feature.id ?? JSON.stringify(feature.properties);
      // Features from different sources can share an id; qualify it with the
      // source so hovering from one layer to another registers as a change.
      const { source } = feature;
      return source && source !== sourceId ? `${source}:${id}` : id;
    },
    [sourceId],
  );

  /**
   * Query features at a given point.
   */
  const queryFeaturesAtPoint = useCallback(
    (
      map: maplibregl.Map,
      point: maplibregl.PointLike,
    ): InteractiveFeature[] => {
      const existingLayers = layerIds.filter((id) => map.getLayer(id));
      if (existingLayers.length === 0) return [];

      const features = map.queryRenderedFeatures(point, {
        layers: existingLayers,
      });

      return features as InteractiveFeature[];
    },
    [layerIds],
  );

  // Clear selection helper
  const clearSelection = useCallback(() => {
    setSelectedFeatures([]);
    onSelectRef.current?.(null);
  }, []);

  // Select by IDs helper
  const selectByIds = useCallback(
    (ids: (string | number)[]) => {
      const map = mapRef.current;
      if (!map) return;

      // Query all features from source and filter by ID
      const allFeatures = map.querySourceFeatures(sourceId);
      const matched = allFeatures.filter((f) => {
        const fId = f.id ?? JSON.stringify(f.properties);
        return ids.includes(fId);
      }) as InteractiveFeature[];

      setSelectedFeatures(matched);
      onSelectRef.current?.(matched.length > 0 ? matched : null);
    },
    [mapRef, sourceId],
  );

  // A layer leaving `layerIds` (hidden or removed) takes its features out of
  // hover and selection — the pointer may not move to tell us.
  useEffect(() => {
    const isGone = (f: InteractiveFeature) =>
      !!f.layer && !layerIds.includes(f.layer.id);
    if (hoveredFeature && isGone(hoveredFeature)) {
      prevHoveredIdRef.current = null;
      setHoveredFeature(null);
      onHoverRef.current?.(null, null);
      if (mapRef.current) mapRef.current.getCanvas().style.cursor = "";
    }
    if (selectedFeatures.some(isGone)) {
      const remaining = selectedFeatures.filter((f) => !isGone(f));
      setSelectedFeatures(remaining);
      onSelectRef.current?.(remaining.length > 0 ? remaining : null);
    }
  }, [layerIds, hoveredFeature, selectedFeatures, mapRef]);

  // New data in a source behind `layerIds` (e.g. `setData` on a GeoJSON
  // source) can change or remove hovered and selected features while their
  // layers stay put. Once the map has redrawn, read them again: a feature
  // still there is replaced by its fresh copy, one that is gone is dropped.
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !enabled) return;

    // Hover: whatever is under the pointer now.
    const reconcileHover = () => {
      const lastEvent = lastMouseEventRef.current;
      const top = lastEvent
        ? (queryFeaturesAtPoint(map, lastEvent.point)[0] ?? null)
        : null;
      if (isSameFeature(hoveredRef.current, top, getFeatureId)) return;
      prevHoveredIdRef.current = top ? getFeatureId(top) : null;
      setHoveredFeature(top);
      onHoverRef.current?.(top, top ? lastEvent : null);
      map.getCanvas().style.cursor = top ? "pointer" : "";
    };

    // Selection: matched against the features rendered on screen, so a
    // selected feature outside the view is dropped as well — but only when
    // its own source changed.
    const changedSources = new Set<string>();
    const reconcileSelection = () => {
      if (selectedRef.current.length === 0) return;
      const next = refreshSelection(
        map,
        layerIds,
        changedSources,
        selectedRef.current,
        getFeatureId,
      );
      if (!next) return;
      setSelectedFeatures(next);
      onSelectRef.current?.(next.length > 0 ? next : null);
    };

    let scheduled = false;
    const runOnIdle = () => {
      scheduled = false;
      if (hoverable) reconcileHover();
      reconcileSelection();
      changedSources.clear();
    };
    const handleSourceData = (e: maplibregl.MapSourceDataEvent) => {
      if (e.sourceDataType !== "content") return;
      const watched = layerIds.some(
        (id) => map.getLayer(id)?.source === e.sourceId,
      );
      if (!watched) return;
      changedSources.add(e.sourceId);
      if (scheduled) return;
      scheduled = true;
      map.once("idle", runOnIdle);
    };

    map.on("sourcedata", handleSourceData);
    return () => {
      map.off("sourcedata", handleSourceData);
      map.off("idle", runOnIdle);
    };
  }, [
    mapRef,
    enabled,
    hoverable,
    layerIds,
    queryFeaturesAtPoint,
    getFeatureId,
  ]);

  // ----- Setup map event handlers -----
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !enabled) return;

    // ----- Hover handlers -----
    const handleMouseMove = (e: maplibregl.MapMouseEvent) => {
      if (!hoverable) return;
      lastMouseEventRef.current = e;

      const features = queryFeaturesAtPoint(map, e.point);
      const topFeature = features.length > 0 ? features[0] : null;
      const topFeatureId = topFeature ? getFeatureId(topFeature) : null;

      // Only update if the hovered feature changed
      if (topFeatureId !== prevHoveredIdRef.current) {
        prevHoveredIdRef.current = topFeatureId;
        setHoveredFeature(topFeature);
        onHoverRef.current?.(topFeature, topFeature ? e : null);

        // Update cursor
        map.getCanvas().style.cursor = topFeature ? "pointer" : "";
      }
    };

    const handleMouseLeave = () => {
      if (!hoverable) return;
      lastMouseEventRef.current = null;

      if (prevHoveredIdRef.current !== null) {
        prevHoveredIdRef.current = null;
        setHoveredFeature(null);
        onHoverRef.current?.(null, null);
        map.getCanvas().style.cursor = "";
      }
    };

    // ----- Click handler -----
    const handleClick = (e: maplibregl.MapMouseEvent) => {
      if (!selectable) return;

      const features = queryFeaturesAtPoint(map, e.point);

      if (features.length === 0) {
        // Clicked empty area — clear selection
        if (selectedFeatures.length > 0) {
          setSelectedFeatures([]);
          onSelectRef.current?.(null);
        }
        return;
      }

      const clickedFeature = features[0];
      const clickedId = getFeatureId(clickedFeature);
      const isMultiSelect = e.originalEvent.ctrlKey || e.originalEvent.metaKey;

      setSelectedFeatures((prev) => {
        let newSelection: InteractiveFeature[];

        if (isMultiSelect) {
          // Multi-select: toggle the clicked feature
          const isAlreadySelected = prev.some(
            (f) => getFeatureId(f) === clickedId,
          );

          if (isAlreadySelected) {
            // Remove from selection
            newSelection = prev.filter((f) => getFeatureId(f) !== clickedId);
          } else {
            // Add to selection
            newSelection = [...prev, clickedFeature];
          }
        } else {
          // Single select: replace selection
          const isAlreadyOnlySelected =
            prev.length === 1 && getFeatureId(prev[0]) === clickedId;

          if (isAlreadyOnlySelected) {
            // Clicking the only selected feature deselects it
            newSelection = [];
          } else {
            newSelection = [clickedFeature];
          }
        }

        // Schedule callback (after state update)
        setTimeout(() => {
          onSelectRef.current?.(newSelection.length > 0 ? newSelection : null);
        }, 0);

        return newSelection;
      });
    };

    // Register event handlers
    map.on("mousemove", handleMouseMove);
    map.on("mouseout", handleMouseLeave);
    map.on("click", handleClick);

    return () => {
      map.off("mousemove", handleMouseMove);
      map.off("mouseout", handleMouseLeave);
      map.off("click", handleClick);
      map.getCanvas().style.cursor = "";
    };
  }, [
    mapRef,
    enabled,
    hoverable,
    selectable,
    layerIds,
    queryFeaturesAtPoint,
    getFeatureId,
    selectedFeatures.length,
  ]);

  return {
    hoveredFeature,
    selectedFeatures,
    hasSelection: selectedFeatures.length > 0,
    clearSelection,
    selectByIds,
  };
}
