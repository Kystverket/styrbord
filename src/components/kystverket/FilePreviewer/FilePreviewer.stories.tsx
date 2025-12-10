import type { Meta, StoryFn } from '@storybook/react';
import { FilePreviewRef, FilePreviewerProps } from './FilePreviewer-dialog';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';

import { Box, Button } from '~/main';
import { useRef } from 'react';

import atlas from '@assets/img/atlas/atlas 1.jpeg';
import pikekyst from '@assets/documents/Pikekyst Oppskrift.pdf';
import geojson from '@assets/documents/geojson.json';
import { FilePreviewer } from '~/main';

const meta = {
  title: 'Components/FilePreviewer',
  component: FilePreviewer,
  decorators: [StyrbordDecorator],
  tags: ['autodocs', 'experimental'],
  argTypes: {},
} satisfies Meta<typeof FilePreviewer>;

export default meta;

// type Story = StoryObj<typeof meta>;

const defaultProps: FilePreviewerProps = {
  files: [
    {
      contentType: 'image',
      fileName: 'Atlas.png',
      fileSize: '3.7 MB',
      src: atlas,
    },
    {
      contentType: 'pdf',
      fileName: 'Pikekyst Oppskrift.pdf',
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

export const withCustomAlignment: StoryFn = () => {
  return (
    <>
      <FilePreviewer>
        <Box align="start" horizontal gap={8}>
          {defaultProps.files.map((file, idx) => (
            <FilePreviewer.Thumbnail file={file} key={idx} index={idx} />
          ))}
        </Box>
      </FilePreviewer>
    </>
  );
};
export const withContextAndThumbnails: StoryFn = () => {
  return (
    <>
      <FilePreviewer>
        {defaultProps.files?.map((file, idx) => (
          <FilePreviewer.Thumbnail file={file} key={idx} index={idx} />
        ))}
      </FilePreviewer>
    </>
  );
};

export const customWithRef: StoryFn = () => {
  const filePreviewRef = useRef<FilePreviewRef>(null);

  const openPreview = () => {
    filePreviewRef.current?.showModal();
  };

  return (
    <>
      <Box gap={8} width="form-sidebar">
        <p>Click the button below to open the file preview dialog.</p>
        <Button onClick={openPreview}>Open with Ref</Button>
        <FilePreviewer files={defaultProps.files} ref={filePreviewRef} />
      </Box>
    </>
  );
};
