import { Meta, StoryObj } from '@storybook/react-vite';
import KyvDivider from './KyvDivider';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';

const meta = {
  title: 'Komponenter/Oppsett/KyvDivider',
  component: KyvDivider,
  decorators: [StyrbordDecorator],
  tags: ['autodocs', 'kyv'],
  argTypes: {},
} satisfies Meta<typeof KyvDivider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
