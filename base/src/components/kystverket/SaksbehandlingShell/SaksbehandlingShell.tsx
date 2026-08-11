import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { Box, Icon, IconButton, SideSheet } from '~/main';
import { ItemList } from './ItemList/ItemList';
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
  children,
  className = '',
}: Readonly<SaksbehandlingShellProps>) {
  const { scopedT } = useTranslation();
  const t = scopedT('saksbehandlingShell');
  const [isItemListOpen, setIsItemListOpen] = useState(defaultItemListOpen);
  const [isComparisonOpen, setIsComparisonOpen] = useState(defaultComparisonOpen);
  const [isItemListPinned, setIsItemListPinned] = useState(defaultItemListOpen);
  const [isComparisonPinned, setIsComparisonPinned] = useState(defaultComparisonOpen);

  const toggleItemList = () => {
    setIsItemListOpen((open) => !open);
    if (isItemListOpen) {
      setIsItemListPinned(false);
    }
  };

  const toggleComparison = () => {
    setIsComparisonOpen((open) => !open);
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
      <Box horizontal align="center" justify="between" gap={8} px={16} py={12} className={classes.heading}>
        {headerContent}
      </Box>

      <Box horizontal align="center" justify="between" gap={8} px={16} py={8} className={classes.toolbar}>
        <Box horizontal align="center" gap={8}>
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
          <Box horizontal align="center" gap={8}>
            {caseActions}
          </Box>
        </Box>
        <Box horizontal align="center" gap={8}>
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
        </Box>
      </Box>

      <SideSheet.Layout>
        {items !== undefined && (
          <SideSheet
            open={isItemListOpen}
            onClose={() => setIsItemListOpen(false)}
            pinned={isItemListPinned}
            onPinnedChange={setIsItemListPinned}
            placement="left"
            showCloseButton={false}
            style={ITEM_LIST_WIDTH_STYLE}
          >
            <ItemList items={items} selectedItemId={selectedItemId} onSelectItemId={onSelectItemId} />
          </SideSheet>
        )}

        <div className={classes.mainContainer}>
          {itemActions && (
            <Box horizontal align="center" gap={8} className={classes.itemActions}>
              {itemActions}
            </Box>
          )}
          <div className={classes.main} ref={mainRef}>
            {children}
          </div>
        </div>

        {comparisonContent && (
          <SideSheet
            open={isComparisonOpen}
            onClose={() => setIsComparisonOpen(false)}
            pinned={isComparisonPinned}
            onPinnedChange={setIsComparisonPinned}
            placement="right"
            size={isItemListPinned ? '40%' : '50%'}
            showCloseButton={false}
          >
            {comparisonContent}
          </SideSheet>
        )}
      </SideSheet.Layout>
    </div>
  );
}
