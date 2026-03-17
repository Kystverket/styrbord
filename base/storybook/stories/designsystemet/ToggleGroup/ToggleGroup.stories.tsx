import { ToggleGroup, Tooltip, Divider, Paragraph, Button, Icon, Box } from '~/main';

import type { Meta, StoryFn } from '@storybook/react-vite';
import { useState } from 'react';

export default {
  title: 'Components/ToggleGroup',
  component: ToggleGroup,
  tags: ['autodocs', 'ds'],
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
        component:
          '[Dokumentasjon fra Designsystemet](https://designsystemet.no/no/components/docs/toggle-group/overview)',
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

export const Variants: StoryFn<typeof ToggleGroup> = () => {
  return (
    <Box gap={24}>
      <Box>
        <Paragraph>Primary / Main</Paragraph>
        <ToggleGroup defaultValue="btn1">
          <ToggleGroup.Item value="btn1">Button</ToggleGroup.Item>
          <ToggleGroup.Item value="btn2">Button</ToggleGroup.Item>
          <ToggleGroup.Item value="btn3">Button</ToggleGroup.Item>
          <ToggleGroup.Item value="btn4">Button</ToggleGroup.Item>
        </ToggleGroup>
      </Box>
      <Box>
        <Paragraph>Primary / Neutral</Paragraph>
        <ToggleGroup defaultValue="btn1" data-color="neutral">
          <ToggleGroup.Item value="btn1">Button</ToggleGroup.Item>
          <ToggleGroup.Item value="btn2">Button</ToggleGroup.Item>
          <ToggleGroup.Item value="btn3">Button</ToggleGroup.Item>
          <ToggleGroup.Item value="btn4">Button</ToggleGroup.Item>
        </ToggleGroup>
      </Box>
      <Box>
        <Paragraph>Secondary / Main</Paragraph>
        <ToggleGroup defaultValue="btn1" variant="secondary">
          <ToggleGroup.Item value="btn1">Button</ToggleGroup.Item>
          <ToggleGroup.Item value="btn2">Button</ToggleGroup.Item>
          <ToggleGroup.Item value="btn3">Button</ToggleGroup.Item>
          <ToggleGroup.Item value="btn4">Button</ToggleGroup.Item>
        </ToggleGroup>
      </Box>
      <Box>
        <Paragraph>Secondary / Neutral</Paragraph>
        <ToggleGroup defaultValue="btn1" variant="secondary" data-color="neutral">
          <ToggleGroup.Item value="btn1">Button</ToggleGroup.Item>
          <ToggleGroup.Item value="btn2">Button</ToggleGroup.Item>
          <ToggleGroup.Item value="btn3">Button</ToggleGroup.Item>
          <ToggleGroup.Item value="btn4">Button</ToggleGroup.Item>
        </ToggleGroup>
      </Box>
    </Box>
  );
};

export const IconVariants: StoryFn<typeof ToggleGroup> = () => {
  const iconItems = (
    <>
      <Tooltip content="Align left">
        <ToggleGroup.Item value="option-1" icon>
          <Icon material="format_align_left" title="AlignLeftIcon" />
        </ToggleGroup.Item>
      </Tooltip>
      <Tooltip content="Align center">
        <ToggleGroup.Item value="option-2" icon>
          <Icon material="format_align_center" title="AlignCenterIcon" />
        </ToggleGroup.Item>
      </Tooltip>
      <Tooltip content="Align right">
        <ToggleGroup.Item value="option-3" icon>
          <Icon material="format_align_right" title="AlignRightIcon" />
        </ToggleGroup.Item>
      </Tooltip>
    </>
  );

  return (
    <Box gap={24}>
      <Box>
        <Paragraph>Primary / Main</Paragraph>
        <ToggleGroup defaultValue="option-1">{iconItems}</ToggleGroup>
      </Box>
      <Box>
        <Paragraph>Primary / Neutral</Paragraph>
        <ToggleGroup defaultValue="option-1" data-color="neutral">
          {iconItems}
        </ToggleGroup>
      </Box>
      <Box>
        <Paragraph>Secondary / Main</Paragraph>
        <ToggleGroup defaultValue="option-1" variant="secondary">
          {iconItems}
        </ToggleGroup>
      </Box>
      <Box>
        <Paragraph>Secondary / Neutral</Paragraph>
        <ToggleGroup defaultValue="option-1" variant="secondary" data-color="neutral">
          {iconItems}
        </ToggleGroup>
      </Box>
    </Box>
  );
};

export const Examples: StoryFn<typeof ToggleGroup> = () => {
  return (
    <Box gap={24}>
      <Box>
        <Paragraph>With icons and text</Paragraph>
        <ToggleGroup defaultValue="innboks">
          <ToggleGroup.Item value="innboks">
            <Icon material="mail" aria-hidden />
            Innboks
          </ToggleGroup.Item>
          <ToggleGroup.Item value="utkast">
            <Icon material="edit_document" aria-hidden />
            Utkast
          </ToggleGroup.Item>
          <ToggleGroup.Item value="sendt">
            <Icon material="send" aria-hidden />
            Sendt
          </ToggleGroup.Item>
        </ToggleGroup>
      </Box>
      <Box>
        <Paragraph>Icons only</Paragraph>
        <ToggleGroup defaultValue="option-1">
          <Tooltip content="Align left">
            <ToggleGroup.Item value="option-1" icon>
              <Icon material="format_align_left" title="AlignLeftIcon" />
            </ToggleGroup.Item>
          </Tooltip>
          <Tooltip content="Align center">
            <ToggleGroup.Item value="option-2" icon>
              <Icon material="format_align_center" title="AlignCenterIcon" />
            </ToggleGroup.Item>
          </Tooltip>
          <Tooltip content="Align right">
            <ToggleGroup.Item value="option-3" icon>
              <Icon material="format_align_right" title="AlignRightIcon" />
            </ToggleGroup.Item>
          </Tooltip>
        </ToggleGroup>
      </Box>
      <Box>
        <Paragraph>On subtle background</Paragraph>
        <Box color="neutral" p={24} radius="md">
          <ToggleGroup defaultValue="galleri" variant="secondary" data-color="neutral">
            <ToggleGroup.Item value="galleri">Galleri</ToggleGroup.Item>
            <ToggleGroup.Item value="liste">Liste</ToggleGroup.Item>
          </ToggleGroup>
        </Box>
      </Box>
    </Box>
  );
};

export const Sizes: StoryFn<typeof ToggleGroup> = () => {
  return (
    <Box horizontal gap={48}>
      <Box gap={16}>
        <Paragraph>ToggleGroup</Paragraph>
        <ToggleGroup defaultValue="btn1" data-size="sm">
          <ToggleGroup.Item value="btn1">Button</ToggleGroup.Item>
          <ToggleGroup.Item value="btn2">Button</ToggleGroup.Item>
          <ToggleGroup.Item value="btn3">Button</ToggleGroup.Item>
          <ToggleGroup.Item value="btn4">Button</ToggleGroup.Item>
        </ToggleGroup>
        <ToggleGroup defaultValue="btn1" data-size="md">
          <ToggleGroup.Item value="btn1">Button</ToggleGroup.Item>
          <ToggleGroup.Item value="btn2">Button</ToggleGroup.Item>
          <ToggleGroup.Item value="btn3">Button</ToggleGroup.Item>
          <ToggleGroup.Item value="btn4">Button</ToggleGroup.Item>
        </ToggleGroup>
        <ToggleGroup defaultValue="btn1" data-size="lg">
          <ToggleGroup.Item value="btn1">Button</ToggleGroup.Item>
          <ToggleGroup.Item value="btn2">Button</ToggleGroup.Item>
          <ToggleGroup.Item value="btn3">Button</ToggleGroup.Item>
          <ToggleGroup.Item value="btn4">Button</ToggleGroup.Item>
        </ToggleGroup>
      </Box>
      <Box gap={16}>
        <Paragraph>IconToggleGroup</Paragraph>
        <ToggleGroup defaultValue="option-1" data-size="sm">
          <ToggleGroup.Item value="option-1" icon>
            <Icon material="download" title="Download" />
          </ToggleGroup.Item>
          <ToggleGroup.Item value="option-2" icon>
            <Icon material="download" title="Download" />
          </ToggleGroup.Item>
          <ToggleGroup.Item value="option-3" icon>
            <Icon material="download" title="Download" />
          </ToggleGroup.Item>
          <ToggleGroup.Item value="option-4" icon>
            <Icon material="download" title="Download" />
          </ToggleGroup.Item>
        </ToggleGroup>
        <ToggleGroup defaultValue="option-1" data-size="md">
          <ToggleGroup.Item value="option-1" icon>
            <Icon material="download" title="Download" />
          </ToggleGroup.Item>
          <ToggleGroup.Item value="option-2" icon>
            <Icon material="download" title="Download" />
          </ToggleGroup.Item>
          <ToggleGroup.Item value="option-3" icon>
            <Icon material="download" title="Download" />
          </ToggleGroup.Item>
          <ToggleGroup.Item value="option-4" icon>
            <Icon material="download" title="Download" />
          </ToggleGroup.Item>
        </ToggleGroup>
        <ToggleGroup defaultValue="option-1" data-size="lg">
          <ToggleGroup.Item value="option-1" icon>
            <Icon material="download" title="Download" />
          </ToggleGroup.Item>
          <ToggleGroup.Item value="option-2" icon>
            <Icon material="download" title="Download" />
          </ToggleGroup.Item>
          <ToggleGroup.Item value="option-3" icon>
            <Icon material="download" title="Download" />
          </ToggleGroup.Item>
          <ToggleGroup.Item value="option-4" icon>
            <Icon material="download" title="Download" />
          </ToggleGroup.Item>
        </ToggleGroup>
      </Box>
    </Box>
  );
};

export const Controlled: StoryFn<typeof ToggleGroup> = () => {
  const [value, setValue] = useState<string>('utkast');
  return (
    <Box gap={16}>
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
    </Box>
  );
};
