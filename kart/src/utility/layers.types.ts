import type { Feature, FeatureCollection } from 'geojson';
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
// Include / exclude filter config type
// ---------------------------------------------------------------------------

/** Configuration for filtering the built-in layers. */
export type LayerFilterConfig = { include: string[] } | { exclude: string[] };

// ---------------------------------------------------------------------------
// Simple layer factory types (higher-level API for custom layers)
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
