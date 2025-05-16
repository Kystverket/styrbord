import type { Meta, StoryObj } from '@storybook/react';

import StyrbordDecorator from '../../../../storybook/styrbordDecorator';
import { Details, DetailsProps } from './Details';

const meta = {
  title: 'Komponenter/Details',
  component: Details,
  decorators: [StyrbordDecorator],
  tags: ['autodocs', 'ds'],
  argTypes: {},
} satisfies Meta<typeof Details>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultArgs: DetailsProps = {
  summary: 'Details header',
  children: 'Details content',
};

export const Default: Story = {
  args: defaultArgs,
};
