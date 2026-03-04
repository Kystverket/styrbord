import type { LayerSpecification } from 'maplibre-gl';
import type { LayerDefinition } from '~/utility/layers.types';
import { HAVNEDATA_LAYER_NAMES } from '~/utility/layers.types';

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
