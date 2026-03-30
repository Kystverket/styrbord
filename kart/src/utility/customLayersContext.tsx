import React, { createContext, ReactNode, useCallback, useMemo } from "react";
import type { LayerDefinition } from "~/utility/layers.types";

// ---------------------------------------------------------------------------
// Context value
// ---------------------------------------------------------------------------

export interface CustomLayersContextValue {
  /** All registered custom layers. */
  layers: LayerDefinition[];
  /** Set of custom layer ids that are currently visible. */
  visibleLayerIds: Set<string>;
  /** Register a new custom layer. Ignored if a layer with the same id already exists. */
  addLayer: (def: LayerDefinition) => void;
  /** Remove a custom layer by id. */
  removeLayer: (id: string) => void;
  /** Toggle visibility of a custom layer. */
  toggleLayer: (id: string) => void;
  /** Make a custom layer visible. */
  showLayer: (id: string) => void;
  /** Hide a custom layer. */
  hideLayer: (id: string) => void;
  /** Check whether a custom layer is currently visible. */
  isVisible: (id: string) => boolean;
}

const defaultValue: CustomLayersContextValue = {
  layers: [],
  visibleLayerIds: new Set(),
  addLayer: () => {},
  removeLayer: () => {},
  toggleLayer: () => {},
  showLayer: () => {},
  hideLayer: () => {},
  isVisible: () => false,
};

export const CustomLayersContext =
  createContext<CustomLayersContextValue>(defaultValue);

// ---------------------------------------------------------------------------
// Provider
// ---------------------------------------------------------------------------

export interface CustomLayersProviderProps {
  children: ReactNode;
  /** Layers to register on mount. More can be added dynamically via `addLayer`. */
  initialLayers?: LayerDefinition[];
}

export const CustomLayersProvider = ({
  children,
  initialLayers,
}: CustomLayersProviderProps) => {
  const [layers, setLayers] = React.useState<LayerDefinition[]>(
    () => initialLayers ?? [],
  );

  const [visibleLayerIds, setVisibleLayerIds] = React.useState<Set<string>>(
    () =>
      new Set(
        (initialLayers ?? [])
          .filter((l) => l.defaultVisible !== false)
          .map((l) => l.id),
      ),
  );

  const addLayer = useCallback((def: LayerDefinition) => {
    setLayers((prev) => {
      if (prev.some((l) => l.id === def.id)) return prev;
      return [...prev, def];
    });
    if (def.defaultVisible !== false) {
      setVisibleLayerIds((prev) => {
        if (prev.has(def.id)) return prev;
        const next = new Set(prev);
        next.add(def.id);
        return next;
      });
    }
  }, []);

  const removeLayer = useCallback((id: string) => {
    setLayers((prev) => {
      const filtered = prev.filter((l) => l.id !== id);
      if (filtered.length === prev.length) return prev;
      return filtered;
    });
    setVisibleLayerIds((prev) => {
      if (!prev.has(id)) return prev;
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
  }, []);

  const toggleLayer = useCallback((id: string) => {
    setVisibleLayerIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);

  const showLayer = useCallback((id: string) => {
    setVisibleLayerIds((prev) => {
      if (prev.has(id)) return prev;
      const next = new Set(prev);
      next.add(id);
      return next;
    });
  }, []);

  const hideLayer = useCallback((id: string) => {
    setVisibleLayerIds((prev) => {
      if (!prev.has(id)) return prev;
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
  }, []);

  const isVisible = useCallback(
    (id: string) => visibleLayerIds.has(id),
    [visibleLayerIds],
  );

  const value = useMemo<CustomLayersContextValue>(
    () => ({
      layers,
      visibleLayerIds,
      addLayer,
      removeLayer,
      toggleLayer,
      showLayer,
      hideLayer,
      isVisible,
    }),
    [
      layers,
      visibleLayerIds,
      addLayer,
      removeLayer,
      toggleLayer,
      showLayer,
      hideLayer,
      isVisible,
    ],
  );

  return (
    <CustomLayersContext.Provider value={value}>
      {children}
    </CustomLayersContext.Provider>
  );
};
