import type { Meta, StoryObj } from '@storybook/react';
import { FileUploader, FileUploaderProps } from './FileUploader';
import StyrbordDecorator from '../../../../storybook/styrbordDecorator';
import { useState } from 'react';
import { FileInfo } from './FileUploader.types';

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
  tags: ['autodocs', 'beta'],
  argTypes: {},
} satisfies Meta<typeof Wrapper>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps: FileUploaderProps = {
  label: 'Last opp filer',
  buttonLabel: 'Last opp',
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
    },
    {
      fileName: 'file2.txt',
      status: 'uploaded',
      contentType: 'text/plain',
      contextId: '214b3c2e-1f4d-4f3a-9b6c-5d7e8f9a0b1c',
      storageId: '1',
    },
  ],
  maxFiles: 5,
  onChange: (files) => console.log('Files changed:', files),
  allowedFileTypes: ['.pdf', '.jpg', '.jpeg', '.png'],
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

export const WithError: Story = {
  args: { ...defaultProps, error: 'Det oppstod en feil' },
};

export const WithExistingFiles: Story = {
  args: {
    ...defaultProps,
    files: [],
    existingFilesConfig: {
      files: [
        {
          contextId: 'existing-1',
          fileName: 'document1.pdf',
          storageId: 'storage-id-1',
          contentType: 'application/pdf',
          status: 'uploaded',
        },
        {
          contextId: 'existing-2',
          fileName: 'image1.jpg',
          storageId: 'storage-id-2',
          contentType: 'image/jpeg',
          status: 'uploaded',
        },
        {
          contextId: 'existing-3',
          fileName: 'screenshot.png',
          storageId: 'storage-id-3',
          contentType: 'image/png',
          status: 'uploaded',
        },
      ],
      label: 'Velg fra eksisterende filer',
      cancelLabel: 'Avbryt',
      selectLabel: 'Velg',
      onLoadPreview: async (storageIds: string[]) => {
        return storageIds.map((id) => {
          if (id === 'storage-id-2') {
            return {
              uri: '/assets/img/cats/Cat 1.jpg',
              type: 'image/jpeg',
            };
          }
          if (id === 'storage-id-3') {
            return {
              uri: '/assets/img/cats/Cat 2.jpg',
              type: 'image/png',
            };
          }
          return {
            type: 'application/pdf',
          };
        });
      },
    },
  },
};
