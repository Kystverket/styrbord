import type { ReactNode } from 'react';
import { IconId } from '~/main';

export type SaksbehandlingItemType = 'IncomingLetter' | 'OutboundLetter' | 'Discussion' | 'Checklist' | 'Note';

export interface SaksbehandlingItem {
  id: string;
  title: string;
  description?: string;
  dateCreated: Date;
  type: SaksbehandlingItemType;
  icon?: IconId;
  iconColor?: string;
}

export interface SaksbehandlingShellProps {
  /** Case title, shown in the heading row. */
  caseTitle: string;
  /** Case location, shown next to the title in the heading row. */
  caseLocation?: string;
  /** Case status, shown on the right of the heading row. Typically a `Tag`. */
  caseStatus?: ReactNode;
  /** Actions related to the case as a whole, shown on the left of the toolbar. */
  caseActions?: ReactNode;
  /** Actions related to the currently selected item, shown on the right of the toolbar. */
  itemActions?: ReactNode;
  items: SaksbehandlingItem[];
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
