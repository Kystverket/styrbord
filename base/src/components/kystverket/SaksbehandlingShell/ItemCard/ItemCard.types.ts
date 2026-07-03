import type { SaksbehandlingItem } from '../SaksbehandlingShell.types';

export interface ItemCardProps {
  item: SaksbehandlingItem;
  selected?: boolean;
  onClick?: () => void;
}
