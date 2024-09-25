import type { Meta, StoryObj } from '@storybook/react';
import { Body, Headline, Label, Title, TypographyProps } from './typography';
import Box, { BoxProps } from '../Box/box';
import StyrbordDecorator from '../../styrbordDecorator';

const meta = {
  title: 'Components/Typography',
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
      <Headline.Large>Headline Large</Headline.Large>
      <Headline.Medium>Headline Medium</Headline.Medium>
      <Headline.Small>Headline Small</Headline.Small>
      <Title.Large>Title Large</Title.Large>
      <Title.Medium>Title Medium</Title.Medium>
      <Title.Small>Title Small</Title.Small>
      <Body.Large>Body Large</Body.Large>
      <Body.Medium>Body Medium</Body.Medium>
      <Body.Small>Body Small</Body.Small>
      <Label.Strong.Large>Label Large Strong</Label.Strong.Large>
      <Label.Strong.Medium>Label Medium Strong</Label.Strong.Medium>
      <Label.Strong.Small>Label Small Strong</Label.Strong.Small>
      <Label.Large>Label Large</Label.Large>
      <Label.Medium>Label Medium</Label.Medium>
      <Label.Small>Label Small</Label.Small>
    </>
  ),
};

export const Default: Story = {
  args: defaultProps,
};
