import { Feature, FeatureCollection } from 'geojson';
import type { LayerSpecification, SourceSpecification } from 'maplibre-gl';

// ---------------------------------------------------------------------------
// Core layer model
// ---------------------------------------------------------------------------

/**
 * A complete layer definition that can be registered with either
 * the built-in or custom layers context.
 *
 * Each definition groups one or more MapLibre sources with
 * the layers that reference them.
 */
export interface LayerDefinition {
  /** Unique identifier for this logical layer. */
  id: string;
  /** Human-readable name shown in layer switcher UIs. */
  label: string;
  /** Optional grouping category (e.g. "Havnedata", "Fiskeri"). */
  category?: string;
  /** Whether the layer starts visible. Defaults to `true`. */
  defaultVisible?: boolean;
  /** MapLibre sources keyed by source id. */
  sources: Record<string, SourceSpecification>;
  /** MapLibre layer specifications that reference the sources above. */
  layers: LayerSpecification[];
  /** Extensible metadata bag for application-specific data. */
  metadata?: Record<string, unknown>;
}

// ---------------------------------------------------------------------------
// Built-in layer identifiers
// ---------------------------------------------------------------------------

/**
 * Sub-layer names exposed by Kartverket's Havnedata WMS.
 *
 * @see https://wms.geonorge.no/skwms1/wms.havnedata?request=GetCapabilities&service=WMS
 */
export const HAVNEDATA_LAYER_NAMES = [
  'Fender',
  'Kamera',
  'VA-Uttak',
  'Kran',
  'Kaifront',
  'Fortoyningsinnretning',
  'Havneanlegg',
  'Lastbegrensningsomrade',
  'Havneomrade',
] as const;

/** All registered built-in layer ids. */
export const BUILT_IN_LAYER_IDS = [
  'Bilder',
  'Havnedata',
  'Fiskerihavner',
  'Fyreiendommer',
  'ISPSHavneanlegg',
  'AnkringsomraderSjotransporten',
  'OpplagsomraderSjotransport',
  'RiggomraderSjo',
] as const;

/** Union type of all built-in layer ids. */
export type BuiltInLayerId = (typeof BUILT_IN_LAYER_IDS)[number];

// ---------------------------------------------------------------------------
// Built-in layer registry
// ---------------------------------------------------------------------------

/** Helper: create a Kartverket WMS raster layer definition. */
function kartverketWms(id: string, label: string, wmsLayers: string, category?: string): LayerDefinition {
  const sourceId = `kv-${id}`;
  return {
    id,
    label,
    category,
    defaultVisible: false,
    sources: {
      [sourceId]: {
        type: 'raster',
        tiles: [
          `https://wms.geonorge.no/skwms1/wms.${id.toLowerCase()}?SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&LAYERS=${wmsLayers}&STYLES=&CRS=EPSG:3857&BBOX={bbox-epsg-3857}&WIDTH=256&HEIGHT=256&FORMAT=image/png&TRANSPARENT=true`,
        ],
        tileSize: 256,
        attribution: '&copy; <a href="https://www.kartverket.no/">Kartverket</a>',
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

/**
 * All built-in / preconfigured layer definitions shipped with the library.
 *
 * These can be filtered using include / exclude props on `BuiltInLayersProvider`.
 */
export const BUILT_IN_LAYERS: LayerDefinition[] = [
  {
    id: 'Bilder',
    label: 'Flyfoto',
    category: 'Bakgrunn',
    defaultVisible: false,
    sources: {
      'kv-bilder': {
        type: 'raster',
        tiles: ['https://cache.kartverket.no/v1/wmts/1.0.0/norgeskart_bakgrunn/default/webmercator/{z}/{y}/{x}.png'],
        tileSize: 256,
        maxzoom: 18,
        attribution: '&copy; <a href="https://www.kartverket.no/">Kartverket</a>',
      },
    },
    layers: [
      {
        id: 'kv-bilder-raster',
        type: 'raster',
        source: 'kv-bilder',
      } as LayerSpecification,
    ],
  },
  kartverketWms('Havnedata', 'Havnedata', HAVNEDATA_LAYER_NAMES.join(','), 'Havner'),
  kartverketWms('Fiskerihavner', 'Fiskerihavner', 'Fiskerihavner', 'Havner'),
  kartverketWms('Fyreiendommer', 'Fyreiendommer', 'Fyreiendommer', 'Navigasjon'),
  kartverketWms('ISPSHavneanlegg', 'ISPS Havneanlegg', 'ISPSHavneanlegg', 'Sikkerhet'),
  kartverketWms('AnkringsomraderSjotransporten', 'Ankringsområder', 'AnkringsomraderSjotransporten', 'Sjøtransport'),
  kartverketWms('OpplagsomraderSjotransport', 'Opplagsområder', 'OpplagsomraderSjotransport', 'Sjøtransport'),
  kartverketWms('RiggomraderSjo', 'Riggområder sjø', 'RiggomraderSjo', 'Sjøtransport'),
];

// ---------------------------------------------------------------------------
// Include / exclude filter utilities
// ---------------------------------------------------------------------------

/** Configuration for filtering the built-in layers. */
export type LayerFilterConfig = { include: string[] } | { exclude: string[] };

/** Check whether `include` is the active filter key. */
function isIncludeFilter(config: LayerFilterConfig): config is { include: string[] } {
  return 'include' in config;
}

/**
 * Returns `true` when the given layer id passes the filter.
 *
 * - No config → always visible
 * - `{ include }` → only the listed ids are visible
 * - `{ exclude }` → everything *except* the listed ids is visible
 */
export function isLayerIncluded(layerId: string, filter?: LayerFilterConfig): boolean {
  if (!filter) return true;
  if (isIncludeFilter(filter)) return filter.include.includes(layerId);
  return !filter.exclude.includes(layerId);
}

// ---------------------------------------------------------------------------
// Simple layer factory (higher-level API for custom layers)
// ---------------------------------------------------------------------------

export type SimpleLayerType = 'geojson' | 'wms' | 'vector-tiles';

export interface SimpleLayerOptions {
  id: string;
  label: string;
  category?: string;
  defaultVisible?: boolean;
  metadata?: Record<string, unknown>;
}

export interface SimpleGeoJsonLayerOptions extends SimpleLayerOptions {
  type: 'geojson';
  data: Feature | FeatureCollection | string;
  /** Fill color. Defaults to semi-transparent blue. */
  fillColor?: string;
  /** Line/stroke color. Defaults to dark blue. */
  lineColor?: string;
  /** Point circle color. Defaults to red. */
  pointColor?: string;
}

export interface SimpleWmsLayerOptions extends SimpleLayerOptions {
  type: 'wms';
  /** Full WMS GetMap URL template with `{bbox-epsg-3857}` placeholder. */
  url: string;
  attribution?: string;
}

export interface SimpleVectorTilesLayerOptions extends SimpleLayerOptions {
  type: 'vector-tiles';
  /** URL template for vector tiles (pbf). */
  url: string;
  /** Source layer name inside the vector tile. */
  sourceLayer: string;
  /** One of the basic paint types. Defaults to "fill". */
  renderAs?: 'fill' | 'line' | 'circle';
  color?: string;
}

export type CreateSimpleLayerOptions =
  | SimpleGeoJsonLayerOptions
  | SimpleWmsLayerOptions
  | SimpleVectorTilesLayerOptions;

/**
 * Create a `LayerDefinition` from a simplified description.
 *
 * Consumers who need full MapLibre control can construct
 * `LayerDefinition` directly; this helper covers common cases.
 */
export function createSimpleLayer(opts: CreateSimpleLayerOptions): LayerDefinition {
  const base: Pick<LayerDefinition, 'id' | 'label' | 'category' | 'defaultVisible' | 'metadata'> = {
    id: opts.id,
    label: opts.label,
    category: opts.category,
    defaultVisible: opts.defaultVisible ?? true,
    metadata: opts.metadata,
  };

  const sourceId = `custom-${opts.id}`;

  switch (opts.type) {
    case 'geojson': {
      return {
        ...base,
        sources: {
          [sourceId]: {
            type: 'geojson',
            data: opts.data as GeoJSON.GeoJSON,
          },
        },
        layers: [
          {
            id: `${sourceId}-fill`,
            type: 'fill',
            source: sourceId,
            paint: {
              'fill-color': opts.fillColor ?? 'rgba(0, 6, 103, 0.2)',
              'fill-opacity': 0.5,
            },
            filter: ['==', '$type', 'Polygon'],
          } as LayerSpecification,
          {
            id: `${sourceId}-line`,
            type: 'line',
            source: sourceId,
            paint: {
              'line-color': opts.lineColor ?? '#000667',
              'line-width': 2,
            },
            filter: ['==', '$type', 'LineString'],
          } as LayerSpecification,
          {
            id: `${sourceId}-circle`,
            type: 'circle',
            source: sourceId,
            paint: {
              'circle-color': opts.pointColor ?? '#df3c1b',
              'circle-radius': 5,
              'circle-stroke-color': '#000667',
              'circle-stroke-width': 1,
            },
            filter: ['==', '$type', 'Point'],
          } as LayerSpecification,
        ],
      };
    }

    case 'wms': {
      return {
        ...base,
        sources: {
          [sourceId]: {
            type: 'raster',
            tiles: [opts.url],
            tileSize: 256,
            attribution: opts.attribution,
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

    case 'vector-tiles': {
      const renderAs = opts.renderAs ?? 'fill';
      const layerSpec: Record<string, unknown> = {
        id: `${sourceId}-${renderAs}`,
        type: renderAs,
        source: sourceId,
        'source-layer': opts.sourceLayer,
      };

      if (renderAs === 'fill') {
        layerSpec.paint = { 'fill-color': opts.color ?? '#088' };
      } else if (renderAs === 'line') {
        layerSpec.paint = {
          'line-color': opts.color ?? '#088',
          'line-width': 2,
        };
      } else {
        layerSpec.paint = {
          'circle-color': opts.color ?? '#088',
          'circle-radius': 5,
        };
      }

      return {
        ...base,
        sources: {
          [sourceId]: {
            type: 'vector',
            tiles: [opts.url],
          },
        },
        layers: [layerSpec as LayerSpecification],
      };
    }
  }
}
