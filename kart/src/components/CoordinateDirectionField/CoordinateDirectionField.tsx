import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import { Box, NumberInput, ValidationMessage } from "@kystverket/styrbord";
import type { FeatureCollection, Point } from "geojson";

import type {
  CoordinateDirectionGeoJSON,
  CoordinateDirectionFieldProps,
} from "./CoordinateDirectionField.types";
import {
  clampDirection,
  clampLatitude,
  clampLongitude,
} from "~/utility/coordinate";
import { getUuid } from "~/utility/uuid";
import { GeoJsonEditor } from "~/components/GeoJsonEditor/GeoJsonEditor";
import { useTranslation } from "~/translations";

/**
 * CoordinateDirectionField — select a geographic coordinate and a facing
 * direction (0–360°) via an interactive map or manual input fields.
 *
 * Internally delegates to GeoJsonEditor in single-feature directional-point mode.
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

  // Stable ID for the directional-point feature
  const directionalIdRef = useRef(getUuid());

  // Remember the last direction so newly placed points reuse it
  const lastDirectionRef = useRef(value?.properties.direction ?? 0);

  // ----- GeoJsonEditor value bridge -----
  const editorValue = useMemo<FeatureCollection | undefined>(() => {
    if (!value) return undefined;
    return {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: value.geometry,
          properties: {
            mode: "directional-point" as const,
            direction: value.properties.direction,
            id: directionalIdRef.current,
          },
        },
      ],
    };
  }, [value]);

  const handleEditorChange = useCallback(
    (fc: FeatureCollection) => {
      const dirFeature = fc.features.find(
        (f) => f.properties?.mode === "directional-point",
      );
      if (dirFeature) {
        // Keep the id for future round-trips
        if (dirFeature.properties?.id) {
          directionalIdRef.current = dirFeature.properties.id;
        }
        const direction =
          dirFeature.properties?.direction ?? lastDirectionRef.current;
        lastDirectionRef.current = direction;
        const geo: CoordinateDirectionGeoJSON = {
          type: "Feature",
          geometry: dirFeature.geometry as Point,
          properties: {
            direction,
          },
        };
        onChange(geo);
      }
    },
    [onChange],
  );

  // ----- Input number state (synced to/from value, committed on blur) -----
  const [latValue, setLatValue] = useState<number | undefined>(
    value?.geometry.coordinates[1] ?? undefined,
  );
  const [lonValue, setLonValue] = useState<number | undefined>(
    value?.geometry.coordinates[0] ?? undefined,
  );
  const [dirValue, setDirValue] = useState<number | undefined>(
    value?.properties.direction ?? undefined,
  );

  useEffect(() => {
    const coords = value?.geometry.coordinates;
    setLatValue(coords ? coords[1] : undefined);
    setLonValue(coords ? coords[0] : undefined);
    setDirValue(value?.properties.direction ?? undefined);
    if (value?.properties.direction != null) {
      lastDirectionRef.current = value.properties.direction;
    }
  }, [value]);

  // ----- Input handlers -----
  const emitUpdate = useCallback(
    (geo: CoordinateDirectionGeoJSON) => {
      onChange(geo);
    },
    [onChange],
  );

  const commitLatLon = useCallback(
    (lat: number | undefined, lon: number | undefined) => {
      if (lat == null && lon == null) return;
      if (lat != null && lon != null) {
        const geo: CoordinateDirectionGeoJSON = {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [clampLongitude(lon), clampLatitude(lat)],
          },
          properties: {
            direction: value?.properties.direction ?? 0,
          },
        };
        emitUpdate(geo);
      }
    },
    [value?.properties.direction, emitUpdate],
  );

  const commitDirection = useCallback(
    (dir: number | undefined) => {
      if (!value) return;
      const geo: CoordinateDirectionGeoJSON = {
        type: "Feature",
        geometry: value.geometry,
        properties: {
          direction: dir != null ? Math.round(clampDirection(dir)) : 0,
        },
      };
      emitUpdate(geo);
    },
    [value, emitUpdate],
  );

  return (
    <Box gap={16} className={[className].filter(Boolean).join(" ")}>
      <GeoJsonEditor
        singleFeature
        modes={["directional-point"]}
        value={editorValue}
        onChange={handleEditorChange}
        disabled={disabled}
        height={height}
        showCenterAction={showCenterAction}
      />

      {/* Coordinate + direction inputs */}
      <Box horizontal gap={16}>
        <NumberInput
          id={`${id}-lat`}
          inputMode="decimal"
          label={t("fields.latitude")}
          value={latValue ?? null}
          disabled={disabled}
          placeholder={t("fields.latitudePlaceholder")}
          onChange={(v) => setLatValue(v)}
          onBlur={() => commitLatLon(latValue, lonValue)}
        />

        <NumberInput
          id={`${id}-lon`}
          inputMode="decimal"
          label={t("fields.longitude")}
          value={lonValue ?? null}
          disabled={disabled}
          placeholder={t("fields.longitudePlaceholder")}
          onChange={(v) => setLonValue(v)}
          onBlur={() => commitLatLon(latValue, lonValue)}
        />

        <NumberInput
          id={`${id}-dir`}
          inputMode="decimal"
          label={t("fields.direction")}
          value={dirValue ?? null}
          disabled={disabled}
          placeholder={t("fields.directionPlaceholder")}
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

export default CoordinateDirectionField;
