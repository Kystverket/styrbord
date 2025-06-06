import type { Meta, StoryObj } from '@storybook/react';
import { Summary } from './summary';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';
import { SummaryProps } from './summary.types';

const meta = {
  title: 'Komponenter/Summary',
  component: Summary,
  decorators: [StyrbordDecorator],
  tags: ['autodocs', 'kyv'],
  argTypes: {},
} satisfies Meta<typeof Summary>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps: SummaryProps = {
  rows: [
    {
      title: 'Oppsummeringstittel',
      editButton: { label: 'Rediger', ariaLabel: 'Rediger oppsummeringstittel', onClick: () => {} },
    },
    { title: 'Tittel' },
    { label: 'Label', value: 'Verdi' },
    { label: 'Label', content: 'Innhold' },
    { title: 'Tittel 1' },
    { label: 'Label', value: 'Verdi' },
    { label: 'Label', content: 'Innhold' },
    { title: 'Tittel 2' },
    { label: 'Label', value: 'Verdi' },
    { label: 'Label', content: 'Innhold' },
    { title: 'Tittel 3' },
    { label: 'Label', value: 'Verdi' },
    { label: 'Label', content: 'Innhold' },
    {
      title: 'Oppsummeringstittel 2',
      editButton: { label: 'Rediger', ariaLabel: 'Rediger oppsummeringstittel 2', onClick: () => {} },
    },
    { title: 'Tittel' },
    { label: 'Label', value: 'Verdi' },
    { label: 'Label', content: 'Innhold' },
  ],
};

export const Default: Story = {
  args: defaultProps,
};
