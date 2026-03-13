import { Map } from "ol";
import WMTSCapabilities from "ol/format/WMTSCapabilities.js";
import LayerGroup from "ol/layer/Group";
import TileLayer from "ol/layer/Tile";
import { WMTS, XYZ } from "ol/source";
import OSM from "ol/source/OSM";
import TileWMS from "ol/source/TileWMS";
import { optionsFromCapabilities } from "ol/source/WMTS";
import { LayerId } from "../../types/Layer.types";
import { ThemeId } from "../../types/Theme.types";

interface ILayerSwitcherMixinProps {
  map: Map;
  layers?: LayerId[];
  themes?: ThemeId[];
}

export const LayerSwitcherMixin = async function ({ map, layers = [], themes = [] }: ILayerSwitcherMixinProps): Promise<Map> {
  const parser = new WMTSCapabilities();

  // Safely fetch layers with error handling
  async function safeLayerFetch<T>(
    fetchFn: () => Promise<T | null>,
    layerName: string
  ): Promise<T | null> {
    try {
      return await fetchFn();
    } catch (error) {
      console.error(`Failed to load layer: ${layerName}`, error);
      return null;
    }
  }

  // Create Kartverket WMTS layer
  async function createKartverketWMTSLayer(
    title: string,
    layer: string,
    visible: boolean = false
  ): Promise<TileLayer<WMTS> | null> {
    const wmtsServiceUrl = "https://cache.kartverket.no/v1/wmts/1.0.0/";
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    const response = await fetch(`${wmtsServiceUrl}WMTSCapabilities.xml`, {
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    const capabilitiesText = await response.text();
    const capabilities = parser.read(capabilitiesText);
    const sourceOptions = optionsFromCapabilities(capabilities, {
      layer,
      matrixSet: "webmercator",
    });

    if (!sourceOptions) return null;

    return new TileLayer({
      properties: { title, type: "base" },
      visible,
      source: new WMTS(sourceOptions),
    });
  }

  // Create OSM layer
  function createOSMLayer(
    title: string,
    layer: string,
    visible: boolean = true): TileLayer<OSM> {
    return new TileLayer({
      properties: { title, layer, type: "base" },
      visible,
      source: new OSM(),
    });
  }

  // Create WMS layer
  function createWMSLayer(
    title: string,
    url: string,
    layerNames: string,
    options: { visible?: boolean; type?: string; crossOrigin?: string } = {}
  ): TileLayer<TileWMS> {
    return new TileLayer({
      properties: {
        title,
        ...(options.type && { type: options.type }),
      },
      visible: options.visible ?? false,
      source: new TileWMS({
        urls: [url],
        params: {
          LAYERS: layerNames,
          QUERYABLE: false,
          TILED: true,
          TRANSITIONEFFECT: "resize",
          TRANSPARENT: true,
          SRS: "EPSG:3857",
        },
        hidpi: false,
        serverType: "geoserver",
        transition: 0,
        crossOrigin: options.crossOrigin ?? undefined,
      }),
    });
  }

  // Layer configuration mapping
  type LayerConfig = {
    id: LayerId;
    create: () => Promise<TileLayer<any> | null> | TileLayer<any>;
  };

  const layerConfigs: LayerConfig[] = [
    { id: "osm", create: () => createOSMLayer("OpenStreetMap", "osm", false) },
    { id: "kartverket-grunnkart", create: () => createKartverketWMTSLayer("Kartverket", "topo", false) },
    { id: "kartverket-grunnkart-graatone", create: () => createKartverketWMTSLayer("Kartverket (gråtone)", "topograatone", false) },
    { id: "kartverket-sjokart", create: () => createKartverketWMTSLayer("Kartverket sjøkart", "sjokartraster", false) },
    { id: "tetthetsplott-250", create: () => createWMSLayer(
      "AIS tetthetsplott 250m (2017)",
      "https://wms-geo.kystverket.no/density?version=1.3.0&request=GetCapabilities&service=WMS",
      "AIS-density-Europe"
    )},
    { id: "tetthetsplott-50", create: () => createWMSLayer(
      "AIS tetthetsplott 50m (2017)",
      "https://wms-geo.kystverket.no/density?version=1.3.0&request=GetCapabilities&service=WMS",
      "AIS-density-Norway-2016"
    )},
  ];

  // Theme configuration mapping
  type ThemeConfig = {
    id: ThemeId;
    create: () => TileLayer<TileWMS>;
  };

  const themeConfigs: ThemeConfig[] = [
    { id: "isps", create: () => createWMSLayer(
      "ISPS Havneanlegg",
      "https://services.kystverket.no/wms.ashx?version=1.3.0&service=WMS",
      "layer_420",
      { crossOrigin: "Anonymous" }
    )},
    { id: "speed-commercial", create: () => createWMSLayer(
      "Fartsgrenser for næringsfartøy",
      "https://services.kystverket.no/wms.ashx?version=1.3.0&service=WMS",
      "layer_760,layer_761",
      { crossOrigin: "Anonymous" }
    )},
    { id: "speed-recreational", create: () => createWMSLayer(
      "Fartsgrenser for fritidsfartøy",
      "https://services.kystverket.no/wms.ashx?version=1.3.0&service=WMS",
      "layer_759,layer_755",
      { crossOrigin: "Anonymous" }
    )},
    { id: "aquaculture", create: () => createWMSLayer(
      "Akvakulturanlegg",
      "https://gis.fiskeridir.no/server/services/fiskeridirWMS_akva/MapServer/WMSServer?",
      "akvakultur_lokaliteter",
      { crossOrigin: "Anonymous" }
    )},
  ];

  const requestedLayerConfigs = layerConfigs.filter(config => layers.includes(config.id));
  requestedLayerConfigs.sort((a, b) => layers.indexOf(a.id) - layers.indexOf(b.id));
  
  const defaultVisibleId = layers.includes("osm") ? "osm" : layers[0];
  
  const layerPromises = requestedLayerConfigs.map((config) => 
    safeLayerFetch(async () => {
      const layer = await config.create();
      if (layer) {
        layer.setVisible(config.id === defaultVisibleId);
      }
      return layer;
    }, config.id)
  );
  const createdLayers = await Promise.all(layerPromises);
  const validLayers = createdLayers.filter((layer): layer is TileLayer<any> => layer !== null);

  // Filter and create only requested themes
  const requestedThemeConfigs = themeConfigs.filter(config => themes.includes(config.id));
  const createdThemes = requestedThemeConfigs.map(config => config.create());

  // Build layer groups
  const layerGroups: LayerGroup[] = [];

  if (validLayers.length > 0) {
    layerGroups.push(new LayerGroup({
      properties: { title: "Bakgrunnskart" },
      layers: validLayers,
    }));
  }

  if (createdThemes.length > 0) {
    layerGroups.push(new LayerGroup({
      properties: { title: "Temadata" },
      layers: createdThemes,
    }));
  }

  map.getLayers().extend(layerGroups);
  return map;
};
