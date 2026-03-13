import { Map as OlMap, View as OlView } from "ol";
import { Feature } from "ol";
import { defaults as defaultControls } from 'ol/control';
import { Geometry } from "ol/geom";
import 'ol/ol.css';
import { fromLonLat } from "ol/proj";
import VectorSource from 'ol/source/Vector';
import { PropsWithChildren, useCallback, useEffect, useState } from "react";
import { Button } from '@kystverket/styrbord';
import Icon from '../../base/src/components/kystverket/Icon/icon';
import { AreaId, areaBbox } from './types/Areas.types';
import { LayerId } from "./types/Layer.types";
import { LayerSwitcherControls } from './controls/LayerSwitcher/LayerSwitcherControls';
import { LayerSwitcherMixin } from './controls/LayerSwitcher/LayerSwitcherMixin';
import { ThemeId } from "./types/Theme.types";
import { MapProvider, useMap } from "./MapProvider";
import { SelectControls } from "./controls/SelectControls/SelectControls";
import { DrawControls, DrawLayer, FeatureOverlay } from ".";
import type { DrawType } from ".";
import classes from './Map.module.css';
import { ExportControls } from "./controls/ExportControls";

export type MapProps = PropsWithChildren<{
  area: AreaId;
  layers?: LayerId[];
  themes?: ThemeId[];
  showSelectionControls?: boolean;
  showDrawControls?: boolean;
  showExportControls?: boolean;
  showLabels?: boolean;
  declutterMap?: boolean;
  onDrawnFeaturesChange?: (features: Feature<Geometry>[]) => void;
  onDrawnFeaturesSelect?: (features: Feature<Geometry>[]) => void;
  drawLimit?: number;
  drawTypes?: DrawType[];
}>;

function ZoomControls() {
  const { map } = useMap();
  
  const zoom = (delta: number) => {
    const view = map.getView();
    view.animate({ zoom: view.getZoom()! + delta, duration: 250 });
  };
  
  return (
    <div className={classes.zoomButtons}>
      <Button variant="subtle" size="sm" onClick={() => zoom(1)}><Icon material="add" /></Button>
      <Button variant="subtle" size="sm" onClick={() => zoom(-1)}><Icon material="remove" /></Button>
    </div>
  );
}

function MapFeatureOverlay() {
  const { overlayFeatures, setOverlayFeatures } = useMap();
  if (overlayFeatures.length === 0) return null;
  return (
    <FeatureOverlay 
      feature={overlayFeatures} 
      onClose={() => setOverlayFeatures([])} 
    />
  );
}

export const Map = ({ 
  area = 'norway',
  layers = ["norkart", "kartverket-grunnkart", "kartverket-grunnkart-graatone", "kartverket-sjokart", "osm", "tetthetsplott-250", "tetthetsplott-50"], 
  themes = ["isps", "speed-commercial", "speed-recreational", "aquaculture"],
  showSelectionControls = false,
  showDrawControls = false,
  showExportControls = false,
  onDrawnFeaturesChange,
  onDrawnFeaturesSelect,
  drawLimit,
  drawTypes,
  children,
}: MapProps) => {
  const ref = { current: null as HTMLDivElement | null };
  const [map, setMap] = useState<OlMap>();
  const [fullscreenMap, setFullscreenMap] = useState(false);
  const [drawSource, setDrawSource] = useState<VectorSource | null>(null);

  const handleSourceReady = useCallback((source: VectorSource) => {
    setDrawSource(source);
  }, []);

function FullscreenButton() {
  return (
    <div className={classes.fullscreenButton}>
      <Button 
        variant="subtle" 
        size="sm" 
        title={fullscreenMap ? "Lukk fullskjerm" : "Fullskjerm"}
        onClick={() => setFullscreenMap(!fullscreenMap)}>
        <Icon material={fullscreenMap ? "zoom_in_map" : "zoom_out_map"} />
      </Button>
    </div>
  );
}

  useEffect(() => {
    if (fullscreenMap) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [fullscreenMap]);

  useEffect(() => {
    if (!ref.current) return;

    const olMap = new OlMap({
      target: ref.current,
      view: new OlView({ center: [0, 0], zoom: 2 }),
      controls: defaultControls({ zoom: false, rotate: false, attribution: false }),
    });
    
    // Fit to area bbox
    const [minx, miny, maxx, maxy] = areaBbox[area];
    const extent = [
      ...fromLonLat([minx, miny], 'EPSG:3857'),
      ...fromLonLat([maxx, maxy], 'EPSG:3857'),
    ];
    olMap.getView().fit(extent);

    LayerSwitcherMixin({ map: olMap, layers, themes });
    setMap(olMap);

    return () => olMap.dispose();
  }, []);

  return (
    <div ref={ref} className={`${classes.map} ${fullscreenMap ? classes.mapFullscreen : ''}`}>
      {map && (
        <MapProvider map={map}>
          {children}
          <FullscreenButton />
          <div className={classes.controlButtons}>
            <ZoomControls />
            {showSelectionControls && <SelectControls />}
            {showDrawControls && (
                <DrawLayer
                  onSourceReady={handleSourceReady}
                  onFeaturesChange={onDrawnFeaturesChange}
                  onFeaturesSelect={onDrawnFeaturesSelect}
                  enableLabel
                >
                  <DrawControls
                    drawLimit={drawLimit}
                    drawTypes={drawTypes}
                  />
                </DrawLayer>
            )}
          </div>
          <MapFeatureOverlay />
          <div className={classes.layerSwitcher}>
            {showExportControls && <ExportControls source={drawSource} />}
            <LayerSwitcherControls />
          </div>
        </MapProvider>
      )}
    </div>
  );
};