import { Map as OlMap } from "ol";
import { Feature } from "ol";
import { Geometry } from "ol/geom";
import VectorSource from "ol/source/Vector";
import { PropsWithChildren, createContext, useCallback, useContext, useMemo, useRef, useState } from "react";

export type AreaSelectHandler = (features: Feature<Geometry>[]) => void;

type SourceEntry = {
  source: VectorSource;
  onSelect: AreaSelectHandler;
};

type MapContextType = {
  map: OlMap;
  registerSource: (source: VectorSource, onSelect: AreaSelectHandler) => void;
  unregisterSource: (source: VectorSource) => void;
  selectFeaturesInGeometry: (geometry: Geometry) => void;
  isAreaSelectInProgress: () => boolean;
  /** Features to display in the shared FeatureOverlay */
  overlayFeatures: Feature<Geometry>[];
  /** Update the shared overlay features (called by any layer on selection change) */
  setOverlayFeatures: (features: Feature<Geometry>[]) => void;
};

const MapContext = createContext<MapContextType | undefined>(undefined);

export type MapProviderProps = PropsWithChildren & {
  map: OlMap;
};

export function MapProvider({ map, children = null }: MapProviderProps) {
  const sourcesRef = useRef<SourceEntry[]>([]);
  const areaSelectInProgressRef = useRef(false);
  const [overlayFeatures, setOverlayFeatures] = useState<Feature<Geometry>[]>([]);

  const registerSource = useCallback((source: VectorSource, onSelect: AreaSelectHandler) => {
    sourcesRef.current = sourcesRef.current.filter(e => e.source !== source);
    sourcesRef.current.push({ source, onSelect });
  }, []);

  const unregisterSource = useCallback((source: VectorSource) => {
    sourcesRef.current = sourcesRef.current.filter(e => e.source !== source);
  }, []);

  const isAreaSelectInProgress = useCallback(() => areaSelectInProgressRef.current, []);

  const selectFeaturesInGeometry = useCallback((geometry: Geometry) => {
    areaSelectInProgressRef.current = true;
    
    sourcesRef.current.forEach(({ source, onSelect }) => {
      const selected: Feature<Geometry>[] = [];
      source.forEachFeatureIntersectingExtent(geometry.getExtent(), (feature) => {
        const geom = feature.getGeometry();
        if (geom && geometry.intersectsExtent(geom.getExtent())) {
          selected.push(feature as Feature<Geometry>);
        }
      });
      if (selected.length > 0) {
        onSelect(selected);
      }
    });
    
    // Clear flag after a short delay to allow click event to pass
    setTimeout(() => { areaSelectInProgressRef.current = false; }, 100);
  }, []);

  const contextValue = useMemo<MapContextType>(() => ({
    map,
    registerSource,
    unregisterSource,
    selectFeaturesInGeometry,
    isAreaSelectInProgress,
    overlayFeatures,
    setOverlayFeatures,
  }), [map, registerSource, unregisterSource, selectFeaturesInGeometry, isAreaSelectInProgress, overlayFeatures]);

  return (
    <MapContext.Provider value={contextValue}>
      {children}
    </MapContext.Provider>
  );
}

export function useMap() {
  const ctx = useContext(MapContext);
  if (!ctx)
    throw Error(
      "MapProvider context is empty, useMap can only be used within a MapProvider element"
    );
  return ctx;
}