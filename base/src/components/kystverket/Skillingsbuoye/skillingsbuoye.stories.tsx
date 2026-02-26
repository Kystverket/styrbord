import type { Meta, StoryObj } from '@storybook/react';
import Skillingsbuoye from './skillingsbuoye';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';

const meta = {
  title: 'Components/Skillingsbuoye',
  component: Skillingsbuoye,
  decorators: [StyrbordDecorator],
  tags: ['autodocs', 'kyv'],
  parameters: {
    docs: {
      description: {
        component: `
Skillingsbuoye brukes ofte til kaffepausen på ettermiddag i godt selskap med kollegaer.

**Egnet til:**
- Å takle to-knekken

**Uegnet til:**
- Bruk på sjø
        `,
      },
    },
  },
  argTypes: {},
} satisfies Meta<typeof Skillingsbuoye>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Preview: Story = {
  args: {},
};
