import type { Meta, StoryObj } from '@storybook/react';
import { FullpageLoader } from './fullpageLoader';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';

const meta = {
  title: 'Demo/FullpageLoader',
  component: FullpageLoader,
  decorators: [StyrbordDecorator],
  tags: ['autodocs', 'kyv'],
} satisfies Meta<typeof FullpageLoader>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps = {};

export const Default: Story = {
  args: defaultProps,
};
