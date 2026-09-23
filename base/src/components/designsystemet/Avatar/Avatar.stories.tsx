import type { Meta, StoryFn } from '@storybook/react-vite';
import { Avatar, AvatarBoringVariant, AvatarProps, Badge, Box, Dropdown, Icon } from '~/main';
import cat1 from '@assets/img/cats/Cat 3.jpg';
import { styrbordPaletteColors, styrbordSemanticColors } from '@kystverket/styrbord-tokens/colors';
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

const colors: AvatarProps['data-color'][] = [...styrbordSemanticColors, ...styrbordPaletteColors];
const colorVariants: string[] = ['base', 'tinted'];

export default meta;

export const Preview: Story = (args) => <Avatar {...args} />;

Preview.args = {
  'aria-label': 'Ola Nordmann',
  variant: 'circle',
  children: '',
};

export const NoName: Story = () => <Avatar aria-label="Ola" />;

export const Sizes: Story = () => (
  <Box gap={16} align="start">
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
        <Box key={String(color) + String(colorVariant)} horizontal align="center" gap={8}>
          <Avatar data-color={color} data-color-variant={colorVariant} aria-label={`color ${color}`} />
          {color} {colorVariant}
        </Box>
      )),
    )}
  </Box>
);

export const BorderVariants: Story = () => (
  <Box gap={16}>
    <Box horizontal align="center" gap={8}>
      <Avatar data-color="neutral" data-color-variant="tinted" border-style="solid" aria-label="solid border" />
      solid
    </Box>
    <Box horizontal align="center" gap={8}>
      <Avatar data-color="neutral" data-color-variant="tinted" border-style="dashed" aria-label="dashed border" />
      dashed
    </Box>
    <Box horizontal align="center" gap={8}>
      <Avatar data-color="neutral" data-color-variant="tinted" border-style="dotted" aria-label="dotted border" />
      dotted
    </Box>
    <Box horizontal align="center" gap={8}>
      <Avatar data-color="neutral" data-color-variant="tinted" border-style="double" aria-label="double border" />
      double
    </Box>
    <Box horizontal align="center" gap={8}>
      <Avatar data-color="neutral" data-color-variant="tinted" border-style="none" aria-label="no border" />
      none
    </Box>
  </Box>
);

export const CombinedVariants: Story = () => (
  <Box gap={16}>
    <Box horizontal align="center" gap={8}>
      <Avatar border-style="dashed" data-color="muted" data-color-variant="tinted" aria-label="muted tinted dashed" />
      muted + tinted + dashed
    </Box>
    <Box horizontal align="center" gap={8}>
      <Avatar data-color="success" data-color-variant="tinted" border-style="solid" aria-label="success tinted solid" />
      success + tinted + solid
    </Box>
    <Box horizontal align="center" gap={8}>
      <Avatar data-color="warning" data-color-variant="base" border-style="dotted" aria-label="warning base dotted" />
      warning + base + dotted
    </Box>
  </Box>
);

export const ShapeVariants: Story = () => (
  <>
    <Avatar data-variant="circle" aria-label="variant circle" />
    <Avatar data-variant="square" aria-label="variant square" />
    <Avatar data-variant="circle" aria-label="Ola Nordman">
      ON
    </Avatar>
    <Avatar data-variant="square" aria-label="Ola Nordman">
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

export const WithTooltip: Story = () => (
  <>
    <Avatar aria-label="Ola Nordmann" tooltip="Ola Nordmann">
      ON
    </Avatar>
    <Avatar aria-label="Kari Nordmann" tooltip="Kari Nordmann" data-color="success">
      KN
    </Avatar>
  </>
);

export const Checked: Story = () => (
  <>
    <Avatar aria-label="Ola Nordmann" checked>
      ON
    </Avatar>
    <Avatar aria-label="Ola Nordmann" data-variant="square" checked>
      ON
    </Avatar>
    <Avatar data-size="xs" aria-label="Ola Nordmann" checked>
      ON
    </Avatar>
    <Avatar aria-label="Ola Nordmann" data-color="success" checked />
    <Avatar aria-label="Ola Nordmann" checked>
      <img src={cat1} alt="" />
    </Avatar>
    <Avatar checked data-color="danger" data-color-variant="tinted" border-style="double" aria-label="double border" />
  </>
);

const boringVariants: (true | 'solid' | AvatarBoringVariant)[] = [
  true,
  'solid',
  'marble',
  'beam',
  'pixel',
  'sunset',
  'ring',
  'bauhaus',
  'geometric',
  'abstract',
];
const boringNames = ['Ola Nordmann', 'Kari Nordmann', 'Per Hansen', 'Anne Olsen', 'Lars Berg'];

export const Boring: Story = () => (
  <Box gap={16}>
    <Box horizontal align="center" gap={8}>
      {boringNames.map((name) => (
        <Avatar key={name} auto aria-label={name} tooltip={name} />
      ))}
      <Avatar auto aria-label="" tooltip="Unknown" />
    </Box>
    {boringVariants.map((variant) => (
      <Box key={String(variant)} horizontal align="center" gap={8}>
        {boringNames.map((name) => (
          <Avatar key={name} auto={variant} aria-label={name} tooltip={name} />
        ))}
        {variant}
      </Box>
    ))}
    <Box horizontal align="center" gap={8}>
      <Avatar auto="marble" aria-label="Ola Nordmann" data-size="3xs" />
      <Avatar auto="marble" aria-label="Ola Nordmann" data-size="xs" />
      <Avatar auto="marble" aria-label="Ola Nordmann" data-size="lg" />
      <Avatar auto="marble" aria-label="Ola Nordmann" data-variant="square" />
      <Avatar auto="marble" aria-label="Ola Nordmann" checked />
      <Avatar auto="marble" aria-label="Ola Nordmann" border-style="solid" />
      sizes, square, checked, border
    </Box>
    <Box horizontal align="center" gap={8}>
      <Avatar auto="marble" aria-label="Ola Nordmann" data-size="3xs">
        3S
      </Avatar>
      <Avatar auto="marble" aria-label="Ola Nordmann" data-size="xs">
        XS
      </Avatar>
      <Avatar auto="marble" aria-label="Kari Nordmann" data-size="lg">
        LG
      </Avatar>
      <Avatar auto="marble" aria-label="Ola Nordmann" data-variant="square">
        SQ
      </Avatar>
      <Avatar auto="marble" aria-label="Ola Nordmann" checked>
        CH
      </Avatar>
      <Avatar auto="marble" aria-label="Ola Nordmann" border-style="solid">
        BS
      </Avatar>
      sizes, square, checked, border
    </Box>
  </Box>
);

export const AsLink: Story = () => (
  <a href="#">
    <Avatar aria-label="Ola Nordmann" />
  </a>
);
