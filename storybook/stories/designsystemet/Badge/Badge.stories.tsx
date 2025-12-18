import type { Meta, StoryFn } from '@storybook/react';

import { Badge, Tabs, Button, Icon } from '~/main';

type Story = StoryFn<typeof Badge>;

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    customStyles: {
      flexWrap: 'wrap',
    },
    docs: {
      description: {
        component: '[Dokumentasjon fra Designsystemet](https://designsystemet.no/no/components/badge)',
      },
    },
  },
};

export default meta;
export const Preview: Story = (args) => <Badge {...args} />;

Preview.args = {
  count: 15,
  maxCount: 9,
};

export const Floating: Story = () => (
  <>
    <Badge.Position placement="top-right">
      <Badge data-color="accent"></Badge>
      <Icon material="mail" title="Meldinger" />
    </Badge.Position>
    <Badge.Position placement="top-left">
      <Badge data-color="accent"></Badge>
      <Icon material="mail" title="Meldinger" />
    </Badge.Position>
    <Badge.Position placement="bottom-right">
      <Badge data-color="accent"></Badge>
      <Icon material="mail" title="Meldinger" />
    </Badge.Position>
    <Badge.Position placement="bottom-left">
      <Badge data-color="accent"></Badge>
      <Icon material="mail" title="Meldinger" />
    </Badge.Position>
    <Badge.Position placement="top-right" overlap="circle">
      <Badge data-color="accent"></Badge>
      <div
        style={{
          width: '2rem',
          height: '2rem',
          borderRadius: '50%',
          backgroundColor: 'var(--ds-color-brand2-base-default)',
        }}
      />
    </Badge.Position>
    <Badge.Position placement="top-left" overlap="circle">
      <Badge data-color="accent"></Badge>
      <div
        style={{
          width: '2rem',
          height: '2rem',
          borderRadius: '50%',
          backgroundColor: 'var(--ds-color-brand2-base-default)',
        }}
      />
    </Badge.Position>
    <Badge.Position placement="bottom-right" overlap="circle">
      <Badge data-color="accent"></Badge>
      <div
        style={{
          width: '2rem',
          height: '2rem',
          borderRadius: '50%',
          backgroundColor: 'var(--ds-color-brand2-base-default)',
        }}
      />
    </Badge.Position>
    <Badge.Position placement="bottom-left" overlap="circle">
      <Badge data-color="accent"></Badge>
      <div
        style={{
          width: '2rem',
          height: '2rem',
          borderRadius: '50%',
          backgroundColor: 'var(--ds-color-brand2-base-default)',
        }}
      />
    </Badge.Position>
  </>
);

Floating.parameters = {
  customStyles: {
    display: 'flex',
    gap: 'var(--ds-size-4)',
    flexWrap: 'wrap',
  },
};

export const CustomPlacement: Story = () => (
  <>
    <Badge.Position
      placement="top-right"
      style={{
        top: '16%',
        right: '10%',
      }}
    >
      <Badge data-color="accent"></Badge>
      <Icon material="mail" title="Meldinger" />
    </Badge.Position>
  </>
);

export const Status: Story = () => (
  <>
    <Badge.Position data-size="sm">
      <Badge data-color="danger" />
      <Icon material="videocam" title="Videokamera" />
    </Badge.Position>
    <Badge.Position data-size="md">
      <Badge data-color="danger" />
      <Icon material="videocam" title="Videokamera" />
    </Badge.Position>
    <Badge.Position data-size="lg">
      <Badge data-color="danger" />
      <Icon material="videocam" title="Videokamera" />
    </Badge.Position>
  </>
);

export const InTabs: Story = () => (
  <Tabs defaultValue="value1">
    <Tabs.List>
      <Tabs.Tab value="value1">
        <Icon material="favorite" aria-hidden />
        Favoritter
        <Badge count={64} maxCount={10} data-color="neutral" />
      </Tabs.Tab>
      <Tabs.Tab value="value2">Tab 2</Tabs.Tab>
      <Tabs.Tab value="value3">
        <Icon material="edit" aria-hidden />
        Nylige
        <Badge count={2} data-color="neutral" />
      </Tabs.Tab>
    </Tabs.List>
    <Tabs.Panel value="value1">content 1</Tabs.Panel>
    <Tabs.Panel value="value2">content 2</Tabs.Panel>
    <Tabs.Panel value="value3">content 3</Tabs.Panel>
  </Tabs>
);

export const InButton: Story = () => (
  <>
    <Button icon variant="dashed">
      <Badge.Position>
        <Badge data-color="danger" count={1000} maxCount={99} />
        <Icon material="favorite" title="Innboks" />
      </Badge.Position>
    </Button>
    <Button icon variant="dashed">
      <Badge.Position>
        <Badge data-color="danger" count={10} />
        <Icon material="chat" title="Meldinger" />
      </Badge.Position>
    </Button>
    <Button icon variant="dashed">
      <Badge.Position>
        <Badge data-color="danger"></Badge>
        <Icon material="videocam" title="Skru på video" />
      </Badge.Position>
    </Button>
  </>
);

const VariantsMap: {
  [key: string]: { [key: string]: string };
} = {
  neutralBase: {
    'data-color': 'neutral',
  },
  neutralTinted: {
    'data-color': 'neutral',
    variant: 'tinted',
  },
  dangerBase: {
    'data-color': 'danger',
  },
  dangerTinted: {
    'data-color': 'danger',
    variant: 'tinted',
  },
  infoBase: {
    'data-color': 'info',
  },
  infoTinted: {
    'data-color': 'info',
    variant: 'tinted',
  },
  warningBase: {
    'data-color': 'warning',
  },
  warningTinted: {
    'data-color': 'warning',
    variant: 'tinted',
  },
};

export const Variants: Story = () => (
  <>
    {Object.entries(VariantsMap).map(([key, value]) => (
      <Badge key={key} {...value} count={15} maxCount={9} />
    ))}
  </>
);

Variants.parameters = {
  customStyles: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: 'var(--ds-size-2)',
    height: '100%',
    width: '100%',
  },
};
