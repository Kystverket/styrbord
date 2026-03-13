import { Polygon } from 'ol/geom';
import { Draw } from 'ol/interaction';
import { GeometryFunction } from 'ol/interaction/Draw';
import { Button } from '@kystverket/styrbord';
import Icon from '../../../../base/src/components/kystverket/Icon/icon';
import { useMap } from '../../MapProvider';
import classes from '../../Map.module.css';
import { useState } from 'react';
import { selectDrawStyle } from './SelectControls.styles';

type SelectType = 'box' | 'polygon' | 'freehand';

export function SelectControls() {
  const { map, selectFeaturesInGeometry } = useMap();
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeType, setActiveType] = useState<SelectType | null>(null);

  const startDraw = (type: SelectType) => {
    if (activeType) return; // Already drawing
    
    setActiveType(type);
    let interaction: Draw;

    if (type === 'box') {
      const boxGeometryFunction: GeometryFunction = (coordinates, geometry) => {
        const coords = coordinates as number[][];
        if (!geometry) geometry = new Polygon([]);
        const start = coords[0];
        const end = coords[coords.length - 1];
        (geometry as Polygon).setCoordinates([[
          start,
          [start[0], end[1]],
          end,
          [end[0], start[1]],
          start
        ]]);
        return geometry;
      };

      interaction = new Draw({
        type: 'LineString',
        maxPoints: 2,
        geometryFunction: boxGeometryFunction,
        style: selectDrawStyle,
      });
    } else {
      interaction = new Draw({
        type: 'Polygon',
        style: selectDrawStyle,
        freehand: type === 'freehand',
      });
    }

    map.addInteraction(interaction);

    interaction.on('drawend', (event) => {
      const geometry = event.feature.getGeometry();
      if (geometry) {
        selectFeaturesInGeometry(geometry);
      }
      map.removeInteraction(interaction);
      setActiveType(null);
    });
  };

  const cancelDraw = () => {
    setActiveType(null);
    map.getInteractions().forEach((interaction) => {
      if (interaction instanceof Draw) {
        map.removeInteraction(interaction);
      }
    });
  };

  const toggleExpanded = () => {
    if (activeType) {
      cancelDraw();
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={classes.controlButtonsRow}>
      <Button 
        variant="subtle" 
        size="sm" 
        onClick={toggleExpanded}
        aria-expanded={isExpanded}
        title='Velg features'
      >
        <Icon material={isExpanded ? "chevron_left" : "left_click"} />
      </Button>
      {isExpanded && (
        <>
          <Button 
            variant="subtle" 
            size="sm" 
            disabled={activeType !== null}
            onClick={() => startDraw('box')}
            title='Velg innen boks'
          >
            <Icon material="square" />
          </Button>
          <Button 
            variant="subtle" 
            size="sm" 
            disabled={activeType !== null}
            onClick={() => startDraw('polygon')}
            title='Velg innen polygon'
          >
            <Icon material="activity_zone" />
          </Button>
          <Button 
            variant="subtle" 
            size="sm" 
            disabled={activeType !== null}
            onClick={() => startDraw('freehand')}
            title='Velg med frihånd'
          >
            <Icon material="lasso_select" />
          </Button>
          {activeType && (
            <Button variant="subtle" color="neutral" size="sm" onClick={cancelDraw}>
              <Icon material="close" />
            </Button>
          )}
        </>
      )}
    </div>
  );
}
