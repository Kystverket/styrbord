import type { Meta, StoryFn } from '@storybook/react-vite';
import {
  Avatar,
  AvatarBoringVariant,
  AvatarProps,
  AvatarProvider,
  Badge,
  Surface,
  Dropdown,
  Icon,
  DataColorVariant,
} from '~/main';
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
const colorVariants: DataColorVariant[] = ['base', 'tinted'];

export default meta;

export const Preview: Story = (args) => <Avatar {...args} />;

Preview.args = {
  'aria-label': 'Ola Nordmann',
  variant: 'circle',
  children: '',
};

export const NoName: Story = () => <Avatar aria-label="Ola Test" />;

export const Sizes: Story = () => (
  <Surface gap={4} align="start">
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
  </Surface>
);

export const ColorVariants: Story = () => (
  <Surface gap={4}>
    {colorVariants.map((colorVariant) =>
      colors.map((color) => (
        <Surface key={String(color) + String(colorVariant)} horizontal align="center" gap={2}>
          <Avatar data-color={color} data-color-variant={colorVariant} aria-label={`color ${color}`} />
          {color} {colorVariant}
        </Surface>
      )),
    )}
  </Surface>
);

export const BorderVariants: Story = () => (
  <Surface gap={4}>
    <Surface horizontal align="center" gap={2}>
      <Avatar data-color="neutral" data-color-variant="tinted" border-style="solid" aria-label="solid border" />
      solid
    </Surface>
    <Surface horizontal align="center" gap={2}>
      <Avatar data-color="neutral" data-color-variant="tinted" border-style="dashed" aria-label="dashed border" />
      dashed
    </Surface>
    <Surface horizontal align="center" gap={2}>
      <Avatar data-color="neutral" data-color-variant="tinted" border-style="dotted" aria-label="dotted border" />
      dotted
    </Surface>
    <Surface horizontal align="center" gap={2}>
      <Avatar data-color="neutral" data-color-variant="tinted" border-style="double" aria-label="double border" />
      double
    </Surface>
    <Surface horizontal align="center" gap={2}>
      <Avatar data-color="neutral" data-color-variant="tinted" border-style="none" aria-label="no border" />
      none
    </Surface>
  </Surface>
);

export const CombinedVariants: Story = () => (
  <Surface gap={4}>
    <Surface horizontal align="center" gap={2}>
      <Avatar border-style="dashed" data-color="primary" data-color-variant="tinted" aria-label="muted tinted dashed" />
      muted + tinted + dashed
    </Surface>
    <Surface horizontal align="center" gap={2}>
      <Avatar data-color="success" data-color-variant="tinted" border-style="solid" aria-label="success tinted solid" />
      success + tinted + solid
    </Surface>
    <Surface horizontal align="center" gap={2}>
      <Avatar data-color="warning" data-color-variant="base" border-style="dotted" aria-label="warning base dotted" />
      warning + base + dotted
    </Surface>
  </Surface>
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
  <Surface gap={4}>
    <Surface horizontal align="center" gap={2}>
      {boringNames.map((name) => (
        <Avatar key={name} auto aria-label={name} tooltip={name} />
      ))}
      <Avatar auto aria-label="" tooltip="Unknown" />
    </Surface>
    {boringVariants.map((variant) => (
      <Surface key={String(variant)} horizontal align="center" gap={2}>
        {boringNames.map((name) => (
          <Avatar key={name} auto={variant} aria-label={name} tooltip={name} />
        ))}
        {variant}
      </Surface>
    ))}
    <Surface horizontal align="center" gap={2}>
      <Avatar auto="marble" aria-label="Ola Nordmann" data-size="3xs" />
      <Avatar auto="marble" aria-label="Ola Nordmann" data-size="xs" />
      <Avatar auto="marble" aria-label="Ola Nordmann" data-size="lg" />
      <Avatar auto="marble" aria-label="Ola Nordmann" data-variant="square" />
      <Avatar auto="marble" aria-label="Ola Nordmann" checked />
      <Avatar auto="marble" aria-label="Ola Nordmann" border-style="solid" />
      sizes, square, checked, border
    </Surface>
    <Surface horizontal align="center" gap={2}>
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
    </Surface>
  </Surface>
);

export const WithProvider: Story = () => (
  <AvatarProvider auto="beam">
    <Surface horizontal align="center" gap={2}>
      {boringNames.map((name) => (
        <Avatar key={name} aria-label={name} tooltip={name} />
      ))}
      <Avatar auto="solid" aria-label="Ola Nordmann" tooltip="auto=solid" />
      <Avatar auto={false} aria-label="Ola Nordmann" tooltip="auto=false" />
    </Surface>
  </AvatarProvider>
);

const seededUsers = [
  { id: 'a3f1c9e2', name: 'Ola Nordmann' },
  { id: '7b20d4aa', name: 'Ola Nordmann' },
  { id: 'e91c03f5', name: 'Kari Nordmann' },
];

/**
 * `auto-seed` decouples the generated pattern from `aria-label`. Seed from something stable,
 * like a user id, so two people with the same name look different and a person keeps their
 * pattern when the label changes.
 */
export const AutoSeed: Story = () => (
  <Surface gap={4}>
    <Surface horizontal align="center" gap={2}>
      <Avatar auto="beam" aria-label="Ola Nordmann" tooltip="Ola Nordmann" />
      <Avatar auto="beam" aria-label="Ola Nordmann" tooltip="Ola Nordmann" />
      same name, no seed: identical
    </Surface>
    <Surface horizontal align="center" gap={2}>
      {seededUsers.slice(0, 2).map((user) => (
        <Avatar key={user.id} auto="beam" auto-seed={user.id} aria-label={user.name} tooltip={user.id} />
      ))}
      same name, seeded by id: distinct
    </Surface>
    <Surface horizontal align="center" gap={2}>
      <Avatar auto="beam" auto-seed="a3f1c9e2" aria-label="Ola Nordmann" tooltip="Ola Nordmann" />
      <Avatar auto="beam" auto-seed="a3f1c9e2" aria-label="Ola Nordmann (deg)" tooltip="Ola Nordmann (deg)" />
      <Avatar auto="solid" auto-seed="a3f1c9e2" aria-label="Ola Nordmann" tooltip="solid" />
      <Avatar auto="solid" auto-seed="a3f1c9e2" aria-label="Ola Nordmann (deg)" tooltip="solid (deg)" />
      same seed, different labels: stable
    </Surface>
    {(['beam', 'solid'] as const).map((variant) => (
      <Surface key={variant} horizontal align="center" gap={2}>
        <Avatar auto={variant} aria-label="Ola Nordmann" tooltip="no seed" />
        <Avatar auto={variant} auto-seed="" aria-label="Ola Nordmann" tooltip='auto-seed=""' />
        <Avatar auto={variant} auto-seed="   " aria-label="Ola Nordmann" tooltip='auto-seed="   "' />
        <Avatar auto={variant} auto-seed="   " aria-label="Kari Nordmann" tooltip='auto-seed="   "' />
        {variant}: empty or blank seed falls back to aria-label
      </Surface>
    ))}
  </Surface>
);

/**
 * Decorative avatars next to a visible name are `aria-hidden` and have no `aria-label` to seed
 * from. With an `AvatarProvider` setting `auto`, `auto-seed` is all each avatar needs.
 */
export const AutoSeedWithProvider: Story = () => (
  <AvatarProvider auto="marble">
    <Surface gap={2}>
      {seededUsers.map((user) => (
        <Surface key={user.id} horizontal align="center" gap={2}>
          <Avatar aria-hidden auto-seed={user.id} data-size="sm" />
          {user.name}
        </Surface>
      ))}
      <Surface horizontal align="center" gap={2}>
        <Avatar aria-hidden data-size="sm" />
        Uten seed (faller tilbake til solid)
      </Surface>
    </Surface>
  </AvatarProvider>
);

const loggedInUser = seededUsers[0];
const otherUsers = [...seededUsers.slice(1), ...boringNames.map((name) => ({ id: name, name }))];

/**
 * `auto-reserved-seed` on the provider gives one seed, typically the logged-in user, a color no
 * other avatar inside gets. It only applies to `solid`. Other avatars only change if they would
 * have landed on the reserved color.
 * `auto-reserved-index` picks which palette color is reserved; it wraps around the palette.
 */
const reservations: { seed?: string; index?: number; label: string }[] = [
  { label: 'no reservation' },
  { seed: loggedInUser.id, label: 'reserved, default index (0)' },
  { seed: loggedInUser.id, index: 2, label: 'reserved, index 2' },
  { seed: loggedInUser.id, index: -1, label: 'reserved, index -1 (last color)' },
];

export const AutoReservedSeed: Story = () => (
  <Surface gap={4}>
    {reservations.map((reservation) => (
      <AvatarProvider
        key={reservation.label}
        auto="solid"
        auto-reserved-seed={reservation.seed}
        auto-reserved-index={reservation.index}
      >
        <Surface horizontal align="center" gap={2}>
          <Avatar
            auto-seed={loggedInUser.id}
            aria-label={loggedInUser.name}
            tooltip={`${loggedInUser.name} (deg)`}
            border-style="solid"
          />
          {otherUsers.map((user) => (
            <Avatar key={user.id} auto-seed={user.id} aria-label={user.name} tooltip={user.name} />
          ))}
          {reservation.label}
        </Surface>
      </AvatarProvider>
    ))}
  </Surface>
);

export const AsLink: Story = () => (
  <a href="#">
    <Avatar aria-label="Ola Nordmann" />
  </a>
);
