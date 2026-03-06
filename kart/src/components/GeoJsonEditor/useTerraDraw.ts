import { useCallback, useEffect, useRef, useState } from "react";
import type { MutableRefObject } from "react";
import type { Map as MaplibreMap } from "maplibre-gl";
import type { FeatureCollection } from "geojson";
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
  modes: DrawMode[];
  editable: boolean;
  deletable: boolean;
  disabled: boolean;
  onChange?: (data: FeatureCollection) => void;
}

export interface UseTerraDrawResult {
  activeMode: string;
  setActiveMode: (mode: string) => void;
  deleteSelected: () => void;
  hasSelection: boolean;
}

// ---------------------------------------------------------------------------
// Hook
// ---------------------------------------------------------------------------

export function useTerraDraw({
  mapRef,
  modes,
  editable,
  deletable,
  disabled,
  onChange,
}: UseTerraDrawOptions): UseTerraDrawResult {
  const drawRef = useRef<TerraDraw | null>(null);
  const [activeMode, setActiveModeState] = useState<string>("static");
  const [hasSelection, setHasSelection] = useState(false);
  const initialDataLoaded = useRef(false);

  // Keep onChange ref stable to avoid re-creating terra-draw on every render
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;

  // ---- Emit current snapshot as FeatureCollection ----
  const emitSnapshot = useCallback(() => {
    const draw = drawRef.current;
    if (!draw || !onChangeRef.current) return;

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
    if (!map || disabled) return;

    const initDraw = () => {
      if (drawRef.current) return; // already initialised

      const drawModes: AnyTerraDrawMode[] = modes.map((m) => {
        switch (m) {
          case "point":
            return new TerraDrawPointMode();
          case "linestring":
            return new TerraDrawLineStringMode();
          case "polygon":
            return new TerraDrawPolygonMode();
        }
      });

      if (editable) {
        drawModes.push(
          new TerraDrawSelectMode({
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
        new TerraDrawRenderMode({ modeName: "static", styles: {} }),
      );

      const draw = new TerraDraw({
        adapter: new TerraDrawMapLibreGLAdapter({ map }),
        modes: drawModes,
      });

      draw.start();
      draw.setMode("static");

      // Listen for changes
      draw.on("change", () => {
        emitSnapshot();
      });

      draw.on("select", () => {
        setHasSelection(true);
      });

      draw.on("deselect", () => {
        setHasSelection(false);
      });

      drawRef.current = draw;
    };

    // Initialise when the map style is loaded
    if (map.isStyleLoaded()) {
      initDraw();
    } else {
      map.on("load", initDraw);
    }

    return () => {
      map.off("load", initDraw);
      const draw = drawRef.current;
      if (draw) {
        try {
          draw.stop();
        } catch {
          // map may already be destroyed
        }
        drawRef.current = null;
        initialDataLoaded.current = false;
      }
    };
  }, [mapRef, disabled, modes, editable, emitSnapshot]);

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
        properties: { ...f.properties, mode: "static" },
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
      emitSnapshot();
    }
  }, [deletable, emitSnapshot]);

  return {
    activeMode,
    setActiveMode,
    deleteSelected,
    hasSelection,
    /** @internal — exposed for the component to call after mount */
    loadInitialData,
  } as UseTerraDrawResult & { loadInitialData: typeof loadInitialData };
}
