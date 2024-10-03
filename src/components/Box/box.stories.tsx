import type { Meta, StoryObj } from '@storybook/react';
import Box, { BoxProps } from './box';
import classes from './box.stories.module.css';
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
          <Box p={32} pb={16} mt={8} className={classes.colored}>
            p={32} pb={16} mt={8}
          </Box>
        </div>
        <div style={{ background: 'white' }}>
          <Box m={32} pr={48} className={classes.colored}>
            m={32} pr={48}
          </Box>
        </div>
        <div style={{ background: 'white' }}>
          <Box p={64} px={16} py={0} className={classes.colored}>
            p={64} px={16} py={0}
          </Box>
        </div>
        <div style={{ background: 'white' }}>
          <Box p={64} pl={0} pt={8} pr={16} pb={32} className={classes.colored}>
            p={64} pl={0} pt={8} pr={16} pb={32}
          </Box>
        </div>
        <div style={{ background: 'white' }}>
          <Box m={64} mx={0} my={16} className={classes.colored}>
            m={64} mx={0} my={16}
          </Box>
        </div>
        <div style={{ background: 'white' }}>
          <Box m={64} ml={0} mt={8} mr={16} mb={32} className={classes.colored}>
            m={64} ml={0} mt={8} mr={16} mb={32}
          </Box>
        </div>
        <div style={{ background: 'white' }}>
          <Box pt={64} pr={32} pb={16} pl={8} className={classes.colored}>
            pt={64} pr={32} pb={16} pl={8}
          </Box>
        </div>
        <div style={{ background: 'white' }}>
          <Box mt={64} mr={32} mb={16} ml={8} className={classes.colored}>
            mt={64} mr={32} mb={16} ml={8}
          </Box>
        </div>
      </div>
    ),
  },
};
