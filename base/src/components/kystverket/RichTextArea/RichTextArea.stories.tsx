import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { RichTextArea, type RichTextAreaProps } from './RichTextArea';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';

const meta = {
  title: 'Form/RichTextArea',
  component: RichTextArea,
  decorators: [StyrbordDecorator],
  tags: ['autodocs', 'kyv'],
} satisfies Meta<typeof RichTextArea>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultArgs: RichTextAreaProps = {
  value: '',
  onChange: (markdown) => console.log(markdown),
  label: 'Rikt tekstfelt',
  description: 'Dette er et tekstfelt som støtter rik tekstformatering.',
  optional: 'Valgfritt',
};

const renderInteractive: Story['render'] = (args) => {
  const [value, setValue] = useState(args.value ?? '');

  return (
    <RichTextArea
      {...args}
      value={value}
      onChange={(nextMarkdown) => {
        setValue(nextMarkdown);
        args.onChange(nextMarkdown);
      }}
    />
  );
};

export const Default: Story = {
  args: defaultArgs,
  render: renderInteractive,
};

export const Disabled: Story = {
  args: {
    ...defaultArgs,
    disabled: true,
    value: 'Skrivebeskyttet innhold',
  },
  render: renderInteractive,
};

export const ReadOnly: Story = {
  args: {
    ...defaultArgs,
    readOnly: true,
    value: 'Denne editoren er skrivebeskyttet og skjuler verktøylinja.',
  },
  render: renderInteractive,
};
