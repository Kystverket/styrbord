import { Feature } from 'ol';
import { FeatureLike } from "ol/Feature";
import { GeoJSON } from 'ol/format';
import { Geometry } from 'ol/geom';
import VectorLayerOl from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { Style } from 'ol/style';
import { useEffect, useRef, useCallback } from 'react';
import { useMap } from '../MapProvider';
import LayerGroup from 'ol/layer/Group';
import { type LabelGetter, createStyleWithLabel } from '../utils/label/labelUtils';
import { useZoomToFeatures } from '../utils/useZoomToFeatures';
import { defaultStyle, defaultSelectedStyle } from '../controls/SelectControls/SelectControls.styles';

export type CustomLayerProps = {
  /** GeoJSON data or array of OpenLayers Features */
  data?: object | Feature<Geometry>[];
  dataTitle?: string;
  /** Optional custom style function or style object */
  style?: Style | ((feature: FeatureLike) => Style);
  /** Optional custom style for selected features */
  selectedStyle?: Style | ((feature: FeatureLike) => Style);
  /** Z-index for layer ordering */
  zIndex?: number;
  /** Programmatically select features (controlled selection) */
  selectedFeatures?: Feature<Geometry>[];
  /** Property name to use for matching features (for controlled selection). If not set, uses object reference. */
  featureKey?: string;
  /** Called when selection changes (supports multi-select with Ctrl/Shift+click) */
  onSelectionChange?: (features: Feature<Geometry>[]) => void;
  /** Whether features are selectable */
  enableSelect?: boolean;
  /** Whether to declutter features and labels */
  declutter?: boolean;
  /** Whether to show permanent labels on features */
  enableLabel?: boolean;
  /** Title for label - property name or function */
  labelTitle?: LabelGetter;
  /** Zoom to selected features when selection changes */
  zoomOnSelect?: boolean;
};

export function SelectLayer({
  data,
  dataTitle,
  style = defaultStyle,
  selectedStyle = defaultSelectedStyle,
  zIndex = 10,
  selectedFeatures,
  featureKey,
  onSelectionChange,
  enableSelect = false,
  declutter = true,
  enableLabel = true,
  labelTitle,
  zoomOnSelect = true,
}: CustomLayerProps) {
  const { map, registerSource, unregisterSource, isAreaSelectInProgress, setOverlayFeatures } = useMap();
  const zoomToFeatures = useZoomToFeatures();
  const layerRef = useRef<VectorLayerOl<VectorSource> | null>(null);
  const sourceRef = useRef<VectorSource | null>(null);
  const selectedSetRef = useRef<Set<Feature<Geometry>>>(new Set());

  // Stable callback ref pattern
  const onSelectionChangeRef = useRef(onSelectionChange);
  onSelectionChangeRef.current = onSelectionChange;

  const notifySelection = useCallback((shouldZoom = true) => {
    const features = Array.from(selectedSetRef.current);
    onSelectionChangeRef.current?.(features);
    setOverlayFeatures(features);
    layerRef.current?.changed();
    if (shouldZoom && zoomOnSelect) zoomToFeatures(features);
  }, [zoomToFeatures, zoomOnSelect, setOverlayFeatures]);

  // Initialize layer and source
  useEffect(() => {
    const source = new VectorSource();
    const layer = new VectorLayerOl({ 
      source, 
      zIndex, 
      declutter,
      properties: { title: dataTitle ?? "Opplastet data" },
    });

    layerRef.current = layer;
    sourceRef.current = source;

    // Find "Temadata" LayerGroup and add layer there
    const findTemaGroup = () => map.getLayers().getArray().find(
      (l) => l instanceof LayerGroup && l.get('title') === 'Temadata'
    ) as LayerGroup | undefined;

    let temaGroup = findTemaGroup();
    let addedToGroup = false;

    if (temaGroup) {
      temaGroup.getLayers().push(layer);
      addedToGroup = true;
    } else {
      const onLayerAdd = () => {
        temaGroup = findTemaGroup();
        if (temaGroup && !addedToGroup) {
          temaGroup.getLayers().push(layer);
          addedToGroup = true;
          map.getLayers().un('add', onLayerAdd);
        }
      };
      map.getLayers().on('add', onLayerAdd);
    }

    // Register for area selection
    registerSource(source, (features) => {
      selectedSetRef.current = new Set(features);
      notifySelection();
    });

    return () => {
      unregisterSource(source);
      const group = findTemaGroup();
      if (group) {
        group.getLayers().remove(layer);
      }
    };
  }, [map, zIndex, declutter, dataTitle, registerSource, unregisterSource, notifySelection]);

  // Update style function
  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;

    layer.setStyle((feature: FeatureLike) => {
      const isSelected = enableSelect && selectedSetRef.current.has(feature as Feature<Geometry>);
      const baseStyle = isSelected
        ? (typeof selectedStyle === 'function' ? selectedStyle(feature) : selectedStyle)
        : (typeof style === 'function' ? style(feature) : style);

      return enableLabel && labelTitle
        ? createStyleWithLabel(baseStyle, feature, labelTitle)
        : baseStyle;
    });
  }, [style, selectedStyle, enableLabel, labelTitle, enableSelect]);

  // Load data into source
  useEffect(() => {
    const source = sourceRef.current;
    if (!source || !data) return;

    source.clear();
    selectedSetRef.current.clear();

    if (Array.isArray(data)) {
      source.addFeatures(data);
    } else {
      const features = new GeoJSON().readFeatures(data, { featureProjection: 'EPSG:3857' });
      source.addFeatures(features);
    }
    
    notifySelection(false); // Don't zoom when data changes
  }, [data, notifySelection]);

  // Sync controlled selection (from outside the component)
  useEffect(() => {
    if (selectedFeatures === undefined) return;
    
    const source = sourceRef.current;
    if (featureKey && source) {
      const selectedKeys = new Set(selectedFeatures.map(f => f.get(featureKey)));
      const matching = source.getFeatures().filter(f => selectedKeys.has(f.get(featureKey)));
      selectedSetRef.current = new Set(matching);
      setOverlayFeatures(matching);
      zoomToFeatures(matching);
    } else {
      selectedSetRef.current = new Set(selectedFeatures);
      setOverlayFeatures(selectedFeatures);
      zoomToFeatures(selectedFeatures);
    }
    
    layerRef.current?.changed();
  }, [selectedFeatures, featureKey, zoomToFeatures, setOverlayFeatures]);

  // Handle click selection
  useEffect(() => {
    if (!enableSelect) return;

    const handleClick = (event: any) => {
      // Skip if area selection just happened
      if (isAreaSelectInProgress()) return;
      
      const feature = map.forEachFeatureAtPixel(event.pixel, (f) => f, {
        layerFilter: (l) => l === layerRef.current,
      }) as Feature<Geometry> | undefined;

      const { ctrlKey, metaKey, shiftKey } = event.originalEvent ?? {};
      const isMultiSelect = ctrlKey || metaKey;

      if (feature) {
        if (isMultiSelect) {
          // Toggle feature in selection
          selectedSetRef.current.has(feature)
            ? selectedSetRef.current.delete(feature)
            : selectedSetRef.current.add(feature);
        } else if (shiftKey) {
          // Add to selection
          selectedSetRef.current.add(feature);
        } else {
          // Replace selection (or deselect if clicking sole selected feature)
          const wasOnlySelected = selectedSetRef.current.has(feature) && selectedSetRef.current.size === 1;
          selectedSetRef.current.clear();
          if (!wasOnlySelected) selectedSetRef.current.add(feature);
        }
      } else if (!isMultiSelect && !shiftKey) {
        // Click on empty space clears selection
        selectedSetRef.current.clear();
      }

      notifySelection(true);
    };

    map.on('click', handleClick);
    return () => map.un('click', handleClick);
  }, [map, enableSelect, notifySelection]);

  return null;
}