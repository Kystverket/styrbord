import { useCallback, useEffect, useId, useState } from "react";
import { Box, NumberInput, ValidationMessage } from "@kystverket/styrbord";

import styles from "~/components/shared/MapPicker.module.css";
import type { CoordinatePickerProps } from "./CoordinatePicker.types";
import type { Coordinate } from "~/utility/types";
import { clampLatitude, clampLongitude } from "~/utility/coordinate";
import { useMaplibreMap } from "~/hooks/useMaplibreMap";
import { usePointMarker } from "~/hooks/usePointMarker";

/**
 * CoordinatePicker — select a geographic coordinate via an interactive map
 * or manual input fields.
 *
 * Uses Kartverket topographic tiles and WGS84 (EPSG:4326) coordinates.
 */
export function CoordinatePicker({
  value,
  onChange,
  error,
  disabled = false,
  className,
  height,
}: CoordinatePickerProps) {
  const id = useId();

  // ----- Internal state (drives inputs; synced to/from props.value) -----
  const [internalCoordinate, setInternalCoordinate] =
    useState<Coordinate | null>(() =>
      value
        ? {
            latitude: value.geometry.coordinates[1],
            longitude: value.geometry.coordinates[0],
          }
        : null,
    );

  // Keep internal state in sync with controlled value prop
  useEffect(() => {
    if (value !== undefined) {
      setInternalCoordinate({
        latitude: value.geometry.coordinates[1],
        longitude: value.geometry.coordinates[0],
      });
    }
  }, [value]);

  const currentCoordinate =
    value !== undefined
      ? {
          latitude: value.geometry.coordinates[1],
          longitude: value.geometry.coordinates[0],
        }
      : internalCoordinate;

  const emit = useCallback(
    (coord: Coordinate | null) => {
      setInternalCoordinate(coord);
      if (coord) {
        onChange?.({
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [coord.longitude, coord.latitude],
          },
        });
      }
    },
    [onChange],
  );

  // ----- Map hook -----
  const handleMapClick = useCallback(
    (coord: Coordinate) => {
      emit(coord);
    },
    [emit],
  );

  const { mapContainerRef, mapRef } = useMaplibreMap({
    initialCoordinate: currentCoordinate,
    disabled,
    onMapClick: handleMapClick,
    height,
  });

  // ----- Point marker hook -----
  usePointMarker({
    mapRef,
    coordinate: currentCoordinate,
    disabled,
  });

  // ----- Input number state (synced to/from props.value, committed on blur) -----
  const [latValue, setLatValue] = useState<number | undefined>(
    currentCoordinate?.latitude ?? undefined,
  );
  const [lonValue, setLonValue] = useState<number | undefined>(
    currentCoordinate?.longitude ?? undefined,
  );

  // Sync input values when value changes externally (e.g. map click)
  useEffect(() => {
    setLatValue(currentCoordinate?.latitude ?? undefined);
    setLonValue(currentCoordinate?.longitude ?? undefined);
  }, [currentCoordinate]);

  // ----- Input handlers -----
  const commitLatLon = useCallback(
    (lat: number | undefined, lon: number | undefined) => {
      if (lat == null && lon == null) {
        emit(null);
        return;
      }
      if (lat != null && lon != null) {
        const newCoord: Coordinate = {
          latitude: clampLatitude(lat),
          longitude: clampLongitude(lon),
        };
        emit(newCoord);
        mapRef.current?.flyTo({
          center: [newCoord.longitude, newCoord.latitude],
          duration: 300,
        });
      }
    },
    [emit, mapRef],
  );

  return (
    <Box gap={16} className={[className].filter(Boolean).join(" ")}>
      <div
        ref={mapContainerRef}
        className={[styles.mapContainer, disabled ? styles.disabled : ""]
          .filter(Boolean)
          .join(" ")}
      >
        <div className={styles.mapHint}>
          {currentCoordinate
            ? "Klikk for å flytte markør"
            : "Klikk i kartet for å plassere markør"}
        </div>
      </div>

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
