import {
  createContext,
  ReactNode,
  useCallback,
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
   * existing id. Visibility is still managed by the provider.
   *
   * Pass a memoised array; a new array every render re-checks every layer.
   */
  layers?: LayerDefinition[];
}

function warnControlled(call: string) {
  console.warn(
    `CustomLayersProvider: ${call} ignored — layers come from the \`layers\` prop.`,
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
  const isControlled = controlledLayers !== undefined;
  const layers = controlledLayers ?? uncontrolledLayers;

  // Visibility the user has set, by id; other layers follow `defaultVisible`.
  // A layer removed and added again keeps the user's choice.
  const [overrides, setOverrides] = useState<ReadonlyMap<string, boolean>>(
    () => new Map(),
  );

  const visibleLayerIds = useMemo(
    () =>
      new Set(
        layers
          .filter((l) => overrides.get(l.id) ?? l.defaultVisible !== false)
          .map((l) => l.id),
      ),
    [layers, overrides],
  );

  // Lets toggleLayer resolve an id's default without depending on `layers`.
  const layersRef = useRef(layers);
  layersRef.current = layers;

  const setOverride = useCallback(
    (id: string, update: (current: boolean) => boolean) => {
      setOverrides((prev) => {
        const current =
          prev.get(id) ??
          layersRef.current.find((l) => l.id === id)?.defaultVisible !== false;
        const next = update(current);
        if (prev.get(id) === next) return prev;
        return new Map(prev).set(id, next);
      });
    },
    [],
  );

  const addLayer = useCallback(
    (def: LayerDefinition) => {
      if (isControlled) return warnControlled("addLayer");
      setLayers((prev) =>
        prev.some((l) => l.id === def.id) ? prev : [...prev, def],
      );
    },
    [isControlled],
  );

  const removeLayer = useCallback(
    (id: string) => {
      if (isControlled) return warnControlled("removeLayer");
      setLayers((prev) => prev.filter((l) => l.id !== id));
    },
    [isControlled],
  );

  const toggleLayer = useCallback(
    (id: string) => setOverride(id, (current) => !current),
    [setOverride],
  );

  const showLayer = useCallback(
    (id: string) => setOverride(id, () => true),
    [setOverride],
  );

  const hideLayer = useCallback(
    (id: string) => setOverride(id, () => false),
    [setOverride],
  );

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
