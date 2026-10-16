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
  args: {
    size: 64,
    gap: 2,
    overlap: 16,
    radius: 32,
  },
  argTypes: {
    size: { control: { type: 'range', min: 16, max: 128, step: 1 } },
    gap: { control: { type: 'range', min: 0, max: 16, step: 1 } },
    overlap: { control: { type: 'range', min: 0, max: 128, step: 1 } },
    radius: { control: { type: 'range', min: 0, max: 64, step: 1 } },
  },
};

const mixedAvatars = (
  <>
    <li>
      <Avatar aria-label="Magnus Ekset" initials="ME" />
    </li>
    <li>
      <Avatar aria-label="Ola Nordmann">
        <img src={cat1} alt="" />
      </Avatar>
    </li>
    <li>
      <Avatar aria-label="Kari Nordmann">
        <img src={cat2} alt="" />
      </Avatar>
    </li>
    <li>
      <Avatar aria-label="Anne Hansen" initials="AH" />
    </li>
    <li>
      <Avatar aria-label="Per Hansen" initials="PH" />
    </li>
    <li>
      <Avatar aria-label="Lise Dahl" initials="LD" />
    </li>
  </>
);

const imageAvatars = (
  <>
    <li>
      <Avatar aria-label="Ola Nordmann">
        <img src={cat1} alt="" />
      </Avatar>
    </li>
    <li>
      <Avatar aria-label="Kari Nordmann">
        <img src={cat2} alt="" />
      </Avatar>
    </li>
    <li>
      <Avatar aria-label="Tore Hansen">
        <img src={cat3} alt="" />
      </Avatar>
    </li>
  </>
);

const textAvatars = (
  <>
    <li>
      <Avatar aria-label="Magnus Ekset" initials="ME" />
    </li>
    <li>
      <Avatar aria-label="Anne Hansen" initials="AH" />
    </li>
    <li>
      <Avatar aria-label="Per Hansen" initials="PH" />
    </li>
    <li>
      <Avatar aria-label="Lise Dahl" initials="LD" />
    </li>
  </>
);

export default meta;

export const Preview: Story = (args) => <AvatarStack {...args}>{textAvatars}</AvatarStack>;

export const Expandable: Story = (args) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ds-size-6)' }}>
    <div>
      <p>expandable (hover or focus to expand)</p>
      <AvatarStack {...args} expandable>
        {imageAvatars}
      </AvatarStack>
    </div>
    <div>
      <p>expandable="fixed" (width stays constant)</p>
      <AvatarStack {...args} expandable="fixed">
        {imageAvatars}
      </AvatarStack>
    </div>
  </div>
);

export const WithSuffix: Story = (args) => (
  <AvatarStack {...args} aria-label="Deltakere i møtet">
    {mixedAvatars}
    <li>+14</li>
  </AvatarStack>
);

export const ExpandableWithTooltips: Story = (args) => (
  <div>
    <p>expandable — tooltip on hover</p>
    <AvatarStack {...args} expandable aria-label="Deltakere i møtet">
      <li>
        <Tooltip content="Ola Nordmann">
          <Avatar aria-label="Ola Nordmann">
            <img src={cat1} alt="" />
          </Avatar>
        </Tooltip>
      </li>
      <li>
        <Tooltip content="Kari Nordmann">
          <Avatar aria-label="Kari Nordmann">
            <img src={cat2} alt="" />
          </Avatar>
        </Tooltip>
      </li>
      <li>
        <Tooltip content="Anne Hansen">
          <Avatar aria-label="Anne Hansen">
            <img src={cat3} alt="" />
          </Avatar>
        </Tooltip>
      </li>
      <li>
        <Tooltip content="Per Hansen">
          <Avatar aria-label="Per Hansen">
            <img src={cat4} alt="" />
          </Avatar>
        </Tooltip>
      </li>
    </AvatarStack>
  </div>
);
