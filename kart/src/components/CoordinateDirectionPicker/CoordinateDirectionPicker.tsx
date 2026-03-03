import { useCallback, useEffect, useId, useState } from 'react';
import { Box, NumberInput, ValidationMessage } from '@kystverket/styrbord';

import styles from './CoordinateDirectionPicker.module.css';
import type {
  Coordinate,
  CoordinateDirectionPickerProps,
  CoordinateDirectionValue,
} from './CoordinateDirectionPicker.types';
import { DEFAULT_CENTER, DEFAULT_ZOOM } from '~/utility/mapStyle';
import { clampDirection, clampLatitude, clampLongitude } from '~/utility/coordinate';
import { useMaplibreMap } from '~/hooks/useMaplibreMap';
import { useCompassMarker } from '~/hooks/useCompassMarker';

/**
 * CoordinateDirectionPicker — select a geographic coordinate and a facing
 * direction (0–360°) via an interactive map or manual input fields.
 *
 * Uses Kartverket topographic tiles and WGS84 (EPSG:4326) coordinates.
 */
export function CoordinateDirectionPicker({
  value,
  onChange,
  defaultCenter = DEFAULT_CENTER,
  defaultZoom = DEFAULT_ZOOM,
  error,
  disabled = false,
  className,
}: CoordinateDirectionPickerProps) {
  const id = useId();

  // ----- Internal state (drives inputs; synced to/from props.value) -----
  const [internalValue, setInternalValue] = useState<CoordinateDirectionValue>(() =>
    value
      ? {
          coordinate: { latitude: value.geometry.coordinates[1], longitude: value.geometry.coordinates[0] },
          direction: value.properties.direction,
        }
      : { coordinate: null, direction: null },
  );

  // Keep internal state in sync with controlled value prop
  useEffect(() => {
    if (value !== undefined) {
      setInternalValue({
        coordinate: { latitude: value.geometry.coordinates[1], longitude: value.geometry.coordinates[0] },
        direction: value.properties.direction,
      });
    }
  }, [value]);

  const currentValue =
    value !== undefined
      ? {
          coordinate: { latitude: value.geometry.coordinates[1], longitude: value.geometry.coordinates[0] },
          direction: value.properties.direction,
        }
      : internalValue;

  const emit = useCallback(
    (next: CoordinateDirectionValue) => {
      setInternalValue(next);
      if (next.coordinate && next.direction !== null) {
        onChange?.({
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [next.coordinate.longitude, next.coordinate.latitude],
          },
          properties: {
            direction: next.direction,
          },
        });
      }
    },
    [onChange],
  );

  // ----- Map hook -----
  const handleMapClick = useCallback(
    (coord: Coordinate) => {
      emit({ coordinate: coord, direction: currentValue.direction });
    },
    [currentValue.direction, emit],
  );

  const { mapContainerRef, mapRef } = useMaplibreMap({
    initialCoordinate: currentValue.coordinate,
    defaultCenter,
    defaultZoom,
    disabled,
    onMapClick: handleMapClick,
  });

  // ----- Compass marker hook -----
  useCompassMarker({
    mapRef,
    currentValue,
    disabled,
    onDirectionChange: emit,
  });

  // ----- Input number state (synced to/from props.value, committed on blur) -----
  const [latValue, setLatValue] = useState<number | undefined>(currentValue.coordinate?.latitude ?? undefined);
  const [lonValue, setLonValue] = useState<number | undefined>(currentValue.coordinate?.longitude ?? undefined);
  const [dirValue, setDirValue] = useState<number | undefined>(currentValue.direction ?? undefined);

  // Sync input values when value changes externally (e.g. map click, compass drag)
  useEffect(() => {
    setLatValue(currentValue.coordinate?.latitude ?? undefined);
    setLonValue(currentValue.coordinate?.longitude ?? undefined);
    setDirValue(currentValue.direction ?? undefined);
  }, [currentValue]);

  // ----- Input handlers -----
  const commitLatLon = useCallback(
    (lat: number | undefined, lon: number | undefined) => {
      if (lat == null && lon == null) {
        emit({ ...currentValue, coordinate: null });
        return;
      }
      if (lat != null && lon != null) {
        const newCoord: Coordinate = {
          latitude: clampLatitude(lat),
          longitude: clampLongitude(lon),
        };
        emit({ ...currentValue, coordinate: newCoord });
        mapRef.current?.flyTo({
          center: [newCoord.longitude, newCoord.latitude],
          duration: 300,
        });
      }
    },
    [currentValue, emit, mapRef],
  );

  const commitDirection = useCallback(
    (dir: number | undefined) => {
      if (dir == null) {
        emit({ ...currentValue, direction: null });
      } else {
        emit({ ...currentValue, direction: Math.round(clampDirection(dir)) });
      }
    },
    [currentValue, emit],
  );

  return (
    <Box gap={16} className={[className].filter(Boolean).join(' ')}>
      <div
        ref={mapContainerRef}
        className={[styles.mapContainer, disabled ? styles.disabled : ''].filter(Boolean).join(' ')}
      >
        <div className={styles.mapHint}>
          {currentValue.coordinate
            ? 'Klikk for å flytte · Dra på markøren for å rotere retning'
            : 'Klikk i kartet for å plassere markør'}
        </div>
      </div>

      {/* Coordinate + direction inputs */}
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

        <NumberInput
          id={`${id}-dir`}
          inputMode="decimal"
          label="Retning (grader)"
          value={dirValue ?? null}
          disabled={disabled}
          placeholder="0–360"
          min={0}
          max={360}
          onChange={(v) => setDirValue(v)}
          onBlur={() => commitDirection(dirValue)}
        />
      </Box>

      {error && <ValidationMessage>{error}</ValidationMessage>}
    </Box>
  );
}

export default CoordinateDirectionPicker;
