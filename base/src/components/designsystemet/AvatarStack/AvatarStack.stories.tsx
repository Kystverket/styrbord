import type { Meta, StoryFn } from '@storybook/react-vite';
import { Avatar, AvatarStack, Tooltip } from '~/main';
import cat1 from '@assets/img/cats/Cat 1.jpg';
import cat2 from '@assets/img/cats/Cat 2.jpg';
import cat3 from '@assets/img/cats/Cat 3.jpg';
import cat4 from '@assets/img/cats/Cat 4.jpg';

type Story = StoryFn<typeof AvatarStack>;

const meta: Meta<typeof AvatarStack> = {
  title: 'Components/AvatarStack',
  component: AvatarStack,
  tags: ['autodocs', 'kyv', 'beta'],
  parameters: {
    layout: 'padded',
  },
};

export default meta;

export const Preview: Story = (args) => (
  <AvatarStack {...args}>
    <Avatar aria-label="Ola Nordmann">
      <img src={cat1} alt="" />
    </Avatar>
    <Avatar aria-label="Kari Nordmann">
      <img src={cat2} alt="" />
    </Avatar>
    <Avatar aria-label="Anne Hansen" initials="AH" />
    <Avatar aria-label="Per Hansen" initials="PH" />
    <Avatar aria-label="Lise Dahl" initials="LD" />
  </AvatarStack>
);

export const Sizes: Story = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ds-size-6)' }}>
    <div>
      <p style={{ marginBottom: 'var(--ds-size-2)' }}>avatarSize="var(--ds-size-8)"</p>
      <AvatarStack avatarSize="var(--ds-size-8)">
        <Avatar aria-label="Ola Nordmann">
          <img src={cat1} alt="" />
        </Avatar>
        <Avatar aria-label="Kari Nordmann">
          <img src={cat2} alt="" />
        </Avatar>
        <Avatar aria-label="Anne Hansen" initials="AH" />
        <Avatar aria-label="Per Hansen" initials="PH" />
      </AvatarStack>
    </div>
    <div>
      <p style={{ marginBottom: 'var(--ds-size-2)' }}>avatarSize="3rem" (default)</p>
      <AvatarStack avatarSize="3rem">
        <Avatar aria-label="Ola Nordmann">
          <img src={cat1} alt="" />
        </Avatar>
        <Avatar aria-label="Kari Nordmann">
          <img src={cat2} alt="" />
        </Avatar>
        <Avatar aria-label="Anne Hansen" initials="AH" />
        <Avatar aria-label="Per Hansen" initials="PH" />
      </AvatarStack>
    </div>
    <div>
      <p style={{ marginBottom: 'var(--ds-size-2)' }}>avatarSize="5rem"</p>
      <AvatarStack avatarSize="5rem">
        <Avatar aria-label="Ola Nordmann">
          <img src={cat1} alt="" />
        </Avatar>
        <Avatar aria-label="Kari Nordmann">
          <img src={cat2} alt="" />
        </Avatar>
        <Avatar aria-label="Anne Hansen" initials="AH" />
        <Avatar aria-label="Per Hansen" initials="PH" />
      </AvatarStack>
    </div>
  </div>
);

export const Overlap: Story = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ds-size-6)' }}>
    <div>
      <p style={{ marginBottom: 'var(--ds-size-2)' }}>overlap=20</p>
      <AvatarStack overlap={20}>
        <Avatar aria-label="Ola Nordmann">
          <img src={cat1} alt="" />
        </Avatar>
        <Avatar aria-label="Kari Nordmann">
          <img src={cat2} alt="" />
        </Avatar>
        <Avatar aria-label="Anne Hansen" initials="AH" />
        <Avatar aria-label="Per Hansen" initials="PH" />
      </AvatarStack>
    </div>
    <div>
      <p style={{ marginBottom: 'var(--ds-size-2)' }}>overlap=50 (default)</p>
      <AvatarStack overlap={50}>
        <Avatar aria-label="Ola Nordmann">
          <img src={cat1} alt="" />
        </Avatar>
        <Avatar aria-label="Kari Nordmann">
          <img src={cat2} alt="" />
        </Avatar>
        <Avatar aria-label="Anne Hansen" initials="AH" />
        <Avatar aria-label="Per Hansen" initials="PH" />
      </AvatarStack>
    </div>
    <div>
      <p style={{ marginBottom: 'var(--ds-size-2)' }}>overlap=75</p>
      <AvatarStack overlap={75}>
        <Avatar aria-label="Ola Nordmann">
          <img src={cat1} alt="" />
        </Avatar>
        <Avatar aria-label="Kari Nordmann">
          <img src={cat2} alt="" />
        </Avatar>
        <Avatar aria-label="Anne Hansen" initials="AH" />
        <Avatar aria-label="Per Hansen" initials="PH" />
      </AvatarStack>
    </div>
  </div>
);

export const Gap: Story = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ds-size-6)' }}>
    <div>
      <p style={{ marginBottom: 'var(--ds-size-2)' }}>gap="2px" (default)</p>
      <AvatarStack gap="2px" avatarSize="3rem">
        <Avatar aria-label="Ola Nordmann" initials="ON" />
        <Avatar aria-label="Kari Nordmann" initials="KN" />
        <Avatar aria-label="Anne Hansen" initials="AH" />
        <Avatar aria-label="Per Hansen" initials="PH" />
      </AvatarStack>
    </div>
    <div>
      <p style={{ marginBottom: 'var(--ds-size-2)' }}>gap="4px"</p>
      <AvatarStack gap="4px" avatarSize="3rem">
        <Avatar aria-label="Ola Nordmann" initials="ON" />
        <Avatar aria-label="Kari Nordmann" initials="KN" />
        <Avatar aria-label="Anne Hansen" initials="AH" />
        <Avatar aria-label="Per Hansen" initials="PH" />
      </AvatarStack>
    </div>
    <div>
      <p style={{ marginBottom: 'var(--ds-size-2)' }}>gap="6px"</p>
      <AvatarStack gap="6px" avatarSize="3rem">
        <Avatar aria-label="Ola Nordmann" initials="ON" />
        <Avatar aria-label="Kari Nordmann" initials="KN" />
        <Avatar aria-label="Anne Hansen" initials="AH" />
        <Avatar aria-label="Per Hansen" initials="PH" />
      </AvatarStack>
    </div>
  </div>
);

export const Expandable: Story = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ds-size-6)' }}>
    <div>
      <p style={{ marginBottom: 'var(--ds-size-2)' }}>expandable (hover or focus to expand)</p>
      <AvatarStack expandable>
        <Avatar aria-label="Ola Nordmann">
          <img src={cat1} alt="" />
        </Avatar>
        <Avatar aria-label="Kari Nordmann">
          <img src={cat2} alt="" />
        </Avatar>
        <Avatar aria-label="Anne Hansen">
          <img src={cat3} alt="" />
        </Avatar>
        <Avatar aria-label="Per Hansen">
          <img src={cat4} alt="" />
        </Avatar>
      </AvatarStack>
    </div>
    <div>
      <p style={{ marginBottom: 'var(--ds-size-2)' }}>expandable="fixed" (width stays constant)</p>
      <AvatarStack expandable="fixed">
        <Avatar aria-label="Ola Nordmann">
          <img src={cat1} alt="" />
        </Avatar>
        <Avatar aria-label="Kari Nordmann">
          <img src={cat2} alt="" />
        </Avatar>
        <Avatar aria-label="Anne Hansen">
          <img src={cat3} alt="" />
        </Avatar>
        <Avatar aria-label="Per Hansen">
          <img src={cat4} alt="" />
        </Avatar>
      </AvatarStack>
    </div>
  </div>
);

export const WithSuffix: Story = () => (
  <AvatarStack suffix="+8" aria-label="Deltakere i møtet">
    <Avatar aria-label="Ola Nordmann">
      <img src={cat1} alt="" />
    </Avatar>
    <Avatar aria-label="Kari Nordmann">
      <img src={cat2} alt="" />
    </Avatar>
    <Avatar aria-label="Anne Hansen" initials="AH" />
    <Avatar aria-label="Per Hansen" initials="PH" />
  </AvatarStack>
);

export const ShapeVariants: Story = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ds-size-6)' }}>
    <div>
      <p style={{ marginBottom: 'var(--ds-size-2)' }}>variant="circle" (default)</p>
      <AvatarStack overlap={40} gap="4px" expandable>
        <Avatar variant="circle" aria-label="Ola Nordmann">
          <img src={cat1} alt="" />
        </Avatar>
        <Avatar variant="circle" aria-label="Kari Nordmann">
          <img src={cat2} alt="" />
        </Avatar>
        <Avatar variant="circle" aria-label="Anne Hansen" initials="AH" />
        <Avatar variant="circle" aria-label="Per Hansen" initials="PH" />
      </AvatarStack>
    </div>
    <div>
      <p style={{ marginBottom: 'var(--ds-size-2)' }}>variant="square"</p>
      <AvatarStack overlap={40} gap="4px" expandable>
        <Avatar variant="square" aria-label="Ola Nordmann">
          <img src={cat1} alt="" />
        </Avatar>
        <Avatar variant="square" aria-label="Kari Nordmann">
          <img src={cat2} alt="" />
        </Avatar>
        <Avatar variant="square" aria-label="Anne Hansen" initials="AH" />
        <Avatar variant="square" aria-label="Per Hansen" initials="PH" />
      </AvatarStack>
    </div>
  </div>
);

export const ExpandableWithTooltips: Story = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ds-size-6)' }}>
    <div>
      <p style={{ marginBottom: 'var(--ds-size-2)' }}>expandable — tooltip on hover</p>
      <AvatarStack expandable aria-label="Deltakere i møtet">
        <Tooltip content="Ola Nordmann">
          <Avatar aria-label="Ola Nordmann">
            <img src={cat1} alt="" />
          </Avatar>
        </Tooltip>
        <Tooltip content="Kari Nordmann">
          <Avatar aria-label="Kari Nordmann">
            <img src={cat2} alt="" />
          </Avatar>
        </Tooltip>
        <Tooltip content="Anne Hansen">
          <Avatar aria-label="Anne Hansen">
            <img src={cat3} alt="" />
          </Avatar>
        </Tooltip>
        <Tooltip content="Per Hansen">
          <Avatar aria-label="Per Hansen">
            <img src={cat4} alt="" />
          </Avatar>
        </Tooltip>
      </AvatarStack>
    </div>
    <div>
      <p style={{ marginBottom: 'var(--ds-size-2)' }}>expandable="fixed" — tooltip on hover</p>
      <AvatarStack expandable="fixed" aria-label="Deltakere i møtet">
        <Tooltip content="Ola Nordmann">
          <Avatar aria-label="Ola Nordmann">
            <img src={cat1} alt="" />
          </Avatar>
        </Tooltip>
        <Tooltip content="Kari Nordmann">
          <Avatar aria-label="Kari Nordmann">
            <img src={cat2} alt="" />
          </Avatar>
        </Tooltip>
        <Tooltip content="Anne Hansen">
          <Avatar aria-label="Anne Hansen">
            <img src={cat3} alt="" />
          </Avatar>
        </Tooltip>
        <Tooltip content="Per Hansen">
          <Avatar aria-label="Per Hansen">
            <img src={cat4} alt="" />
          </Avatar>
        </Tooltip>
      </AvatarStack>
    </div>
  </div>
);
