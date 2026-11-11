import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
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
  /**
   * Controlled list of layers. When set, this list replaces `initialLayers`,
   * `addLayer` and `removeLayer`: the map shows exactly these layers and
   * follows changes to the array, including new GeoJSON `data` for an
   * existing id. Visibility is still managed by the provider — a new id
   * starts from its `defaultVisible`, and an id that stays keeps whatever the
   * user toggled it to.
   *
   * Pass a memoised array; a new array every render re-checks every layer.
   */
  layers?: LayerDefinition[];
}

function defaultVisibleIds(defs: LayerDefinition[]): Set<string> {
  return new Set(
    defs.filter((l) => l.defaultVisible !== false).map((l) => l.id),
  );
}

export const CustomLayersProvider = ({
  children,
  initialLayers,
  layers: controlledLayers,
}: CustomLayersProviderProps) => {
  const [uncontrolledLayers, setLayers] = useState<LayerDefinition[]>(
    () => initialLayers ?? [],
  );
  const layers = controlledLayers ?? uncontrolledLayers;

  const [visibleLayerIds, setVisibleLayerIds] = useState<Set<string>>(() =>
    defaultVisibleIds(controlledLayers ?? initialLayers ?? []),
  );

  // Controlled mode: give new ids their default visibility and forget
  // removed ones. Ids present before and after keep the user's choice.
  const knownIdsRef = useRef<Set<string>>(
    new Set((controlledLayers ?? []).map((l) => l.id)),
  );
  useEffect(() => {
    if (!controlledLayers) return;
    const known = knownIdsRef.current;
    const currentIds = new Set(controlledLayers.map((l) => l.id));
    const added = controlledLayers.filter((l) => !known.has(l.id));
    const removed = [...known].filter((id) => !currentIds.has(id));
    knownIdsRef.current = currentIds;
    if (added.length === 0 && removed.length === 0) return;
    setVisibleLayerIds((prev) => {
      const next = new Set(prev);
      for (const id of removed) next.delete(id);
      for (const def of added) {
        if (def.defaultVisible !== false) next.add(def.id);
      }
      return next;
    });
  }, [controlledLayers]);

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
