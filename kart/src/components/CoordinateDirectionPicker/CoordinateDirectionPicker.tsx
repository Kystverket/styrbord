import React, { useCallback, useEffect, useId, useRef, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { NumberInput } from '@kystverket/styrbord';

/** SVG data URL for the rotation drag handle — a circular grab indicator with arrows. */
const ROTATION_HANDLE_SVG = (() => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="11" fill="white" stroke="#000667" stroke-width="1.5" opacity="0.9"/>
    <path d="M12 4l-2.5 3h5L12 4z" fill="#000667"/>
    <path d="M12 20l2.5-3h-5L12 20z" fill="#000667"/>
    <path d="M4 12l3 2.5v-5L4 12z" fill="#000667"/>
    <path d="M20 12l-3-2.5v5L20 12z" fill="#000667"/>
    <circle cx="12" cy="12" r="2" fill="#000667"/>
  </svg>`;
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
})();

import styles from './CoordinateDirectionPicker.module.css';
import type {
  Coordinate,
  CoordinateDirectionPickerProps,
  CoordinateDirectionValue,
} from './CoordinateDirectionPicker.types';

/** Default center: roughly central Norway */
const DEFAULT_CENTER: Coordinate = { latitude: 65.0, longitude: 14.0 };
const DEFAULT_ZOOM = 5;

/**
 * Create an inline SVG string for a compass-needle style marker.
 * The primary (north) half points up in the given color, the opposite (south) half in grey.
 */
function createArrowSvg(color = '#df3c1b', borderColor = '#000667'): string {
  const grey = '#b0b0b0';
  return `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
    <circle cx="20" cy="20" r="18" fill="white" stroke="${borderColor}" stroke-width="2"/>
    <polygon points="20,4 25,19 20,17 15,19" fill="${color}"/>
    <polygon points="20,36 15,21 20,23 25,21" fill="${grey}"/>
    <circle cx="20" cy="20" r="2.5" fill="${color}"/>
  </svg>`;
}

function clampDirection(deg: number): number {
  return ((deg % 360) + 360) % 360;
}

function clampLatitude(lat: number): number {
  return Math.max(-90, Math.min(90, lat));
}

function clampLongitude(lon: number): number {
  return Math.max(-180, Math.min(180, lon));
}

/** Kartverket raster tile style for MapLibre GL */
const KARTVERKET_STYLE: maplibregl.StyleSpecification = {
  version: 8,
  sources: {
    kartverket: {
      type: 'raster',
      tiles: ['https://cache.kartverket.no/v1/wmts/1.0.0/topo/default/webmercator/{z}/{y}/{x}.png'],
      tileSize: 256,
      maxzoom: 18,
      attribution: '&copy; <a href="https://www.kartverket.no/">Kartverket</a>',
    },
  },
  layers: [
    {
      id: 'kartverket-topo',
      type: 'raster',
      source: 'kartverket',
    },
  ],
};

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
  label,
  error,
  disabled = false,
  className,
}: CoordinateDirectionPickerProps) {
  const id = useId();
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);
  const markerRef = useRef<maplibregl.Marker | null>(null);

  // Refs for custom marker DOM sub-elements
  const markerElRef = useRef<HTMLDivElement | null>(null);
  const compassElRef = useRef<HTMLDivElement | null>(null);
  const handleElRef = useRef<HTMLImageElement | null>(null);

  // Rotation drag state
  const isDraggingRotation = useRef(false);
  const disabledRef = useRef(disabled);

  // ----- Internal state (drives inputs; synced to/from props.value) -----
  const [internalValue, setInternalValue] = useState<CoordinateDirectionValue>(
    () => value ?? { coordinate: null, direction: null },
  );

  // Keep internal state in sync with controlled value prop
  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value);
    }
  }, [value]);

  const currentValue = value !== undefined ? value : internalValue;

  // Refs that allow stable event handlers (set up once) to read latest values
  const currentValueRef = useRef(currentValue);
  currentValueRef.current = currentValue;

  useEffect(() => {
    disabledRef.current = disabled;
  }, [disabled]);

  const emit = useCallback(
    (next: CoordinateDirectionValue) => {
      setInternalValue(next);
      onChange?.(next);
    },
    [onChange],
  );

  const emitRef = useRef(emit);
  emitRef.current = emit;

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

  // ----- Create marker DOM element (lazily, once) -----
  const getOrCreateMarkerElement = useCallback(() => {
    if (markerElRef.current) return markerElRef.current;

    // Container – sized to fit compass (40×40) + handle at 35 px offset
    const container = document.createElement('div');
    container.style.width = '100px';
    container.style.height = '100px';
    container.style.position = 'relative';
    container.style.pointerEvents = 'none'; // transparent to map clicks in empty areas

    // Compass element (centred in 100×100 container)
    const compass = document.createElement('div');
    compass.innerHTML = createArrowSvg();
    compass.style.position = 'absolute';
    compass.style.left = '30px';
    compass.style.top = '30px';
    compass.style.width = '40px';
    compass.style.height = '40px';
    compass.style.cursor = 'grab';
    compass.style.pointerEvents = 'auto';
    container.appendChild(compass);
    compassElRef.current = compass;

    // Rotation handle
    const handle = document.createElement('img');
    handle.src = ROTATION_HANDLE_SVG;
    handle.width = 24;
    handle.height = 24;
    handle.style.position = 'absolute';
    handle.style.cursor = 'grab';
    handle.style.userSelect = 'none';
    handle.style.pointerEvents = 'auto';
    handle.draggable = false;
    container.appendChild(handle);
    handleElRef.current = handle;

    // --- Helper: calculate direction angle from pointer event ---
    const angleFromPointer = (e: PointerEvent): number => {
      const map = mapRef.current;
      const coord = currentValueRef.current.coordinate;
      if (!map || !coord) return 0;

      const markerScreen = map.project([coord.longitude, coord.latitude]);
      const rect = map.getContainer().getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const dx = mouseX - markerScreen.x;
      const dy = markerScreen.y - mouseY; // flip Y for geographic convention
      return clampDirection((Math.atan2(dx, dy) * 180) / Math.PI);
    };

    // --- Rotation drag handlers (attached to each interactive child) ---
    const onPointerDown = (e: PointerEvent) => {
      if (disabledRef.current) return;
      isDraggingRotation.current = true;
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
      e.stopPropagation();
      e.preventDefault();

      // Immediately snap direction to pointer angle
      const angleDeg = angleFromPointer(e);
      const rounded = Math.round(angleDeg);
      emitRef.current({ ...currentValueRef.current, direction: rounded });
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDraggingRotation.current) return;

      const angleDeg = angleFromPointer(e);
      const rounded = Math.round(angleDeg);
      emitRef.current({ ...currentValueRef.current, direction: rounded });
    };

    const onPointerUp = (e: PointerEvent) => {
      if (isDraggingRotation.current) {
        isDraggingRotation.current = false;
        (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
      }
    };

    for (const el of [compass, handle]) {
      el.addEventListener('pointerdown', onPointerDown);
      el.addEventListener('pointermove', onPointerMove);
      el.addEventListener('pointerup', onPointerUp);
    }

    // Set initial handle position based on current direction
    const initDir = currentValueRef.current.direction ?? 0;
    const initRad = (initDir * Math.PI) / 180;
    compass.style.transform = `rotate(${initDir}deg)`;
    const cx = 50;
    const cy = 50;
    handle.style.left = `${cx + Math.sin(initRad) * 35 - 12}px`;
    handle.style.top = `${cy - Math.cos(initRad) * 35 - 12}px`;

    markerElRef.current = container;
    return container;
  }, []);

  // ----- Update compass rotation + handle position when direction changes -----
  useEffect(() => {
    const compass = compassElRef.current;
    const handle = handleElRef.current;
    if (!compass || !handle) return;

    const dir = currentValue.direction ?? 0;
    const dirRad = (dir * Math.PI) / 180;

    compass.style.transform = `rotate(${dir}deg)`;

    // Position handle at 35 px from center of the 100×100 container
    const cx = 50;
    const cy = 50;
    const handleX = cx + Math.sin(dirRad) * 35 - 12; // 12 = half of 24 px handle
    const handleY = cy - Math.cos(dirRad) * 35 - 12;
    handle.style.left = `${handleX}px`;
    handle.style.top = `${handleY}px`;
  }, [currentValue.direction]);

  // ----- Create / update / remove MapLibre marker when coordinate changes -----
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    const coord = currentValue.coordinate;

    if (!coord) {
      if (markerRef.current) {
        markerRef.current.remove();
        markerRef.current = null;
      }
      return;
    }

    if (markerRef.current) {
      markerRef.current.setLngLat([coord.longitude, coord.latitude]);
    } else {
      const el = getOrCreateMarkerElement();
      markerRef.current = new maplibregl.Marker({ element: el, anchor: 'center' })
        .setLngLat([coord.longitude, coord.latitude])
        .addTo(map);
    }
  }, [currentValue.coordinate, getOrCreateMarkerElement]);

  // ----- Initialise MapLibre GL map -----
  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    const initialCoord = currentValueRef.current.coordinate;
    const center: [number, number] = initialCoord
      ? [initialCoord.longitude, initialCoord.latitude]
      : [defaultCenter.longitude, defaultCenter.latitude];

    const map = new maplibregl.Map({
      container: mapContainerRef.current,
      style: KARTVERKET_STYLE,
      center,
      zoom: initialCoord ? 14 : defaultZoom,
      attributionControl: {},
    });

    mapRef.current = map;

    // Place initial marker if value already exists
    if (initialCoord) {
      const el = getOrCreateMarkerElement();
      markerRef.current = new maplibregl.Marker({ element: el, anchor: 'center' })
        .setLngLat([initialCoord.longitude, initialCoord.latitude])
        .addTo(map);
    }

    // Click on the map → set / move coordinate
    map.on('click', (e: maplibregl.MapMouseEvent) => {
      if (disabledRef.current) return;

      const { lng, lat } = e.lngLat;
      const newCoord: Coordinate = {
        latitude: clampLatitude(lat),
        longitude: clampLongitude(lng),
      };

      emitRef.current({
        coordinate: newCoord,
        direction: currentValueRef.current.direction,
      });
    });

    return () => {
      map.remove();
      mapRef.current = null;
      markerRef.current = null;
    };
  }, []);

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
        // Pan map to new coordinate
        mapRef.current?.flyTo({
          center: [newCoord.longitude, newCoord.latitude],
          duration: 300,
        });
      }
    },
    [currentValue, emit],
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
    <div className={[styles.container, className].filter(Boolean).join(' ')}>
      {label && <div className={styles.label}>{label}</div>}

      {/* Map */}
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
      <div className={styles.inputRow}>
        {/* Latitude */}
        <NumberInput
          id={`${id}-lat`}
          inputMode="decimal"
          label="Breddegrad (lat)"
          value={latValue ?? null}
          disabled={disabled}
          placeholder="f.eks. 63.4305"
          error={error ? true : null}
          onChange={(v) => setLatValue(v)}
          onBlur={() => commitLatLon(latValue, lonValue)}
        />

        {/* Longitude */}
        <NumberInput
          id={`${id}-lon`}
          inputMode="decimal"
          label="Lengdegrad (lon)"
          value={lonValue ?? null}
          disabled={disabled}
          placeholder="f.eks. 10.3951"
          error={error ? true : null}
          onChange={(v) => setLonValue(v)}
          onBlur={() => commitLatLon(latValue, lonValue)}
        />

        {/* Direction */}
        <NumberInput
          id={`${id}-dir`}
          inputMode="decimal"
          label="Retning (grader)"
          value={dirValue ?? null}
          disabled={disabled}
          placeholder="0–360"
          min={0}
          max={360}
          error={error ? true : null}
          onChange={(v) => setDirValue(v)}
          onBlur={() => commitDirection(dirValue)}
        />
      </div>

      {error && <div className={styles.errorMessage}>{error}</div>}
    </div>
  );
}

export default CoordinateDirectionPicker;
