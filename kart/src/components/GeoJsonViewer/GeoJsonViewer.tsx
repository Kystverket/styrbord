"use client";

import {
  useContext,
  useEffect,
  useMemo,
  useState,
  useCallback,
  useRef,
} from "react";
import type { GeoJSONSource } from "maplibre-gl";
import type * as maplibregl from "maplibre-gl";
import type {
  Feature,
  FeatureCollection,
  Geometry,
  GeoJsonProperties,
} from "geojson";

import styles from "~/components/shared/MapPicker.module.css";
import type { GeoJsonStyle, GeoJsonViewerProps } from "./GeoJsonViewer.types";
import { computeBounds } from "~/utility/geojson";
import { useMaplibreMap } from "~/hooks/useMaplibreMap";
import { CustomLayersContext } from "~/utility/customLayersContext";
import type { LayerDefinition } from "~/utility/layers.types";
import {
  useFeatureInteraction,
  type InteractiveFeature,
} from "~/hooks/useFeatureInteraction";
import { useWmsFeatureInfo } from "~/hooks/useWmsFeatureInfo";
import type { Coordinate } from "~/utility/types";
import { LABEL_HALO_COLOR, LABEL_TEXT_COLOR } from "~/utility/mapColors";
import {
  DEFAULT_STYLE,
  FILL_LAYER,
  LINE_LAYER,
  POINT_LAYER,
  POINT_STROKE_LAYER,
  SOURCE_ID,
  INTERACTIVE_LAYERS,
  LABEL_LAYER,
  ALL_LAYERS,
  HIGHLIGHT_LAYERS,
  removeLayers,
  toFeatureCollection,
  addHighlightLayers,
  updateHoverHighlight,
  updateSelectionHighlight,
  addStyledLayers,
} from "./GeoJsonViewer.utils";
import { LayerToggle } from "../LayerToggle/LayerToggle";
import type { LayerToggleExtraLayer } from "../LayerToggle/LayerToggle.types";
import { GeoJsonViewerHoverPopup } from "./GeoJsonViewerHoverPopup";
import { GeoJsonViewerFitBoundsControl } from "./GeoJsonViewerFitBoundsControl";
import { MapCenterAction } from "../shared/MapCenterAction";

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

const LABEL_SOURCE = "geojson-viewer-labels";

const EMPTY_FC: FeatureCollection = { type: "FeatureCollection", features: [] };

/**
 * `fc` plus the features of every given custom layer whose GeoJSON source
 * holds inline data. Sources given as a URL are skipped — their extent is
 * unknown until MapLibre loads them.
 */
function visibleFeatures(
  fc: FeatureCollection,
  layers: LayerDefinition[],
): FeatureCollection {
  const extra: Feature[] = [];
  for (const layer of layers) {
    for (const source of Object.values(layer.sources)) {
      if (source.type !== "geojson" || typeof source.data !== "object") {
        continue;
      }
      const sourceData = source.data as GeoJSON.GeoJSON;
      if (sourceData.type === "FeatureCollection") {
        extra.push(...sourceData.features);
      } else if (sourceData.type === "Feature") {
        extra.push(sourceData);
      }
    }
  }
  if (extra.length === 0) return fc;
  return { ...fc, features: [...fc.features, ...extra] };
}

/** Whether a hovered/clicked feature belongs to the viewer's own `data`. */
function isViewerFeature(feature: InteractiveFeature): boolean {
  return (feature as { source?: unknown }).source === SOURCE_ID;
}

/** Stable default for the `getLabel` prop — avoids a new function reference on every render. */
const DEFAULT_GET_LABEL = (feature: Feature<Geometry, GeoJsonProperties>) =>
  feature.properties?.nummer ? `#${feature.properties.nummer}` : undefined;

/**
 * GeoJsonViewer — display GeoJSON data on an interactive Kartverket map.
 *
 * Renders Point, LineString, Polygon (and their Multi-variants) using
 * MapLibre GL layers. The map auto-fits to the data bounds by default.
 *
 * Supports feature hover (with customizable content per type) and selection
 * (single or multi-select with Ctrl/Cmd).
 */
export function GeoJsonViewer({
  data,
  fitBounds = true,
  fitBoundsPadding = 40,
  geoJsonStyle: styleProp,
  dataLayer,
  showLayerToggle = true,
  showFitBoundsControl = true,
  height,
  className,
  disabled,
  hoverable = true,
  selectable = true,
  onHover,
  onSelect,
  hoverContent,
  onCoordinateClick,
  showCenterAction,
  showZoomControls,
  showFullscreenControl,
  getLabel = DEFAULT_GET_LABEL,
}: GeoJsonViewerProps) {
  const layerStyle: Required<GeoJsonStyle> = {
    ...DEFAULT_STYLE,
    ...styleProp,
  };

  // Strip foreign members and normalise to FeatureCollection
  const fc = useMemo(() => toFeatureCollection(data), [data]);

  // Visibility of `data`, switchable from the layer menu when `dataLayer` is set
  const [dataVisible, setDataVisible] = useState(
    dataLayer?.defaultVisible ?? true,
  );

  // What "fit to data" covers: whatever is switched on — `data` when visible,
  // plus the inline GeoJSON of visible custom layers (`<CustomLayersProvider
  // layers>`), so the map frames what the user is actually looking at.
  const { layers: customLayers, visibleLayerIds: visibleCustomIds } =
    useContext(CustomLayersContext);
  const boundsFc = useMemo(
    () =>
      visibleFeatures(
        dataVisible ? fc : EMPTY_FC,
        customLayers.filter((def) => visibleCustomIds.has(def.id)),
      ),
    [fc, dataVisible, customLayers, visibleCustomIds],
  );
  // Read inside the setup effect without re-running it (which would re-add the
  // source and layers) every time a custom layer changes.
  const boundsFcRef = useRef(boundsFc);
  boundsFcRef.current = boundsFc;

  // Track whether layers are ready for interaction
  const [layersReady, setLayersReady] = useState(false);

  // Track hover popup position
  const [hoverPosition, setHoverPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);

  // ----- Coordinate click → WMS feature info -----
  const [clickedCoordinate, setClickedCoordinate] = useState<Coordinate | null>(
    null,
  );

  const handleMapClick = useCallback(
    (coord: Coordinate) => {
      if (onCoordinateClick) {
        setClickedCoordinate(coord);
      }
    },
    [onCoordinateClick],
  );

  const { mapContainerRef, mapRef, mapReady, mapVersion } = useMaplibreMap({
    disabled,
    height,
    onMapClick: onCoordinateClick ? handleMapClick : undefined,
    showZoomControls,
    showFullscreenControl,
  });

  const onCoordinateClickRef = useRef(onCoordinateClick);
  onCoordinateClickRef.current = onCoordinateClick;

  const { result: featureInfoResult } = useWmsFeatureInfo({
    mapRef,
    coordinate: clickedCoordinate,
    enabled: !!onCoordinateClick,
  });

  useEffect(() => {
    if (featureInfoResult) {
      onCoordinateClickRef.current?.(featureInfoResult);
    }
  }, [featureInfoResult]);

  // ----- Feature interaction hook -----
  const handleHover = useCallback(
    (
      feature: InteractiveFeature | null,
      event: maplibregl.MapMouseEvent | null,
    ) => {
      onHover?.(feature, event);

      // Update hover highlight
      const map = mapRef.current;
      if (map && layersReady) {
        // The highlight layers only cover `data`; features from custom
        // layers get the popup but no highlight.
        const featureId =
          feature && isViewerFeature(feature) ? (feature.id ?? null) : null;
        updateHoverHighlight(map, featureId);
      }

      // Update hover popup position
      if (event && feature) {
        setHoverPosition({ x: event.point.x, y: event.point.y });
      } else {
        setHoverPosition(null);
      }
    },
    [onHover, mapRef, layersReady],
  );

  const handleSelect = useCallback(
    (features: InteractiveFeature[] | null) => {
      onSelect?.(features);

      // Update selection highlight
      const map = mapRef.current;
      if (map && layersReady) {
        const featureIds =
          features
            ?.filter(isViewerFeature)
            .map((f) => f.id)
            .filter((id): id is string | number => id !== undefined) ?? [];
        updateSelectionHighlight(map, featureIds);
      }
    },
    [onSelect, mapRef, layersReady],
  );

  // Hover and select also reach the GeoJSON layers from
  // `<CustomLayersProvider>`. Hidden layers return no features, so a layer
  // switched off in the menu stops reacting by itself.
  const interactiveLayerIds = useMemo(
    () => [
      ...customLayers
        .filter((def) =>
          Object.values(def.sources).some((src) => src.type === "geojson"),
        )
        .flatMap((def) => def.layers.map((l) => l.id)),
      ...INTERACTIVE_LAYERS,
    ],
    [customLayers],
  );

  const { hoveredFeature } = useFeatureInteraction({
    mapRef,
    layerIds: interactiveLayerIds,
    sourceId: SOURCE_ID,
    enabled: layersReady && !disabled,
    hoverable,
    selectable,
    onHover: handleHover,
    onSelect: handleSelect,
  });

  // ----- Single effect: add / update GeoJSON source + layers -----
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    const setup = () => {
      try {
        // Add or update the GeoJSON source
        const existingSource = map.getSource(SOURCE_ID);
        if (existingSource) {
          (existingSource as GeoJSONSource).setData(fc);
        } else {
          map.addSource(SOURCE_ID, { type: "geojson", data: fc });
        }

        // Add layers (idempotent — skipped if they already exist).
        addStyledLayers(
          map,
          SOURCE_ID,
          {
            fill: FILL_LAYER,
            line: LINE_LAYER,
            pointStroke: POINT_STROKE_LAYER,
            point: POINT_LAYER,
          },
          layerStyle,
        );

        // Add highlight layers for hover and selection effects
        addHighlightLayers(map, layerStyle);

        // Mark layers as ready for interaction
        setLayersReady(true);

        // Fit bounds
        if (fitBounds) {
          const bounds = computeBounds(boundsFcRef.current);
          if (bounds) {
            map.fitBounds(bounds, {
              padding: fitBoundsPadding,
              maxZoom: 16,
              duration: 300,
            });
          }
        }

        // Force re-layout + repaint to ensure vector layers composite
        // on top of the raster base tiles.
        map.resize();
        map.triggerRepaint();
      } catch {
        // map may already be destroyed
      }
    };

    // Run setup as soon as the style is ready. isStyleLoaded() handles the
    // case where "load" already fired; once("load") handles the case where
    // it hasn't.  The base layer is now baked into the initial style by
    // useMaplibreMap so there is no ordering race.
    if (map.isStyleLoaded()) {
      setup();
    } else {
      map.once("load", setup);
    }

    return () => {
      map.off("load", setup);
      setLayersReady(false);
      removeLayers(map);
    };
  }, [fc, mapVersion]);

  // ----- Feature labels -----
  // Renders a symbol layer with labels computed via getLabel().
  // Uses a dedicated GeoJSON source so label text can be computed dynamically.
  const getLabelRef = useRef(getLabel);
  getLabelRef.current = getLabel;

  useEffect(() => {
    const map = mapRef.current;
    if (!map || !mapReady) return;

    const ensureLayer = () => {
      if (!map.getSource(LABEL_SOURCE)) {
        map.addSource(LABEL_SOURCE, {
          type: "geojson",
          data: { type: "FeatureCollection", features: [] },
        });
      }
      if (!map.getLayer(LABEL_LAYER)) {
        map.addLayer({
          id: LABEL_LAYER,
          type: "symbol",
          source: LABEL_SOURCE,
          layout: {
            "text-field": ["get", "_label"],
            "text-size": 16,
            "text-anchor": "left",
            "text-offset": [1.2, 0],
            "text-allow-overlap": true,
            "text-optional": false,
          },
          paint: {
            "text-color": LABEL_TEXT_COLOR,
            "text-halo-color": LABEL_HALO_COLOR,
            "text-halo-width": 2,
          },
        });
      }
    };

    if (map.isStyleLoaded()) {
      ensureLayer();
    } else {
      map.once("load", ensureLayer);
    }

    return () => {
      map.off("load", ensureLayer);
      try {
        if (map.getLayer(LABEL_LAYER)) map.removeLayer(LABEL_LAYER);
        if (map.getSource(LABEL_SOURCE)) map.removeSource(LABEL_SOURCE);
      } catch {
        // map may already be destroyed
      }
    };
  }, [mapVersion]);

  // Update label data whenever fc or getLabel changes.
  useEffect(() => {
    const map = mapRef.current;
    const currentGetLabel = getLabelRef.current;
    if (!map || !mapReady || !currentGetLabel) return;

    const labelledFc: FeatureCollection =
      fc && fc.features.length > 0
        ? {
            type: "FeatureCollection",
            features: fc.features.map((feature) => ({
              ...feature,
              properties: {
                ...feature.properties,
                _label: currentGetLabel(feature) ?? "",
              },
            })),
          }
        : { type: "FeatureCollection", features: [] };

    const updateData = () => {
      const src = map.getSource(LABEL_SOURCE) as maplibregl.GeoJSONSource;
      if (src) {
        src.setData(labelledFc as GeoJSON.FeatureCollection);
      }
    };

    if (map.isStyleLoaded()) {
      updateData();
    } else {
      map.once("load", updateData);
    }
  }, [mapVersion, fc]);

  // ----- Show / hide `data` from the layer menu -----
  // Re-applied whenever the layers are (re)created, since they are added
  // visible.
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !mapReady || !layersReady) return;
    const visibility = dataVisible ? "visible" : "none";
    for (const id of [...ALL_LAYERS, ...HIGHLIGHT_LAYERS, LABEL_LAYER]) {
      if (map.getLayer(id)) map.setLayoutProperty(id, "visibility", visibility);
    }
  }, [dataVisible, layersReady, mapReady, mapVersion, fc]);

  const extraLayers = useMemo<LayerToggleExtraLayer[] | undefined>(
    () =>
      dataLayer && [
        {
          id: SOURCE_ID,
          label: dataLayer.label,
          description: dataLayer.description,
          category: dataLayer.category,
          legend: {
            fillColor: layerStyle.fillColor,
            fillOpacity: layerStyle.fillOpacity,
            lineColor: layerStyle.lineColor,
          },
          visible: dataVisible,
          onToggle: () => setDataVisible((v) => !v),
        },
      ],
    [
      dataLayer?.label,
      dataLayer?.description,
      dataLayer?.category,
      layerStyle.fillColor,
      layerStyle.fillOpacity,
      layerStyle.lineColor,
      dataVisible,
    ],
  );

  return (
    <div
      ref={mapContainerRef}
      className={[styles.mapContainer, className].filter(Boolean).join(" ")}
    >
      {showLayerToggle && <LayerToggle extraLayers={extraLayers} />}
      {showFitBoundsControl && !disabled && (
        <GeoJsonViewerFitBoundsControl
          mapRef={mapRef}
          mapVersion={mapVersion}
          fc={boundsFc}
          padding={fitBoundsPadding}
        />
      )}
      {!disabled && (
        <MapCenterAction mapRef={mapRef} visible={showCenterAction} />
      )}
      {hoverable && hoveredFeature && hoverPosition && (
        <GeoJsonViewerHoverPopup
          feature={hoveredFeature}
          position={hoverPosition}
          hoverContent={hoverContent}
        />
      )}
    </div>
  );
}

export default GeoJsonViewer;
