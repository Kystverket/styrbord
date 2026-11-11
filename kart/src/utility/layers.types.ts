import type { Feature, FeatureCollection } from "geojson";
import type { LayerSpecification, SourceSpecification } from "maplibre-gl";

// ---------------------------------------------------------------------------
// Base layer model (exclusive — only one active at a time)
// ---------------------------------------------------------------------------

/**
 * Describes a base (background) map layer.
 *
 * Unlike overlay `LayerDefinition`s, base layers are mutually exclusive:
 * the consumer selects **one** at a time via the `BaseLayersContext`.
 */
export interface BaseLayerDefinition {
  /** Unique identifier for this base layer. */
  id: string;
  /** Human-readable name shown in the base layer switcher UI. */
  label: string;
  /** MapLibre sources keyed by source id. */
  sources: Record<string, SourceSpecification>;
  /** MapLibre layer specifications that reference the sources above. */
  layers: LayerSpecification[];
  /** Attribution string (shown in the map attribution control). */
  attribution?: string;
  /** Extensible metadata bag for application-specific data. */
  metadata?: Record<string, unknown>;
}

// ---------------------------------------------------------------------------
// Core layer model
// ---------------------------------------------------------------------------

/**
 * Colour swatch describing how a layer is drawn, for layer switcher UIs.
 * `createSimpleLayer({ type: "geojson" })` fills this in from its paint colours.
 */
export interface LayerLegend {
  /** Fill colour of the swatch. */
  fillColor?: string;
  /** Opacity of the fill, `0`–`1`. Defaults to `1`. */
  fillOpacity?: number;
  /** Border colour of the swatch. */
  lineColor?: string;
}

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
  /**
   * Secondary line shown under the label in layer switcher UIs
   * (e.g. `"16.10.2026 · Søknad"`).
   */
  description?: string;
  /** Colour swatch shown next to the label in layer switcher UIs. */
  legend?: LayerLegend;
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

export type SimpleLayerType = "geojson" | "wms" | "vector-tiles";

export interface SimpleLayerOptions {
  id: string;
  label: string;
  category?: string;
  /** Secondary line shown under the label in the layer menu. */
  description?: string;
  defaultVisible?: boolean;
  metadata?: Record<string, unknown>;
}

export interface SimpleGeoJsonLayerOptions extends SimpleLayerOptions {
  type: "geojson";
  data: Feature | FeatureCollection | string;
  /** Fill color. Defaults to the `primary` base color. */
  fillColor?: string;
  /** Fill opacity. Defaults to `0.2`. */
  fillOpacity?: number;
  /** Line/stroke color. Defaults to dark blue. */
  lineColor?: string;
  /** Point circle color. Defaults to red. */
  pointColor?: string;
}

export interface SimpleWmsLayerOptions extends SimpleLayerOptions {
  type: "wms";
  /** Full WMS GetMap URL template with `{bbox-epsg-3857}` placeholder. */
  url: string;
  attribution?: string;
}

export interface SimpleVectorTilesLayerOptions extends SimpleLayerOptions {
  type: "vector-tiles";
  /** URL template for vector tiles (pbf). */
  url: string;
  /** Source layer name inside the vector tile. */
  sourceLayer: string;
  /** One of the basic paint types. Defaults to "fill". */
  renderAs?: "fill" | "line" | "circle";
  color?: string;
}

export type CreateSimpleLayerOptions =
  | SimpleGeoJsonLayerOptions
  | SimpleWmsLayerOptions
  | SimpleVectorTilesLayerOptions;
