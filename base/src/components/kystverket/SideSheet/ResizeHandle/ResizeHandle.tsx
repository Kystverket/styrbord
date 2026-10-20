import { useEffect, useRef, useState } from 'react';
import { useTranslation } from '~/translations';
import type { SideSheetPlacement } from '~/components/kystverket/SideSheet/SideSheet.types';
import classes from './ResizeHandle.module.css';

const MIN_WIDTH = 320;
/** Share of the container (Layout when pinned, viewport in overlay) the sheet may take up. */
const MAX_SHARE = 0.8;
const KEY_STEP = 16;
const KEY_STEP_LARGE = 80;

interface Bounds {
  now: number;
  min: number;
  max: number;
}

function getBounds(sheet: HTMLElement, pinned: boolean): Bounds {
  const containerWidth = pinned ? (sheet.parentElement?.clientWidth ?? window.innerWidth) : window.innerWidth;
  const max = Math.round(containerWidth * MAX_SHARE);
  return {
    // The used `width`, so it lines up with what --side-sheet-width sets regardless of borders.
    now: Math.round(Number.parseFloat(getComputedStyle(sheet).width)),
    min: Math.min(MIN_WIDTH, max),
    max,
  };
}

function clamp(value: number, { min, max }: Bounds) {
  return Math.min(Math.max(value, min), max);
}

interface ResizeHandleProps {
  sheetRef: React.RefObject<HTMLElement | null>;
  placement: SideSheetPlacement;
  pinned: boolean;
  onResize: (width: number) => void;
  onResizingChange: (resizing: boolean) => void;
  onReset: () => void;
}

/**
 * Draggable edge for `SideSheet allowResize`. Follows the WAI-ARIA window splitter pattern: a
 * focusable `separator` whose value is the sheet's width in pixels, adjustable with the arrow
 * keys (Shift for bigger steps) and Home/End. Double-click resets to the `size` prop.
 */
export function ResizeHandle({
  sheetRef,
  placement,
  pinned,
  onResize,
  onResizingChange,
  onReset,
}: Readonly<ResizeHandleProps>) {
  const { t } = useTranslation();
  const [bounds, setBounds] = useState<Bounds | null>(null);
  const dragRef = useRef<{ startX: number; startWidth: number; bounds: Bounds } | null>(null);
  // Dragging towards the page widens the sheet: leftwards for a right-hand sheet and vice versa.
  const direction = placement === 'left' ? -1 : 1;

  // Kept in state only for aria-valuenow/min/max. Lives here rather than in SideSheet so that
  // the open/close width transition re-renders this handle and not the whole sheet.
  useEffect(() => {
    const sheet = sheetRef.current;
    if (!sheet) return;
    const measure = () => setBounds(getBounds(sheet, pinned));
    measure();
    window.addEventListener('resize', measure);
    const resizeObserver = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(measure) : undefined;
    resizeObserver?.observe(sheet);
    if (sheet.parentElement) resizeObserver?.observe(sheet.parentElement);
    return () => {
      window.removeEventListener('resize', measure);
      resizeObserver?.disconnect();
    };
  }, [sheetRef, pinned]);

  function endDrag() {
    if (!dragRef.current) return;
    dragRef.current = null;
    document.body.style.removeProperty('user-select');
    document.body.style.removeProperty('cursor');
    onResizingChange(false);
  }

  // Don't leave the page unselectable if the sheet unmounts mid-drag.
  useEffect(() => endDrag, []);

  function handlePointerDown(event: React.PointerEvent<HTMLDivElement>) {
    const sheet = sheetRef.current;
    if (!sheet || event.button !== 0) return;
    event.preventDefault();
    // Without capture, a map canvas or iframe under the pointer swallows the moves mid-drag.
    event.currentTarget.setPointerCapture(event.pointerId);
    const current = getBounds(sheet, pinned);
    dragRef.current = { startX: event.clientX, startWidth: current.now, bounds: current };
    document.body.style.userSelect = 'none';
    document.body.style.cursor = 'col-resize';
    onResizingChange(true);
  }

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const drag = dragRef.current;
    if (!drag) return;
    const width = drag.startWidth + (drag.startX - event.clientX) * direction;
    onResize(Math.round(clamp(width, drag.bounds)));
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    const sheet = sheetRef.current;
    if (!sheet) return;
    const current = getBounds(sheet, pinned);
    const step = event.shiftKey ? KEY_STEP_LARGE : KEY_STEP;
    let width: number;
    switch (event.key) {
      case 'ArrowLeft':
        width = current.now + step * direction;
        break;
      case 'ArrowRight':
        width = current.now - step * direction;
        break;
      case 'Home':
        width = current.min;
        break;
      case 'End':
        width = current.max;
        break;
      default:
        return;
    }
    event.preventDefault();
    onResize(clamp(width, current));
  }

  return (
    <div
      className={classes.resizeHandle}
      data-placement={placement}
      data-pinned={pinned || undefined}
      role="separator"
      aria-orientation="vertical"
      aria-label={t('sideSheet.resize')}
      aria-valuenow={bounds?.now}
      aria-valuemin={bounds?.min}
      aria-valuemax={bounds?.max}
      tabIndex={0}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onLostPointerCapture={endDrag}
      onKeyDown={handleKeyDown}
      onDoubleClick={onReset}
    />
  );
}
