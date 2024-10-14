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
  args: {
    ...defaultProps,
    gap: 16,
    justify: 'end',
    align: 'center',
    horizontal: true,
  },
};

export const HorizontalJustifyBetween: Story = {
  args: {
    ...defaultProps,
    gap: 16,
    justify: 'between',
    align: 'center',
    horizontal: true,
  },
};

export const Spacings: Story = {
  args: {
    children: (
      <div
        style={{
          background: 'beige',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          alignItems: 'center',
        }}
      >
        <div style={{ background: 'white' }}>
          <Box p={32} pb={16} mt={8} color="warning">
            p={32} pb={16} mt={8}
          </Box>
        </div>
        <div style={{ background: 'white' }}>
          <Box m={32} pr={48} color="warning">
            m={32} pr={48}
          </Box>
        </div>
        <div style={{ background: 'white' }}>
          <Box p={64} px={16} py={0} color="warning">
            p={64} px={16} py={0}
          </Box>
        </div>
        <div style={{ background: 'white' }}>
          <Box p={64} pl={0} pt={8} pr={16} pb={32} color="warning">
            p={64} pl={0} pt={8} pr={16} pb={32}
          </Box>
        </div>
        <div style={{ background: 'white' }}>
          <Box m={64} mx={0} my={16} color="warning">
            m={64} mx={0} my={16}
          </Box>
        </div>
        <div style={{ background: 'white' }}>
          <Box m={64} ml={0} mt={8} mr={16} mb={32} color="warning">
            m={64} ml={0} mt={8} mr={16} mb={32}
          </Box>
        </div>
        <div style={{ background: 'white' }}>
          <Box pt={64} pr={32} pb={16} pl={8} color="warning">
            pt={64} pr={32} pb={16} pl={8}
          </Box>
        </div>
        <div style={{ background: 'white' }}>
          <Box mt={64} mr={32} mb={16} ml={8} color="warning">
            mt={64} mr={32} mb={16} ml={8}
          </Box>
        </div>
      </div>
    ),
  },
};

export const Colors: Story = {
  args: {
    children: (
      <Box gap={32}>
        <Box color="action" p={32} radius="lg">
          action
        </Box>
        <Box color="info" p={32} radius="lg">
          info
        </Box>
        <Box color="success" p={32} radius="lg">
          success
        </Box>
        <Box color="warning" p={32} radius="lg">
          warning
        </Box>
        <Box color="danger" p={32} radius="lg">
          danger
        </Box>
        <Box color="action" subtle p={32} radius="lg">
          action subtle
        </Box>
        <Box color="info" subtle p={32} radius="lg">
          info subtle
        </Box>
        <Box color="success" subtle p={32} radius="lg">
          success subtle
        </Box>
        <Box color="warning" subtle p={32} radius="lg">
          warning subtle
        </Box>
        <Box color="danger" subtle p={32} radius="lg">
          danger subtle
        </Box>
        <Box color="action" border="md" p={32} radius="lg">
          action
        </Box>
        <Box color="info" border="md" p={32} radius="lg">
          info
        </Box>
        <Box color="success" border="md" p={32} radius="lg">
          success
        </Box>
        <Box color="warning" border="md" p={32} radius="lg">
          warning
        </Box>
        <Box color="danger" border="md" p={32} radius="lg">
          danger
        </Box>
        <Box color="action" border="md" subtle p={32} radius="lg">
          action subtle
        </Box>
        <Box color="info" border="md" subtle p={32} radius="lg">
          info subtle
        </Box>
        <Box color="success" border="md" subtle p={32} radius="lg">
          success subtle
        </Box>
        <Box color="warning" border="md" subtle p={32} radius="lg">
          warning subtle
        </Box>
        <Box color="danger" border="md" subtle p={32} radius="lg">
          danger subtle
        </Box>
      </Box>
    ),
  },
};
