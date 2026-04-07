import { useCallback, useId } from 'react';
import { Box, NumberInput, ValidationMessage } from '@kystverket/styrbord';
import type { FeatureCollection } from 'geojson';

import type { CoordinateFieldProps } from './CoordinateField.types';
import type { CoordinateGeoJSON } from '~/utility/types';
import { clampLatitude, clampLongitude } from '~/utility/coordinate';
import { GeoJsonEditor } from '~/components/GeoJsonEditor/GeoJsonEditor';
import { useTranslation } from '~/translations';

/**
 * CoordinateField — select a geographic coordinate via an interactive map
 * or manual input fields.
 *
 * Internally delegates to GeoJsonEditor in single-feature point mode.
 */
export function CoordinateField({
  value,
  onChange,
  error,
  disabled = false,
  className,
  height,
  showCenterAction,
}: CoordinateFieldProps) {
  const id = useId();
  const { t } = useTranslation();

  const handleEditorChange = useCallback(
    (fc: FeatureCollection) => {
      if (fc.features.length > 0) {
        onChange(fc.features[0] as CoordinateGeoJSON);
      }
    },
    [onChange],
  );

  const latitude = value?.geometry.coordinates[1];
  const longitude = value?.geometry.coordinates[0];

  // ----- Input handlers -----
  const commitLatLon = useCallback(
    (lat: number | undefined, lon: number | undefined) => {
      const geo: CoordinateGeoJSON = {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [lon ? clampLongitude(lon) : 0, lat ? clampLatitude(lat) : 0],
        },
        properties: { ...value?.properties },
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
        value={
          value
            ? {
                type: 'FeatureCollection',
                features: [{ type: 'Feature', geometry: value.geometry, properties: value.properties }],
              }
            : undefined
        }
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

      {error && <ValidationMessage>{error}</ValidationMessage>}
    </Box>
  );
}

export default CoordinateField;
