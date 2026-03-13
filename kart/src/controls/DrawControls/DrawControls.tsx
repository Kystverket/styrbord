/**
 * DrawControls - Drawing toolbar for basic shapes.
 *
 * Toolbar items:
 * 1. Point - Draw points/skilt
 * 2. Line - Draw lines
 * 3. Polygon - Draw polygons
 * 4. Undo - Undo last
 * 5. Remove - Remove selected
 */

import { Feature } from 'ol';
import { Geometry } from 'ol/geom';
import { Draw } from 'ol/interaction';

import { useCallback, useRef, useState } from 'react';
import { Button, Dropdown } from '@kystverket/styrbord';
import Icon from '../../../../base/src/components/kystverket/Icon/icon';
import classes from '../../Map.module.css';
import { useMap } from '../../MapProvider';
import { drawStyle, skiltStyle } from './DrawControls.styles';
import { useDrawLayer } from '../../layers/DrawLayer';
import type { DrawControlsProps, DrawType } from '../../types/DrawControls.types';

export function DrawControls({
  onFeatureAdd,
  drawLimit,
  drawTypes = ['Point', 'LineString', 'Polygon'],
}: DrawControlsProps) {
  const { map } = useMap();
  const { source, select, featureCount, selectedCount } = useDrawLayer();
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeType, setActiveType] = useState<DrawType | null>(null);
  const interactionRef = useRef<Draw | null>(null);

  // Stable callback ref
  const onFeatureAddRef = useRef(onFeatureAdd);
  onFeatureAddRef.current = onFeatureAdd;

  // Keep refs to avoid stale closures in OL event handlers
  const sourceRef = useRef(source);
  sourceRef.current = source;
  const selectRef = useRef(select);
  selectRef.current = select;
  const activeTypeRef = useRef(activeType);
  activeTypeRef.current = activeType;

  const cancelDraw = useCallback(() => {
    if (interactionRef.current) {
      map.removeInteraction(interactionRef.current);
      interactionRef.current = null;
    }
    setActiveType(null);
  }, [map]);

  const startDraw = useCallback(
    (type: DrawType, rotatable = false) => {
      if (activeTypeRef.current) return;

      setActiveType(type);

      // Disable select while drawing
      selectRef.current.setActive(false);

      const interaction = new Draw({
        source: sourceRef.current,
        type,
        style: rotatable ? skiltStyle : drawStyle, // TODO: Only skilt is rotatable. Might be useful to allow this for other types as well later
      });

      interactionRef.current = interaction;
      map.addInteraction(interaction);

      interaction.on('drawend', (event) => {
        map.removeInteraction(interaction);
        interactionRef.current = null;
        setActiveType(null);

        // Mark the feature as rotatable so the layer renders it correctly
        if (rotatable) {
          event.feature.set('heading', 0);
        }

        // Notify callback
        onFeatureAddRef.current?.(event.feature);

        // Re-enable select and select the newly drawn feature
        selectRef.current.setActive(true);
        selectRef.current.getFeatures().clear();
        selectRef.current.getFeatures().push(event.feature);
      });
    },
    [map],
  );

  const toggleExpanded = () => {
    if (activeType) {
      cancelDraw();
    }
    setIsExpanded(!isExpanded);
  };

  const removeLastDrawing = () => {
    const features = source.getFeatures();
    if (features.length > 0) {
      source.removeFeature(features[features.length - 1]);
    }
  };

  const removeSelectedDrawings = () => {
    const selected = select.getFeatures();
    selected.forEach((feature) => {
      source.removeFeature(feature as Feature<Geometry>);
    });
    selected.clear();
  };

  const atDrawLimit = drawLimit !== undefined && featureCount >= drawLimit;

  return (
    <div className={classes.controlButtonsRow}>
      <Button
        variant="subtle"
        size="sm"
        onClick={toggleExpanded}
        aria-expanded={isExpanded}
        title={isExpanded ? 'Lukk tegneverktøy' : 'Åpne tegneverktøy'}
      >
        <Icon material={isExpanded ? 'chevron_left' : 'draw'} />
      </Button>

      {isExpanded && (
        <>
          {/* 1. Punkt */}
          {drawTypes.includes('Point') &&
          <>
            <Button
              variant="subtle"
              size="sm"
              disabled={activeType !== null || atDrawLimit}
              title="Plasser punkt"
              popovertarget='point-placement'
            >
            <Icon material="pin_drop" />
            </Button>
            <Dropdown id="point-placement">
              <Dropdown.List>
                <Dropdown.Item>
                  <Dropdown.Button            
                    onClick={() => startDraw('Point')}
                  >
                    <Icon material="pin_drop" />Punkt
                  </Dropdown.Button>
                  <Dropdown.Button
                    onClick={() => startDraw('Point', true)}
                  >
                    <Icon material="signpost" />Skilt
                  </Dropdown.Button>
                </Dropdown.Item>
              </Dropdown.List>
            </Dropdown>
          </>}

          {/* 2. Linje */}
          {drawTypes.includes('LineString') &&
          <>
            <Button
              variant="subtle"
              size="sm"
              disabled={activeType !== null || atDrawLimit}
              onClick={() => startDraw('LineString')}
              title="Tegn linje"
            >
              <Icon material="polyline" />
            </Button>
          </>}

          {/* 3. Polygon */}
          {drawTypes.includes('Polygon') &&
          <>
            <Button
              variant="subtle"
              size="sm"
              disabled={activeType !== null || atDrawLimit}
              onClick={() => startDraw('Polygon')}
              title="Tegn polygon"
            >
              <Icon material="activity_zone" />

            </Button>
          </>}

          {/* Cancel button when drawing */}
          {activeType && (
            <Button
              variant="subtle"
              size="sm"
              onClick={cancelDraw}
              title="Avbryt"
              color="neutral"
            >
              <Icon material="close" />
            </Button>
          )}

          {/* 3. Angre siste */}
          {featureCount > 0 && 
          <Button
            variant="subtle"
            size="sm"
            onClick={removeLastDrawing}
            title="Angre siste"
            color='neutral'
          >
            <Icon material="undo" />
          </Button>
          }

          {/* 4. Slett valgte */}
          {featureCount > 0 && 
          <Button
            variant="subtle"
            size="sm"
            onClick={removeSelectedDrawings}
            title="Slett valgte"
            color='danger'
            disabled={selectedCount === 0}
          >
            <Icon material="delete" />
          </Button>
          }
        </>
      )}
    </div>
  );
}
