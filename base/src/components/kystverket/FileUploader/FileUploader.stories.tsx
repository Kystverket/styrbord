import type { Meta, StoryObj } from '@storybook/react-vite';
import { ExistingFilesProviderItem, FileUploader, FileUploaderProps } from './FileUploader';
import { FileUploaderContext } from './FileUploader.context';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';

import { useState } from 'react';
import { FileInfo, UploadFileResult } from './FileUploader.types';
import { v4 as uuidv4 } from 'uuid';

import cat1 from '/assets/img/cats/Cat 1.jpg';
import cat2 from '/assets/img/cats/Cat 2.jpg';

const Wrapper = (props: FileUploaderProps) => {
  const [value, setValue] = useState<FileInfo[]>([...props.files]);

  const onChange = (v: FileInfo[]) => {
    setValue(v);
    props.onChange?.(v);
  };

  return <FileUploader {...props} files={value} onChange={onChange} />;
};

const meta = {
  title: 'Form/FileUploader',
  component: Wrapper,
  decorators: [StyrbordDecorator],
  tags: ['autodocs', 'kyv', 'beta'],
  argTypes: {},
} satisfies Meta<typeof Wrapper>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps: FileUploaderProps = {
  label: 'Last opp filer',
  description: 'Du kan laste opp flere filer samtidig',
  error: null,
  multiple: true,
  files: [
    {
      fileName: 'file1.txt',
      status: 'uploaded',
      contentType: 'text/plain',
      contextId: '214b3c2e-1f4d-4f8a-9b6c-5d7e8f9a0b1c',
      storageId: '1',
      sizeInBytes: 92881,
    },

    {
      fileName: 'file2.txt',
      status: 'uploaded',
      contentType: 'text/plain',
      contextId: '214b3c2e-1f4d-4f3a-9b6c-5d7e8f9a0b1c',
      storageId: '1',
      sizeInBytes: 12122,
    },
    {
      fileName: 'file3.jpeg',
      status: 'uploaded',
      contentType: 'image/jpeg',
      thumbnailUri: cat1,
      contextId: '214b3c2e-1f4d-4f8a-a127-5d7e8f9a0b1c',
      storageId: '1',
      sizeInBytes: 9281231,
    },
  ],
  maxFiles: 5,
  maxSizeInBytes: 10 * 1000 * 1000, // 10MB
  onChange: (files) => console.log('Files changed:', files),
  allowedFileTypes: ['.pdf', '.jpg', '.jpeg', '.png'],
};

const existingFilesProvider = async (): Promise<ExistingFilesProviderItem[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate loading delay
  return [
    {
      title: 'Testfiler',
      label: 'Dette er bare noen testfiler',
      files: [
        {
          contextId: 'existing-1',
          fileName: 'document1.pdf',
          storageId: 'storage-id-1',
          contentType: 'application/pdf',
          status: 'uploaded',
          sizeInBytes: 5818,
        },
        {
          contextId: 'existing-2',
          fileName: 'image1.jpg',
          storageId: 'storage-id-2',
          contentType: 'image/jpeg',
          thumbnailUri: cat1,
          status: 'uploaded',
          sizeInBytes: 17863,
        },
        {
          contextId: 'existing-3',
          fileName: 'screenshot.png',
          storageId: 'storage-id-3',
          contentType: 'image/png',
          thumbnailUri: cat2,
          status: 'uploaded',
          sizeInBytes: 192811,
        },
      ],
    },
    {
      title: 'Flere testfiler',
      label: 'Abrakadabra, this page now has more testfiles',
      files: [
        {
          contextId: 'existing-test2-1',
          fileName: 'document1.pdf',
          storageId: 'storage-id-test2-1',
          contentType: 'application/pdf',
          status: 'uploaded',
          sizeInBytes: 5818,
        },
        {
          contextId: 'existing-test2-2',
          fileName: 'image1.jpg',
          storageId: 'storage-id-test2-2',
          contentType: 'image/jpeg',
          thumbnailUri: cat1,
          status: 'uploaded',
          sizeInBytes: 17863,
        },
        {
          contextId: 'existing-test2-3',
          fileName: 'aCoolDocument.pdf',
          storageId: 'storage-id-test2-3',
          contentType: 'application/pdf',
          status: 'uploaded',
          sizeInBytes: 5818,
        },
        {
          contextId: 'existing-test2-4',
          fileName: 'screenshot.png',
          storageId: 'storage-id-test2-4',
          contentType: 'image/png',
          thumbnailUri: cat2,
          status: 'uploaded',
          sizeInBytes: 192811,
        },
      ],
    },
  ];
};

export const Default: Story = {
  args: defaultProps,
};

export const Optional: Story = {
  args: { ...defaultProps, optional: true },
};
export const OptionalText: Story = {
  args: { ...defaultProps, optional: 'Spesialtilpasset Verdi' },
};
export const Required: Story = {
  args: { ...defaultProps, required: true },
};

export const RequiredText: Story = {
  args: { ...defaultProps, required: 'Påkrevd' },
};

export const Dropzone: Story = {
  args: { ...defaultProps, variant: 'dropzone' },
};

export const DropzoneWithExistingFiles: Story = {
  args: {
    ...defaultProps,
    variant: 'dropzone',
    existingFilesProvider: existingFilesProvider,
  },
};

export const WithError: Story = {
  args: { ...defaultProps, error: 'Det oppstod en feil' },
};

export const WithCaptureButton: Story = {
  args: {
    ...defaultProps,
    description: 'Capture button vises kun på mobilenheter',
    withCaptureButton: true,
    files: [],
  },
};

export const WithExistingFiles: Story = {
  args: {
    ...defaultProps,
    files: [],
    existingFilesProvider: existingFilesProvider,
  },
};

const uploadFileWithSizeLimit = async (file: FormData): Promise<UploadFileResult> => {
  return new Promise<UploadFileResult>((resolve) => {
    const fileEntry = file.get('file') as File;
    const maxSize = 10 * 1024 * 1024; // 10MB

    // Simulate loading delay
    setTimeout(() => {
      if (fileEntry && fileEntry.size > maxSize) {
        resolve({
          storageId: '',
          success: false,
          error: 'file-too-large',
        });
      } else {
        resolve({
          storageId: uuidv4(),
          success: true,
        });
      }
    }, 1500);
  });
};

const deleteFile = async (): Promise<void> => {
  return new Promise((resolve) => {
    // Simulate loading delay
    setTimeout(() => {
      resolve();
    }, 1000);
  });
};

export const withFileSizeLimit: Story = {
  decorators: [
    (Story) => (
      <FileUploaderContext.Provider
        value={{
          uploadFile: uploadFileWithSizeLimit,
          deleteFile: deleteFile,
        }}
      >
        <Story />
      </FileUploaderContext.Provider>
    ),
  ],
  args: {
    ...defaultProps,
    description: 'Filer som er større enn 10MB vil bli avvist',
    files: [],
  },
};

export const withAllowedFileTypes: Story = {
  args: {
    ...defaultProps,
    allowedFileTypes: ['.exe', '.bat', '.zip', 'image/*'],
    description: 'Aksepterer kun filer med utvidelsene .exe, .bat, .zip og bildefiler',
    files: [],
  },
};

const uploadFileWithFileScan = async (): Promise<UploadFileResult> => {
  return new Promise<UploadFileResult>((resolve) => {
    // Simulate loading delay
    setTimeout(() => {
      resolve({
        storageId: '',
        success: false,
        error: 'file-scan-failed',
      });
    }, 1500);
  });
};

export const withFileScanFailed: Story = {
  decorators: [
    (Story) => (
      <FileUploaderContext.Provider
        value={{
          uploadFile: uploadFileWithFileScan,
          deleteFile: deleteFile,
        }}
      >
        <Story />
      </FileUploaderContext.Provider>
    ),
  ],
  args: {
    ...defaultProps,
    description: 'Opplastning av fil vil gi feil ved scanning av filen',
    files: [],
  },
};
