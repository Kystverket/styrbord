import type { Meta, StoryObj } from '@storybook/react-vite';
import type { FeatureCollection, Feature } from 'geojson';
import StyrbordDecorator from '../../../storybook/styrbordDecorator';
import { GeoJsonViewer } from './GeoJsonViewer';
import sampleGeoJson from '../../../assets/documents/geojson.json';
import { ViewBoundsProvider } from '~/utility/viewBoundsContext';
import { BaseLayersProvider } from '~/utility/baseLayersContext';
import { BuiltInLayersProvider } from '~/utility/builtInLayersContext';
import { CustomLayersProvider } from '~/utility/customLayersContext';

const meta = {
  title: 'Kart/GeoJsonViewer',
  component: GeoJsonViewer,
  decorators: [StyrbordDecorator],
  tags: ['autodocs', 'kyv'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof GeoJsonViewer>;

export default meta;
type Story = StoryObj<typeof meta>;

// ---- Default: sample data with polygon + line ----
export const Default: Story = {
  args: {
    data: sampleGeoJson as FeatureCollection,
  },
};

// ---- Single polygon feature ----
const singlePolygon: Feature = {
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
};

export const SinglePolygon: Story = {
  args: {
    data: singlePolygon,
  },
};

// ---- Points ----
const pointCollection: FeatureCollection = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: { name: 'Trondheim' },
      geometry: { type: 'Point', coordinates: [10.3951, 63.4305] },
    },
    {
      type: 'Feature',
      properties: { name: 'Bergen' },
      geometry: { type: 'Point', coordinates: [5.3221, 60.3913] },
    },
    {
      type: 'Feature',
      properties: { name: 'Tromsø' },
      geometry: { type: 'Point', coordinates: [18.9553, 69.6496] },
    },
  ],
};

export const Points: Story = {
  args: {
    data: pointCollection,
  },
};

// ---- Custom styling ----
export const CustomStyle: Story = {
  args: {
    data: sampleGeoJson as FeatureCollection,
    geoJsonStyle: {
      fillColor: 'rgba(223, 60, 27, 0.25)',
      lineColor: '#df3c1b',
      lineWidth: 3,
    },
  },
};

// ---- Custom height ----
export const TallMap: Story = {
  args: {
    data: sampleGeoJson as FeatureCollection,
    height: '1600px',
  },
};

// ---- Complex multi-type GeoJSON ----
// Showcases every geometry type: Point, MultiPoint, LineString,
// MultiLineString, Polygon, MultiPolygon, and GeometryCollection —
// all in a single FeatureCollection around the Norwegian coast.
const complexMultiType: FeatureCollection = {
  type: 'FeatureCollection',
  features: [
    // --- Point ---
    {
      type: 'Feature',
      properties: { name: 'Lindesnes fyr', type: 'Point' },
      geometry: {
        type: 'Point',
        coordinates: [7.0485, 57.9825],
      },
    },
    // --- MultiPoint ---
    {
      type: 'Feature',
      properties: { name: 'Nordsjø-fyrstasjonar', type: 'MultiPoint' },
      geometry: {
        type: 'MultiPoint',
        coordinates: [
          [5.624, 58.97], // Kvitsøy
          [4.869, 61.156], // Marstein
          [5.018, 62.335], // Runde
        ],
      },
    },
    // --- LineString (shipping lane) ---
    {
      type: 'Feature',
      properties: { name: 'Skipsled Oslo–Kristiansand', type: 'LineString' },
      geometry: {
        type: 'LineString',
        coordinates: [
          [10.757, 59.912], // Oslo
          [10.22, 59.13], // Larvik
          [9.61, 58.68], // Kragerø
          [8.76, 58.46], // Risør
          [8.01, 58.15], // Kristiansand
        ],
      },
    },
    // --- MultiLineString (two ferry routes) ---
    {
      type: 'Feature',
      properties: { name: 'Ferjesamband', type: 'MultiLineString' },
      geometry: {
        type: 'MultiLineString',
        coordinates: [
          // Moss–Horten
          [
            [10.655, 59.438],
            [10.489, 59.416],
          ],
          // Stavanger–Tau
          [
            [5.733, 58.973],
            [5.917, 59.065],
          ],
        ],
      },
    },
    // --- Polygon (harbour area in Stavanger) ---
    {
      type: 'Feature',
      properties: { name: 'Stavanger hamn', type: 'Polygon' },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [5.726, 58.975],
            [5.726, 58.969],
            [5.738, 58.969],
            [5.738, 58.975],
            [5.726, 58.975],
          ],
        ],
      },
    },
    // --- MultiPolygon (two harbour areas in Bergen) ---
    {
      type: 'Feature',
      properties: { name: 'Bergen hamneområde', type: 'MultiPolygon' },
      geometry: {
        type: 'MultiPolygon',
        coordinates: [
          // Skolten terminal
          [
            [
              [5.308, 60.401],
              [5.308, 60.397],
              [5.319, 60.397],
              [5.319, 60.401],
              [5.308, 60.401],
            ],
          ],
          // Dokken godsterminal
          [
            [
              [5.309, 60.389],
              [5.309, 60.385],
              [5.321, 60.385],
              [5.321, 60.389],
              [5.309, 60.389],
            ],
          ],
        ],
      },
    },
    // --- Polygon with hole (restricted area in Oslofjorden) ---
    {
      type: 'Feature',
      properties: {
        name: 'Avgrensa sone – Oslofjorden',
        type: 'Polygon (with hole)',
      },
      geometry: {
        type: 'Polygon',
        coordinates: [
          // Outer ring
          [
            [10.55, 59.82],
            [10.55, 59.78],
            [10.65, 59.78],
            [10.65, 59.82],
            [10.55, 59.82],
          ],
          // Inner ring (hole)
          [
            [10.58, 59.81],
            [10.58, 59.79],
            [10.62, 59.79],
            [10.62, 59.81],
            [10.58, 59.81],
          ],
        ],
      },
    },
    // --- GeometryCollection (Tromsø: point + harbour polygon) ---
    {
      type: 'Feature',
      properties: {
        name: 'Tromsø – punkt og hamn',
        type: 'GeometryCollection',
      },
      geometry: {
        type: 'GeometryCollection',
        geometries: [
          {
            type: 'Point',
            coordinates: [18.955, 69.649],
          },
          {
            type: 'Polygon',
            coordinates: [
              [
                [18.94, 69.655],
                [18.94, 69.645],
                [18.97, 69.645],
                [18.97, 69.655],
                [18.94, 69.655],
              ],
            ],
          },
        ],
      },
    },
  ],
};

export const ComplexMultiType: Story = {
  args: {
    data: complexMultiType,
    height: '600px',
    geoJsonStyle: {
      fillColor: 'rgba(0, 6, 103, 0.15)',
      lineColor: '#000667',
      lineWidth: 3,
      pointRadius: 7,
      pointColor: '#df3c1b',
      pointStrokeColor: '#000667',
      pointStrokeWidth: 2,
    },
  },
};

// ---- With layer toggle ----
export const WithLayerToggle: Story = {
  args: {
    data: sampleGeoJson as FeatureCollection,
    showLayerToggle: true,
  },
  render: (args) => (
    <ViewBoundsProvider>
      <BaseLayersProvider>
        <BuiltInLayersProvider>
          <CustomLayersProvider>
            <GeoJsonViewer {...args} />
          </CustomLayersProvider>
        </BuiltInLayersProvider>
      </BaseLayersProvider>
    </ViewBoundsProvider>
  ),
};

// ---- Interactive features data with typed features ----
const interactiveData: FeatureCollection = {
  type: 'FeatureCollection',
  features: [
    {
      id: 1,
      type: 'Feature',
      properties: {
        type: 'harbor',
        name: 'Stavanger havn',
        capacity: 250,
        status: 'operational',
      },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [5.726, 58.975],
            [5.726, 58.969],
            [5.738, 58.969],
            [5.738, 58.975],
            [5.726, 58.975],
          ],
        ],
      },
    },
    {
      id: 2,
      type: 'Feature',
      properties: {
        type: 'lighthouse',
        name: 'Lindesnes fyr',
        established: 1656,
        height: 16,
      },
      geometry: {
        type: 'Point',
        coordinates: [7.0485, 57.9825],
      },
    },
    {
      id: 3,
      type: 'Feature',
      properties: {
        type: 'shipping_lane',
        name: 'Skagerrak skipslei',
        depth: 45,
        traffic: 'high',
      },
      geometry: {
        type: 'LineString',
        coordinates: [
          [10.757, 59.912],
          [10.22, 59.13],
          [9.61, 58.68],
          [8.76, 58.46],
        ],
      },
    },
    {
      id: 4,
      type: 'Feature',
      properties: {
        type: 'harbor',
        name: 'Bergen havn',
        capacity: 400,
        status: 'maintenance',
      },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [5.308, 60.401],
            [5.308, 60.393],
            [5.321, 60.393],
            [5.321, 60.401],
            [5.308, 60.401],
          ],
        ],
      },
    },
    {
      id: 5,
      type: 'Feature',
      properties: {
        type: 'lighthouse',
        name: 'Runde fyr',
        established: 1767,
        height: 24,
      },
      geometry: {
        type: 'Point',
        coordinates: [5.018, 62.335],
      },
    },
  ],
};

// ---- Interactive with custom hover content ----
export const Interactive: Story = {
  args: {
    data: interactiveData,
    height: '500px',
    hoverable: true,
    selectable: true,
    hoverContent: {
      harbor: (feature) => (
        <div style={{ padding: '4px 0' }}>
          <div style={{ fontWeight: 600, color: '#0062ba' }}>🏭 Havn</div>
          <div>{feature.properties?.name}</div>
          <div style={{ fontSize: '0.85em', color: '#666' }}>Kapasitet: {feature.properties?.capacity} skip</div>
          <div style={{ fontSize: '0.85em', color: '#666' }}>Status: {feature.properties?.status}</div>
        </div>
      ),
      lighthouse: (feature) => (
        <div style={{ padding: '4px 0' }}>
          <div style={{ fontWeight: 600, color: '#df3c1b' }}>🏠 Fyrtårn</div>
          <div>{feature.properties?.name}</div>
          <div style={{ fontSize: '0.85em', color: '#666' }}>Etablert: {feature.properties?.established}</div>
          <div style={{ fontSize: '0.85em', color: '#666' }}>Høyde: {feature.properties?.height}m</div>
        </div>
      ),
      shipping_lane: (feature) => (
        <div style={{ padding: '4px 0' }}>
          <div style={{ fontWeight: 600, color: '#000667' }}>🚢 Skipslei</div>
          <div>{feature.properties?.name}</div>
          <div style={{ fontSize: '0.85em', color: '#666' }}>Dybde: {feature.properties?.depth}m</div>
          <div style={{ fontSize: '0.85em', color: '#666' }}>Trafikk: {feature.properties?.traffic}</div>
        </div>
      ),
    },
    onSelect: (features) => {
      console.log('Selection changed:', features);
    },
    onHover: (feature) => {
      if (feature) {
        console.log('Hovering:', feature.properties?.name);
      }
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates custom hover content based on feature type. Hover over different features to see type-specific tooltips. Click features to select them (use Ctrl/Cmd for multi-select).',
      },
    },
  },
};

// ---- Selectable with event logging ----
export const SelectionDemo: Story = {
  args: {
    data: interactiveData,
    height: '500px',
    selectable: true,
    onSelect: (features) => {
      if (features && features.length > 0) {
        const names = features.map((f) => f.properties?.name).join(', ');
        alert(`Selected: ${names}\n\nUse Ctrl/Cmd + Click to multi-select.`);
      } else {
        console.log('Selection cleared');
      }
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Click a feature to select it and see an alert. Click empty space to deselect. Hold Ctrl (Windows) or Cmd (Mac) while clicking to add/remove from selection.',
      },
    },
  },
};

// ---- Hover only (no selection) ----
export const HoverOnly: Story = {
  args: {
    data: interactiveData,
    height: '500px',
    hoverable: true,
    selectable: false,
    onHover: (feature) => {
      if (feature) {
        console.log('Hovering:', feature.properties?.name);
      }
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Hover events are enabled but selection is disabled. Features can still be hovered for tooltips.',
      },
    },
  },
};

// ---- Non-interactive ----
export const NonInteractive: Story = {
  args: {
    data: interactiveData,
    height: '500px',
    hoverable: false,
    selectable: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Both hover and selection are disabled. The map is view-only.',
      },
    },
  },
};
