import { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react';
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

  // ----- Internal state (for uncontrolled usage) -----
  const [internalValue, setInternalValue] = useState<CoordinateGeoJSON | undefined>(value);

  // Track whether a value change originated from this component (map click or input commit)
  const selfChangeRef = useRef(false);

  // Key to force GeoJsonEditor remount when the coordinate is set externally or via number inputs
  const [editorKey, setEditorKey] = useState(0);

  // Sync controlled value prop
  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value);
      if (selfChangeRef.current) {
        selfChangeRef.current = false;
      } else {
        // External value change — remount editor to load new data
        setEditorKey((k) => k + 1);
      }
    }
  }, [value]);

  const currentValue = value !== undefined ? value : internalValue;

  // ----- GeoJsonEditor value bridge -----
  const editorValue = useMemo<FeatureCollection | undefined>(() => {
    if (!currentValue) return undefined;
    return {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          geometry: currentValue.geometry,
          properties: {},
        },
      ],
    };
  }, [currentValue]);

  const handleEditorChange = useCallback(
    (fc: FeatureCollection) => {
      if (fc.features.length > 0) {
        const feature = fc.features[0];
        const geo: CoordinateGeoJSON = {
          type: 'Feature',
          geometry: feature.geometry as Point,
        };
        selfChangeRef.current = true;
        setInternalValue(geo);
        onChange?.(geo);
      }
    },
    [onChange],
  );

  // ----- Input number state (synced to/from currentValue, committed on blur) -----
  const [latValue, setLatValue] = useState<number | undefined>(currentValue?.geometry.coordinates[1] ?? undefined);
  const [lonValue, setLonValue] = useState<number | undefined>(currentValue?.geometry.coordinates[0] ?? undefined);

  useEffect(() => {
    const coords = currentValue?.geometry.coordinates;
    setLatValue(coords ? coords[1] : undefined);
    setLonValue(coords ? coords[0] : undefined);
  }, [currentValue]);

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
        selfChangeRef.current = true;
        setInternalValue(geo);
        onChange?.(geo);
        setEditorKey((k) => k + 1);
      }
    },
    [onChange],
  );

  return (
    <Box gap={16} className={[className].filter(Boolean).join(' ')}>
      <GeoJsonEditor
        key={editorKey}
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
