import { ClickableCard } from '~/main';
import type { IconId } from '~/main';
import type { SaksbehandlingItemType } from '../SaksbehandlingShell.types';
import type { ItemCardProps } from './ItemCard.types';

const ITEM_TYPE_ICON: Record<SaksbehandlingItemType, IconId> = {
  IncomingLetter: 'inbox',
  OutboundLetter: 'send',
  Discussion: 'chat',
  Checklist: 'format_list_bulleted',
  Note: 'text_snippet',
};

export function ItemCard({ item, selected = false, onClick }: ItemCardProps) {
  const formattedDate = item.dateCreated.toLocaleDateString('nb-NO', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
  const description = item.description ? `${item.description} · ${formattedDate}` : formattedDate;

  return (
    <ClickableCard
      heading={item.title}
      description={description}
      icon={item.icon ?? ITEM_TYPE_ICON[item.type]}
      color={selected ? 'main' : 'neutral'}
      variant={selected ? 'tinted' : 'default'}
      headingSize="xs"
      chevron={false}
      onClick={onClick}
      aria-label={item.title}
    />
  );
}
