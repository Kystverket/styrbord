import type { Meta, StoryObj } from '@storybook/react';
import Stepper, { StepperProps } from './stepper';
import { Box } from '~/main';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';

const meta = {
  title: 'Komponenter/Stepper',
  component: Stepper,
  decorators: [StyrbordDecorator],
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Stepper>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps: StepperProps = {
  step: 2,
  steps: [
    {
      label: 'Lage vaffelrøre',
    },
    {
      label: 'Steke vafler',
    },
    {
      label: 'Selge vafler',
    },
    {
      label: 'Profitt',
    },
  ],
};

export const Default: Story = {
  args: defaultProps,
};

export const Vertical: Story = {
  args: defaultProps,
  decorators: [
    (Story) => (
      <Box width="form-sidebar" p={16}>
        <Story />
      </Box>
    ),
  ],
};
