import type { Meta, StoryFn } from '@storybook/react';
import { Avatar, AvatarProps, Badge, Box, Dropdown, Icon } from '~/main';
import cat1 from '@assets/img/cats/Cat 3.jpg';
type Story = StoryFn<typeof Avatar>;

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs', 'ds-override'],
  parameters: {
    layout: 'padded',
    customStyles: {
      display: 'flex',
      gap: 'var(--ds-size-2)',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
    },
  },
};

const colors: AvatarProps['data-color'][] = [
  'primary',
  'neutral',
  'success',
  'danger',
  'warning',
  'accent',
  'extra1',
  'extra2',
];
const colorVariants: AvatarProps['data-color-variant'][] = ['base', 'surface-tinted'];

export default meta;

export const Preview: Story = (args) => <Avatar {...args} />;

Preview.args = {
  'aria-label': 'Ola Nordmann',
  variant: 'circle',
  children: '',
};

export const NoName: Story = () => <Avatar aria-label="Ola" />;

export const Sizes: Story = () => (
  <Box gap={16}>
    <Avatar data-size="3xs" aria-label="xxxs" initials="3x" />
    <Avatar data-size="3xs" aria-label="xxxs" />
    <Avatar data-size="2xs" aria-label="extra extra small" initials="2x" />
    <Avatar data-size="2xs" aria-label="extra extra small" />
    <Avatar data-size="xs" aria-label="extra small" initials="xs" />
    <Avatar data-size="xs" aria-label="extra small" />
    <Avatar data-size="sm" aria-label="small" initials="sm" />
    <Avatar data-size="sm" aria-label="small" />
    <Avatar data-size="md" aria-label="medium" initials="md" />
    <Avatar data-size="md" aria-label="medium" />
    <Avatar data-size="lg" aria-label="large" initials="lg" />
    <Avatar data-size="lg" aria-label="large" />
  </Box>
);

export const ColorVariants: Story = () => (
  <Box gap={16}>
    {colorVariants.map((colorVariant) =>
      colors.map((color) => (
        <Box key={color + colorVariant} horizontal align="center" gap={8}>
          <Avatar data-color={color} data-color-variant={colorVariant} aria-label={`color ${color}`} />
          {color} {colorVariant}
        </Box>
      )),
    )}
  </Box>
);

export const ShapeVariants: Story = () => (
  <>
    <Avatar variant="circle" aria-label="variant circle" />
    <Avatar variant="square" aria-label="variant square" />
    <Avatar variant="circle" aria-label="Ola Nordman">
      ON
    </Avatar>
    <Avatar variant="square" aria-label="Ola Nordman">
      ON
    </Avatar>
  </>
);

export const WithImage: Story = () => (
  <Avatar aria-label="Ola Nordman">
    <img src={cat1} alt="" />
  </Avatar>
);

export const InDropdown: Story = () => (
  <Dropdown.TriggerContext>
    <Dropdown.Trigger variant="tertiary">
      <Avatar aria-label="Ola Nordmann" data-size="sm">
        ON
      </Avatar>
      Velg Profil
    </Dropdown.Trigger>
    <Dropdown placement="bottom-end" autoPlacement={false} data-size="md" open>
      <Dropdown.List>
        <Dropdown.Item>
          <Dropdown.Button>
            <Badge.Position overlap="circle">
              <Badge data-color="danger" data-size="sm"></Badge>
              <Avatar aria-label="Ola Nordmann" data-size="xs">
                ON
              </Avatar>
            </Badge.Position>
            Ola Nordmann
          </Dropdown.Button>
        </Dropdown.Item>
        <Dropdown.Item>
          <Dropdown.Button>
            <Avatar data-size="xs" aria-label="Sogndal Kommune">
              <Icon material="download" />
            </Avatar>
            Sogndal kommune
          </Dropdown.Button>
        </Dropdown.Item>
      </Dropdown.List>
    </Dropdown>
  </Dropdown.TriggerContext>
);
InDropdown.parameters = {
  layout: 'fullscreen',
  customStyles: {
    height: '320px',
  },
};

export const AsLink: Story = () => (
  <a href="#">
    <Avatar aria-label="Ola Nordmann" />
  </a>
);
