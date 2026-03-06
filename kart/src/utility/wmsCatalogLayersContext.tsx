import React, { createContext, ReactNode, useCallback, useEffect, useMemo } from 'react';
import type { LayerSpecification } from 'maplibre-gl';
import type { LayerDefinition } from '~/utility/layers.types';

// ---------------------------------------------------------------------------
// WMS catalog layer entry (parsed from GetCapabilities)
// ---------------------------------------------------------------------------

export interface WmsCatalogLayer {
  /** WMS layer name (from <Name>). */
  name: string;
  /** Human-readable title (from <Title>). */
  title: string;
}

// ---------------------------------------------------------------------------
// Context value
// ---------------------------------------------------------------------------

export interface WmsCatalogLayersContextValue {
  /** Whether the GetCapabilities request is in progress. */
  loading: boolean;
  /** Error message if fetching or parsing failed. */
  error: string | null;
  /** Layers parsed from the WMS GetCapabilities response. */
  layers: LayerDefinition[];
  /** Set of layer ids that are currently visible on the map. */
  visibleLayerIds: Set<string>;
  /** Toggle visibility of a WMS catalog layer. */
  toggleLayer: (id: string) => void;
  /** Make a WMS catalog layer visible. */
  showLayer: (id: string) => void;
  /** Hide a WMS catalog layer. */
  hideLayer: (id: string) => void;
  /** Check whether a WMS catalog layer is currently visible. */
  isVisible: (id: string) => boolean;
}

const defaultValue: WmsCatalogLayersContextValue = {
  loading: false,
  error: null,
  layers: [],
  visibleLayerIds: new Set(),
  toggleLayer: () => {},
  showLayer: () => {},
  hideLayer: () => {},
  isVisible: () => false,
};

export const WmsCatalogLayersContext = createContext<WmsCatalogLayersContextValue>(defaultValue);

// ---------------------------------------------------------------------------
// XML parsing helpers
// ---------------------------------------------------------------------------

function parseGetCapabilities(xml: string): WmsCatalogLayer[] {
  const parser = new DOMParser();
  const doc = parser.parseFromString(xml, 'text/xml');

  const parserError = doc.querySelector('parsererror');
  if (parserError) {
    throw new Error('Failed to parse WMS GetCapabilities XML');
  }

  const layers: WmsCatalogLayer[] = [];
  const layerElements = doc.querySelectorAll('Layer > Layer');

  for (const el of layerElements) {
    const nameEl = el.querySelector(':scope > Name');
    const titleEl = el.querySelector(':scope > Title');
    const name = nameEl?.textContent?.trim();
    const title = titleEl?.textContent?.trim();
    if (name) {
      layers.push({ name, title: title || name });
    }
  }

  return layers;
}

function buildWmsLayerDefinition(entry: WmsCatalogLayer, baseUrl: string, attribution?: string): LayerDefinition {
  const id = `wms-catalog-${entry.name}`;
  const sourceId = `wms-cat-${entry.name}`;

  const separator = baseUrl.includes('?') ? '&' : '?';
  const queryParams = {
    SERVICE: 'WMS',
    VERSION: '1.3.0',
    REQUEST: 'GetMap',
    LAYERS: entry.name,
    STYLES: '',
    CRS: 'EPSG:3857',
    BBOX: '{bbox-epsg-3857}',
    EXCEPTIONS: 'XML',
    WIDTH: '256',
    HEIGHT: '256',
    FORMAT: 'image/png',
    TRANSPARENT: 'TRUE',
  };

  return {
    id,
    label: entry.title,
    category: 'WMS-katalog',
    defaultVisible: false,
    sources: {
      [sourceId]: {
        type: 'raster',
        tiles: [
          `${baseUrl}${separator}` +
            Object.entries(queryParams)
              .map(([key, value]) => `${key}=${value}`)
              .join('&'),
        ],
        tileSize: 256,
        attribution,
      },
    },
    layers: [
      {
        id: `${sourceId}-raster`,
        type: 'raster',
        source: sourceId,
      } as LayerSpecification,
    ],
  };
}

/** Derive the base WMS URL from a GetCapabilities URL. */
function deriveBaseUrl(capabilitiesUrl: string): string {
  const url = new URL(capabilitiesUrl);
  url.searchParams.delete('service');
  url.searchParams.delete('SERVICE');
  url.searchParams.delete('request');
  url.searchParams.delete('REQUEST');
  url.searchParams.delete('version');
  url.searchParams.delete('VERSION');
  const remaining = url.toString();
  // Strip trailing ? or & left over
  return remaining.replace(/[?&]$/, '');
}

// ---------------------------------------------------------------------------
// Provider
// ---------------------------------------------------------------------------

export interface WmsCatalogLayersProviderProps {
  children: ReactNode;
  /** The WMS GetCapabilities URL to fetch the layer catalog from. */
  capabilitiesUrl: string;
  /** Attribution string for all layers from this catalog. */
  attribution?: string;
}

export const WmsCatalogLayersProvider = ({ children, capabilitiesUrl, attribution }: WmsCatalogLayersProviderProps) => {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [catalogEntries, setCatalogEntries] = React.useState<WmsCatalogLayer[]>([]);
  const [visibleLayerIds, setVisibleLayerIds] = React.useState<Set<string>>(new Set());

  const baseUrl = useMemo(() => deriveBaseUrl(capabilitiesUrl), [capabilitiesUrl]);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    fetch(capabilitiesUrl)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
        return res.text();
      })
      .then((xml) => {
        if (cancelled) return;
        const entries = parseGetCapabilities(xml);
        setCatalogEntries(entries);
        setLoading(false);
      })
      .catch((err) => {
        if (cancelled) return;
        setError(err instanceof Error ? err.message : String(err));
        setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [capabilitiesUrl]);

  const layers = useMemo(
    () => catalogEntries.map((entry) => buildWmsLayerDefinition(entry, baseUrl, attribution)),
    [catalogEntries, baseUrl, attribution],
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

  const isVisible = useCallback((id: string) => visibleLayerIds.has(id), [visibleLayerIds]);

  const value = useMemo<WmsCatalogLayersContextValue>(
    () => ({
      loading,
      error,
      layers,
      visibleLayerIds,
      toggleLayer,
      showLayer,
      hideLayer,
      isVisible,
    }),
    [loading, error, layers, visibleLayerIds, toggleLayer, showLayer, hideLayer, isVisible],
  );

  return <WmsCatalogLayersContext.Provider value={value}>{children}</WmsCatalogLayersContext.Provider>;
};
