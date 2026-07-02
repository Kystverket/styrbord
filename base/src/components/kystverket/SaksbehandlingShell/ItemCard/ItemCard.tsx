import { Heading } from '@digdir/designsystemet-react';
import Box from '../../Box/box';
import Icon from '../../Icon/icon';
import type { ItemCardProps } from './ItemCard.types';
import { Body } from '~/main';
import classes from './ItemCard.module.css';

export function ItemCard({ item, selected = false, onClick }: ItemCardProps) {
  const formattedDate = item.dateCreated.toLocaleDateString('nb-NO', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  return (
    <button onClick={onClick} className={[classes.item, selected ? classes.selected : ''].join(' ')}>
      <Box horizontal align="start" gap={12}>
        <Icon material={item.icon} background={item.iconColor ?? 'lyng'} />
        <Box align="start">
          <Heading data-size="xs">{item.title}</Heading>
          <Body data-size="sm">{item.description}</Body>
          {formattedDate && <span>{formattedDate}</span>}
        </Box>
      </Box>
    </button>
  );
}
