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

export const WithError: Story = {
  args: { ...defaultProps, error: 'Det oppstod en feil' },
};
