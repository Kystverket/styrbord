import type { Meta, StoryFn } from '@storybook/react-vite';
import { useState } from 'react';
import { Button } from '~/main';
import { SlotDialog } from '~/components/kystverket/SlotDialog/SlotDialog';

export default {
  title: 'Components/SlotDialog',
  component: SlotDialog,
  tags: ['autodocs', 'ds-override', 'beta'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof SlotDialog>;

export const Default: StoryFn<typeof SlotDialog> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open dialog</Button>
      <SlotDialog
        {...args}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Dialog title"
        buttons={
          <>
            <Button variant="filled" onClick={() => setIsOpen(false)}>
              Accept
            </Button>
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Deny
            </Button>
          </>
        }
      >
        <p>
          Some random filler text that fills the entire width to test that it wraps correctly or that it at least looks
          nice
        </p>
      </SlotDialog>
    </>
  );
};

export const LotsOfContentWithDividers: StoryFn<typeof SlotDialog> = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentParagraphCount = 30;

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open dialog</Button>
      <SlotDialog
        {...args}
        withDividers
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Dialog title"
        subtitle="Subtitle"
        buttons={
          <>
            <Button variant="filled" onClick={() => setIsOpen(false)}>
              Confirm
            </Button>
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
          </>
        }
      >
        <p>
          Some random filler text that fills the entire width to test that it wraps correctly or that it at least looks
          nice
        </p>
        {Array.from({ length: contentParagraphCount }, (_, index) => (
          <p key={index}>Dialog content goes here.</p>
        ))}
      </SlotDialog>
    </>
  );
};
