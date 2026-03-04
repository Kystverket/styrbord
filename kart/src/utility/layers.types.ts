// Add or remove layer names here to control which layers are available in the Havnedata layer
// See https://www.kartverket.no/om-kartverket/nyheter/til-sjos/2024/april/oppdatert-wms-tjeneste-for-havnedata-publisert-i-geonorge
// and https://wms.geonorge.no/skwms1/wms.havnedata?request=GetCapabilities&service=WMS for the WMS capabilities
export const HAVNEDATA_LAYER_NAMES = [
  "Fender",
  "Kamera",
  "VA-Uttak",
  "Kran",
  "Kaifront",
  "Fortoyningsinnretning",
  "Havneanlegg",
  "Lastbegrensningsomrade",
  "Havneomrade",
] as const;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mapLayers = [
  "Bilder",
  "Havnedata",
  "Fiskerihavner",
  "Fyreiendommer",
  "ISPSHavneanlegg",
  "AnkringsomraderSjotransporten",
  "OpplagsomraderSjotransport",
  "RiggomraderSjo",
] as const;

export type MapLayer = (typeof mapLayers)[number];

export type Whitelist = {
  whitelist?: MapLayer[];
};

export type Blacklist = {
  blacklist?: MapLayer[];
};

export type VisibleLayersConfig = Whitelist | Blacklist;

const isWhitelist = (layers: VisibleLayersConfig): layers is Whitelist =>
  Object.hasOwn(layers, "whitelist");

export interface MapDefaultLayersProps {
  layers?: VisibleLayersConfig;
}

export const isLayerVisible = (
  layer: MapLayer,
  layers?: VisibleLayersConfig,
) => {
  if (!layers) {
    return true;
  }

  if (isWhitelist(layers)) {
    return layers.whitelist?.includes(layer);
  } else {
    return !layers.blacklist?.includes(layer);
  }
};
