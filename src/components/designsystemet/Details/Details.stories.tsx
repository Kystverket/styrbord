import type { Meta, StoryObj } from '@storybook/react';

import StyrbordDecorator from '../../../../storybook/styrbordDecorator';
import { Card, Details, DetailsProps } from '@digdir/designsystemet-react';

const meta = {
  title: 'Components/Details',
  component: Details,
  decorators: [StyrbordDecorator],
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: '[Dokumentasjon fra Designsystemet](https://designsystemet.no/no/components/docs/accordion/overview)',
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
