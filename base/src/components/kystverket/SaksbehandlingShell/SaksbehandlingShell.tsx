import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { Surface, Icon, IconButton } from '~/main';
import { ItemList } from './ItemList/ItemList';
import { ShellSideSheet, ShellSideSheetLayout } from './ShellSideSheet/ShellSideSheet';
import classes from './SaksbehandlingShell.module.css';
import type { SaksbehandlingShellProps } from './SaksbehandlingShell.types';
import { useTranslation } from '~/translations';

const ITEM_LIST_WIDTH_STYLE = {
  '--side-sheet-width': '400px',
  '--side-sheet-padding': 'var(--ds-size-3) 0px 30px 0px',
} as CSSProperties;

export function SaksbehandlingShell({
  headerContent,
  caseActions,
  itemActions,
  items,
  selectedItemId,
  onSelectItemId,
  comparisonContent,
  defaultItemListOpen = true,
  defaultComparisonOpen = false,
  comparisonOpen,
  onComparisonOpenChange,
  children,
  className = '',
}: Readonly<SaksbehandlingShellProps>) {
  const { scopedT } = useTranslation();
  const t = scopedT('saksbehandlingShell');
  const [isItemListOpen, setIsItemListOpen] = useState(defaultItemListOpen);
  const [comparisonOpenState, setComparisonOpenState] = useState(defaultComparisonOpen);
  const isComparisonControlled = comparisonOpen !== undefined;
  const isComparisonOpen = isComparisonControlled ? comparisonOpen : comparisonOpenState;
  const setIsComparisonOpen = (open: boolean) => {
    if (!isComparisonControlled) setComparisonOpenState(open);
    onComparisonOpenChange?.(open);
  };
  const [isItemListPinned, setIsItemListPinned] = useState(defaultItemListOpen);
  const [isComparisonPinned, setIsComparisonPinned] = useState(comparisonOpen ?? defaultComparisonOpen);

  const toggleItemList = () => {
    setIsItemListOpen((open) => !open);
    if (isItemListOpen) {
      setIsItemListPinned(false);
    }
  };

  const toggleComparison = () => {
    setIsComparisonOpen(!isComparisonOpen);
    if (isComparisonOpen) {
      setIsComparisonPinned(false);
    }
  };

  const mainRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (mainRef.current) {
        mainRef.current.scrollTo(0, 0);
      }
      window.scrollTo(0, 0);
    }
  }, [selectedItemId]);

  return (
    <div className={`${classes.shell} ${className}`}>
      <Surface horizontal align="center" justify="between" gap={2} px={4} py={3} className={classes.heading}>
        {headerContent}
      </Surface>

      <Surface horizontal align="center" justify="between" gap={2} px={4} py={2} className={classes.toolbar}>
        <Surface horizontal align="center" gap={2}>
          <IconButton
            variant="ghost"
            color="neutral"
            size="sm"
            onClick={toggleItemList}
            className={isItemListOpen ? classes.shellPanelButtonOpen : classes.shellPanelButtonClosed}
            aria-label={isItemListOpen ? t('hideItemList') : t('showItemList')}
          >
            <Icon material="left_panel_close" size="sm" />
          </IconButton>
          {!isItemListPinned && isItemListOpen && (
            <IconButton
              variant="ghost"
              color="neutral"
              size="sm"
              onClick={() => setIsItemListPinned((pinned) => !pinned)}
              aria-label={isItemListPinned ? t('unpinSidePanel') : t('pinSidePanel')}
            >
              <Icon material={isItemListPinned ? 'keep_off' : 'keep'} size="sm" />
            </IconButton>
          )}
          {caseActions && <div className={classes.divider} aria-hidden />}
          <Surface horizontal align="center" gap={2}>
            {caseActions}
          </Surface>
        </Surface>
        <Surface horizontal align="center" gap={2}>
          {comparisonContent && (
            <>
              {!isComparisonPinned && isComparisonOpen && (
                <IconButton
                  variant="ghost"
                  color="neutral"
                  size="sm"
                  onClick={() => setIsComparisonPinned((pinned) => !pinned)}
                  aria-label={isComparisonPinned ? t('unpinSidePanel') : t('pinSidePanel')}
                >
                  <Icon material={isComparisonPinned ? 'keep_off' : 'keep'} size="sm" />
                </IconButton>
              )}
              <IconButton
                variant="ghost"
                color="neutral"
                size="sm"
                onClick={toggleComparison}
                className={isComparisonOpen ? classes.shellPanelButtonOpen : classes.shellPanelButtonClosed}
                aria-label={isComparisonOpen ? t('hideComparison') : t('showComparison')}
              >
                <Icon material={'right_panel_close'} size="sm" />
              </IconButton>
            </>
          )}
        </Surface>
      </Surface>

      <ShellSideSheetLayout>
        {items !== undefined && (
          <ShellSideSheet
            open={isItemListOpen}
            onClose={() => setIsItemListOpen(false)}
            pinned={isItemListPinned}
            placement="left"
            style={ITEM_LIST_WIDTH_STYLE}
            aria-label={t('itemList')}
          >
            <ItemList items={items} selectedItemId={selectedItemId} onSelectItemId={onSelectItemId} />
          </ShellSideSheet>
        )}

        <div className={classes.mainContainer}>
          {itemActions && (
            <Surface horizontal align="center" gap={2} className={classes.itemActions}>
              {itemActions}
            </Surface>
          )}
          <div className={classes.main} ref={mainRef}>
            {children}
          </div>
        </div>

        {comparisonContent && (
          <ShellSideSheet
            open={isComparisonOpen}
            onClose={() => setIsComparisonOpen(false)}
            pinned={isComparisonPinned}
            placement="right"
            size={isItemListPinned ? '40%' : '50%'}
            aria-label={t('comparison')}
          >
            {comparisonContent}
          </ShellSideSheet>
        )}
      </ShellSideSheetLayout>
    </div>
  );
}
