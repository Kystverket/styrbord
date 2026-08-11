import type { ReactNode } from 'react';
import type { MaterialIconProps } from '../Icon/icon';

export interface SaksbehandlingItem {
  id: string;
  title: string;
  description?: string;
  children?: ReactNode;
  icon: MaterialIconProps['material'];
  iconIndicator?: MaterialIconProps['indicator'];
  iconColor?: MaterialIconProps['background'];
}

export interface SaksbehandlingShellProps {
  /** Content for the header row. */
  headerContent: ReactNode;
  /** Actions related to the case as a whole, shown on the left of the toolbar. */
  caseActions?: ReactNode;
  /** Actions related to the currently selected item, shown on the right of the toolbar. */
  itemActions?: ReactNode;
  items?: SaksbehandlingItem[];
  selectedItemId?: string;
  onSelectItemId: (id: string) => void;
  /** Optional comparison section content. When omitted, the comparison panel and its toggle are not rendered. */
  comparisonContent?: ReactNode;
  /** Default open state of the item list panel. Default: `true`. */
  defaultItemListOpen?: boolean;
  /** Default open state of the comparison panel. Default: `false`. */
  defaultComparisonOpen?: boolean;
  /** Main section content for the currently selected item. */
  children?: ReactNode;
  className?: string;
}
