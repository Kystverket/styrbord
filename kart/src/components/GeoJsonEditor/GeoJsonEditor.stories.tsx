import { useState } from 'react';
import type { Meta, StoryObj, StoryFn } from '@storybook/react-vite';
import type { FeatureCollection } from 'geojson';
import StyrbordDecorator from '../../../storybook/styrbordDecorator';
import { GeoJsonEditor } from './GeoJsonEditor';
import { ViewBoundsProvider } from '~/utility/viewBoundsContext';
import { BaseLayersProvider } from '~/utility/baseLayersContext';
import { BuiltInLayersProvider } from '~/utility/builtInLayersContext';
import { CustomLayersProvider } from '~/utility/customLayersContext';

const meta = {
  title: 'Kart/GeoJsonEditor',
  component: GeoJsonEditor,
  decorators: [StyrbordDecorator],
  tags: ['autodocs', 'kyv'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof GeoJsonEditor>;

export default meta;
type Story = StoryObj<typeof meta>;

// ---- Default: empty editor with all modes ----
export const Default: Story = {};

// ---- Pre-loaded FeatureCollection for editing ----
const sampleData: FeatureCollection = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: { name: 'Ålesund havn' },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [6.151401, 62.469249],
            [6.151305, 62.468719],
            [6.152655, 62.468677],
            [6.152711, 62.469208],
            [6.151401, 62.469249],
          ],
        ],
      },
    },
    {
      type: 'Feature',
      properties: { name: 'Trondheim' },
      geometry: { type: 'Point', coordinates: [10.3951, 63.4305] },
    },
    {
      type: 'Feature',
      properties: { name: 'Kystlinje' },
      geometry: {
        type: 'LineString',
        coordinates: [
          [5.3221, 60.3913],
          [6.151, 62.469],
          [10.395, 63.43],
        ],
      },
    },
  ],
};

export const WithInitialData: Story = {
  args: {
    value: sampleData,
  },
};

// ---- Points only ----
export const PointsOnly: Story = {
  args: {
    modes: ['point'],
  },
};

// ---- Lines only ----
export const LinesOnly: Story = {
  args: {
    modes: ['linestring'],
  },
};

// ---- Polygons only ----
export const PolygonsOnly: Story = {
  args: {
    modes: ['polygon'],
  },
};

// ---- Disabled ----
export const Disabled: Story = {
  args: {
    value: sampleData,
    disabled: true,
  },
};

// ---- Tall map ----
export const TallMap: Story = {
  args: {
    height: '1200px',
  },
};

// ---- Controlled: show onChange output ----
const ControlledTemplate: StoryFn<typeof GeoJsonEditor> = () => {
  const [data, setData] = useState<FeatureCollection>({
    type: 'FeatureCollection',
    features: [],
  });

  return (
    <div>
      <GeoJsonEditor showCenterAction value={data} onChange={setData} />
      <pre
        style={{
          marginTop: 16,
          padding: 12,
          background: '#f5f5f5',
          borderRadius: 8,
          fontSize: '0.8rem',
          maxHeight: 300,
          overflow: 'auto',
        }}
      >
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
};

export const Controlled: Story = {
  render: ControlledTemplate,
};

// ---- With layer toggle ----
export const WithLayerToggle: Story = {
  render: () => (
    <ViewBoundsProvider>
      <BaseLayersProvider>
        <BuiltInLayersProvider>
          <CustomLayersProvider>
            <GeoJsonEditor showCenterAction value={sampleData} showLayerToggle />
          </CustomLayersProvider>
        </BuiltInLayersProvider>
      </BaseLayersProvider>
    </ViewBoundsProvider>
  ),
};

// ---- Interactive data with types for hover content ----
const interactiveData: FeatureCollection = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      id: 'harbor-1',
      properties: {
        type: 'harbor',
        name: 'Ålesund Havn',
        capacity: 500,
      },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [6.151401, 62.469249],
            [6.151305, 62.468719],
            [6.152655, 62.468677],
            [6.152711, 62.469208],
            [6.151401, 62.469249],
          ],
        ],
      },
    },
    {
      type: 'Feature',
      id: 'lighthouse-1',
      properties: {
        type: 'lighthouse',
        name: 'Kråkenes Fyr',
        height: 35,
      },
      geometry: { type: 'Point', coordinates: [5.002, 62.032] },
    },
    {
      type: 'Feature',
      id: 'shipping-lane-1',
      properties: {
        type: 'shipping_lane',
        name: 'Hovedled Sør-Nord',
        traffic: 'høy',
      },
      geometry: {
        type: 'LineString',
        coordinates: [
          [5.3221, 60.3913],
          [6.151, 62.469],
          [10.395, 63.43],
        ],
      },
    },
  ],
};

// ---- Interactive: with hover and selection callbacks ----
const InteractiveTemplate: StoryFn<typeof GeoJsonEditor> = () => {
  const [hoveredName, setHoveredName] = useState<string>('None');
  const [selectedNames, setSelectedNames] = useState<string[]>([]);

  return (
    <div>
      <GeoJsonEditor
        showCenterAction
        value={interactiveData}
        onHover={(feature) => {
          setHoveredName(feature?.properties?.name ?? 'None');
        }}
        onSelect={(features) => {
          setSelectedNames(features?.map((f) => f.properties?.name ?? 'unnamed') ?? []);
        }}
        hoverContent={{
          harbor: (f) => (
            <div>
              <strong>🚢 {f.properties?.name}</strong>
              <div>Kapasitet: {f.properties?.capacity} båter</div>
            </div>
          ),
          lighthouse: (f) => (
            <div>
              <strong>💡 {f.properties?.name}</strong>
              <div>Høyde: {f.properties?.height}m</div>
            </div>
          ),
          shipping_lane: (f) => (
            <div>
              <strong>🛳️ {f.properties?.name}</strong>
              <div>Trafikk: {f.properties?.traffic}</div>
            </div>
          ),
        }}
      />
      <div
        style={{
          marginTop: 16,
          padding: 12,
          background: '#f5f5f5',
          borderRadius: 8,
        }}
      >
        <div>
          <strong>Hovered:</strong> {hoveredName}
        </div>
        <div>
          <strong>Selected:</strong> {selectedNames.length > 0 ? selectedNames.join(', ') : 'None'}
        </div>
        <p style={{ marginTop: 8, fontSize: '0.85rem', color: '#666' }}>
          Hover over features to see custom tooltips. Click features in "select" mode to see selection events.
        </p>
      </div>
    </div>
  );
};

export const Interactive: Story = {
  render: InteractiveTemplate,
};

// ---- Hover Only: no selection callbacks ----
export const HoverOnly: Story = {
  args: {
    value: interactiveData,
    hoverable: true,
    hoverContent: {
      harbor: (f) => (
        <div>
          <strong>Havn: {f.properties?.name}</strong>
        </div>
      ),
      lighthouse: (f) => (
        <div>
          <strong>Fyr: {f.properties?.name}</strong>
        </div>
      ),
      shipping_lane: (f) => (
        <div>
          <strong>Farled: {f.properties?.name}</strong>
        </div>
      ),
    },
  },
};

// ---- Non-interactive: hover disabled ----
export const NonInteractive: Story = {
  args: {
    value: interactiveData,
    hoverable: false,
  },
};

// ---- Directional points only ----
export const DirectionalPointsOnly: Story = {
  args: {
    modes: ['directional-point'],
  },
};

// ---- All modes including directional points ----
export const AllModesWithDirectional: Story = {
  args: {
    modes: ['point', 'directional-point', 'linestring', 'polygon'],
  },
};

// ---- Directional points with initial data ----
const directionalSampleData: FeatureCollection = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {
        id: 'dir-1',
        direction: 45,
        mode: 'directional-point',
        name: 'Nordøst-retning',
      },
      geometry: { type: 'Point', coordinates: [10.3951, 63.4305] },
    },
    {
      type: 'Feature',
      properties: {
        id: 'dir-2',
        direction: 180,
        mode: 'directional-point',
        name: 'Sør-retning',
      },
      geometry: { type: 'Point', coordinates: [5.3221, 60.3913] },
    },
    {
      type: 'Feature',
      properties: { name: 'Vanlig punkt' },
      geometry: { type: 'Point', coordinates: [6.151, 62.469] },
    },
  ],
};

// ---- Controlled with directional points ----
const DirectionalControlledTemplate: StoryFn<typeof GeoJsonEditor> = () => {
  const [data, setData] = useState<FeatureCollection>(directionalSampleData);

  return (
    <div>
      <GeoJsonEditor
        showCenterAction
        value={data}
        onChange={setData}
        modes={['point', 'directional-point', 'linestring', 'polygon']}
        fitBounds
      />
      <pre
        style={{
          marginTop: 16,
          padding: 12,
          background: '#f5f5f5',
          borderRadius: 8,
          fontSize: '0.8rem',
          maxHeight: 300,
          overflow: 'auto',
        }}
      >
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
};

export const DirectionalControlled: Story = {
  render: DirectionalControlledTemplate,
};
