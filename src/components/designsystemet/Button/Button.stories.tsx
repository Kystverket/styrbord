import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from './Button';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';
import { Icon } from '~/main';

const meta = {
  title: 'Komponenter/Button',
  component: Button,
  decorators: [StyrbordDecorator],
  tags: ['autodocs', 'kyv-ds-hybrid'],
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps: ButtonProps = {
  children: 'Label',
};

export const Default: Story = {
  args: defaultProps,
};

export const Filled: Story = {
  args: { ...defaultProps, variant: 'filled' },
};

export const Subtle: Story = {
  args: { ...defaultProps, variant: 'subtle' },
};

export const Ghost: Story = {
  args: { ...defaultProps, variant: 'ghost' },
};

export const Dashed: Story = {
  args: { ...defaultProps, variant: 'dashed' },
};

export const Neutral: Story = {
  args: { ...defaultProps, variant: 'filled', color: 'neutral' },
};

export const Danger: Story = {
  args: { ...defaultProps, variant: 'filled', color: 'danger' },
};

export const LinkTo: Story = {
  args: { ...defaultProps, variant: 'subtle', href: 'https://www.kystverket.no', text: 'Kystverket' },
};

export const Small: Story = {
  args: { ...defaultProps, variant: 'filled', size: 'sm' },
};

export const Large: Story = {
  args: { ...defaultProps, variant: 'filled', size: 'lg' },
};

export const Loading: Story = {
  args: { ...defaultProps, variant: 'filled', loading: true },
};

export const Disabled: Story = {
  args: { ...defaultProps, variant: 'filled', disabled: true },
};

export const WithIcon: Story = {
  args: {
    ...defaultProps,
    children: (
      <>
        <Icon material="file_save" />
        Lagre
      </>
    ),
  },
};
