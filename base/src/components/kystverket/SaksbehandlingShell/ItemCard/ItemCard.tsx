import { Heading } from '@digdir/designsystemet-react';
import Box from '../../Box/box';
import Icon from '../../Icon/icon';
import type { ItemCardProps } from './ItemCard.types';
import { Paragraph } from '~/main';
import classes from './ItemCard.module.css';

export function ItemCard({ item, selected = false, onClick }: Readonly<ItemCardProps>) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={
        {
          '--item-card-border-color': `var(--ds-color-${item.iconColor}-border-strong)`,
          '--item-card-bg-color': `var(--ds-color-${item.iconColor}-surface-tinted)`,
        } as React.CSSProperties
      }
      className={[classes.item, selected ? classes.selected : ''].join(' ')}
    >
      <Box horizontal align="start" gap={12}>
        <Icon material={item.icon} indicator={item.iconIndicator} background={item.iconColor ?? 'lyng'} />
        <Box align="start">
          <Heading data-size="xs">{item.title}</Heading>
          <Paragraph data-size="sm">{item.description}</Paragraph>
          {item.children}
        </Box>
      </Box>
    </button>
  );
}
