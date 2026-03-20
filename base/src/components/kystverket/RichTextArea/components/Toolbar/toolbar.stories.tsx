import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import StyrbordDecorator from '../../../../../../storybook/styrbordDecorator';
import { Toolbar, type BlockType } from './toolbar';

const meta = {
  title: 'Form/RichTextArea/Toolbar',
  component: Toolbar,
  decorators: [StyrbordDecorator],
  tags: ['autodocs', 'kyv', 'beta'],
  argTypes: {
    onBold: { action: 'onBold' },
    onItalic: { action: 'onItalic' },
    onBulletList: { action: 'onBulletList' },
    onOrderedList: { action: 'onOrderedList' },
    onUndo: { action: 'onUndo' },
    onRedo: { action: 'onRedo' },
    onFormatChange: { action: 'onFormatChange' },
    onLink: { action: 'onLink' },
  },
} satisfies Meta<typeof Toolbar>;

export default meta;

type Story = StoryObj<typeof meta>;

const renderInteractive: Story['render'] = (args) => {
  const [isBoldActive, setIsBoldActive] = useState(args.isBoldActive);
  const [isItalicActive, setIsItalicActive] = useState(args.isItalicActive);
  const [isBulletListActive, setIsBulletListActive] = useState(args.isBulletListActive);
  const [isOrderedListActive, setIsOrderedListActive] = useState(args.isOrderedListActive);
  const [isLinkActive, setIsLinkActive] = useState(args.isLinkActive);
  const [selectedFormat, setSelectedFormat] = useState<BlockType>(args.selectedFormat);

  return (
    <div style={{ padding: '1rem' }}>
      <Toolbar
        {...args}
        isBoldActive={isBoldActive}
        isItalicActive={isItalicActive}
        isBulletListActive={isBulletListActive}
        isOrderedListActive={isOrderedListActive}
        isLinkActive={isLinkActive}
        selectedFormat={selectedFormat}
        onBold={() => {
          setIsBoldActive((prev) => !prev);
          args.onBold();
        }}
        onItalic={() => {
          setIsItalicActive((prev) => !prev);
          args.onItalic();
        }}
        onBulletList={() => {
          setIsBulletListActive((prev) => !prev);
          args.onBulletList();
        }}
        onOrderedList={() => {
          setIsOrderedListActive((prev) => !prev);
          args.onOrderedList();
        }}
        onLink={() => {
          setIsLinkActive((prev) => !prev);
          args.onLink();
        }}
        onFormatChange={(format) => {
          setSelectedFormat(format);
          args.onFormatChange(format);
        }}
        onUndo={() => args.onUndo()}
        onRedo={() => args.onRedo()}
      />
    </div>
  );
};

export const Default: Story = {
  args: {
    disabled: false,
    isBoldActive: false,
    isItalicActive: false,
    isBulletListActive: false,
    isOrderedListActive: false,
    isLinkActive: false,
    selectedFormat: 'paragraph',
    onBold: () => {},
    onItalic: () => {},
    onBulletList: () => {},
    onOrderedList: () => {},
    onUndo: () => {},
    onRedo: () => {},
    onFormatChange: () => {},
    onLink: () => {},
  },
  render: renderInteractive,
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
  render: renderInteractive,
};
