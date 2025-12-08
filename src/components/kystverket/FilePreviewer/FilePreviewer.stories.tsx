import type { Meta, StoryFn } from '@storybook/react';
import { FilePreviewRef, FilePreviewer, FilePreviewerProps } from './FilePreviewer';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';

import { Button } from '~/main';
import { useRef } from 'react';

import atlas from '@assets/img/atlas/atlas 1.jpeg';
import pikekyst from '@assets/documents/Pikekyst Oppskrift.pdf';
import geojson from '@assets/documents/geojson.json';

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

export const withRef: StoryFn = () => {
  const filePreviewRef = useRef<FilePreviewRef>(null);

  const openPreview = () => {
    filePreviewRef.current?.showModal();
  };

  return (
    <>
      <p>Click the button below to open the file preview dialog.</p>
      <Button onClick={openPreview}>Open with Ref</Button>
      <FilePreviewer files={defaultProps.files} ref={filePreviewRef} />
    </>
  );
};

export const withRefAndStartIndex: StoryFn = () => {
  const filePreviewRef = useRef<FilePreviewRef>(null);

  const openPreview = () => {
    filePreviewRef.current?.showModal(1);
  };

  return (
    <>
      <p>Click the button below to open on the 2nd file.</p>
      <Button onClick={openPreview}>Open</Button>
      <FilePreviewer files={defaultProps.files} ref={filePreviewRef} />
    </>
  );
};
