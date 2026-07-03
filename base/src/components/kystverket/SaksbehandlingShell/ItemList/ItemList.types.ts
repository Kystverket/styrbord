import type { SaksbehandlingItem } from '../SaksbehandlingShell.types';

export interface ItemListProps {
  items: SaksbehandlingItem[];
  selectedItemId?: string;
  onSelectItemId: (id: string) => void;
}
