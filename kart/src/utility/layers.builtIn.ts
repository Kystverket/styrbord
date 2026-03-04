import type { LayerSpecification } from 'maplibre-gl';
import type { LayerDefinition } from '~/utility/layers.types';

// ---------------------------------------------------------------------------
// Built-in layer registry
// ---------------------------------------------------------------------------

/** Helper: create a Kystverket WMS raster layer definition. */
function kystverketWms(id: string, label: string, wmsLayers: string, category?: string): LayerDefinition {
  const sourceId = `kv-${id}`;
  const queryParams = {
    SERVICE: 'WMS',
    VERSION: '1.3.0',
    REQUEST: 'GetMap',
    LAYERS: wmsLayers,
    STYLES: '',
    CRS: 'EPSG:3857',
    BBOX: '{bbox-epsg-3857}',
    GUI: '2',
    EXCEPTIONS: 'XML',
    WIDTH: 256,
    HEIGHT: 256,
    FORMAT: 'image/png',
    INFOFORMAT: 'text/html',
    TRANSPARENT: 'TRUE',
    QUERYABLE: 'true',
    TRANSITIONEFFECT: 'resize',
  };
  return {
    id,
    label,
    category,
    defaultVisible: false,
    sources: {
      [sourceId]: {
        type: 'raster',
        tiles: [
          `https://services.kystverket.no/mapserv.ashx?` +
            Object.entries(queryParams)
              .map(([key, value]) => `${key}=${value}`)
              .join('&'),
        ],
        tileSize: 256,
        attribution: '&copy; <a href="https://www.kystverket.no/">Kystverket</a>',
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
  kystverketWms('HovedOgBiled', 'Hoved- og biled', 'layer_552', 'Navigasjon'),
  kystverketWms('Farledsareal', 'Farledsareal', 'layer_554', 'Navigasjon'),
];
