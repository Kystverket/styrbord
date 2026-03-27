import { useCallback, useEffect, useId, useMemo, useState } from 'react';
import { Box, NumberInput, ValidationMessage } from '@kystverket/styrbord';
import type { FeatureCollection, Point } from 'geojson';

import type { CoordinatePickerProps } from './CoordinatePicker.types';
import type { CoordinateGeoJSON } from '~/utility/types';
import { clampLatitude, clampLongitude } from '~/utility/coordinate';
import { GeoJsonEditor } from '~/components/GeoJsonEditor/GeoJsonEditor';

/**
 * CoordinatePicker — select a geographic coordinate via an interactive map
 * or manual input fields.
 *
 * Internally delegates to GeoJsonEditor in single-feature point mode.
 */
export function CoordinatePicker({
  value,
  onChange,
  error,
  disabled = false,
  className,
  height,
  showCenterAction,
}: CoordinatePickerProps) {
  const id = useId();

  // ----- GeoJsonEditor value bridge -----
  const editorValue = useMemo<FeatureCollection | undefined>(() => {
    if (!value) return undefined;
    return {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          geometry: value.geometry,
          properties: {},
        },
      ],
    };
  }, [value]);

  const handleEditorChange = useCallback(
    (fc: FeatureCollection) => {
      if (fc.features.length > 0) {
        const feature = fc.features[0];
        const geo: CoordinateGeoJSON = {
          type: 'Feature',
          geometry: feature.geometry as Point,
        };
        onChange(geo);
      }
    },
    [onChange],
  );

  // ----- Input number state (synced to/from value, committed on blur) -----
  const [latValue, setLatValue] = useState<number | undefined>(value?.geometry.coordinates[1] ?? undefined);
  const [lonValue, setLonValue] = useState<number | undefined>(value?.geometry.coordinates[0] ?? undefined);

  useEffect(() => {
    const coords = value?.geometry.coordinates;
    setLatValue(coords ? coords[1] : undefined);
    setLonValue(coords ? coords[0] : undefined);
  }, [value]);

  // ----- Input handlers -----
  const commitLatLon = useCallback(
    (lat: number | undefined, lon: number | undefined) => {
      if (lat == null && lon == null) return;
      if (lat != null && lon != null) {
        const geo: CoordinateGeoJSON = {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [clampLongitude(lon), clampLatitude(lat)],
          },
        };
        onChange(geo);
      }
    },
    [onChange],
  );

  return (
    <Box gap={16} className={[className].filter(Boolean).join(' ')}>
      <GeoJsonEditor
        singleFeature
        modes={['point']}
        value={editorValue}
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
          label="Breddegrad (lat)"
          value={latValue ?? null}
          disabled={disabled}
          placeholder="f.eks. 63.4305"
          onChange={(v) => setLatValue(v)}
          onBlur={() => commitLatLon(latValue, lonValue)}
        />

        <NumberInput
          id={`${id}-lon`}
          inputMode="decimal"
          label="Lengdegrad (lon)"
          value={lonValue ?? null}
          disabled={disabled}
          placeholder="f.eks. 10.3951"
          onChange={(v) => setLonValue(v)}
          onBlur={() => commitLatLon(latValue, lonValue)}
        />
      </Box>

      {error && <ValidationMessage>{error}</ValidationMessage>}
    </Box>
  );
}

export default CoordinatePicker;
