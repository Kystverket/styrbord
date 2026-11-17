import { useCallback, useEffect, useRef } from 'react';
import classes from './ShellSideSheet.module.css';
import type { ShellSideSheetLayoutProps, ShellSideSheetProps, ShellSideSheetSize } from './ShellSideSheet.types';

/*
 * Internal to SaksbehandlingShell — not exported from main.ts.
 *
 * A frozen copy of SideSheet as it was when the shell was last worked on (4d576f09, before
 * SideSheet was made responsive in 57ea7e88). Later SideSheet changes broke the shell's
 * overlay/pin behaviour, so the shell keeps its own. Only the parts the shell uses are kept:
 * no header, footer or Buttons, since the shell renders its own toolbar.
 */

const sizeClass: Record<ShellSideSheetSize, string> = {
  sm: classes['size-sm'],
  md: classes['size-md'],
  lg: classes['size-lg'],
  '33%': classes['size-33'],
  '40%': classes['size-40'],
  '50%': classes['size-50'],
  '66%': classes['size-66'],
};

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

function trapFocus(sheetEl: HTMLElement, event: KeyboardEvent) {
  if (event.key !== 'Tab') return;
  const focusable = Array.from(sheetEl.querySelectorAll<HTMLElement>(FOCUSABLE));
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey) {
    if (document.activeElement === first) {
      event.preventDefault();
      last.focus();
    }
  } else if (document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

export function ShellSideSheet({
  open = false,
  onClose,
  placement = 'right',
  size = 'md',
  pinned = false,
  backdrop = true,
  children,
  className = '',
  style,
  'aria-label': ariaLabel,
}: Readonly<ShellSideSheetProps>) {
  const sheetRef = useRef<HTMLElement>(null);
  const previousFocusRef = useRef<Element | null>(null);
  const pinnedRef = useRef(pinned);
  pinnedRef.current = pinned;

  const isModal = open && !pinned && backdrop;

  // Move focus in only when the sheet opens over the content. A pinned sheet is part of the
  // page, so opening it must not pull focus away from where the user is working.
  useEffect(() => {
    if (open) {
      if (pinnedRef.current) return;
      previousFocusRef.current = document.activeElement;
      requestAnimationFrame(() => {
        sheetRef.current?.querySelector<HTMLElement>(FOCUSABLE)?.focus();
      });
    } else if (previousFocusRef.current instanceof HTMLElement) {
      previousFocusRef.current.focus();
      previousFocusRef.current = null;
    }
  }, [open]);

  useEffect(() => {
    if (!isModal || !sheetRef.current) return;
    const el = sheetRef.current;
    const handler = (e: KeyboardEvent) => trapFocus(el, e);
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [isModal]);

  useEffect(() => {
    if (!open || pinned) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose?.();
    }
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [open, pinned, onClose]);

  const handleBackdropClick = useCallback(() => {
    if (!pinned) onClose?.();
  }, [pinned, onClose]);

  const sheetClasses = [
    classes.sideSheet,
    sizeClass[size] ?? classes['size-md'],
    pinned ? classes.push : classes.overlay,
    placement === 'left' ? classes['placement-left'] : classes['placement-right'],
    open ? '' : classes.closed,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <>
      {!pinned && backdrop && (
        <div
          className={`${classes.backdrop} ${open ? '' : classes.backdropHidden}`}
          onClick={handleBackdropClick}
          aria-hidden
        />
      )}

      <aside
        ref={sheetRef}
        className={sheetClasses}
        style={style}
        role={pinned ? undefined : 'dialog'}
        aria-modal={isModal || undefined}
        aria-label={ariaLabel}
        aria-hidden={!open}
      >
        <div className={classes.body}>{children}</div>
      </aside>
    </>
  );
}

/** Flex row a pinned `ShellSideSheet` takes its width from; the rest of the row fills the remainder. */
export function ShellSideSheetLayout({ children, className = '', style }: Readonly<ShellSideSheetLayoutProps>) {
  return (
    <div className={`${classes.layout} ${className}`} style={style}>
      {children}
    </div>
  );
}
