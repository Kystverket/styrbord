/**
 * FeatureOverlay - A panel that appears on the right side of the map
 * showing details about the selected feature.
 */

import type { Feature } from 'ol';
import type { Geometry, Polygon, LineString } from 'ol/geom';
import { toLonLat } from 'ol/proj';
import { useState } from 'react';
import classes from '../Map.module.css';
import { Button, Details, Divider, Field, Input, Label } from '@kystverket/styrbord';
import Icon from '../../../base/src/components/kystverket/Icon/icon';
import { RotateControls } from './RotateControls';
import { useFeatureProperty } from '../utils/useFeatureProperty';
import { useFeatureCoordinates } from '../utils/useFeatureCoordinates';

export interface FeatureOverlayProps {
  /** The feature to show the overlay for, or null to hide */
  feature: Feature<Geometry>[] | null;
  /** Content to render inside the overlay */
  children?: React.ReactNode;
  onClose?: () => void;
}

export function FeatureOverlay({
  feature,
}: FeatureOverlayProps) {
  const [ isExpanded, setIsExpanded ] = useState(true);

  if (!feature || feature.length === 0) {
    return null;
  }

  return (
    <div className={`${classes.featurePanel} ${!isExpanded ? classes.featurePanelCollapsed : ''}`}>
      <Button 
        className={classes.featurePanelToggle}
        onClick={() => setIsExpanded(!isExpanded)}
        size="sm"
        variant="dashed"
        title={isExpanded ? 'Skjul panel' : 'Vis panel'}
      >
        <Icon material={isExpanded ? 'chevron_right' : 'chevron_left'} />
      </Button>
      {isExpanded && (
        <>
          <div className={classes.featurePanelHeader}>
            <Label>Valgte features</Label>
          </div>
          <div className={classes.featurePanelContent}>
            {feature.map((f, index) => (
              <>
                {index > 0 && <Divider />}
                <FeatureDetails key={index} feature={f} />
              </>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function FeatureDetails({ feature: f }: { feature: Feature<Geometry> }) {
  const [name, setName] = useFeatureProperty<string>(f, 'name');
  const isPoint = f.getGeometry()?.getType() === 'Point';

  return (
    <div className={classes.featureDetails}>
      <div className={classes.featurePanelContentRow}>
        <Field>
          <Label data-size='sm'>Navn</Label>
          <Input 
            value={name ?? ''}
            onChange={(e) => setName(e.target.value)}
          />
        </Field>
      </div>

      {isPoint && <PointFields feature={f} />}
      {f.getGeometry()?.getType() === 'LineString' && (
        <Details>
          <Details.Summary>Koordinater ({(f.getGeometry() as LineString).getCoordinates().length} punkter)</Details.Summary>
          <Details.Content>
            {(f.getGeometry() as LineString).getCoordinates().map((coord, i) => {
              const [lon, lat] = toLonLat(coord);
              return (
                <div key={i} className={classes.featurePanelContentRow}>
                  <Field>
                    <Label data-size='sm'>Len {i + 1}</Label>
                    <Input value={lon.toFixed(5)} readOnly />
                  </Field>
                  <Field>
                    <Label data-size='sm'>Lat {i + 1}</Label>
                    <Input value={lat.toFixed(5)} readOnly />
                  </Field>
                </div>
              );
            })}
          </Details.Content>
        </Details>
      )}
      {f.getGeometry()?.getType() === 'Polygon' && (
        <Details>
          <Details.Summary>Koordinater ({(f.getGeometry() as Polygon).getCoordinates()[0].length} punkter)</Details.Summary>
          <Details.Content className={classes.featurePanelContentColumn}>
            {(f.getGeometry() as Polygon).getCoordinates()[0].map((coord, i) => {
              const [lon, lat] = toLonLat(coord);
              return (
                <div key={i} className={classes.featurePanelContentRow}>
                  <Field>
                    <Label data-size='sm'>Lengdegrad {i + 1}</Label>
                    <Input value={lon.toFixed(5)} readOnly />
                  </Field>
                  <Field>
                    <Label data-size='sm'>Breddegrad {i + 1}</Label>
                    <Input value={lat.toFixed(5)} readOnly />
                  </Field>
                </div>
              );
            })}
          </Details.Content>
        </Details>
      )}
    </div>
  );
}

function PointFields({ feature }: { feature: Feature<Geometry> }) {
  const [lon, lat, setLonLat] = useFeatureCoordinates(feature);

  return (
    <>
      <div className={classes.featurePanelContentRow}>
        <Field>
          <Label data-size='sm'>Lengdegrad</Label>
          <Input
            value={lon.toFixed(5)}
            type="number"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const val = parseFloat(e.target.value);
              if (!Number.isNaN(val)) setLonLat(val, lat);
            }}
          />
        </Field>

        <Field>
          <Label data-size='sm'>Breddegrad</Label>
          <Input
            value={lat.toFixed(5)}
            type="number"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const val = parseFloat(e.target.value);
              if (!Number.isNaN(val)) setLonLat(lon, val);
            }}
          />
        </Field>
      </div>

      {feature.get('heading') !== undefined && <RotateControls feature={feature} />}
    </>
  );
}
