import { Tabs, Tooltip, Button, Icon, Box } from '~/main';
import type { Meta, StoryFn } from '@storybook/react';
import { useState } from 'react';

export default {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs', 'ds-override'],
} as Meta;

export const Preview: StoryFn<typeof Tabs> = (args) => (
  <Tabs {...args}>
    <Tabs.List>
      <Tabs.Tab value="value1">Tab 1</Tabs.Tab>
      <Tabs.Tab value="value2">Tab 2</Tabs.Tab>
      <Tabs.Tab value="value3">Tab 3</Tabs.Tab>
    </Tabs.List>

    <Tabs.Panel value="value1">content 1</Tabs.Panel>
    <Tabs.Panel value="value2">content 2</Tabs.Panel>
    <Tabs.Panel value="value3">content 3</Tabs.Panel>
  </Tabs>
);

Preview.args = {
  defaultValue: 'value1',
};

export const withButton: StoryFn<typeof Tabs> = (args) => (
  <Tabs {...args}>
    <Box horizontal justify="between" align="center" width="full" mb={20}>
      <Tabs.List>
        <Tabs.Tab value="value1">Tab 1</Tabs.Tab>
        <Tabs.Tab value="value2">Tab 2</Tabs.Tab>
        <Tabs.Tab value="value3">Tab 3</Tabs.Tab>
      </Tabs.List>
      <Button variant="filled">
        <Icon material="add" />
        Ny sak
      </Button>
    </Box>

    <Tabs.Panel value="value1">content 1</Tabs.Panel>
    <Tabs.Panel value="value2">content 2</Tabs.Panel>
    <Tabs.Panel value="value3">content 3</Tabs.Panel>
  </Tabs>
);

export const withoutUnderline: StoryFn<typeof Tabs> = (args) => (
  <Tabs {...args}>
    <Box horizontal justify="between" align="center" width="full" mb={20}>
      <Tabs.List>
        <Tabs.Tab value="value1">Tab 1</Tabs.Tab>
        <Tabs.Tab value="value2">Tab 2</Tabs.Tab>
        <Tabs.Tab value="value3">Tab 3</Tabs.Tab>
      </Tabs.List>
      <Button variant="filled">
        <Icon material="add" />
        Ny sak
      </Button>
    </Box>

    <Tabs.Panel value="value1">content 1</Tabs.Panel>
    <Tabs.Panel value="value2">content 2</Tabs.Panel>
    <Tabs.Panel value="value3">content 3</Tabs.Panel>
  </Tabs>
);
withoutUnderline.args = {
  defaultValue: 'value1',
  underlined: false,
};
export const IconsOnly: StoryFn<typeof Tabs> = () => (
  <Tabs defaultValue="car">
    <Tabs.List>
      <Tooltip content="Dine biler">
        <Tabs.Tab value="car">
          <Icon material="calendar_month" aria-hidden />
        </Tabs.Tab>
      </Tooltip>
      <Tooltip content="Dine sykler">
        <Tabs.Tab value="bicycle">
          <Icon material="error" aria-hidden />
        </Tabs.Tab>
      </Tooltip>
      <Tooltip content="Dine motorsykler">
        <Tabs.Tab value="motorcycle">
          <Icon material="lightbulb" aria-hidden />
        </Tabs.Tab>
      </Tooltip>
    </Tabs.List>
    <Tabs.Panel value="car">Du har ingen av denne typen registrert hos oss</Tabs.Panel>
    <Tabs.Panel value="bicycle">Du har ingen av denne typen registrert hos oss</Tabs.Panel>
    <Tabs.Panel value="motorcycle">Du har ingen av denne typen registrert hos oss</Tabs.Panel>
  </Tabs>
);

export const IconsWithText: StoryFn<typeof Tabs> = () => (
  <Tabs defaultValue="car">
    <Tabs.List>
      <Tabs.Tab value="car">
        <Icon material="person_add" aria-hidden />
        Biler
      </Tabs.Tab>

      <Tabs.Tab value="bicycle">
        <Icon material="error" aria-hidden />
        Sykler
      </Tabs.Tab>

      <Tabs.Tab value="motorcycle">
        <Icon material="lightbulb" aria-hidden />
        Motorsykler
      </Tabs.Tab>
    </Tabs.List>
    <Tabs.Panel value="car">Du har ingen av denne typen registrert hos oss</Tabs.Panel>
    <Tabs.Panel value="bicycle">Du har ingen av denne typen registrert hos oss</Tabs.Panel>
    <Tabs.Panel value="motorcycle">Du har ingen av denne typen registrert hos oss</Tabs.Panel>
  </Tabs>
);

export const Controlled: StoryFn<typeof Tabs> = () => {
  const [value, setValue] = useState('value1');

  return (
    <>
      <Button data-size="sm" onClick={() => setValue('value3')}>
        Choose Tab 3
      </Button>
      <br />
      <Tabs value={value} onChange={setValue}>
        <Tabs.List>
          <Tabs.Tab value="value1">
            <Icon material="person" aria-hidden />
            Tab 1
          </Tabs.Tab>
          <Tabs.Tab value="value2">
            <Icon material="chevron_left" aria-hidden />
            Tab 2
          </Tabs.Tab>
          <Tabs.Tab value="value3">
            <Icon material="pending_actions" aria-hidden />
            Tab 3
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="value1">content 1</Tabs.Panel>
        <Tabs.Panel value="value2">content 2</Tabs.Panel>
        <Tabs.Panel value="value3">content 3</Tabs.Panel>
      </Tabs>
    </>
  );
};
