export const layerIdList = [
  'osm',
  'norkart',
  'kartverket-grunnkart',
  'kartverket-grunnkart-graatone',
  'kartverket-sjokart',
  'tetthetsplott-250',
  'tetthetsplott-50',
] as const;

export type LayerId = (typeof layerIdList)[number];
