import { useContext, useMemo } from "react";
import { BuiltInLayersContext } from "~/utility/builtInLayersContext";
import { CustomLayersContext } from "~/utility/customLayersContext";
import type { LayerDefinition } from "~/utility/layers.types";

export interface LayerEntry {
  /** The full layer definition. */
  definition: LayerDefinition;
  /** Whether the layer is currently visible on the map. */
  visible: boolean;
  /** Whether the layer comes from the built-in registry or was added as a custom layer. */
  origin: "built-in" | "custom";
}

export interface UseMapLayersResult {
  /** All layers (built-in + custom), each annotated with visibility and origin. */
  allLayers: LayerEntry[];
  /** Only the currently visible layers. */
  visibleLayers: LayerEntry[];
  /**
   * Toggle a layer's visibility regardless of which context owns it.
   * Returns `false` if the id was not found.
   */
  toggleLayer: (id: string) => boolean;
  /**
   * Show a layer regardless of which context owns it.
   * Returns `false` if the id was not found.
   */
  showLayer: (id: string) => boolean;
  /**
   * Hide a layer regardless of which context owns it.
   * Returns `false` if the id was not found.
   */
  hideLayer: (id: string) => boolean;
  /**
   * Check whether a layer is visible regardless of which context owns it.
   */
  isVisible: (id: string) => boolean;
}

/**
 * Unified read/action hook that merges both built-in and custom layer contexts.
 *
 * Use this when building a layer switcher UI — consumers don't need to
 * know which context a layer came from.
 */
export function useMapLayers(): UseMapLayersResult {
  const builtIn = useContext(BuiltInLayersContext);
  const custom = useContext(CustomLayersContext);

  const builtInIds = useMemo(
    () => new Set(builtIn.availableLayers.map((l) => l.id)),
    [builtIn.availableLayers],
  );

  const customIds = useMemo(
    () => new Set(custom.layers.map((l) => l.id)),
    [custom.layers],
  );

  const allLayers = useMemo<LayerEntry[]>(() => {
    const entries: LayerEntry[] = [];

    for (const def of builtIn.availableLayers) {
      entries.push({
        definition: def,
        visible: builtIn.visibleLayerIds.has(def.id),
        origin: "built-in",
      });
    }

    for (const def of custom.layers) {
      entries.push({
        definition: def,
        visible: custom.visibleLayerIds.has(def.id),
        origin: "custom",
      });
    }

    return entries;
  }, [
    builtIn.availableLayers,
    builtIn.visibleLayerIds,
    custom.layers,
    custom.visibleLayerIds,
  ]);

  const visibleLayers = useMemo(
    () => allLayers.filter((e) => e.visible),
    [allLayers],
  );

  const toggleLayer = (id: string): boolean => {
    if (builtInIds.has(id)) {
      builtIn.toggleLayer(id);
      return true;
    }
    if (customIds.has(id)) {
      custom.toggleLayer(id);
      return true;
    }
    return false;
  };

  const showLayer = (id: string): boolean => {
    if (builtInIds.has(id)) {
      builtIn.showLayer(id);
      return true;
    }
    if (customIds.has(id)) {
      custom.showLayer(id);
      return true;
    }
    return false;
  };

  const hideLayer = (id: string): boolean => {
    if (builtInIds.has(id)) {
      builtIn.hideLayer(id);
      return true;
    }
    if (customIds.has(id)) {
      custom.hideLayer(id);
      return true;
    }
    return false;
  };

  const isVisible = (id: string): boolean => {
    if (builtInIds.has(id)) return builtIn.isVisible(id);
    if (customIds.has(id)) return custom.isVisible(id);
    return false;
  };

  return {
    allLayers,
    visibleLayers,
    toggleLayer,
    showLayer,
    hideLayer,
    isVisible,
  };
}
