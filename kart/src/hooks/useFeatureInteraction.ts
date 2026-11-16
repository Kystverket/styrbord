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

/**
 * The id MapLibre reports for a GeoJSON feature with `id`: strings go through
 * `parseInt`, as `@maplibre/vt-pbf` does, so they match what hover and click
 * return.
 */
function reportedId(id: Feature["id"]): number | undefined {
  if (typeof id === "string") return parseInt(id, 10);
  return typeof id === "number" && !Number.isNaN(id) ? id : undefined;
}

/**
 * Every feature of GeoJSON source `srcId`, whole and with the id MapLibre
 * gives it — unlike the rendered features, which are clipped to tiles and
 * limited to the view. `null` for a source that isn't GeoJSON.
 */
async function readSourceFeatures(
  map: maplibregl.Map,
  srcId: string,
): Promise<InteractiveFeature[] | null> {
  const source = map.getSource(srcId);
  if (source?.type !== "geojson") return null;
  const geojson = source as maplibregl.GeoJSONSource;
  const { generateId, promoteId } = geojson.serialize();
  const data = await geojson.getData();
  let features: Feature[] = [];
  if (data.type === "FeatureCollection") features = data.features;
  else if (data.type === "Feature") features = [data];

  const idOf = (f: Feature, index: number) => {
    if (generateId) return index;
    if (typeof promoteId === "string") return f.properties?.[promoteId];
    return reportedId(f.id);
  };
  return features.map((f, i) => ({ ...f, id: idOf(f, i), source: srcId }));
}

/** Geometry and properties of a source feature, for spotting edits. */
const snapshotOf = (f: InteractiveFeature) =>
  JSON.stringify([f.geometry, f.properties]);

type FeatureCheck =
  | { status: "same" }
  | { status: "removed" }
  | { status: "edited"; fresh: InteractiveFeature };

/**
 * How `feature` fared in a source update. `bySource` holds the new data of
 * each changed source, by feature key; a feature from any other source is
 * `same`. A feature still there is `edited` when its geometry or properties
 * differ from `snapshots` — or when it has no snapshot yet, which only costs
 * one redundant callback. `snapshots` is updated with what was found.
 */
function checkFeature(
  feature: InteractiveFeature,
  bySource: Map<string, Map<string | number, InteractiveFeature>>,
  snapshots: Map<string | number, string>,
  key: FeatureKey,
): FeatureCheck {
  const features = feature.source ? bySource.get(feature.source) : undefined;
  if (!features) return { status: "same" };
  const k = key(feature);
  const fresh = features.get(k);
  if (!fresh) return { status: "removed" };
  const snapshot = snapshotOf(fresh);
  const before = snapshots.get(k);
  snapshots.set(k, snapshot);
  return before === snapshot
    ? { status: "same" }
    : { status: "edited", fresh: { ...fresh, layer: feature.layer } };
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

  // Geometry and properties of hovered and selected features as last read
  // from their source, by feature key — see `checkFeature`.
  const snapshotsRef = useRef(new Map<string | number, string>());

  // New data in a source behind `layerIds` (e.g. `setData` on a GeoJSON
  // source) can change or remove hovered and selected features while their
  // layers stay put. Once the map has redrawn, check them against the
  // source's data: an edited feature is replaced by its fresh copy, a removed
  // one is dropped. The source data is whole, so a selected feature outside
  // the view is kept as long as it still exists.
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !enabled) return;
    let cancelled = false;

    // New data of each changed source holding a hovered or selected feature.
    const readChanged = async (changed: Set<string>) => {
      const involved = [hoveredRef.current, ...selectedRef.current];
      const sources = new Set(
        involved.flatMap((f) =>
          f?.source && changed.has(f.source) ? [f.source] : [],
        ),
      );
      const bySource = new Map<
        string,
        Map<string | number, InteractiveFeature>
      >();
      for (const srcId of sources) {
        const features = await readSourceFeatures(map, srcId);
        if (features) {
          bySource.set(
            srcId,
            new Map(features.map((f) => [getFeatureId(f), f])),
          );
        }
      }
      return bySource;
    };

    // Hover: whatever is under the pointer now, or the hovered feature's
    // fresh copy if it is still there but was edited.
    const reconcileHover = (check: FeatureCheck | null) => {
      const hovered = hoveredRef.current;
      const lastEvent = lastMouseEventRef.current;
      let next = lastEvent
        ? (queryFeaturesAtPoint(map, lastEvent.point)[0] ?? null)
        : null;
      const sameKey =
        !!hovered && !!next && getFeatureId(hovered) === getFeatureId(next);
      if (sameKey && check?.status === "edited") next = check.fresh;
      else if (sameKey || (!hovered && !next)) return;
      prevHoveredIdRef.current = next ? getFeatureId(next) : null;
      setHoveredFeature(next);
      onHoverRef.current?.(next, next ? lastEvent : null);
      map.getCanvas().style.cursor = next ? "pointer" : "";
    };

    const reconcileSelection = (checks: FeatureCheck[]) => {
      if (checks.every((c) => c.status === "same")) return;
      const next = selectedRef.current.flatMap((f, i) => {
        const check = checks[i];
        if (check.status === "removed") return [];
        return check.status === "edited" ? [check.fresh] : [f];
      });
      setSelectedFeatures(next);
      onSelectRef.current?.(next.length > 0 ? next : null);
    };

    const changedSources = new Set<string>();
    const reconcile = async () => {
      const changed = new Set(changedSources);
      changedSources.clear();
      const bySource = await readChanged(changed);
      if (cancelled) return;

      const snapshots = snapshotsRef.current;
      // One check per feature: the first updates its snapshot, so checking
      // a feature both hovered and selected twice would call it unchanged.
      const checks = new Map<string | number, FeatureCheck>();
      const check = (f: InteractiveFeature) => {
        const k = getFeatureId(f);
        let result = checks.get(k);
        if (!result) {
          result = checkFeature(f, bySource, snapshots, getFeatureId);
          checks.set(k, result);
        }
        return result;
      };
      const hovered = hoveredRef.current;
      const selected = selectedRef.current;
      if (hoverable) reconcileHover(hovered ? check(hovered) : null);
      reconcileSelection(selected.map(check));

      // Keep snapshots only for what is still hovered or selected.
      const keep = new Set(
        [hoveredRef.current, ...selectedRef.current].flatMap((f) =>
          f ? [getFeatureId(f)] : [],
        ),
      );
      for (const k of snapshots.keys()) if (!keep.has(k)) snapshots.delete(k);
    };

    let scheduled = false;
    const runOnIdle = () => {
      scheduled = false;
      reconcile().catch(() => {
        // Source gone mid-read (map torn down); the next update retries.
      });
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
      cancelled = true;
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
