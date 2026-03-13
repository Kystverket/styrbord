/**
 * FeatureRotator — lets the user interactively rotate a Point feature
 * (e.g. a "Skilt" marker) by dragging a circular handle rendered as an
 * OpenLayers Overlay around the feature.
 */

import { useCallback, useEffect, useRef, useState } from 'react';
import type { Feature } from 'ol';
import Overlay from 'ol/Overlay';
import type { Geometry, Point } from 'ol/geom';
import { DragPan } from 'ol/interaction';
import { Button, Field, Input, Label } from '@kystverket/styrbord';
import Icon from '../../../base/src/components/kystverket/Icon/icon';
import { useMap } from '../MapProvider';
import { useFeatureProperty } from '../utils/useFeatureProperty';
import classes from '../Map.module.css';

/** Radius of the rotation ring in pixels */
const RING_RADIUS = 60;
/** Size of the draggable handle in pixels */
const HANDLE_SIZE = 16;

export interface RotateControlsProps {
  /** The Point feature to rotate */
  feature: Feature<Geometry>;
}

export function RotateControls({ feature }: RotateControlsProps) {
  const { map } = useMap();
  const [heading, setHeading] = useFeatureProperty<number>(feature, 'heading');
  const [isRotating, setIsRotating] = useState(false);
  const isDraggingRef = useRef(false);
  const dragPanRef = useRef<DragPan[]>([]);

  const overlayRef = useRef<Overlay | null>(null);
  const overlayElRef = useRef<HTMLDivElement | null>(null);

  // Reset rotation mode when feature changes
  useEffect(() => {
    setIsRotating(false);
  }, [feature]);

  /** Clamp and set heading */
  const applyHeading = useCallback(
    (deg: number) => {
      setHeading(((deg % 360) + 360) % 360);
    },
    [setHeading],
  );

  /** Disable / re-enable DragPan on the map */
  const setDragPanActive = useCallback(
    (active: boolean) => {
      if (active) {
        dragPanRef.current.forEach((i) => i.setActive(true));
        dragPanRef.current = [];
      } else {
        map.getInteractions().forEach((interaction) => {
          if (interaction instanceof DragPan && interaction.getActive()) {
            interaction.setActive(false);
            dragPanRef.current.push(interaction);
          }
        });
      }
    },
    [map],
  );

  // ---------- Overlay lifecycle ----------

  useEffect(() => {
    if (!isRotating) {
      // Remove overlay when not rotating
      if (overlayRef.current) {
        map.removeOverlay(overlayRef.current);
        overlayRef.current = null;
      }
      return;
    }

    // Create the overlay container
    const size = (RING_RADIUS + HANDLE_SIZE) * 2;
    const el = document.createElement('div');
    el.style.width = `${size}px`;
    el.style.height = `${size}px`;
    el.style.position = 'relative';
    el.style.pointerEvents = 'none';
    overlayElRef.current = el;

    // SVG ring + handle
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', String(size));
    svg.setAttribute('height', String(size));
    svg.style.position = 'absolute';
    svg.style.top = '0';
    svg.style.left = '0';
    svg.style.overflow = 'visible';

    const center = size / 2;

    // Dashed ring
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', String(center));
    circle.setAttribute('cy', String(center));
    circle.setAttribute('r', String(RING_RADIUS));
    circle.setAttribute('fill', 'none');
    circle.setAttribute('stroke', 'rgba(0, 102, 204, 0.5)');
    circle.setAttribute('stroke-width', '2');
    circle.setAttribute('stroke-dasharray', '6 4');
    svg.appendChild(circle);

    // Direction line from center to handle
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', String(center));
    line.setAttribute('y1', String(center));
    line.setAttribute('stroke', 'rgba(0, 102, 204, 0.35)');
    line.setAttribute('stroke-width', '1');
    line.setAttribute('stroke-dasharray', '4 3');
    svg.appendChild(line);

    // Handle (filled circle)
    const handle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    handle.setAttribute('r', String(HANDLE_SIZE / 2));
    handle.setAttribute('fill', 'rgba(0, 102, 204, 0.9)');
    handle.setAttribute('stroke', '#fff');
    handle.setAttribute('stroke-width', '2');
    handle.style.cursor = 'grab';
    handle.style.pointerEvents = 'auto';
    svg.appendChild(handle);

    el.appendChild(svg);

    // Position the handle based on current heading
    const updateHandle = (deg: number) => {
      const rad = (deg - 90) * (Math.PI / 180); // -90 because 0° = North (up)
      const hx = center + RING_RADIUS * Math.cos(rad);
      const hy = center + RING_RADIUS * Math.sin(rad);
      handle.setAttribute('cx', String(hx));
      handle.setAttribute('cy', String(hy));
      line.setAttribute('x2', String(hx));
      line.setAttribute('y2', String(hy));
    };
    updateHandle(feature.get('heading') ?? 0);

    // Create OL Overlay
    const coords = (feature.getGeometry() as Point).getCoordinates();
    const overlay = new Overlay({
      element: el,
      position: coords,
      positioning: 'center-center',
      stopEvent: false,
    });
    overlayRef.current = overlay;
    map.addOverlay(overlay);

    // ---- Drag interaction on the handle ----
    const viewport = map.getViewport();

    const computeHeadingFromPointer = (clientX: number, clientY: number) => {
      const centerPixel = map.getPixelFromCoordinate(coords);
      const rect = viewport.getBoundingClientRect();
      const px = clientX - rect.left;
      const py = clientY - rect.top;
      const dx = px - centerPixel[0];
      const dy = py - centerPixel[1];
      const radians = Math.atan2(dy, dx);
      return ((radians * 180) / Math.PI + 90 + 360) % 360;
    };

    const onPointerDown = (evt: PointerEvent) => {
      evt.preventDefault();
      evt.stopPropagation();
      isDraggingRef.current = true;
      handle.style.cursor = 'grabbing';
      setDragPanActive(false);
    };

    const onPointerMove = (evt: PointerEvent) => {
      if (!isDraggingRef.current) return;
      const deg = computeHeadingFromPointer(evt.clientX, evt.clientY);
      const clamped = ((deg % 360) + 360) % 360;
      setHeading(clamped);
      updateHandle(clamped);
    };

    const onPointerUp = () => {
      if (!isDraggingRef.current) return;
      isDraggingRef.current = false;
      handle.style.cursor = 'grab';
      setDragPanActive(true);
    };

    handle.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);

    return () => {
      handle.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      map.removeOverlay(overlay);
      overlayRef.current = null;

      if (isDraggingRef.current) {
        isDraggingRef.current = false;
        setDragPanActive(true);
      }
    };
  }, [isRotating, feature, map, setDragPanActive]);

  return (
    <>
      <div className={classes.featurePanelContentRow}>
        <Field>
          <Label data-size="sm">Retning (°)</Label>
          <Input
            value={Math.round(heading ?? 0)}
            type="number"
            onChange={(e) => {
              const val = Number(e.target.value);
              if (!Number.isNaN(val)) applyHeading(val);
            }}
          />
        </Field>
        <Button
          size="md"
          onClick={() => setIsRotating(!isRotating)}
          color={isRotating ? 'danger' : undefined}
        >
          {isRotating ? <Icon material="check" /> : <Icon material="360" />}
          {isRotating ? 'Ferdig' : 'Roter'}
        </Button>
      </div>
      {isRotating ? <Label data-size='sm'>Skriv inn ønsket retning eller roter direkte i kartet</Label> : null}
    </>
  );
}
