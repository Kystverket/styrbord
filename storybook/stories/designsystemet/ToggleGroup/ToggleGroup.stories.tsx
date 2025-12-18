import { ToggleGroup, Tooltip, Divider, Paragraph, Button, Icon } from '~/main';

import type { Meta, StoryFn } from '@storybook/react';
import { useState } from 'react';

export default {
  title: 'Components/ToggleGroup',
  component: ToggleGroup,
  decorators: [
    (Story) => (
      /* 80vw since storybook has padding, and does not stop elements from overflowing the x-axis */
      <div style={{ maxWidth: '80vw' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: '[Dokumentasjon fra Designsystemet](https://designsystemet.no/no/components/toggle-group)',
      },
    },
  },
} as Meta;

export const Preview: StoryFn<typeof ToggleGroup> = (args) => {
  return (
    <ToggleGroup {...args}>
      <ToggleGroup.Item value="innboks">Innboks</ToggleGroup.Item>
      <ToggleGroup.Item value="utkast">Utkast</ToggleGroup.Item>
      <ToggleGroup.Item value="arkiv">Arkiv</ToggleGroup.Item>
      <ToggleGroup.Item value="sendt">Sendt</ToggleGroup.Item>
    </ToggleGroup>
  );
};

Preview.args = {
  defaultValue: 'innboks',
  name: 'toggle-group-nuts',
};

export const OnlyIcons: StoryFn<typeof ToggleGroup> = () => {
  return (
    <ToggleGroup defaultValue={'option-1'}>
      <Tooltip content="Venstrestilt">
        <ToggleGroup.Item value="option-1" icon>
          <Icon material="format_align_left" title="AlignLeftIcon" />
        </ToggleGroup.Item>
      </Tooltip>
      <Tooltip content="Midtstilt">
        <ToggleGroup.Item value="option-2" icon>
          <Icon material="format_align_center" title="AlignCenterIcon" />
        </ToggleGroup.Item>
      </Tooltip>
      <Tooltip content="Høyrestilt">
        <ToggleGroup.Item value="option-3" icon>
          <Icon material="format_align_right" title="AlignRightIcon" />
        </ToggleGroup.Item>
      </Tooltip>
    </ToggleGroup>
  );
};

export const Kontrollert: StoryFn<typeof ToggleGroup> = () => {
  const [value, setValue] = useState<string>('utkast');
  return (
    <>
      <ToggleGroup value={value} onChange={setValue}>
        <ToggleGroup.Item value="innboks">
          <Icon material="mail" aria-hidden />
          Innboks
        </ToggleGroup.Item>
        <ToggleGroup.Item value="utkast">
          <Icon material="edit_document" aria-hidden />
          Utkast
        </ToggleGroup.Item>
        <ToggleGroup.Item value="arkiv">
          <Icon material="archive" aria-hidden />
          Arkiv
        </ToggleGroup.Item>
        <ToggleGroup.Item value="sendt">
          <Icon material="send" aria-hidden />
          Sendt
        </ToggleGroup.Item>
      </ToggleGroup>
      <Divider />
      <Paragraph>Du har valgt: {value}</Paragraph>
      <Button data-size="sm" onClick={() => setValue('arkiv')}>
        Velg Arkiv
      </Button>
    </>
  );
};
