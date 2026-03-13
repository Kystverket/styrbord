
import { Heading, Select } from '@kystverket/styrbord';
import { Meta, StoryObj } from '@storybook/react';
import { Feature } from 'ol';
import GeoJSON from 'ol/format/GeoJSON';
import { Geometry } from 'ol/geom';
import { useState } from 'react';
import StyrbordDecorator from '../storybook/styrbordDecorator';
import { Map, MapProps } from './Map';
import { SelectLayer } from './layers/SelectLayer';
import sampleGeoJson from './assets/samplegeojson.json';

const meta = {
  title: 'Components/Map',
  component: Map,
  decorators: [StyrbordDecorator],
  tags: ['autodocs', 'beta'],
  argTypes: {},
} satisfies Meta<typeof Map>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps: MapProps = {
  area: 'norway',
  layers: [
    'norkart',
    'kartverket-grunnkart',
    'kartverket-grunnkart-graatone',
    'kartverket-sjokart',
    'osm',
    'tetthetsplott-250',
    'tetthetsplott-50',
  ],
  themes: ['isps', 'speed-commercial', 'speed-recreational', 'aquaculture'],
};

export const Default: Story = {
  args: defaultProps,
};

// STORY: Interactive select
export const WithMapSelection: Story = {
  args: {
    ...defaultProps,
    showSelectionControls: true,
    area: 'norway',
  },
  render: function Render(args) {
    const [selectedFeatures, setSelectedFeatures] = useState<Feature<Geometry>[]>([]);

    return (
      <div style={{ display: 'flex', gap: '20px' }}>
        <Map {...args}>
          <SelectLayer
            data={sampleGeoJson}
            dataTitle="Eksempeldata"
            labelTitle="name"
            enableLabel={args.showLabels}
            enableSelect={args.showSelectionControls}
            declutter={args.declutterMap}
            onSelectionChange={setSelectedFeatures}
          />
        </Map>
      </div>
    );
  },
  parameters: {
    docs: {
      source: {
        code: `
function MyComponent() {
  const [selectedFeatures, setSelectedFeatures] = useState<Feature<Geometry>[]>([]);

  return (
    <Map area="norway" showSelectionControls>
      <SelectionLayer
        data={geoJsonData}
        dataTitle="Eksempeldata"
        labelTitle="name"
        enableLabel
        enableSelect
        onSelectionChange={setSelectedFeatures}
      />
    </Map>
  );
}
        `,
        language: 'tsx',
      },
    },
  },
};

export const WithOutsideSelection: Story = {
  args: { ...defaultProps, showSelectionControls: true },
  render: function Render(args) {
    const [selectedFeatures, setSelectedFeatures] = useState<Feature<Geometry>[]>([]);

    return (
      <div style={{ display: 'flex', gap: '20px' }}>
        <Map {...args}>
          <SelectLayer
            data={sampleGeoJson}
            dataTitle="Eksempeldata"
            labelTitle="name"
            enableLabel={args.showLabels}
            enableSelect={args.showSelectionControls}
            declutter={args.declutterMap}
            featureKey="id"
            selectedFeatures={selectedFeatures}
            onSelectionChange={setSelectedFeatures}
          />
        </Map>

        <div
          style={{
            padding: '16px',
            background: '#f5f5f5',
            borderRadius: '4px',
            width: '30%',
            height: '100%',
            overflow: 'auto',
          }}
        >
          <Heading>Velg en feature</Heading>
          <Select
            placeholder="Velg en feature"
            onChange={(value) => {
              const selectedFeature = sampleGeoJson.features.find((f) => f.properties.id === Number(value));
              if (selectedFeature) {
                const geoJsonFormat = new GeoJSON();
                const feature = geoJsonFormat.readFeature(selectedFeature) as Feature<Geometry>;
                setSelectedFeatures([feature]);
              }
            }}
            options={sampleGeoJson.features.map((f) => ({
              label: f.properties.name,
              value: String(f.properties.id),
            }))}
          />
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      source: {
        code: `
function MyComponent() {
  const [selectedFeatures, setSelectedFeatures] = useState<Feature<Geometry>[]>([]);

  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <Map area="norway" showSelectionControls>
        <SelectionLayer
          data={geoJsonData}
          dataTitle="Eksempeldata"
          labelTitle="name"
          enableLabel
          enableSelect
          featureKey="id"
          selectedFeatures={selectedFeatures}
          onSelectionChange={setSelectedFeatures}
        />
      </Map>
      
      <Select
        placeholder="Velg en feature"
        onChange={(value) => {
          const selectedFeature = geoJsonData.features.find(f => f.properties.id === Number(value));
          if (selectedFeature) {
            const geoJsonFormat = new GeoJSON();
            const feature = geoJsonFormat.readFeature(selectedFeature) as Feature<Geometry>;
            setSelectedFeatures([feature]);
          }
        }}
        options={geoJsonData.features.map(f => ({
          label: f.properties.name,
          value: String(f.properties.id),
        }))}
      />
    </div>
  );
}
        `,
      },
    },
  },
};

export const WithDrawControls: Story = {
  args: { 
    ...defaultProps, 
    showDrawControls: true, 
    drawTypes: ["Point", "LineString", "Polygon"],
    drawLimit: 5,
    showExportControls: true,
  },
  render: function Render(args) {
    const [drawnFeatures, setDrawnFeatures] = useState<Feature<Geometry>[]>([]);
    const [selectedFeatures, setSelectedFeatures] = useState<Feature<Geometry>[]>([]);

    return (
      <div style={{ display: 'flex', gap: '20px' }}>
        <Map 
          {...args} 
          onDrawnFeaturesChange={setDrawnFeatures}
          onDrawnFeaturesSelect={setSelectedFeatures}
          drawLimit={args.drawLimit}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      source: {
        code: `
function MyComponent() {
  const [drawnFeatures, setDrawnFeatures] = useState<Feature<Geometry>[]>([]);
  const [selectedFeatures, setSelectedFeatures] = useState<Feature<Geometry>[]>([]);

  return (
    <Map 
      area="norway"
      showDrawControls
      showExportControls
      drawTypes={["Point", "LineString", "Polygon"]}
      drawLimit={5}
      onDrawnFeaturesChange={setDrawnFeatures}
      onDrawnFeaturesSelect={setSelectedFeatures}
    />
  );
}
        `,
        language: 'tsx',
      },
    },
  },
};