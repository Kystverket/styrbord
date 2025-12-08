import type { Meta, StoryFn } from '@storybook/react';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';
import Icon from '~/components/kystverket/Icon/icon';
import { IconId, iconIdList } from './icon.types';
import { Body } from '~/main';

const meta = {
  title: 'Helpers/Icon',
  component: Icon,
  decorators: [StyrbordDecorator],
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Icon>;

export default meta;

const iconDescriptions: Partial<Record<IconId, string>> = {
  arrow_back: 'Navigerer tilbake',
  arrow_right_alt: 'Navigerer framover, indikere at handlingen vil føre til en annen side eller visning',
  content_copy: 'Kopierer eller dupliserer',
};

const sizes = ['2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const;

export const IconShowcase: StoryFn = () => {
  return (
    <table>
      {iconIdList.map((iconId) => (
        <tr key={iconId}>
          <td style={{ padding: '0.5rem' }}>
            <Icon material={iconId} />
          </td>
          <td style={{ padding: '0.5rem' }}>
            <Body strong>{iconId}</Body>
            <Body size="sm">{iconDescriptions[iconId]}</Body>
          </td>
        </tr>
      ))}
    </table>
  );
};

export const IconSizing: StoryFn = () => {
  return (
    <table>
      {sizes.map((size) => (
        <tr key={size}>
          <td style={{ padding: '0.5rem', textAlign: 'center' }}>
            <Icon size={size} material="anchor" />
          </td>
          <td style={{ padding: '0.5rem' }}>
            size="{size}" {size === 'md' ? '(default)' : ''}
          </td>
        </tr>
      ))}
    </table>
  );
};
