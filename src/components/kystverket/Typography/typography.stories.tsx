import type { Meta, StoryObj } from '@storybook/react';
import { Display, Body, Headline, Label, Title } from './typography';
import Box, { BoxProps } from '../Box/box';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';

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
      <Display.Large>Display Large</Display.Large>
      <Display.Medium>Display Medium</Display.Medium>
      <Display.Small>Display Small</Display.Small>
      <Headline.Large>Headline Large</Headline.Large>
      <Headline.Medium>Headline Medium</Headline.Medium>
      <Headline.Small>Headline Small</Headline.Small>
      <Title.Large>Title Large</Title.Large>
      <Title.Medium>Title Medium</Title.Medium>
      <Title.Small>Title Small</Title.Small>
      <Body.Strong.Large>Body Strong Large</Body.Strong.Large>
      <Body.Strong.Medium>Body Strong Medium</Body.Strong.Medium>
      <Body.Strong.Small>Body Strong Small</Body.Strong.Small>
      <Body.Large>Body Large</Body.Large>
      <Body.Medium>Body Medium</Body.Medium>
      <Body.Small>Body Small</Body.Small>
      <Label.Strong.XLarge>Label XL Strong</Label.Strong.XLarge>
      <Label.Strong.Large>Label Large Strong</Label.Strong.Large>
      <Label.Strong.Medium>Label Medium Strong</Label.Strong.Medium>
      <Label.Strong.Small>Label Small Strong</Label.Strong.Small>
      <Label.XLarge>Label XL Large</Label.XLarge>
      <Label.Large>Label Large</Label.Large>
      <Label.Medium>Label Medium</Label.Medium>
      <Label.Small>Label Small</Label.Small>
    </>
  ),
};

export const Default: Story = {
  args: defaultProps,
};
