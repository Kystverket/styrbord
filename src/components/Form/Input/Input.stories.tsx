import type { Meta, StoryObj } from '@storybook/react';
import { useFormik, FormikProvider } from 'formik';
import { Input } from './Input.tsx';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <FormikProvider value={useFormik({
        initialValues: { inputValue: '' },
        onSubmit: (values) => {},
      })}
      >
        <Story />
      </FormikProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
    name: 'inputValue',
    label: 'Toggle me',
  },
};
