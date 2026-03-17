import type { Meta, StoryFn } from '@storybook/react-vite';
import { useRef, useState } from 'react';
import { Button, Paragraph, SlotDialog } from '~/main';

export default {
  title: 'Components/SlotDialog',
  component: SlotDialog,
  tags: ['autodocs', 'ds-override', 'beta'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      source: {
        type: 'code',
      },
    },
  },
} satisfies Meta<typeof SlotDialog>;

export const Default: StoryFn<typeof SlotDialog> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open dialog</Button>
      <SlotDialog
        {...args}
        open={isOpen}
        onClose={() => setIsOpen(false)}
        title="Dialog title"
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
        <Paragraph>
          Some random filler text that fills the entire width to test that it wraps correctly or that it at least looks
          nice
        </Paragraph>
      </SlotDialog>
    </>
  );
};

export const WithRef: StoryFn<typeof SlotDialog> = (args) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <Button onClick={() => dialogRef.current?.showModal()}>Open dialog</Button>
      <SlotDialog
        {...args}
        ref={dialogRef}
        title="Dialog title"
        subtitle="Subtitle"
        buttons={
          <>
            <Button variant="filled" onClick={() => dialogRef.current?.close()}>
              Confirm
            </Button>
            <Button variant="outline" onClick={() => dialogRef.current?.close()}>
              Cancel
            </Button>
          </>
        }
      >
        <Paragraph>
          Some random filler text that fills the entire width to test that it wraps correctly or that it at least looks
          nice
        </Paragraph>
      </SlotDialog>
    </>
  );
};

export const LotsOfContentWithLongContentProp: StoryFn<typeof SlotDialog> = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentParagraphCount = 30;

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open dialog</Button>
      <SlotDialog
        {...args}
        longContent
        open={isOpen}
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
        <Paragraph>
          Some random filler text that fills the entire width to test that it wraps correctly or that it at least looks
          nice
        </Paragraph>
        {Array.from({ length: contentParagraphCount }, (_, index) => (
          <Paragraph key={index}>Dialog content goes here.</Paragraph>
        ))}
      </SlotDialog>
    </>
  );
};
