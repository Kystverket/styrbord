import type { Meta, StoryObj } from '@storybook/react';
import { PageHeading } from './PageHeading';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';
import { Tag, Breadcrumbs, Button, Icon, Box } from '~/main';

const meta = {
  title: 'Page/PageHeading',
  component: PageHeading,
  decorators: [StyrbordDecorator],
  tags: ['autodocs', 'kyv'],
  argTypes: {
    children: {
      control: {
        type: 'object',
      },
    },
  },
} satisfies Meta<typeof PageHeading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <Box p={16} color="danger">
        <Story />
      </Box>
    ),
  ],
  args: {
    heading: 'Sideoverskrift',
    aboveSection: (
      <Breadcrumbs aria-label="Du er her:">
        <Breadcrumbs.Link href="#" aria-label="Tilbake til Nivå 3">
          Nivå 3
        </Breadcrumbs.Link>
        <Breadcrumbs.List>
          <Breadcrumbs.Item>
            <Breadcrumbs.Link href="#">Nivå 1</Breadcrumbs.Link>
          </Breadcrumbs.Item>
          <Breadcrumbs.Item>
            <Breadcrumbs.Link href="#">Nivå 2</Breadcrumbs.Link>
          </Breadcrumbs.Item>
          <Breadcrumbs.Item>
            <Breadcrumbs.Link href="#">Nivå 3</Breadcrumbs.Link>
          </Breadcrumbs.Item>
          <Breadcrumbs.Item>
            <Breadcrumbs.Link href="#">Nivå 4</Breadcrumbs.Link>
          </Breadcrumbs.Item>
        </Breadcrumbs.List>
      </Breadcrumbs>
    ),
    rightSection: (
      <Button>
        <Icon material="more_vert" />
      </Button>
    ),
    children: (
      <Tag data-size="lg" data-color="info">
        Under arbeid
      </Tag>
    ),
  },
};

export const UtenSeksjoner: Story = {
  decorators: [
    (Story) => (
      <Box p={16} color="danger">
        <Story />
      </Box>
    ),
  ],
  args: {
    heading: 'En annen side',
  },
};

export const BareRight: Story = {
  decorators: [
    (Story) => (
      <Box p={16} color="danger">
        <Story />
      </Box>
    ),
  ],
  args: {
    heading: 'Bare en knapp til høyre',
    rightSection: (
      <Button>
        <Icon material="more_vert" />
      </Button>
    ),
  },
};
