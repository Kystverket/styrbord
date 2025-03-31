import type { Meta, StoryObj } from '@storybook/react';
import Box, { BoxProps } from '../Box/box';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';
import { Heading } from './heading';

const meta = {
  title: 'Components/Heading',
  component: Box,
  decorators: [StyrbordDecorator],
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Box>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps: BoxProps = {
  children: (
    <Box gap={12}>
      <Heading level="1" size="xl" className="custom-class">
        Heading xlarge
      </Heading>
      <Heading level="1" size="lg" className="custom-class">
        Heading large
      </Heading>
      <Heading level="1" size="md" className="custom-class">
        Heading medium
      </Heading>
      <Heading level="1" size="sm" className="custom-class">
        Heading small
      </Heading>
      <Heading level="1" size="xs" className="custom-class">
        Heading xsmall
      </Heading>
      <Heading level="1" size="xxs" className="custom-class">
        Heading xxsmall
      </Heading>
    </Box>
  ),
};

export const Default: Story = {
  args: defaultProps,
};

export const Margin: Story = {
  args: {
    children: (
      <Box gap={12}>
        <Heading level="1" size="xl" className="custom-class" margin>
          Heading xlarge
        </Heading>
        <Heading level="1" size="lg" className="custom-class" margin>
          Heading large
        </Heading>
        <Heading level="1" size="md" className="custom-class" margin>
          Heading medium
        </Heading>
        <Heading level="1" size="sm" className="custom-class" margin>
          Heading small
        </Heading>
        <Heading level="1" size="xs" className="custom-class" margin>
          Heading xsmall
        </Heading>
        <Heading level="1" size="xxs" className="custom-class" margin>
          Heading xxsmall
        </Heading>
      </Box>
    ),
  },
};
