import type { Meta, StoryObj } from '@storybook/react-vite';

import StyrbordDecorator from '../../../../storybook/styrbordDecorator';
import { Card, Details, DetailsProps, Box } from '~/main';

const meta = {
  title: 'Components/Details',
  component: Details,
  decorators: [StyrbordDecorator],
  tags: ['autodocs', 'ds-override'],
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: '[Dokumentasjon fra Designsystemet](https://designsystemet.no/no/components/docs/details/overview)',
      },
    },
  },
} satisfies Meta<typeof Details>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultArgs: DetailsProps = {
  children: (
    <>
      <Details.Summary>Details header</Details.Summary>
      <Details.Content>Details content</Details.Content>
    </>
  ),
};

export const Default: Story = {
  args: defaultArgs,
};

export const InCard: Story = {
  args: {},
  render: () => {
    return (
      <Card>
        <Details>
          <Details.Summary>Details header</Details.Summary>
          <Details.Content>Details content</Details.Content>
        </Details>
        <Details>
          <Details.Summary>Details header</Details.Summary>
          <Details.Content>Details content</Details.Content>
        </Details>
        <Details>
          <Details.Summary>Details header</Details.Summary>
          <Details.Content>Details content</Details.Content>
        </Details>
        <Details>
          <Details.Summary>Details header</Details.Summary>
          <Details.Content>Details content</Details.Content>
        </Details>
      </Card>
    );
  },
};

export const WithColors: Story = {
  args: {},
  render: () => {
    return (
      <Box gap={32}>
        <Card>
          <Details data-color="neutral">
            <Details.Summary>Details header</Details.Summary>
            <Details.Content>Details content</Details.Content>
          </Details>
          <Details data-color="lyng">
            <Details.Summary>Details header</Details.Summary>
            <Details.Content>Details content</Details.Content>
          </Details>
          <Details data-color="sol">
            <Details.Summary>Details header</Details.Summary>
            <Details.Content>Details content</Details.Content>
          </Details>
          <Details data-color="hav">
            <Details.Summary>Details header</Details.Summary>
            <Details.Content>Details content</Details.Content>
          </Details>
          <Details data-color="skog">
            <Details.Summary>Details header</Details.Summary>
            <Details.Content>Details content</Details.Content>
          </Details>
        </Card>
        <Card data-color="lyng">
          <Details>
            <Details.Summary>Details header</Details.Summary>
            <Details.Content>Details content</Details.Content>
          </Details>
          <Details>
            <Details.Summary>Details header</Details.Summary>
            <Details.Content>Details content</Details.Content>
          </Details>
          <Details data-color="sol">
            <Details.Summary>Details header</Details.Summary>
            <Details.Content>Details content</Details.Content>
          </Details>
          <Details>
            <Details.Summary>Details header</Details.Summary>
            <Details.Content>Details content</Details.Content>
          </Details>
          <Details>
            <Details.Summary>Details header</Details.Summary>
            <Details.Content>Details content</Details.Content>
          </Details>
        </Card>
        <Card data-color="lyng" data-color-variant="tinted">
          <Details>
            <Details.Summary>Details header</Details.Summary>
            <Details.Content>Details content</Details.Content>
          </Details>
          <Details>
            <Details.Summary>Details header</Details.Summary>
            <Details.Content>Details content</Details.Content>
          </Details>
          <Details data-color="sol">
            <Details.Summary>Details header</Details.Summary>
            <Details.Content>Details content</Details.Content>
          </Details>
          <Details>
            <Details.Summary>Details header</Details.Summary>
            <Details.Content>Details content</Details.Content>
          </Details>
          <Details data-color="neutral">
            <Details.Summary>Details header</Details.Summary>
            <Details.Content>Details content</Details.Content>
          </Details>
          <Details>
            <Details.Summary>Details header</Details.Summary>
            <Details.Content>Details content</Details.Content>
          </Details>
        </Card>
      </Box>
    );
  },
};
