import { Dropdown, Button, Icon } from '~/main';
import type { Meta, StoryFn } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';
import { useState } from 'react';
import { styrbordSemanticColors } from '@kystverket/styrbord-tokens/colors';

const colorVariants = [...styrbordSemanticColors] as const;

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs', 'ds'],
  parameters: {
    layout: 'fullscreen',
    customStyles: {
      display: 'grid',
      alignItems: 'start',
      justifyItems: 'center',
      story: {
        boxSizing: 'border-box',
        width: '100cqw',
        height: '100cqh',
        maxWidth: '800px',
        maxHeight: '800px',
      },
    },
    chromatic: {
      disableSnapshot: false,
    },
    docs: {
      description: {
        component: '[Dokumentasjon fra Designsystemet](https://designsystemet.no/no/components/docs/select/overview)',
      },
    },
  },
  argTypes: {
    'data-color': {
      control: 'select',
      options: [...colorVariants],
    },
  },
  play: async (ctx) => {
    // When not in Docs mode, automatically open the dropdown
    const button = within(ctx.canvasElement).getByRole('button');
    await userEvent.click(button);
    const dropdown = ctx.canvasElement.querySelector('[popover]');
    await expect(dropdown).toBeVisible();
  },
} satisfies Meta;

export const Preview: StoryFn<typeof Dropdown> = (args) => {
  return (
    <Dropdown.TriggerContext>
      <Dropdown.Trigger data-color={args['data-color']}>Dropdown</Dropdown.Trigger>
      <Dropdown {...args}>
        <Dropdown.Heading>First heading</Dropdown.Heading>
        <Dropdown.List>
          <Dropdown.Item>
            <Dropdown.Button>Button 1.1</Dropdown.Button>
          </Dropdown.Item>
          <Dropdown.Item>
            <Dropdown.Button>Button 1.2</Dropdown.Button>
          </Dropdown.Item>
        </Dropdown.List>
        <Dropdown.Heading>Second heading</Dropdown.Heading>
        <Dropdown.List>
          <Dropdown.Item>
            <Dropdown.Button>Button 2.1</Dropdown.Button>
          </Dropdown.Item>
          <Dropdown.Item>
            <Dropdown.Button>Button 2.2</Dropdown.Button>
          </Dropdown.Item>
        </Dropdown.List>
      </Dropdown>
    </Dropdown.TriggerContext>
  );
};

Preview.args = {
  placement: 'bottom-end',
};

export const Icons: StoryFn<typeof Dropdown> = (args) => {
  return (
    <Dropdown.TriggerContext>
      <Dropdown.Trigger>Dropdown</Dropdown.Trigger>
      <Dropdown {...args}>
        <Dropdown.List>
          <Dropdown.Item>
            <Dropdown.Button asChild>
              <a href="https://github.com/digdir/designsystemet" target="_blank" rel="noreferrer">
                <Icon material="link" aria-hidden />
                Github
              </a>
            </Dropdown.Button>
          </Dropdown.Item>
          <Dropdown.Item>
            <Dropdown.Button asChild>
              <a href="https://designsystemet.no" target="_blank" rel="noreferrer">
                <Icon material="link" aria-hidden />
                Designsystemet.no
              </a>
            </Dropdown.Button>
          </Dropdown.Item>
        </Dropdown.List>
      </Dropdown>
    </Dropdown.TriggerContext>
  );
};

export const Controlled: StoryFn<typeof Dropdown> = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dropdown.TriggerContext>
      <Dropdown.Trigger onClick={() => setOpen(!open)}>
        Dropdown
        {open ? <Icon material="keyboard_arrow_down" aria-hidden /> : <Icon material="keyboard_arrow_up" aria-hidden />}
      </Dropdown.Trigger>
      <Dropdown open={open} onClose={() => setOpen(false)}>
        <Dropdown.List>
          <Dropdown.Item>
            <Dropdown.Button onClick={() => setOpen(false)}>Trykk på meg lukker</Dropdown.Button>
          </Dropdown.Item>
          <Dropdown.Item>
            <Dropdown.Button onClick={() => setOpen(false)}>Eg lukker også</Dropdown.Button>
          </Dropdown.Item>
        </Dropdown.List>
      </Dropdown>
    </Dropdown.TriggerContext>
  );
};

export const Colors: StoryFn<typeof Dropdown> = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 15rem)',
        gap: '1rem 2rem',
        // Room below each trigger for the open dropdown, which is positioned absolutely
        gridAutoRows: '13rem',
      }}
    >
      {colorVariants.map((color) => (
        <Dropdown.TriggerContext key={color}>
          <Dropdown.Trigger data-color={color}>{color}</Dropdown.Trigger>
          <Dropdown data-color={color} placement="bottom-start" open>
            <Dropdown.List>
              <Dropdown.Item>
                <Dropdown.Button>Val 1</Dropdown.Button>
              </Dropdown.Item>
              <Dropdown.Item>
                <Dropdown.Button>Val 2</Dropdown.Button>
              </Dropdown.Item>
            </Dropdown.List>
          </Dropdown>
        </Dropdown.TriggerContext>
      ))}
    </div>
  );
};

// All dropdowns are already open via the `open` prop, so skip the shared play function
Colors.play = async (ctx) => {
  const dropdowns = ctx.canvasElement.querySelectorAll('[popover]');
  await expect(dropdowns).toHaveLength(colorVariants.length);
};

export const WithoutTrigger: StoryFn<typeof Dropdown> = () => {
  return (
    <>
      <Button popovertarget="dropdown">Dropdown</Button>
      <Dropdown id="dropdown">
        <Dropdown.List>
          <Dropdown.Item>
            <Dropdown.Button>Item</Dropdown.Button>
          </Dropdown.Item>
        </Dropdown.List>
      </Dropdown>
    </>
  );
};
