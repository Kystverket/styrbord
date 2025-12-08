import type { Meta, StoryObj } from '@storybook/react';
import Stepper, { StepItem, StepItemColor, StepperProps } from './stepper';
import { Box } from '~/main';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';

const meta = {
  title: 'Components/Stepper',
  component: Stepper,
  decorators: [StyrbordDecorator],
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Stepper>;

export default meta;

type Story = StoryObj<typeof meta>;

const steps: StepItem[] = [
  {
    label: 'Lage vaffelrøre',
  },
  {
    label: 'Steke vafler',
  },
  {
    label: 'Vente på vafler',
  },
  {
    label: 'Ha syltetøy på vafler',
  },
  {
    label: 'Selge vafler',
  },
  {
    label: 'Ta imot betaling',
  },
  {
    label: 'Profitt',
  },
];

const defaultProps: StepperProps = {
  step: 3,
  steps: [...steps],
};

export const Default: Story = {
  args: defaultProps,
};

export const AutoVertical: Story = {
  args: defaultProps,
  decorators: [
    (Story) => (
      <Box width="form-sidebar" p={16}>
        <Story />
      </Box>
    ),
  ],
};

export const Vertical: Story = {
  args: { ...defaultProps, orientation: 'vertical' },
  decorators: [
    (Story) => (
      <Box p={16}>
        <Story />
      </Box>
    ),
  ],
};

export const HorizontalForced: Story = {
  args: { ...defaultProps, orientation: 'horizontal', forceOrientation: true },
  decorators: [
    (Story) => (
      <Box p={16}>
        <Story />
      </Box>
    ),
  ],
};

export const HorizontalForcedSmall: Story = {
  args: { ...defaultProps, orientation: 'horizontal', forceOrientation: true },
  decorators: [
    (Story) => (
      <Box p={16}>
        <div data-size="sm">
          <Story />
        </div>
      </Box>
    ),
  ],
};

export const HideLabels: Story = {
  args: { ...defaultProps, labels: 'never' },
  decorators: [
    (Story) => (
      <Box p={16}>
        <Story />
      </Box>
    ),
  ],
};

export const OnlyCurrentLabel: Story = {
  args: { ...defaultProps, labels: 'current' },
  decorators: [
    (Story) => (
      <Box p={16}>
        <Story />
      </Box>
    ),
  ],
};

export const Clickable: Story = {
  args: { step: 5, steps: steps.map((step) => ({ ...step, onClick: () => {} })) },
  decorators: [
    (Story) => (
      <Box p={16}>
        <Story />
      </Box>
    ),
  ],
};

export const Smaller: Story = {
  args: { 'data-size': 'sm', step: 5, steps: steps.map((step) => ({ ...step, onClick: () => {} })) },
  decorators: [
    (Story) => (
      <Box p={16}>
        <Story />
      </Box>
    ),
  ],
};

export const Larger: Story = {
  args: { 'data-size': 'lg', step: 5, steps: steps.map((step) => ({ ...step, onClick: () => {} })) },
  decorators: [
    (Story) => (
      <Box p={16}>
        <Story />
      </Box>
    ),
  ],
};

const colors: StepItemColor[] = ['accent', 'success', 'warning', 'danger', 'neutral'];

export const Colors: Story = {
  args: {
    step: 5,
    steps: steps.map((step, index) => ({
      ...step,
      onClick: () => {},
      style: 'filled',
      'data-color': colors[index % colors.length],
    })),
  },
  decorators: [
    (Story) => (
      <Box p={16}>
        <Story />
      </Box>
    ),
  ],
};

export const Icons: Story = {
  args: {
    step: 5,
    steps: steps.map((step, index) => ({
      ...step,
      onClick: () => {},
      icon: index % 3 === 0 ? 'anchor' : index % 3 === 1 ? 'archive' : 'chat',
    })),
  },
  decorators: [
    (Story) => (
      <Box p={16}>
        <Story />
      </Box>
    ),
  ],
};
