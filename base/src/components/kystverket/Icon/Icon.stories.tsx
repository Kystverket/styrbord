import type { Meta, StoryFn } from '@storybook/react-vite';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';
import Icon from '~/components/kystverket/Icon/icon';
import { IconId, iconIdList } from './icon.types';
import { Body, Box } from '~/main';
import { styrbordPaletteColors, styrbordSemanticColors } from '@kystverket/styrbord-tokens/colors';
import { Fragment } from 'react';

const meta = {
  title: 'Helpers/Icon',
  component: Icon,
  decorators: [StyrbordDecorator],
  tags: ['autodocs', 'kyv'],
  argTypes: {},
} satisfies Meta<typeof Icon>;

export default meta;

const iconDescriptions: Partial<Record<IconId, string>> = {
  arrow_back: 'Navigerer tilbake',
  arrow_right_alt: 'Navigerer framover, indikere at handlingen vil føre til en annen side eller visning',
  content_copy: 'Kopierer eller dupliserer',
};

const sizes = ['2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'] as const;
const colors = [...styrbordSemanticColors, ...styrbordPaletteColors];

export const IconShowcase: StoryFn = () => {
  return (
    <table>
      {iconIdList.map((iconId, index) => (
        <tr key={iconId}>
          <td style={{ padding: '1rem' }}>
            <Icon material={iconId} />
          </td>
          <td style={{ padding: '0.5rem' }}>
            <Body strong>{iconId}</Body>
            <Body size="sm">{iconDescriptions[iconId]}</Body>
          </td>
          <td style={{ padding: '0rem' }}>
            <Icon material={iconId} background={colors[index % colors.length]} title={colors[index % colors.length]} />
          </td>
          <td style={{ padding: '0.5rem' }}>{colors[index % colors.length]}</td>
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
          <td style={{ padding: '0.5rem', textAlign: 'center' }}>
            <Icon size={size} material="anchor" background="lyng" />
          </td>
          <td style={{ padding: '0.5rem' }}>
            size="{size}" {size === 'md' ? '(default)' : ''}
          </td>
        </tr>
      ))}
    </table>
  );
};

export const IconIndicator: StoryFn = () => {
  return (
    <Box gap={16}>
      {sizes.map((size) => (
        <Fragment key={size}>
          <Box horizontal gap={16} align="center" p={8}>
            <Icon size={size} material="description" />
            <Icon size={size} material="description" indicator="arrow_back" />
            <Icon size={size} material="description" background="lyng" />
            <Icon size={size} material="description" indicator="arrow_forward" background="lyng" />
          </Box>
          <Box horizontal gap={16} align="center" p={8}>
            <Icon size={size} material="mail" />
            <Icon size={size} material="mail" indicator="check" />
            <Icon size={size} material="mail" background="lyng" />
            <Icon size={size} material="mail" indicator="check" background="lyng" />
          </Box>
        </Fragment>
      ))}
    </Box>
  );
};
