/**
 * DrawLayer — manages the vector layer, source, and select interaction for drawn features.
 *
 * This mirrors the SelectionLayer pattern: the layer/source lifecycle is handled here,
 * while DrawControls (rendered as children) only manages the drawing toolbar.
 *
 * Provides a React context so DrawControls can access the source and select interaction.
 */

import { Feature } from 'ol';
import { FeatureLike } from 'ol/Feature';
import { Geometry } from 'ol/geom';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { Select } from 'ol/interaction';
import { click } from 'ol/events/condition';
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useMap } from '../MapProvider';
import {
  drawStyle,
  defaultSelectedStyle,
  skiltStyle,
  skiltSelectedStyle,
} from '../controls/DrawControls/DrawControls.styles';
import { createStyleWithLabel } from '../utils/label/labelUtils';

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

export type DrawLayerContextType = {
  source: VectorSource;
  select: Select;
  featureCount: number;
  selectedCount: number;
};

const DrawLayerContext = createContext<DrawLayerContextType | null>(null);

/** Access the DrawLayer context (source, select, counts). Must be used inside a <DrawLayer>. */
export function useDrawLayer() {
  const ctx = useContext(DrawLayerContext);
  if (!ctx) throw new Error('useDrawLayer must be used within a <DrawLayer>');
  return ctx;
}

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

export type DrawLayerProps = PropsWithChildren<{
  /** Features to load into the source on mount */
  initialFeatures?: Feature<Geometry>[];
  /** Called whenever features are added/removed from the source */
  onFeaturesChange?: (features: Feature<Geometry>[]) => void;
  /** Called when the select interaction changes (click-select on drawn features) */
  onFeaturesSelect?: (features: Feature<Geometry>[]) => void;
  /** Called once the VectorSource is created (e.g. for ExportControls) */
  onSourceReady?: (source: VectorSource) => void;
  /** Show permanent labels on drawn features */
  enableLabel?: boolean;
  /** Prefix for auto-generated feature names (default: "Feature") */
  labelPrefix?: string;
  /** Z-index for layer ordering (default: 100) */
  zIndex?: number;
}>;

export function DrawLayer({
  children,
  initialFeatures,
  onFeaturesChange,
  onFeaturesSelect,
  onSourceReady,
  enableLabel = false,
  labelPrefix = 'Feature',
  zIndex = 100,
}: DrawLayerProps) {
  const { map, setOverlayFeatures } = useMap();

  const [featureCount, setFeatureCount] = useState(0);
  const [selectedCount, setSelectedCount] = useState(0);
  const [ready, setReady] = useState(false);

  const sourceRef = useRef<VectorSource | null>(null);
  const selectRef = useRef<Select | null>(null);
  const featureCounterRef = useRef(0);

  // Stable callback refs (avoids re-creating effect when callbacks change)
  const onFeaturesChangeRef = useRef(onFeaturesChange);
  onFeaturesChangeRef.current = onFeaturesChange;
  const onFeaturesSelectRef = useRef(onFeaturesSelect);
  onFeaturesSelectRef.current = onFeaturesSelect;
  const onSourceReadyRef = useRef(onSourceReady);
  onSourceReadyRef.current = onSourceReady;
  const setOverlayFeaturesRef = useRef(setOverlayFeatures);
  setOverlayFeaturesRef.current = setOverlayFeatures;

  // ---- Layer + source + select lifecycle ----
  useEffect(() => {
    const source = new VectorSource();
    const layer = new VectorLayer({
      source,
      style: (feature: FeatureLike) => {
        const isRotatable = feature.get('heading') !== undefined;
        const baseStyle = isRotatable ? skiltStyle(feature) : drawStyle;
        return enableLabel
          ? createStyleWithLabel(baseStyle, feature, 'name')
          : baseStyle;
      },
      zIndex,
      properties: { title: 'Tegning' },
    });

    sourceRef.current = source;
    map.addLayer(layer);

    // Notify parent that source is ready
    onSourceReadyRef.current?.(source);

    // Load initial features if provided
    if (initialFeatures?.length) {
      source.addFeatures(initialFeatures);
    }

    // Auto-name new features and track count
    source.on('addfeature', (e) => {
      if (!e.feature?.get('name')) {
        featureCounterRef.current += 1;
        e.feature?.set('name', `${labelPrefix} ${featureCounterRef.current}`);
      }
      const features = source.getFeatures();
      setFeatureCount(features.length);
      onFeaturesChangeRef.current?.(features);
    });

    source.on('removefeature', () => {
      const features = source.getFeatures();
      setFeatureCount(features.length);
      onFeaturesChangeRef.current?.(features);
    });

    // Select interaction (click-select drawn features)
    const selectInteraction = new Select({
      condition: click,
      layers: [layer],
      style: (feature: FeatureLike) => {
        const isRotatable = feature.get('heading') !== undefined;
        const baseStyle = isRotatable ? skiltSelectedStyle(feature) : drawStyle;
        return enableLabel
          ? [createStyleWithLabel(baseStyle, feature, 'name'), ...(isRotatable ? [] : [defaultSelectedStyle])]
          : [baseStyle, ...(isRotatable ? [] : [defaultSelectedStyle])];
      },
    });

    selectRef.current = selectInteraction;
    map.addInteraction(selectInteraction);

    const selectedFeatures = selectInteraction.getFeatures();
    const updateSelection = () => {
      const features = [...selectInteraction.getFeatures().getArray()];
      setSelectedCount(features.length);
      setOverlayFeaturesRef.current(features as Feature<Geometry>[]);
      onFeaturesSelectRef.current?.(features);
    };
    selectedFeatures.on('add', updateSelection);
    selectedFeatures.on('remove', updateSelection);

    setReady(true);

    return () => {
      selectedFeatures.un('add', updateSelection);
      selectedFeatures.un('remove', updateSelection);
      map.removeInteraction(selectInteraction);
      map.removeLayer(layer);
      sourceRef.current = null;
      selectRef.current = null;
      setReady(false);
    };
  }, [map, initialFeatures, enableLabel, labelPrefix, zIndex]);

  // Memoize context to avoid unnecessary consumer re-renders
  const contextValue = useMemo<DrawLayerContextType | null>(() => {
    if (!ready || !sourceRef.current || !selectRef.current) return null;
    return {
      source: sourceRef.current,
      select: selectRef.current,
      featureCount,
      selectedCount,
    };
  }, [ready, featureCount, selectedCount]);

  if (!contextValue) return null;

  return (
    <DrawLayerContext.Provider value={contextValue}>
      {children}
    </DrawLayerContext.Provider>
  );
}
