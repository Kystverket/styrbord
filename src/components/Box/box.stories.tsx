import type { Meta, StoryObj } from '@storybook/react';
import Box, { BoxProps } from './box';
import StyrbordDecorator from '../../../storybook/styrbordDecorator';

const meta = {
  title: 'Components/Box',
  component: Box,
  decorators: [StyrbordDecorator],
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Box>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps: BoxProps = {
  children: (
    <>
      <div style={{ background: 'red', height: '50px' }}>Rød boks</div>
      <div style={{ background: 'blue' }}>Blå boks</div>
      <div style={{ background: 'green', height: '80px' }}>Grønn boks</div>
      <div style={{ background: 'yellow' }}>Gul boks</div>
    </>
  ),
};

export const Default: Story = {
  args: defaultProps,
};

export const Horizontal: Story = {
  args: { ...defaultProps, horizontal: true },
};

export const Gap: Story = {
  args: { ...defaultProps, gap: 4 },
};

export const HorizontalJustifyEnd: Story = {
  args: { ...defaultProps, gap: 4, justify: 'end', align: 'center', horizontal: true },
};

export const HorizontalJustifyBetween: Story = {
  args: { ...defaultProps, gap: 4, justify: 'between', align: 'center', horizontal: true },
};

export const Spacings: Story = {
  args: { ...defaultProps, horizontal: true, pt: 6, mx: 4, gap: 4 },
};
