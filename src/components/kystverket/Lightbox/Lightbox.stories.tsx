import type { Meta, StoryFn } from '@storybook/react';
import { FilePreview, FilePreviewProps } from './Lightbox';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';

import { Button } from '~/main';
import { useRef } from 'react';

import atlas from '@assets/img/atlas/atlas 1.jpeg';
import pikekyst from '@assets/documents/Pikekyst Oppskrift.pdf';
import geojson from '@assets/documents/geojson.json';

const meta = {
  title: 'Components/Lightbox',
  component: FilePreview,
  decorators: [StyrbordDecorator],
  tags: ['autodocs', 'experimental'],
  argTypes: {},
} satisfies Meta<typeof FilePreview>;

export default meta;

// type Story = StoryObj<typeof meta>;

const defaultProps: FilePreviewProps = {
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
      data: geojson,
      fileName: 'Kartdata.json',
      fileSize: '20KB',
    },
  ],
};

export const Default: StoryFn = () => {
  const filePreviewRef = useRef<HTMLDialogElement | null>(null);

  const openPreview = () => filePreviewRef?.current?.showModal();

  return (
    <>
      <Button onClick={openPreview}>Open Preview</Button>
      <FilePreview ref={filePreviewRef} popovertarget="filePreviewOpen" {...defaultProps} />
    </>
  );
};
