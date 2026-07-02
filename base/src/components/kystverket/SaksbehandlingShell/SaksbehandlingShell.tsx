import { useState, type CSSProperties } from 'react';
import { Box, Heading, Icon, IconButton, SideSheet, Body } from '~/main';
import { ItemList } from './ItemList/ItemList';
import classes from './SaksbehandlingShell.module.css';
import type { SaksbehandlingShellProps } from './SaksbehandlingShell.types';

const ITEM_LIST_WIDTH_STYLE = {
  '--side-sheet-width': '400px',
  '--side-sheet-padding': '20px 0px 30px 00px',
} as CSSProperties;

export function SaksbehandlingShell({
  caseTitle,
  caseLocation,
  caseStatus,
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

  return (
    <div className={`${classes.shell} ${className}`}>
      <Box horizontal align="center" justify="between" gap={8} px={16} py={12} className={classes.heading}>
        <Box horizontal align="center" gap={8}>
          <Heading level={1} data-size="sm" style={{ margin: 0 }}>
            {caseTitle}
          </Heading>
          {caseLocation && (
            <Box horizontal align="center" gap={4}>
              <Icon material="pin_drop" size="sm" />
              <Body size="sm" inline>
                {caseLocation}
              </Body>
            </Box>
          )}
        </Box>
        {caseStatus}
      </Box>

      <Box horizontal align="center" justify="between" gap={8} px={16} py={8} className={classes.toolbar}>
        <Box horizontal align="center" gap={8}>
          <IconButton
            variant="ghost"
            color="neutral"
            size="sm"
            onClick={toggleItemList}
            aria-label={isItemListOpen ? 'Skjul elementliste' : 'Vis elementliste'}
          >
            <Icon material={isItemListOpen ? 'left_panel_close' : 'view_list'} size="sm" />
          </IconButton>
          {!isItemListPinned && isItemListOpen && (
            <IconButton
              variant="ghost"
              color="neutral"
              size="sm"
              onClick={() => setIsItemListPinned((pinned) => !pinned)}
              aria-label={isItemListPinned ? 'Løsne sidepanel' : 'Fest sidepanel'}
            >
              <Icon material={isItemListPinned ? 'keep_off' : 'keep'} size="sm" />
            </IconButton>
          )}
          {itemActions && <div className={classes.divider} aria-hidden />}
          <Box horizontal align="center" gap={8}>
            {caseActions}
          </Box>
          {itemActions && <div className={classes.divider} aria-hidden />}
          <Box horizontal align="center" gap={8}>
            {itemActions}
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
                  aria-label={isComparisonPinned ? 'Løsne sidepanel' : 'Fest sidepanel'}
                >
                  <Icon material={isComparisonPinned ? 'keep_off' : 'keep'} size="sm" />
                </IconButton>
              )}
              <IconButton
                variant="ghost"
                color="neutral"
                size="sm"
                onClick={toggleComparison}
                aria-label={isComparisonOpen ? 'Skjul sammenligning' : 'Vis sammenligning'}
              >
                <Icon material={isComparisonOpen ? 'right_panel_close' : 'code_blocks'} size="sm" />
              </IconButton>
            </>
          )}
        </Box>
      </Box>

      <SideSheet.Layout>
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

        <div className={classes.main}>{children}</div>

        {comparisonContent && (
          <SideSheet
            open={isComparisonOpen}
            onClose={() => setIsComparisonOpen(false)}
            pinned={isComparisonPinned}
            onPinnedChange={setIsComparisonPinned}
            placement="right"
            size="50%"
            showCloseButton={false}
          >
            {comparisonContent}
          </SideSheet>
        )}
      </SideSheet.Layout>
    </div>
  );
}
