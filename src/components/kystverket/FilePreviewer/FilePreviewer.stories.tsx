import type { Meta, StoryFn } from '@storybook/react';
import { FilePreviewRef, FilePreviewerDialogProps } from './FilePreviewer-dialog';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';

import { Box, Button } from '~/main';
import { useRef } from 'react';

import atlas from '@assets/img/atlas/atlas 1.jpeg';
import pikekyst from '@assets/documents/Pikekyst Oppskrift.pdf';
import geojson from '@assets/documents/geojson.json';
import { FilePreviewer } from '~/main';

const defaultProps: FilePreviewerDialogProps = {
  animation: 'none',
  files: [
    {
      contentType: 'image',
      fileName: 'Atlas.png',
      fileSize: '3.7 MB',
      src: atlas,
    },
    {
      contentType: 'pdf',
      fileName: 'PikekystOppskrift.pdf',
      fileSize: '240kB',
      src: pikekyst,
    },
    {
      contentType: 'json',
      fileName: 'Kartdata.json',
      fileSize: '1kB',
      data: geojson,
    },
  ],
};

const meta = {
  title: 'Components/FilePreviewer',
  component: FilePreviewer,
  decorators: [StyrbordDecorator],
  tags: ['autodocs', 'experimental'],
  parameters: {
    docs: {
      source: {
        type: 'code',
      },
    },
  },
  args: {
    animation: 'slide',
    files: defaultProps.files,
  },
  argTypes: {
    animation: {
      control: 'radio',
      options: ['slide', 'none'],
      description: 'Animasjonstyper for transition',
      table: {
        type: { summary: "'slide' | 'none'" },
        defaultValue: { summary: 'slide' },
      },
    },
    files: {
      control: 'object',
      description: 'Array av filer som vises',
      table: {
        type: { summary: 'FileInfo[]' },
      },
    },
  },
} satisfies Meta<typeof FilePreviewer>;

export default meta;

export const Default: StoryFn<FilePreviewerDialogProps> = (args) => {
  return (
    <>
      <FilePreviewer animation={args.animation}>
        {args.files.map((file, idx) => (
          <FilePreviewer.Thumbnail file={file} key={idx} index={idx} />
        ))}
      </FilePreviewer>
    </>
  );
};

export const withFlex: StoryFn<FilePreviewerDialogProps> = (args) => {
  return (
    <>
      <FilePreviewer animation={args.animation}>
        <Box align="start" horizontal gap={8}>
          {args.files.map((file, idx) => (
            <FilePreviewer.Thumbnail file={file} key={idx} index={idx} />
          ))}
        </Box>
      </FilePreviewer>
    </>
  );
};

export const openWithRef: StoryFn<FilePreviewerDialogProps> = (args) => {
  const filePreviewRef = useRef<FilePreviewRef>(null);

  const openPreview = () => {
    filePreviewRef.current?.showModal();
  };

  return (
    <>
      <Box gap={8} width="form-sidebar">
        <p>Click the button below to open the file preview dialog.</p>
        <Button onClick={openPreview}>Open with Ref</Button>
        <FilePreviewer animation={args.animation} files={args.files} ref={filePreviewRef} />
      </Box>
    </>
  );
};

export const withNoneAnimation: StoryFn<FilePreviewerDialogProps> = (args) => {
  return (
    <>
      <Box gap={8} width="form-sidebar">
        <FilePreviewer animation={args.animation} files={args.files}>
          <Box align="start" horizontal gap={8}>
            {args.files.map((file, idx) => (
              <FilePreviewer.Thumbnail file={file} key={idx} index={idx} />
            ))}
          </Box>
        </FilePreviewer>
      </Box>
    </>
  );
};

withNoneAnimation.args = {
  animation: 'none',
};
