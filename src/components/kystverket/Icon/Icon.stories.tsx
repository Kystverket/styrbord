import type { Meta, StoryObj } from '@storybook/react';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';
import Icon, { MaterialIconProps } from '~/components/kystverket/Icon/icon';

const meta = {
  title: 'Components/Icon',
  component: Icon,
  decorators: [StyrbordDecorator],
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps: MaterialIconProps = {
  material: 'chevron_left'
};

export const Default: Story = {
  args: defaultProps,
};

export const Stylus: Story = {
  args: {...defaultProps, material: 'stylus'}
}
