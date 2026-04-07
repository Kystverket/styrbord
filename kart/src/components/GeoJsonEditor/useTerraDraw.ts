import { useCallback, useEffect, useRef, useState } from "react";
import type { MutableRefObject } from "react";
import type { Map as MaplibreMap } from "maplibre-gl";
import type {
  FeatureCollection,
  Feature,
  Geometry,
  GeoJsonProperties,
} from "geojson";
import {
  TerraDraw,
  TerraDrawPointMode,
  TerraDrawLineStringMode,
  TerraDrawPolygonMode,
  TerraDrawSelectMode,
  TerraDrawRenderMode,
  type GeoJSONStoreFeatures,
} from "terra-draw";
import { TerraDrawMapLibreGLAdapter } from "terra-draw-maplibre-gl-adapter";

import type { DrawMode } from "./GeoJsonEditor.types";
import { toFeatureCollection } from "../GeoJsonViewer/GeoJsonViewer.utils";

/**
 * Map a GeoJSON geometry type to the corresponding terra-draw drawing mode.
 * Falls back to `'static'` for unsupported geometry types or when the mode
 * isn't registered.
 */
function getModeForGeometry(
  geometry: Geometry,
  registeredModes: DrawMode[],
): string {
  let mode: DrawMode | undefined;
  switch (geometry.type) {
    case "Point":
    case "MultiPoint":
      mode = "point";
      break;
    case "LineString":
    case "MultiLineString":
      mode = "linestring";
      break;
    case "Polygon":
    case "MultiPolygon":
      mode = "polygon";
      break;
  }
  return mode && registeredModes.includes(mode) ? mode : "static";
}

type AnyTerraDrawMode =
  | TerraDrawPointMode
  | TerraDrawLineStringMode
  | TerraDrawPolygonMode
  | TerraDrawSelectMode
  | TerraDrawRenderMode;

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface UseTerraDrawOptions {
  mapRef: MutableRefObject<MaplibreMap | null>;
  /** Must be `true` before terra-draw will initialise (set by `useMaplibreMap`). */
  mapReady: boolean;
  modes: DrawMode[];
  editable: boolean;
  deletable: boolean;
  disabled: boolean;
  /** When true, only one feature is allowed — new features replace existing ones. */
  singleFeature?: boolean;
  onChange?: (data: FeatureCollection) => void;
  /**
   * Called when selection changes (features selected or deselected).
   * Receives array of selected features, or null when selection is cleared.
   */
  onSelect?: (features: Feature<Geometry, GeoJsonProperties>[] | null) => void;
}

export interface UseTerraDrawResult {
  activeMode: string;
  setActiveMode: (mode: string) => void;
  deleteSelected: () => void;
  hasSelection: boolean;
  /** Currently selected features. */
  selectedFeatures: Feature<Geometry, GeoJsonProperties>[];
  /** Get the current snapshot of all features. */
  getSnapshot: () => Feature<Geometry, GeoJsonProperties>[];
  /** True once terra-draw has been initialised and is ready to accept features. */
  isReady: boolean;
}

// ---------------------------------------------------------------------------
// Hook
// ---------------------------------------------------------------------------

export function useTerraDraw({
  mapRef,
  mapReady,
  modes,
  editable,
  deletable,
  disabled,
  singleFeature = false,
  onChange,
  onSelect,
}: UseTerraDrawOptions): UseTerraDrawResult {
  const drawRef = useRef<TerraDraw | null>(null);
  const [activeMode, setActiveModeState] = useState<string>("static");
  const [hasSelection, setHasSelection] = useState(false);
  const [selectedFeatures, setSelectedFeatures] = useState<
    Feature<Geometry, GeoJsonProperties>[]
  >([]);
  const [isReady, setIsReady] = useState(false);
  const initialDataLoaded = useRef(false);

  // Keep onChange ref stable to avoid re-creating terra-draw on every render
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;

  // Keep onSelect ref stable
  const onSelectRef = useRef(onSelect);
  onSelectRef.current = onSelect;

  // Keep singleFeature in ref for use inside callbacks
  const singleFeatureRef = useRef(singleFeature);
  singleFeatureRef.current = singleFeature;

  // Keep modes in ref so memoised callbacks always see the latest list
  const modesRef = useRef(modes);
  modesRef.current = modes;

  // ---- Emit current snapshot as FeatureCollection ----
  const emitSnapshot = useCallback(() => {
    const draw = drawRef.current;
    if (!draw || !onChangeRef.current) return;

    // Mark as loaded so controlled-value round-trips won't re-add features.
    initialDataLoaded.current = true;

    const snapshot = draw.getSnapshot();
    // Filter out terra-draw internal features (selection midpoints, etc.)
    const userFeatures = snapshot.filter(
      (f: GeoJSONStoreFeatures) => f.properties?.mode !== "select",
    );

    const fc: FeatureCollection = {
      type: "FeatureCollection",
      features: userFeatures.map(({ id, geometry, properties }) => ({
        type: "Feature" as const,
        ...(id != null ? { id } : {}),
        geometry,
        properties: { ...properties },
      })),
    };

    onChangeRef.current(fc);
  }, []);

  // ---- Initialize / tear down terra-draw ----
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !mapReady || disabled) return;

    const initDraw = () => {
      if (drawRef.current) return; // already initialised

      const drawModes: AnyTerraDrawMode[] = modes.map((m) => {
        switch (m) {
          case "point":
            return new TerraDrawPointMode({
              styles: {
                pointColor: "#ff451f",
                pointWidth: 6,
                pointOutlineColor: "#ffffff",
                pointOutlineWidth: 3,
              },
            });
          case "linestring":
            return new TerraDrawLineStringMode({
              styles: {
                lineStringColor: "#ff451f",
                lineStringWidth: 4,
                closingPointColor: "#ff451f",
                closingPointOutlineColor: "#ffffff",
                closingPointOutlineWidth: 2,
                closingPointWidth: 5,
                snappingPointColor: "#ff451f",
                snappingPointOutlineColor: "#ffffff",
                snappingPointOutlineWidth: 2,
                snappingPointWidth: 5,
                coordinatePointColor: "#ff451f",
                coordinatePointOutlineColor: "#ffffff",
                coordinatePointOutlineWidth: 2,
                coordinatePointWidth: 5,
              },
            });
          case "polygon":
            return new TerraDrawPolygonMode({
              styles: {
                fillColor: "#ff451f",
                fillOpacity: 0.2,
                outlineColor: "#ff451f",
                outlineWidth: 4,
                closingPointColor: "#ff451f",
                closingPointOutlineColor: "#ffffff",
                closingPointOutlineWidth: 2,
                closingPointWidth: 5,
                snappingPointColor: "#ff451f",
                snappingPointOutlineColor: "#ffffff",
                snappingPointOutlineWidth: 2,
                snappingPointWidth: 5,
                editedPointColor: "#ff451f",
                editedPointOutlineColor: "#ffffff",
                editedPointOutlineWidth: 2,
                editedPointWidth: 5,
                coordinatePointColor: "#ff451f",
                coordinatePointOutlineColor: "#ffffff",
                coordinatePointOutlineWidth: 2,
                coordinatePointWidth: 5,
              },
            });
          default:
            throw new Error(`Unknown draw mode: ${m}`);
        }
      });

      if (editable) {
        drawModes.push(
          new TerraDrawSelectMode({
            styles: {
              selectedPointColor: "#ff451f",
              selectedPointWidth: 6,
              selectedPointOutlineColor: "#ff0000",
              selectedPointOutlineWidth: 3,
              selectedLineStringColor: "#ff451f",
              selectedLineStringWidth: 4,
              selectedPolygonColor: "#ff451f",
              selectedPolygonFillOpacity: 0.2,
              selectedPolygonOutlineColor: "#ff451f",
              selectedPolygonOutlineWidth: 4,
              selectionPointColor: "#df3c1b",
              selectionPointOutlineColor: "#ff0000",
              selectionPointOutlineWidth: 2,
              midPointColor: "#ff7559",
              midPointOutlineColor: "#ffffff",
              midPointOutlineWidth: 2,
            },
            flags: {
              point: { feature: { draggable: true } },
              linestring: {
                feature: {
                  draggable: true,
                  coordinates: {
                    midpoints: true,
                    draggable: true,
                    deletable: true,
                  },
                },
              },
              polygon: {
                feature: {
                  draggable: true,
                  coordinates: {
                    midpoints: true,
                    draggable: true,
                    deletable: true,
                  },
                },
              },
            },
          }),
        );
      }

      // Static mode for when no drawing tool is active
      drawModes.push(
        new TerraDrawRenderMode({
          modeName: "static",
          styles: {
            pointColor: "#ff451f",
            pointWidth: 6,
            pointOutlineColor: "#ffffff",
            pointOutlineWidth: 3,
            lineStringColor: "#ff451f",
            lineStringWidth: 4,
            polygonFillColor: "#ff451f",
            polygonFillOpacity: 0.2,
            polygonOutlineColor: "#ff451f",
            polygonOutlineWidth: 4,
          },
        }),
      );

      const draw = new TerraDraw({
        adapter: new TerraDrawMapLibreGLAdapter({ map }),
        modes: drawModes,
      });

      draw.start();
      const initialMode =
        singleFeature && modes.length > 0 ? modes[0] : "static";
      draw.setMode(initialMode);
      setActiveModeState(initialMode);

      // Listen for changes — suppress during line/polygon drawing so
      // intermediate vertices are not emitted.  The completed geometry
      // is emitted from the "finish" handler instead.
      draw.on("change", () => {
        const currentMode = draw.getMode();
        if (currentMode === "linestring" || currentMode === "polygon") {
          return;
        }
        emitSnapshot();
      });

      // In single-feature mode, after a feature is completed:
      // 1. Remove all older features so only the newest one remains.
      // 2. Re-activate the drawing mode so the user can immediately
      //    draw a replacement.
      //
      // This is done in the `finish` event (not `change`) because
      // terra-draw creates internal helper features (closing points,
      // snapping points) during drawing that would be incorrectly
      // counted as user features in the `change` handler.
      draw.on("finish", (finishedId) => {
        if (singleFeatureRef.current && modes.length > 0) {
          // Defer to let terra-draw complete its internal cleanup first.
          Promise.resolve().then(() => {
            const d = drawRef.current;
            if (!d) return;

            // Remove every user feature except the just-finished one.
            const snap = d.getSnapshot();
            const toRemove = snap
              .filter(
                (f: GeoJSONStoreFeatures) =>
                  f.properties?.mode !== "select" &&
                  !f.properties?.closingPoint &&
                  !f.properties?.snappingPoint &&
                  !f.properties?.coordinatePoint &&
                  f.id !== finishedId,
              )
              .map((f: GeoJSONStoreFeatures) => f.id!);

            if (toRemove.length > 0) {
              try {
                d.removeFeatures(toRemove);
              } catch {
                // Features may have already been removed
              }
            }

            // Emit after cleanup so only the new feature is included.
            emitSnapshot();

            // Re-activate drawing mode so the user can draw another feature.
            const drawingMode = modes[0];
            if (d.getMode() !== drawingMode) {
              d.setMode(drawingMode);
              setActiveModeState(drawingMode);
            }
          });
        } else {
          // Emit the completed feature for line/polygon drawings
          // (suppressed in the change handler during drawing).
          emitSnapshot();
        }
      });

      draw.on("select", () => {
        setHasSelection(true);
        // Get selected features and emit
        const snapshot = draw.getSnapshot();
        const selected = snapshot
          .filter((f: GeoJSONStoreFeatures) => f.properties?.selected === true)
          .map(({ id, geometry, properties }) => ({
            type: "Feature" as const,
            ...(id != null ? { id } : {}),
            geometry,
            properties: { ...properties },
          })) as Feature<Geometry, GeoJsonProperties>[];
        setSelectedFeatures(selected);
        onSelectRef.current?.(selected.length > 0 ? selected : null);
      });

      draw.on("deselect", () => {
        setHasSelection(false);
        setSelectedFeatures([]);
        onSelectRef.current?.(null);
      });

      drawRef.current = draw;
      setIsReady(true);
    };

    // In MapLibre v5+, loadJSON defers style parsing to the next animation
    // frame, so the style may not be ready immediately after map creation.
    // map.getStyle() returns undefined when the style structure hasn't loaded
    // yet (without throwing), so use it as a lightweight readiness check.
    // On subsequent effect runs the style is always loaded, so initDraw()
    // executes immediately.
    let onLoad: (() => void) | null = null;

    if (map.getStyle()) {
      initDraw();
    } else {
      onLoad = () => {
        if (!drawRef.current) initDraw();
      };
      map.once("load", onLoad);
    }

    return () => {
      if (onLoad) {
        map.off("load", onLoad);
      }
      const draw = drawRef.current;
      if (draw) {
        try {
          draw.stop();
        } catch {
          // map may already be destroyed
        }
        drawRef.current = null;
        initialDataLoaded.current = false;
        setIsReady(false);
      }
    };
  }, [
    mapRef,
    mapReady,
    disabled,
    modes,
    editable,
    singleFeature,
    emitSnapshot,
  ]);

  // ---- Replace all features with new data (clears existing before loading) ----
  const replaceFeatures = useCallback(
    (value: FeatureCollection | undefined) => {
      const draw = drawRef.current;
      if (!draw) return;

      const snapshot = draw.getSnapshot();
      const toRemove = snapshot
        .filter(
          (f: GeoJSONStoreFeatures) =>
            f.properties?.mode !== "select" &&
            !f.properties?.closingPoint &&
            !f.properties?.snappingPoint &&
            !f.properties?.coordinatePoint,
        )
        .map((f: GeoJSONStoreFeatures) => f.id!);

      if (toRemove.length > 0) {
        try {
          draw.removeFeatures(toRemove);
        } catch {
          // features may already be removed
        }
      }

      initialDataLoaded.current = false;

      if (!value || value.features.length === 0) return;

      const fc = toFeatureCollection(value);
      const features = fc.features.map((f) => ({
        ...f,
        properties: {
          ...f.properties,
          mode: getModeForGeometry(f.geometry, modesRef.current),
        },
      })) as GeoJSONStoreFeatures[];

      try {
        draw.addFeatures(features);
        initialDataLoaded.current = true;
      } catch (err) {
        console.error("[GeoJsonEditor] Error replacing features:", err);
      }
    },
    [],
  );

  // ---- Load initial value ----
  const loadInitialData = useCallback(
    (
      value: UseTerraDrawOptions["onChange"] extends undefined
        ? never
        :
            | Parameters<NonNullable<UseTerraDrawOptions["onChange"]>>[0]
            | undefined,
    ) => {
      const draw = drawRef.current;
      if (!draw || !value || initialDataLoaded.current) return;

      const fc = toFeatureCollection(value as FeatureCollection);
      if (fc.features.length === 0) return;

      const features = fc.features.map((f) => ({
        ...f,
        properties: {
          ...f.properties,
          mode: getModeForGeometry(f.geometry, modesRef.current),
        },
      })) as GeoJSONStoreFeatures[];

      try {
        draw.addFeatures(features);
        initialDataLoaded.current = true;
      } catch (err) {
        console.error("[GeoJsonEditor] Error loading initial features:", err);
      }
    },
    [],
  );

  // ---- Set active mode ----
  const setActiveMode = useCallback((mode: string) => {
    const draw = drawRef.current;
    if (!draw) return;

    try {
      draw.setMode(mode);
      setActiveModeState(mode);
    } catch (err) {
      console.error("[GeoJsonEditor] Error setting mode:", err);
    }
  }, []);

  // ---- Delete selected features ----
  const deleteSelected = useCallback(() => {
    const draw = drawRef.current;
    if (!draw || !deletable) return;

    const snapshot = draw.getSnapshot();
    const selected = snapshot.filter(
      (f: GeoJSONStoreFeatures) => f.properties?.selected === true,
    );

    if (selected.length > 0) {
      const ids = selected.map((f: GeoJSONStoreFeatures) => f.id!);
      draw.removeFeatures(ids);
      setHasSelection(false);
      setSelectedFeatures([]);
      onSelectRef.current?.(null);
      emitSnapshot();
    }
  }, [deletable, emitSnapshot]);

  // ---- Get current snapshot of all features ----
  const getSnapshot = useCallback((): Feature<
    Geometry,
    GeoJsonProperties
  >[] => {
    const draw = drawRef.current;
    if (!draw) return [];

    const snapshot = draw.getSnapshot();
    return snapshot
      .filter((f: GeoJSONStoreFeatures) => f.properties?.mode !== "select")
      .map(({ id, geometry, properties }) => ({
        type: "Feature" as const,
        ...(id != null ? { id } : {}),
        geometry,
        properties: { ...properties },
      })) as Feature<Geometry, GeoJsonProperties>[];
  }, []);

  return {
    activeMode,
    setActiveMode,
    deleteSelected,
    hasSelection,
    selectedFeatures,
    getSnapshot,
    isReady,
    /** @internal — exposed for the component to call after mount */
    loadInitialData,
    /** @internal — replaces all features without remounting the map */
    replaceFeatures,
  } as UseTerraDrawResult & {
    loadInitialData: typeof loadInitialData;
    replaceFeatures: typeof replaceFeatures;
  };
}
