import type { Meta, StoryFn } from '@storybook/react';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';
import Icon from '~/components/kystverket/Icon/icon';
import { IconId, iconIdList } from './icon.types';
import { Body } from '~/main';

const meta = {
  title: 'Helpers/Icon',
  component: Icon,
  decorators: [StyrbordDecorator],
  tags: ['autodocs', 'kyv'],
  argTypes: {},
} satisfies Meta<typeof Icon>;

export default meta;

const iconDescriptions: Record<IconId, string> = {
  add: '',
  adjust: '',
  anchor: '',
  arrow_back: 'Navigerer tilbake',
  arrow_right_alt: 'Navigerer framover, indikere at handlingen vil føre til en annen side eller visning',
  calendar_month: '',
  change_history: '',
  check_circle: '',
  check: '',
  chevron_left: '',
  chevron_right: '',
  circle: '',
  close: '',
  cloud_alert: '',
  cloud_done: '',
  content_copy: 'Kopierer eller dupliserer',
  delete: '',
  download: '',
  edit: '',
  error: '',
  event: '',
  file_save: '',
  info: '',
  keyboard_arrow_down: '',
  keyboard_arrow_up: '',
  lightbulb: '',
  link: '',
  lock: '',
  login: '',
  logout: '',
  menu: '',
  more_vert: '',
  pending_actions: '',
  person_add: '',
  person: '',
  radio_button_checked: '',
  radio_button_unchecked: '',
  sailing: '',
  settings_input_antenna: '',
  source_environment: '',
  stylus: '',
  timeline: '',
  video_library: '',
  warning: '',
  domain: '',
  distance: '',
  article: '',
  edit_square: '',
};

const bodySizes = ['sm', 'md', 'lg', 'xl', '2xl'] as const;

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
      {bodySizes.map((size) => (
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
