import type maplibregl from 'maplibre-gl';
import type { Coordinate } from '~/components/CoordinateDirectionPicker/CoordinateDirectionPicker.types';

/** Default center: roughly central Norway. */
export const DEFAULT_CENTER: Coordinate = { latitude: 65.0, longitude: 14.0 };

/** Default zoom level for the overview map. */
export const DEFAULT_ZOOM = 5;

/** Kartverket raster tile style for MapLibre GL. */
export const KARTVERKET_STYLE: maplibregl.StyleSpecification = {
  version: 8,
  sources: {
    kartverket: {
      type: 'raster',
      tiles: ['https://cache.kartverket.no/v1/wmts/1.0.0/topo/default/webmercator/{z}/{y}/{x}.png'],
      tileSize: 256,
      maxzoom: 18,
      attribution: '&copy; <a href="https://www.kartverket.no/">Kartverket</a>',
    },
  },
  layers: [
    {
      id: 'kartverket-topo',
      type: 'raster',
      source: 'kartverket',
    },
  ],
};
