import { Heading } from '@digdir/designsystemet-react';
import Surface from '../../Surface/Surface';
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
      <Surface horizontal align="start" gap={3}>
        <Icon material={item.icon} indicator={item.iconIndicator} background={item.iconColor ?? 'lyng'} />
        <Surface align="start">
          <Heading data-size="xs">{item.title}</Heading>
          <Paragraph data-size="sm">{item.description}</Paragraph>
          {item.children}
        </Surface>
      </Surface>
    </button>
  );
}
