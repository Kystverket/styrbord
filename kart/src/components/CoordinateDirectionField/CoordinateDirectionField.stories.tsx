import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import StyrbordDecorator from '../../../storybook/styrbordDecorator';
import { CoordinateDirectionField } from './CoordinateDirectionField';
import type { CoordinateDirectionGeoJSON, CoordinateDirectionFieldProps } from './CoordinateDirectionField.types';

const meta = {
  title: 'Kart/CoordinateDirectionField',
  component: CoordinateDirectionField,
  decorators: [StyrbordDecorator],
  tags: ['autodocs', 'kyv'],
  parameters: {
    layout: 'padded',
    docs: {
      story: {
        inline: false,
        iframeHeight: '600px',
      },
    },
  },
} satisfies Meta<typeof CoordinateDirectionField>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Wrapper that provides controlled state for stories. */
const Controlled = (props: Partial<CoordinateDirectionFieldProps> & { initialValue?: CoordinateDirectionGeoJSON }) => {
  const { initialValue, ...rest } = props;
  const [value, setValue] = useState<CoordinateDirectionGeoJSON | undefined>(initialValue);
  return <CoordinateDirectionField value={value} onChange={setValue} {...rest} />;
};

const noop = () => {};

// ---- Default (empty) ----
export const Default: Story = {
  args: { value: undefined, onChange: noop },
  render: () => <Controlled label="Plassering og retning" />,
};

// ---- Controlled with initial value ----
const ControlledTemplate = () => {
  const [value, setValue] = useState<CoordinateDirectionGeoJSON>({
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [10.3951, 63.4305],
    },
    properties: {
      direction: 45,
    },
  });

  return (
    <div style={{ maxWidth: 700 }}>
      <CoordinateDirectionField label="Skiltplassering" value={value} onChange={setValue} />
      <pre
        style={{
          marginTop: 16,
          fontSize: 12,
          background: '#f5f5f5',
          padding: 12,
          borderRadius: 4,
        }}
      >
        {JSON.stringify(value, null, 2)}
      </pre>
    </div>
  );
};

export const WithInitialValue: Story = {
  args: { value: undefined, onChange: noop },
  render: () => <ControlledTemplate />,
};

// ---- With error ----
export const WithError: Story = {
  args: { value: undefined, onChange: noop },
  render: () => <Controlled label="Plassering og retning" error="Koordinat er påkrevd" />,
};

// ---- Disabled ----
export const Disabled: Story = {
  args: { value: undefined, onChange: noop },
  render: () => (
    <Controlled
      label="Plassering og retning"
      initialValue={{
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [10.3951, 63.4305],
        },
        properties: {
          direction: 45,
        },
      }}
      disabled
    />
  ),
};
