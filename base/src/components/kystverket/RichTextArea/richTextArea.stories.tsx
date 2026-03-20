import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import StyrbordDecorator from '../../../../storybook/styrbordDecorator';
import { RichTextArea, RichTextAreaProps } from './richTextArea';

const meta = {
  title: 'Form/RichTextArea/RichTextArea',
  component: RichTextArea,
  decorators: [StyrbordDecorator],
  tags: ['autodocs', 'kyv', 'beta'],
} satisfies Meta<typeof RichTextArea>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultArgs: RichTextAreaProps = {
  value: '',
  onChange: () => {},
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
export const WithError: Story = {
  args: {
    ...defaultArgs,

    error: 'Du må fylle ut dette feltet.',
  },
  render: renderInteractive,
};
