import type { Meta, StoryObj } from "@storybook/react";
import Box, { BoxProps } from "./box";
import classes from "./box.stories.module.css";
import StyrbordDecorator from "../../../storybook/styrbordDecorator";

const meta = {
  title: "Components/Box",
  component: Box,
  decorators: [StyrbordDecorator],
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Box>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps: BoxProps = {
  children: (
    <>
      <div style={{ background: "red", height: "50px" }}>Rød boks</div>
      <div style={{ background: "blue" }}>Blå boks</div>
      <div style={{ background: "green", height: "80px" }}>Grønn boks</div>
      <div style={{ background: "yellow" }}>Gul boks</div>
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
    gap: 4,
    justify: "end",
    align: "center",
    horizontal: true,
  },
};

export const HorizontalJustifyBetween: Story = {
  args: {
    ...defaultProps,
    gap: 4,
    justify: "between",
    align: "center",
    horizontal: true,
  },
};

export const Spacings: Story = {
  args: {
    children: (
      <div
        style={{
          background: "beige",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        <div style={{ background: "white" }}>
          <Box p={8} pb={2} mt={4} className={classes.colored}>
            p={8} pb={2} mt={4}
          </Box>
        </div>
        <div style={{ background: "white" }}>
          <Box m={8} pr={12} className={classes.colored}>
            m={8} pr={12}
          </Box>
        </div>
        <div style={{ background: "white" }}>
          <Box p={18} px={4} py={0} className={classes.colored}>
            p={18} px={4} py={0}
          </Box>
        </div>
        <div style={{ background: "white" }}>
          <Box p={18} pl={0} pt={2} pr={4} pb={6} className={classes.colored}>
            p={18} pl={0} pt={2} pr={4} pb={6}
          </Box>
        </div>
        <div style={{ background: "white" }}>
          <Box m={18} mx={0} my={4} className={classes.colored}>
            m={18} mx={0} my={4}
          </Box>
        </div>
        <div style={{ background: "white" }}>
          <Box m={18} ml={0} mt={2} mr={4} mb={6} className={classes.colored}>
            m={18} ml={0} mt={2} mr={4} mb={6}
          </Box>
        </div>
        <div style={{ background: "white" }}>
          <Box pt={12} pr={8} pb={6} pl={4} className={classes.colored}>
            pt={12} pr={8} pb={6} pl={4}
          </Box>
        </div>
        <div style={{ background: "white" }}>
          <Box mt={12} mr={8} mb={6} ml={4} className={classes.colored}>
            mt={12} mr={8} mb={6} ml={4}
          </Box>
        </div>
      </div>
    ),
  },
};
