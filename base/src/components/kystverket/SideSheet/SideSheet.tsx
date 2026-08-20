import { forwardRef, useCallback, useContext, useEffect, useId, useRef, useState } from 'react';
import { Box, Button, Heading, PHONE_SIZE_BREAKPOINT, Tooltip, useMediaQuery } from '~/main';
import { useTranslation } from '~/translations';
import Icon from '~/components/kystverket/Icon/icon';
import { SideSheetButtonsContext, SideSheetButtonsProvider } from './Buttons/ButtonsContext';
import { SideSheetButtons } from './Buttons/SideSheetButtons';
import { SideSheetLayout, useSideSheetLayoutContext } from './Layout/SideSheetLayout';
import classes from './SideSheet.module.css';
import type { SideSheetProps, SideSheetSize } from './SideSheet.types';
export type { SideSheetProps };

const fixedSizeClass: Record<string, string> = {
  sm: classes['size-sm'],
  md: classes['size-md'],
  lg: classes['size-lg'],
  '33%': classes['size-33'],
  '40%': classes['size-40'],
  '50%': classes['size-50'],
  '66%': classes['size-66'],
};

function getSizeClass(size: SideSheetSize): string {
  return fixedSizeClass[size] ?? classes['size-md'];
}

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

// Module-level counter so multiple modal SideSheets (or other modals sharing this convention)
// can be open at once without one closing early stealing the page's scroll back too soon.
let scrollLockCount = 0;
let previousBodyOverflow = '';

function useBodyScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return;

    if (scrollLockCount === 0) {
      previousBodyOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
    }
    scrollLockCount++;

    return () => {
      scrollLockCount--;
      if (scrollLockCount === 0) document.body.style.overflow = previousBodyOverflow;
    };
  }, [locked]);
}

function SideSheetButtonsBlock({ footerDivider }: Readonly<{ footerDivider: boolean }>) {
  const { buttons } = useContext(SideSheetButtonsContext);
  if (!buttons) return null;
  return (
    <footer className={classes.footer}>
      {footerDivider && <hr className={classes.footerDivider} />}
      <Box className={classes.buttonBlock}>
        <Box horizontal gap={12}>
          {buttons}
        </Box>
      </Box>
    </footer>
  );
}

interface EdgeClamp {
  top: number;
  height: number;
}

/**
 * Pinned/push mode only: caps the sheet's height to however much of its containing element
 * (typically `SideSheet.Layout`) is *actually* visible in the viewport right now - measured via
 * the container's own `getBoundingClientRect()`, not a manually declared pixel offset. Full
 * height whenever the container fills the viewport; shrinks automatically as the container's
 * own top/bottom move on screen (e.g. scrolled near the top or bottom of a taller page).
 *
 * Position itself is untouched - native `position: sticky` (from SideSheet.module.css) already
 * keeps it correctly confined to the container; this only fixes the height, since sticky never
 * resizes an element on its own, only repositions it.
 */
function useDynamicEdgeClamp(elRef: React.RefObject<HTMLElement | null>, enabled: boolean) {
  const [clamp, setClamp] = useState<EdgeClamp | null>(null);

  useEffect(() => {
    if (!enabled) {
      setClamp(null);
      return;
    }
    const container = elRef.current?.parentElement;
    if (!container) return;

    let frame = 0;
    function measure() {
      frame = 0;
      const rect = container!.getBoundingClientRect();
      const top = Math.max(rect.top, 0);
      const bottom = Math.min(rect.bottom, window.innerHeight);
      setClamp({ top, height: Math.max(bottom - top, 0) });
    }
    function schedule() {
      if (frame) return;
      frame = requestAnimationFrame(measure);
    }

    schedule();
    window.addEventListener('scroll', schedule, true);
    window.addEventListener('resize', schedule);
    const resizeObserver = new ResizeObserver(schedule);
    resizeObserver.observe(container);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule, true);
      window.removeEventListener('resize', schedule);
      resizeObserver.disconnect();
    };
  }, [elRef, enabled]);

  return clamp;
}

function trapFocus(sheetEl: HTMLElement, event: KeyboardEvent) {
  if (event.key !== 'Tab') return;
  const focusable = Array.from(sheetEl.querySelectorAll<HTMLElement>(FOCUSABLE));
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  const active = document.activeElement;
  if (event.shiftKey) {
    if (active === first || active === sheetEl) {
      event.preventDefault();
      last.focus();
    }
  } else if (active === last || active === sheetEl) {
    event.preventDefault();
    first.focus();
  }
}

const SideSheetRoot = forwardRef<HTMLElement, SideSheetProps>(function SideSheet(
  {
    open = false,
    onClose,
    placement = 'right',
    size = 'md',
    mode = 'overlay',
    pinnable = false,
    pinned: pinnedProp,
    defaultPinned,
    onPinnedChange,
    backdrop = true,
    title,
    showCloseButton = true,
    showBackButton = false,
    onBack,
    headerAction,
    headerDivider = true,
    footerDivider = true,
    children,
    className = '',
    style,
  },
  ref,
) {
  const { t } = useTranslation();
  const titleId = useId();
  const inLayout = useSideSheetLayoutContext();
  const isControlled = pinnedProp !== undefined;
  const [pinnedState, setPinnedState] = useState<boolean>(
    defaultPinned === undefined ? mode === 'push' : defaultPinned,
  );
  const isPhone = useMediaQuery(`(width < ${PHONE_SIZE_BREAKPOINT})`);
  const isPinned = (isControlled ? pinnedProp : pinnedState) && !isPhone;

  function handlePinToggle() {
    const next = !isPinned;
    if (!isControlled) setPinnedState(next);
    onPinnedChange?.(next);
  }

  // Warn when push/pin is used without a layout wrapper
  useEffect(() => {
    if ((pinnable || mode === 'push') && !inLayout) {
      console.warn(
        '<SideSheet> with pinnable or mode="push" should be rendered inside <SideSheet.Layout> ' +
          'so it can reflow sibling content when pinned.',
      );
    }
  }, [inLayout, mode, pinnable]);

  // Focus management
  const sheetRef = useRef<HTMLElement>(null);
  const combinedRef = (el: HTMLElement | null) => {
    (sheetRef as React.MutableRefObject<HTMLElement | null>).current = el;
    if (typeof ref === 'function') ref(el);
    else if (ref) (ref as React.MutableRefObject<HTMLElement | null>).current = el;
  };

  const edgeClamp = useDynamicEdgeClamp(sheetRef, isPinned);

  const previousFocusRef = useRef<Element | null>(null);

  const isModal = open && !isPinned && backdrop;
  useBodyScrollLock(isModal);

  useEffect(() => {
    if (open) {
      previousFocusRef.current = document.activeElement;
      if (isModal) {
        requestAnimationFrame(() => {
          sheetRef.current?.focus();
        });
      }
    } else if (previousFocusRef.current instanceof HTMLElement) {
      previousFocusRef.current.focus();
    }
  }, [open, isModal]);

  useEffect(() => {
    if (!isModal || !sheetRef.current) return;
    const el = sheetRef.current;
    const handler = (e: KeyboardEvent) => trapFocus(el, e);
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [isModal]);

  useEffect(() => {
    if (!open || isPinned) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose?.();
    }
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [open, isPinned, onClose]);

  const handleBackdropClick = useCallback(() => {
    if (!isPinned) onClose?.();
  }, [isPinned, onClose]);

  const modeClass = isPinned ? classes.push : classes.overlay;
  const placementClass = placement === 'left' ? classes['placement-left'] : classes['placement-right'];
  const closedClass = open ? '' : classes.closed;
  const sizeClass = getSizeClass(size);

  const sheetClasses = [classes.sideSheet, sizeClass, modeClass, placementClass, closedClass, className]
    .filter(Boolean)
    .join(' ');

  // Pinned/push mode: keep native position: sticky (unaffected, still confined to Layout on its
  // own), just cap maxHeight to however much of Layout is currently visible in the viewport.
  // Overlay (unpinned) mode: always 100% of the viewport (plain CSS on .overlay) - opening it
  // locks page scroll (useBodyScrollLock), so there's no scroll position to react to anyway.
  const sheetStyle = edgeClamp ? { ...style, maxHeight: edgeClamp.height } : style;

  function getPinIcon() {
    return isPinned ? 'keep_off' : 'keep';
  }

  return (
    <>
      {!isPinned && backdrop && (
        <div
          className={`${classes.backdrop} ${open ? '' : classes.backdropHidden}`}
          onClick={handleBackdropClick}
          aria-hidden
        />
      )}

      <aside
        ref={combinedRef}
        className={sheetClasses}
        style={sheetStyle}
        role="dialog"
        aria-modal={isModal}
        tabIndex={-1}
        aria-label={typeof title === 'string' ? title : undefined}
        aria-labelledby={title && typeof title !== 'string' ? titleId : undefined}
        aria-hidden={!open}
      >
        {(title || showBackButton) && (
          <header className={classes.header}>
            <div className={classes.headerRow}>
              {showBackButton && (
                <Tooltip content={t('sideSheet.back')} placement="bottom">
                  <Button
                    variant="ghost"
                    color="neutral"
                    size="sm"
                    icon
                    onClick={onBack}
                    aria-label={t('sideSheet.back')}
                  >
                    <Icon material="arrow_back" size="md" />
                  </Button>
                </Tooltip>
              )}

              {title !== undefined && (
                <div id={titleId} className={classes.headerTitle}>
                  {typeof title === 'string' ? <Heading data-size="sm">{title}</Heading> : title}
                </div>
              )}

              <div className={classes.headerActions}>
                {headerAction}

                {pinnable && !isPhone && (
                  <Tooltip content={isPinned ? t('sideSheet.unpin') : t('sideSheet.pin')} placement="bottom">
                    <Button
                      variant="ghost"
                      color="neutral"
                      size="sm"
                      icon
                      onClick={handlePinToggle}
                      aria-label={isPinned ? t('sideSheet.unpin') : t('sideSheet.pin')}
                      aria-pressed={isPinned}
                    >
                      <Icon material={getPinIcon()} size="md" />
                    </Button>
                  </Tooltip>
                )}

                {showCloseButton && (
                  <Tooltip content={t('sideSheet.close')} placement="bottom">
                    <Button
                      variant="ghost"
                      color="neutral"
                      size="sm"
                      icon
                      onClick={onClose}
                      aria-label={t('sideSheet.close')}
                    >
                      <Icon material="close" size="md" />
                    </Button>
                  </Tooltip>
                )}
              </div>
            </div>

            {headerDivider && <hr className={classes.headerDivider} />}
          </header>
        )}
        <div className={classes.body}>{children}</div>

        <SideSheetButtonsBlock footerDivider={footerDivider} />
      </aside>
    </>
  );
});

function SideSheetWithProvider(props: SideSheetProps & { ref?: React.Ref<HTMLElement> }) {
  return (
    <SideSheetButtonsProvider>
      <SideSheetRoot {...props} />
    </SideSheetButtonsProvider>
  );
}

type SideSheetComponent = typeof SideSheetWithProvider & {
  Layout: typeof SideSheetLayout;
  Buttons: typeof SideSheetButtons;
};

export const SideSheet = Object.assign(SideSheetWithProvider, {
  Layout: SideSheetLayout,
  Buttons: SideSheetButtons,
}) as SideSheetComponent;
