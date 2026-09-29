import { Surface } from '~/main';
import { ItemCard } from '../ItemCard/ItemCard';
import type { ItemListProps } from './ItemList.types';

export function ItemList({ items, selectedItemId, onSelectItemId }: Readonly<ItemListProps>) {
  return (
    <Surface gap={1}>
      {items.map((item) => (
        <ItemCard
          key={item.id}
          item={item}
          selected={item.id === selectedItemId}
          onClick={() => onSelectItemId(item.id)}
        />
      ))}
    </Surface>
  );
}
