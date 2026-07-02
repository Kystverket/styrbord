import { forwardRef, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { Heading } from '@digdir/designsystemet-react';
import { Box, Button, Tooltip } from '~/main';
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
  '50%': classes['size-50'],
  '66%': classes['size-66'],
};

function getSizeClass(size: SideSheetSize): string {
  return fixedSizeClass[size] ?? classes['size-md'];
}

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

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
    headingSize = 'xs',
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
  const inLayout = useSideSheetLayoutContext();

  const isControlled = pinnedProp !== undefined;
  const [pinnedState, setPinnedState] = useState<boolean>(
    defaultPinned === undefined ? mode === 'push' : defaultPinned,
  );
  const isPinned = isControlled ? pinnedProp : pinnedState;

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
  const previousFocusRef = useRef<Element | null>(null);

  const isModal = open && !isPinned && backdrop;

  useEffect(() => {
    if (open) {
      previousFocusRef.current = document.activeElement;
      requestAnimationFrame(() => {
        if (!sheetRef.current) return;
        const first = sheetRef.current.querySelector<HTMLElement>(FOCUSABLE);
        first?.focus();
      });
    } else if (previousFocusRef.current instanceof HTMLElement) {
      previousFocusRef.current.focus();
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
        style={style}
        role="dialog"
        aria-modal={isModal}
        aria-label={typeof title === 'string' ? title : undefined}
        aria-hidden={!open}
      >
        {title || showBackButton ? (
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
                <div className={classes.headerTitle}>
                  <Heading data-size={headingSize} style={{ margin: 0 }}>
                    {title}
                  </Heading>
                </div>
              )}

              <div className={classes.headerActions}>
                {headerAction}

                {pinnable && (
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
        ) : (
          <></>
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
