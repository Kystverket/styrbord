import type { Meta, StoryFn } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';
import { Fragment, useEffect, useId, useState } from 'react';

import { Popover, Paragraph, Button, Surface, Icon } from '~/main';

export default {
  title: 'Components/Popover',
  component: Popover,
  tags: ['autodocs', 'ds'],
  parameters: {
    chromatic: {
      disableSnapshot: false,
    },
    docs: {
      description: {
        component: '[Dokumentasjon fra Designsystemet](https://designsystemet.no/no/components/docs/popover/overview)',
      },
    },
  },
  argTypes: {
    'data-color': {
      control: 'select',
      options: [undefined, 'neutral', 'accent', 'danger', 'info', 'warning', 'success'],
    },
    'data-size': {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
    },
    placement: {
      control: 'select',
      options: [
        'top',
        'top-start',
        'top-end',
        'bottom',
        'bottom-start',
        'bottom-end',
        'left',
        'left-start',
        'left-end',
        'right',
        'right-start',
        'right-end',
      ],
    },
    variant: {
      control: 'radio',
      options: [undefined, 'tinted'],
    },
  },
  play: async (ctx) => {
    // When not in Docs mode, automatically open the popover
    const canvas = within(ctx.canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
    const popover = ctx.canvasElement.querySelector('[popover]');
    await expect(popover).toBeVisible();
  },
} satisfies Meta;

export const Preview: StoryFn<typeof Popover> = (args) => {
  const id = useId();
  const [open, setOpen] = useState(false);

  return (
    <Surface gap={2} align="start">
      <Paragraph>
        This popover is kept open for testing purposes. Normally, it closes when clicking outside of it.
      </Paragraph>
      <Button popoverTarget={id} onClick={() => setOpen((prev) => !prev)}>
        My trigger!
      </Button>
      <Popover {...args} id={id} open={open}>
        popover content
      </Popover>
    </Surface>
  );
};

Preview.args = {
  placement: 'top',
  'data-size': 'md',
  'data-color': undefined,
  variant: undefined,
};

export const Interactive: StoryFn<typeof Popover> = () => {
  const id = useId();

  return (
    <>
      <Button popoverTarget={id} data-color="danger" aria-label="Slett rad">
        <Icon material="delete" title="Slett rad" />
      </Button>
      <Popover id={id} data-color="danger">
        <Paragraph>Er du sikker på at du vil slette raden? Handlingen kan ikke angres.</Paragraph>
        <div
          style={{
            display: 'flex',
            gap: 'var(--ds-size-2)',
            marginTop: 'var(--ds-size-2)',
          }}
        >
          <Button data-size="sm">Ja, slett den</Button>
          <Button data-size="sm" variant="outline">
            Avbryt
          </Button>
        </div>
      </Popover>
    </>
  );
};
Interactive.parameters = {
  customStyles: {
    padding: '12rem 6rem 1rem',
  },
};

export const DottedUnderline: StoryFn<typeof Popover> = () => {
  const id = useId();

  return (
    <>
      <Paragraph>
        Vi bruker{' '}
        <button type="button" popoverTarget={id} data-popover="inline">
          design tokens
        </button>{' '}
        for å sikre at vi har en konsistent design.
      </Paragraph>
      <Popover id={id} data-color="neutral">
        <Paragraph>
          <strong
            style={{
              display: 'block',
            }}
          >
            Design tokens
          </strong>
          Design tokens er en samling av variabler som definerer designet i et designsystem.
        </Paragraph>
      </Popover>
    </>
  );
};
DottedUnderline.parameters = {
  customStyles: {
    padding: '10rem 6rem 1rem',
  },
};

const VariantsMap: {
  [key: string]: { [key: string]: string };
} = {
  neutralDefault: {
    'data-color': 'neutral',
  },
  neutralTinted: {
    'data-color': 'neutral',
    variant: 'tinted',
  },
  dangerDefault: {
    'data-color': 'danger',
  },
  dangerTinted: {
    'data-color': 'danger',
    variant: 'tinted',
  },
  infoDefault: {
    'data-color': 'info',
  },
  infoTinted: {
    'data-color': 'info',
    variant: 'tinted',
  },
  warningDefault: {
    'data-color': 'warning',
  },
  warningTinted: {
    'data-color': 'warning',
    variant: 'tinted',
  },
};

export const Variants: StoryFn<typeof Popover> = () => {
  const id = useId();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(true), []);

  return (
    <Surface gap={30} align="start" px={30}>
      {Object.entries(VariantsMap).map(([key, props], index) => (
        <Fragment key={key}>
          <Button popoverTarget={`${id}-${key}`}>popover</Button>
          <Popover
            id={`${id}-${key}`}
            open={open}
            placement={index >= 4 ? 'bottom' : 'top'}
            autoPlacement={false}
            {...props}
          >
            {key}
          </Popover>
        </Fragment>
      ))}
    </Surface>
  );
};
Variants.parameters = {
  customStyles: {
    padding: '5rem 1rem',
  },
};

export const Controlled: StoryFn<typeof Popover> = () => {
  const id = useId();
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button popoverTarget={id} onClick={() => setOpen(!open)}>
        My trigger
      </Button>
      <Popover id={id} open={open} onClose={() => setOpen(false)} data-color="neutral">
        <Paragraph>Er du sikker på at du vil slette?</Paragraph>
        <Button
          data-color="danger"
          onClick={() => setOpen(false)}
          data-size="sm"
          style={{ marginTop: 'var(--ds-size-2)' }}
        >
          Slett
        </Button>
      </Popover>
    </>
  );
};
Controlled.parameters = {
  customStyles: {
    padding: '8rem 6rem 1rem',
  },
};

export const Sizes: StoryFn<typeof Popover> = () => {
  const id = useId();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(true), []);

  return (
    <Surface gap={30} align="start" px={30}>
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <Fragment key={size}>
          <Button popoverTarget={`${id}-${size}`}>popover</Button>
          <Popover id={`${id}-${size}`} open={open} placement="top" autoPlacement={false} data-size={size}>
            {size}
          </Popover>
        </Fragment>
      ))}
    </Surface>
  );
};

export const WithoutContext: StoryFn<typeof Popover> = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button popovertarget="my-popover" onClick={() => setOpen(!open)}>
        My trigger
      </Button>
      <Popover id="my-popover" open={open} onClose={() => setOpen(false)} data-color="neutral">
        <Paragraph>Er du sikker på at du vil slette?</Paragraph>
        <Button
          data-color="danger"
          onClick={() => setOpen(false)}
          data-size="sm"
          style={{ marginTop: 'var(--ds-size-2)' }}
        >
          Slett
        </Button>
      </Popover>
    </>
  );
};
