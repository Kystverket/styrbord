import type { Meta, StoryFn } from '@storybook/react-vite';
import { useRef, useState } from 'react';
import { Box, Button, Input, Label, Paragraph, SlotDialog } from '~/main';

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
      <SlotDialog {...args} open={isOpen} onClose={() => setIsOpen(false)} title="Dialog title">
        <Paragraph>
          Some random filler text that fills the entire width to test that it wraps correctly or that it at least looks
          nice
        </Paragraph>
        <SlotDialog.Buttons>
          <Button variant="filled" onClick={() => setIsOpen(false)}>
            Confirm
          </Button>
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
        </SlotDialog.Buttons>
      </SlotDialog>
    </>
  );
};

export const WithRef: StoryFn<typeof SlotDialog> = (args) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <Button onClick={() => dialogRef.current?.showModal()}>Open dialog</Button>
      <SlotDialog {...args} ref={dialogRef} title="Dialog title" subtitle="Subtitle">
        <Paragraph>
          Some random filler text that fills the entire width to test that it wraps correctly or that it at least looks
          nice
        </Paragraph>
        <SlotDialog.Buttons>
          <Button variant="filled" onClick={() => dialogRef.current?.close()}>
            Close
          </Button>
        </SlotDialog.Buttons>
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
      >
        <Paragraph>
          Some random filler text that fills the entire width to test that it wraps correctly or that it at least looks
          nice
        </Paragraph>
        {Array.from({ length: contentParagraphCount }, (_, index) => (
          <Paragraph key={index}>Dialog content goes here.</Paragraph>
        ))}
        <Button variant="outline" onClick={() => setIsOpen(false)}>
          Cancel
        </Button>
      </SlotDialog>
    </>
  );
};

export const NoButtons: StoryFn<typeof SlotDialog> = (args) => {
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

export const MultiplePages: StoryFn<typeof SlotDialog> = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  const [page, setPage] = useState(0);
  const totalPages = 4;
  const isLastPage = page === totalPages - 1;

  const closeAndReset = () => {
    setIsOpen(false);
    setPage(0);
  };

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open dialog</Button>
      <SlotDialog
        {...args}
        longContent
        open={isOpen}
        onClose={closeAndReset}
        title="Multi-page dialog"
        subtitle={`Step ${page + 1} of ${totalPages}`}
      >
        <Box gap={16}>
          <Paragraph>This is page {page + 1}.</Paragraph>
          <Paragraph>Use {isLastPage ? '"Submit"' : '"Next"'} to continue.</Paragraph>
          {[0, 2].includes(page) && (
            <>
              <Label>
                Navn
                <Input />
              </Label>
              <Label>
                Input 2
                <Input />
              </Label>
            </>
          )}
        </Box>

        <SlotDialog.Buttons>
          {!isLastPage && (
            <Button variant="filled" onClick={() => setPage((prev) => prev + 1)}>
              Next
            </Button>
          )}
          {isLastPage && (
            <Button variant="filled" onClick={closeAndReset}>
              Submit
            </Button>
          )}
          {page > 0 && (
            <Button variant="outline" onClick={() => setPage((prev) => prev - 1)}>
              Back
            </Button>
          )}
          <Button variant="ghost" onClick={closeAndReset}>
            Cancel
          </Button>
        </SlotDialog.Buttons>
      </SlotDialog>
    </>
  );
};
