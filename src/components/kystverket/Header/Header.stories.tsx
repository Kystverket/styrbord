import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';

const meta = {
  title: 'Page/Header',
  component: Header,
  decorators: [StyrbordDecorator],
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps: Story['args'] = {
  language: 'nb-NO',
  logo: { title: 'Styrbord', url: '/' },
};

export const Default: Story = {
  args: defaultProps,
};
