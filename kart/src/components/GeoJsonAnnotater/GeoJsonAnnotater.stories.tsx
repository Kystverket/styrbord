import type { Meta, StoryObj } from '@storybook/react-vite';
import { FeatureCollection, GeoJsonProperties, Geometry } from 'geojson';
import { useState } from 'react';
import StyrbordDecorator from 'storybook/styrbordDecorator';
import { GeoJsonEditor, GeoJsonEditorProps } from '~/main';

type FC = FeatureCollection<Geometry, GeoJsonProperties>;

const Wrapper = (props: GeoJsonEditorProps) => {
  const [data, setData] = useState<FC | undefined>(JSON.parse(JSON.stringify(props.value)) as FC | undefined);

  const onChange = (d: FC) => {
    setData(d);
    props.onChange?.(d);
  };

  return <GeoJsonEditor value={data} onChange={onChange} />;
};

const meta = {
  title: 'Maps/GeographicSelector',
  component: Wrapper,
  decorators: [StyrbordDecorator],
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Wrapper>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onChange: (d: FC | undefined) => {
      console.log('onChange', d);
    },
  },
};
