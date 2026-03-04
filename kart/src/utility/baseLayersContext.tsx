import React, { createContext, ReactNode, useCallback, useMemo } from 'react';
import type { BaseLayerDefinition } from '~/utility/layers.types';
import { KARTVERKET_TOPO_BASE_LAYER } from '~/utility/mapStyle';

// ---------------------------------------------------------------------------
// Context value
// ---------------------------------------------------------------------------

export interface BaseLayersContextValue {
  /** The base layers available for selection. */
  availableBaseLayers: BaseLayerDefinition[];
  /** The id of the currently active base layer. */
  activeBaseLayerId: string;
  /** Switch to a different base layer (exclusive — only one active at a time). */
  setActiveBaseLayer: (id: string) => void;
}

const fallbackLayers: BaseLayerDefinition[] = [KARTVERKET_TOPO_BASE_LAYER];

const defaultValue: BaseLayersContextValue = {
  availableBaseLayers: fallbackLayers,
  activeBaseLayerId: fallbackLayers[0].id,
  setActiveBaseLayer: () => {},
};

export const BaseLayersContext = createContext<BaseLayersContextValue>(defaultValue);

// ---------------------------------------------------------------------------
// Provider
// ---------------------------------------------------------------------------

export interface BaseLayersProviderProps {
  children: ReactNode;
  /**
   * The base layers the user can choose from.
   * When omitted or empty, falls back to the built-in Kartverket topo layer.
   */
  baseLayers?: BaseLayerDefinition[];
  /**
   * Id of the initially active base layer.
   * Defaults to the first item in `baseLayers`.
   */
  defaultActiveId?: string;
}

export const BaseLayersProvider = ({ children, baseLayers, defaultActiveId }: BaseLayersProviderProps) => {
  const availableBaseLayers = useMemo(
    () => (baseLayers && baseLayers.length > 0 ? baseLayers : fallbackLayers),
    [baseLayers],
  );

  const [activeBaseLayerId, setActiveBaseLayerIdState] = React.useState<string>(
    () => defaultActiveId ?? availableBaseLayers[0]?.id ?? fallbackLayers[0].id,
  );

  const setActiveBaseLayer = useCallback(
    (id: string) => {
      if (availableBaseLayers.some((l) => l.id === id)) {
        setActiveBaseLayerIdState(id);
      }
    },
    [availableBaseLayers],
  );

  const value = useMemo<BaseLayersContextValue>(
    () => ({
      availableBaseLayers,
      activeBaseLayerId,
      setActiveBaseLayer,
    }),
    [availableBaseLayers, activeBaseLayerId, setActiveBaseLayer],
  );

  return <BaseLayersContext.Provider value={value}>{children}</BaseLayersContext.Provider>;
};
