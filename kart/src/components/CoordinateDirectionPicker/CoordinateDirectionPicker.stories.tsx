import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import StyrbordDecorator from '../../../storybook/styrbordDecorator';
import { CoordinateDirectionPicker } from './CoordinateDirectionPicker';
import type { CoordinateDirectionValue } from './CoordinateDirectionPicker.types';

const meta = {
  title: 'Kart/CoordinateDirectionPicker',
  component: CoordinateDirectionPicker,
  decorators: [StyrbordDecorator],
  tags: ['autodocs', 'kyv'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof CoordinateDirectionPicker>;

export default meta;
type Story = StoryObj<typeof meta>;

// ---- Default (empty) ----
export const Default: Story = {
  args: {
    label: 'Plassering og retning',
  },
};

// ---- Controlled with initial value ----
const ControlledTemplate = () => {
  const [value, setValue] = useState<CoordinateDirectionValue>({
    coordinate: { latitude: 63.4305, longitude: 10.3951 },
    direction: 45,
  });

  return (
    <div style={{ maxWidth: 700 }}>
      <CoordinateDirectionPicker label="Skiltplassering" value={value} onChange={setValue} />
      <pre style={{ marginTop: 16, fontSize: 12, background: '#f5f5f5', padding: 12, borderRadius: 4 }}>
        {JSON.stringify(value, null, 2)}
      </pre>
    </div>
  );
};

export const WithInitialValue: Story = {
  render: () => <ControlledTemplate />,
};

// ---- With error ----
export const WithError: Story = {
  args: {
    label: 'Plassering og retning',
    error: 'Koordinat er påkrevd',
  },
};

// ---- Disabled ----
export const Disabled: Story = {
  args: {
    label: 'Plassering og retning',
    value: {
      coordinate: { latitude: 59.9139, longitude: 10.7522 },
      direction: 180,
    },
    disabled: true,
  },
};
