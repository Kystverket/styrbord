import React, { createContext, ReactNode, useCallback, useMemo } from "react";
import type {
  LayerDefinition,
  LayerFilterConfig,
} from "~/utility/layers.types";
import { BUILT_IN_LAYERS } from "~/utility/layers.builtIn";
import { isLayerIncluded } from "~/utility/layers.helpers";

// ---------------------------------------------------------------------------
// Context value
// ---------------------------------------------------------------------------

export interface BuiltInLayersContextValue {
  /** The layers available after include / exclude filtering. */
  availableLayers: LayerDefinition[];
  /** Set of layer ids that are currently visible on the map. */
  visibleLayerIds: Set<string>;
  /** Toggle visibility of a built-in layer. */
  toggleLayer: (id: string) => void;
  /** Make a layer visible. */
  showLayer: (id: string) => void;
  /** Hide a layer. */
  hideLayer: (id: string) => void;
  /** Check whether a layer is currently visible. */
  isVisible: (id: string) => boolean;
}

const defaultValue: BuiltInLayersContextValue = {
  availableLayers: [],
  visibleLayerIds: new Set(),
  toggleLayer: () => {},
  showLayer: () => {},
  hideLayer: () => {},
  isVisible: () => false,
};

export const BuiltInLayersContext =
  createContext<BuiltInLayersContextValue>(defaultValue);

// ---------------------------------------------------------------------------
// Provider
// ---------------------------------------------------------------------------

export interface BuiltInLayersProviderProps {
  children: ReactNode;
  /**
   * When set, only these layer ids are available.
   * Cannot be combined with `exclude`.
   */
  include?: string[];
  /**
   * When set, all built-in layers *except* these ids are available.
   * Cannot be combined with `include`.
   */
  exclude?: string[];
}

export const BuiltInLayersProvider = ({
  children,
  include,
  exclude,
}: BuiltInLayersProviderProps) => {
  // Derive the filter config (at most one of include / exclude).
  const filterConfig: LayerFilterConfig | undefined = useMemo(() => {
    if (include) return { include };
    if (exclude) return { exclude };
    return undefined;
  }, [include, exclude]);

  // Calculate available layers once when filter changes.
  const availableLayers = useMemo(
    () => BUILT_IN_LAYERS.filter((l) => isLayerIncluded(l.id, filterConfig)),
    [filterConfig],
  );

  // Visibility state — initialised from each layer's defaultVisible.
  const [visibleLayerIds, setVisibleLayerIds] = React.useState<Set<string>>(
    () =>
      new Set(
        availableLayers
          .filter((l) => l.defaultVisible !== false)
          .map((l) => l.id),
      ),
  );

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

  const value = useMemo<BuiltInLayersContextValue>(
    () => ({
      availableLayers,
      visibleLayerIds,
      toggleLayer,
      showLayer,
      hideLayer,
      isVisible,
    }),
    [
      availableLayers,
      visibleLayerIds,
      toggleLayer,
      showLayer,
      hideLayer,
      isVisible,
    ],
  );

  return (
    <BuiltInLayersContext.Provider value={value}>
      {children}
    </BuiltInLayersContext.Provider>
  );
};
