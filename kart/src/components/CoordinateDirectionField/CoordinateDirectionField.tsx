'use client';

import { useCallback, useId } from 'react';
import { Box, NumberInput, ValidationMessage } from '@kystverket/styrbord';
import type { FeatureCollection, Point } from 'geojson';

import type { CoordinateDirectionFieldProps } from './CoordinateDirectionField.types';
import type { CoordinateDirectionGeoJSON } from '~/utility/types';
import { clampLatitude, clampLongitude } from '~/utility/coordinate';
import { GeoJsonEditor } from '~/components/GeoJsonEditor/GeoJsonEditor';
import { useTranslation } from '~/translations';

function clampDirection(v: number): number {
  return Math.min(360, Math.max(0, v));
}

/**
 * CoordinateDirectionField — select a geographic coordinate and direction via
 * an interactive map or manual input fields.
 *
 * Internally delegates to GeoJsonEditor in single-feature point mode with
 * direction arrows enabled. The direction (0–360°) is stored in
 * `properties.direction` of the emitted GeoJSON feature.
 */
export function CoordinateDirectionField({
  value,
  onChange,
  error,
  disabled = false,
  className,
  height,
  showCenterAction,
}: CoordinateDirectionFieldProps) {
  const id = useId();
  const { t } = useTranslation();

  const latitude = value?.geometry.coordinates[1];
  const longitude = value?.geometry.coordinates[0];
  const direction = value?.properties?.direction;

  const handleEditorChange = useCallback(
    (fc: FeatureCollection) => {
      if (fc.features.length > 0) {
        const feature = fc.features[0];
        const geo: CoordinateDirectionGeoJSON = {
          type: 'Feature',
          geometry: feature.geometry as Point,
          properties: { ...feature.properties, direction: feature.properties?.direction ?? direction ?? 0 },
        };
        onChange(geo);
      }
    },
    [onChange, direction],
  );

  // ----- Input handlers -----
  const commitLatLon = useCallback(
    (lat: number | undefined, lon: number | undefined) => {
      const geo: CoordinateDirectionGeoJSON = {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [lon ? clampLongitude(lon) : 0, lat ? clampLatitude(lat) : 0],
        },
        properties: { ...value?.properties, direction: value?.properties?.direction ?? direction ?? 0 },
      };
      onChange(geo);
    },
    [onChange, direction],
  );

  const commitDirection = useCallback(
    (dir: number | undefined) => {
      if (dir == null) return;
      const clamped = clampDirection(dir);

      const geo: CoordinateDirectionGeoJSON = {
        type: 'Feature',
        geometry: value?.geometry ?? { type: 'Point', coordinates: [0, 0] },
        properties: { ...value?.properties, direction: clamped },
      };
      onChange(geo);
    },
    [onChange, value],
  );

  return (
    <Box gap={16} className={[className].filter(Boolean).join(' ')}>
      <GeoJsonEditor
        singleFeature
        modes={['point']}
        showDirectionArrows
        value={value}
        onChange={handleEditorChange}
        disabled={disabled}
        height={height}
        showCenterAction={showCenterAction}
      />

      {/* Coordinate inputs */}
      <Box horizontal gap={16}>
        <NumberInput
          id={`${id}-lat`}
          inputMode="decimal"
          label={t('fields.latitude')}
          value={latitude ?? null}
          disabled={disabled}
          placeholder={t('fields.latitudePlaceholder')}
          onChange={(v) => commitLatLon(v, longitude)}
        />

        <NumberInput
          id={`${id}-lon`}
          inputMode="decimal"
          label={t('fields.longitude')}
          value={longitude ?? null}
          disabled={disabled}
          placeholder={t('fields.longitudePlaceholder')}
          onChange={(v) => commitLatLon(latitude, v)}
        />
      </Box>

      {/* Direction input */}
      <NumberInput
        id={`${id}-direction`}
        inputMode="decimal"
        label={t('fields.direction')}
        value={direction ?? null}
        disabled={disabled}
        placeholder={t('fields.directionPlaceholder')}
        onChange={(v) => commitDirection(v)}
      />

      {error && <ValidationMessage>{error}</ValidationMessage>}
    </Box>
  );
}

export default CoordinateDirectionField;
