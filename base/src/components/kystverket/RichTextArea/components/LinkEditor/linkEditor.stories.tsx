import { Button } from '@digdir/designsystemet-react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import StyrbordDecorator from '../../../../../../storybook/styrbordDecorator';
import LinkEditor from './linkEditor';

const meta = {
  title: 'Form/RichTextArea/LinkEditor',
  component: LinkEditor,
  decorators: [StyrbordDecorator],
  tags: ['autodocs', 'kyv'],
  argTypes: {
    onSave: { action: 'onSave' },
    onClose: { action: 'onClose' },
    onRemove: { action: 'onRemove' },
    hasSelection: { control: 'boolean' },
  },
} satisfies Meta<typeof LinkEditor>;

export default meta;

type Story = StoryObj<typeof meta>;

const renderInteractive: Story['render'] = (args) => {
  const [open, setOpen] = useState(true);
  const [href, setHref] = useState(args.href ?? 'https://www.kystverket.no');

  return (
    <div style={{ padding: '2rem', display: 'grid', gap: '0.75rem', maxWidth: '28rem' }}>
      <div>
        <Button
          variant="secondary"
          popovertarget={args.anchorId}
          onClick={() => {
            setOpen((prev) => !prev);
          }}
        >
          Toggle link editor
        </Button>
      </div>

      <LinkEditor
        {...args}
        href={href}
        open={open}
        hasSelection={args.hasSelection}
        onClose={() => {
          setOpen(false);
          args.onClose();
        }}
        onSave={(nextHref) => {
          setHref(nextHref);
          args.onSave(nextHref);
          setOpen(false);
        }}
        onRemove={() => {
          setHref('');
          args.onRemove();
          setOpen(false);
        }}
      />
    </div>
  );
};

export const Default: Story = {
  args: {
    open: true,
    anchorId: 'link-editor-story-popover',
    href: 'https://www.kystverket.no',
    hasSelection: true,
    onSave: () => {},
    onClose: () => {},
    onRemove: () => {},
  },
  render: renderInteractive,
};
