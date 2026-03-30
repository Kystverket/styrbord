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
    docs: {
      story: {
        inline: false,
        iframeHeight: '600px',
      },
    },
  },
} satisfies Meta<typeof GeoJsonEditor>;

export default meta;
type Story = StoryObj<typeof meta>;

// ---------------------------------------------------------------------------
// Shared sample data
// ---------------------------------------------------------------------------

/** A mix of point, line and polygon features along the Norwegian coast. */
const norwegianCoastData: FeatureCollection = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: { type: 'harbor', name: 'Ålesund Havn', capacity: 500 },
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
      properties: { type: 'lighthouse', name: 'Kråkenes Fyr', height: 35 },
      geometry: { type: 'Point', coordinates: [4.999, 62.032] },
    },
    {
      type: 'Feature',
      properties: { type: 'shipping_lane', name: 'Hovedled Sør–Nord', traffic: 'høy' },
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

/** Two directional-point features (e.g. vessels with a heading). */
const directionalData: FeatureCollection = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: { mode: 'directional-point', direction: 45, name: 'MS Nordlys' },
      geometry: { type: 'Point', coordinates: [10.3951, 63.4305] },
    },
    {
      type: 'Feature',
      properties: { mode: 'directional-point', direction: 200, name: 'MS Trollfjord' },
      geometry: { type: 'Point', coordinates: [5.3221, 60.3913] },
    },
  ],
};

// ---------------------------------------------------------------------------
// 1. Empty editor – all modes
// ---------------------------------------------------------------------------

/**
 * The default state: an empty map with all drawing tools available.
 * Use the toolbar to draw points, lines, and polygons.
 */
export const Default: Story = {};

// ---------------------------------------------------------------------------
// 2. Pre-loaded data
// ---------------------------------------------------------------------------

/**
 * The editor pre-loaded with a FeatureCollection containing a polygon (Ålesund
 * Havn), a point (Kråkenes Fyr) and a linestring (Hovedled Sør–Nord).
 * `fitBounds` zooms the map to fit all features on mount.
 */
export const WithInitialData: Story = {
  args: {
    value: norwegianCoastData,
    fitBounds: true,
    showCenterAction: true,
  },
};

// ---------------------------------------------------------------------------
// 3. Controlled – live JSON output
// ---------------------------------------------------------------------------

/**
 * Fully controlled: every draw/edit/delete emits the current FeatureCollection
 * via `onChange`. The JSON output below the map updates in real time.
 */
const ControlledTemplate: StoryFn<typeof GeoJsonEditor> = () => {
  const [data, setData] = useState<FeatureCollection>({
    type: 'FeatureCollection',
    features: [],
  });

  return (
    <div>
      <GeoJsonEditor value={data} onChange={setData} showCenterAction />
      <pre
        style={{
          marginTop: 16,
          padding: 12,
          background: '#f5f5f5',
          borderRadius: 8,
          fontSize: '0.8rem',
          maxHeight: 280,
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

// ---------------------------------------------------------------------------
// 4. Single-mode variants
// ---------------------------------------------------------------------------

/** Only the point tool is available in the toolbar. */
export const PointsOnly: Story = {
  args: { modes: ['point'] },
};

/** Only the linestring tool is available in the toolbar. */
export const LinesOnly: Story = {
  args: { modes: ['linestring'] },
};

/** Only the polygon tool is available in the toolbar. */
export const PolygonsOnly: Story = {
  args: { modes: ['polygon'] },
};

/**
 * Only directional-point mode. Each placed point stores a `direction` angle
 * (0–360°) that can be used to represent headings, bearings, etc.
 */
export const DirectionalPointsOnly: Story = {
  args: { modes: ['directional-point'] },
};

// ---------------------------------------------------------------------------
// 5. Directional points – pre-loaded and controlled
// ---------------------------------------------------------------------------

/**
 * Pre-loaded directional points with `fitBounds`. Includes all four modes so
 * you can mix regular and directional points in one editor.
 */
const DirectionalControlledTemplate: StoryFn<typeof GeoJsonEditor> = () => {
  const [data, setData] = useState<FeatureCollection>(directionalData);

  return (
    <div>
      <GeoJsonEditor
        value={data}
        onChange={setData}
        modes={['point', 'directional-point', 'linestring', 'polygon']}
        fitBounds
        showCenterAction
      />
      <pre
        style={{
          marginTop: 16,
          padding: 12,
          background: '#f5f5f5',
          borderRadius: 8,
          fontSize: '0.8rem',
          maxHeight: 280,
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

// ---------------------------------------------------------------------------
// 6. Read-only (disabled)
// ---------------------------------------------------------------------------

/**
 * `disabled` removes the toolbar and all interaction. Use this to display
 * GeoJSON data without allowing any edits.
 */
export const ReadOnly: Story = {
  args: {
    value: norwegianCoastData,
    fitBounds: true,
    disabled: true,
  },
};

// ---------------------------------------------------------------------------
// 8. Hover tooltips
// ---------------------------------------------------------------------------

/**
 * Custom hover content keyed by `properties.type`. Hover over any feature to
 * see a type-specific tooltip. The status bar below the map shows the currently
 * hovered and selected features.
 */
const HoverTemplate: StoryFn<typeof GeoJsonEditor> = () => {
  const [hoveredName, setHoveredName] = useState<string | null>(null);
  const [selectedNames, setSelectedNames] = useState<string[]>([]);

  return (
    <div>
      <GeoJsonEditor
        value={norwegianCoastData}
        fitBounds
        showCenterAction
        hoverContent={{
          harbor: (f) => (
            <div>
              <strong>{f.properties?.name}</strong>
              <div>Kapasitet: {f.properties?.capacity} båter</div>
            </div>
          ),
          lighthouse: (f) => (
            <div>
              <strong>{f.properties?.name}</strong>
              <div>Høyde: {f.properties?.height} m</div>
            </div>
          ),
          shipping_lane: (f) => (
            <div>
              <strong>{f.properties?.name}</strong>
              <div>Trafikk: {f.properties?.traffic}</div>
            </div>
          ),
        }}
        onHover={(feature) => setHoveredName(feature?.properties?.name ?? null)}
        onSelect={(features) => setSelectedNames(features?.map((f) => f.properties?.name ?? 'ukjent') ?? [])}
      />
      <div
        style={{
          marginTop: 12,
          padding: 10,
          background: '#f5f5f5',
          borderRadius: 8,
          fontSize: '0.85rem',
        }}
      >
        <div>
          <strong>Hover:</strong> {hoveredName ?? '–'}
        </div>
        <div>
          <strong>Valgt:</strong> {selectedNames.length > 0 ? selectedNames.join(', ') : '–'}
        </div>
      </div>
    </div>
  );
};

export const WithHoverContent: Story = {
  render: HoverTemplate,
};

// ---------------------------------------------------------------------------
// 9. Layer toggle
// ---------------------------------------------------------------------------

/**
 * Shows the built-in layer toggle control. Requires the full layer context
 * stack (`ViewBoundsProvider`, `BaseLayersProvider`, etc.).
 */
export const WithLayerToggle: Story = {
  render: () => (
    <ViewBoundsProvider>
      <BaseLayersProvider>
        <BuiltInLayersProvider>
          <CustomLayersProvider>
            <GeoJsonEditor value={norwegianCoastData} fitBounds showCenterAction showLayerToggle />
          </CustomLayersProvider>
        </BuiltInLayersProvider>
      </BaseLayersProvider>
    </ViewBoundsProvider>
  ),
};

// ---------------------------------------------------------------------------
// 10. Single-feature mode
// ---------------------------------------------------------------------------

/**
 * `singleFeature` hides the toolbar and auto-activates the first mode. Placing
 * a new feature replaces the previous one. Useful as a drop-in picker.
 *
 * This variant uses `point` mode — equivalent to `CoordinateField`.
 */
const SingleFeatureTemplate: StoryFn<typeof GeoJsonEditor> = () => {
  const [data, setData] = useState<FeatureCollection>({
    type: 'FeatureCollection',
    features: [],
  });

  return (
    <div>
      <GeoJsonEditor singleFeature modes={['point']} value={data} onChange={setData} />
      <pre
        style={{
          marginTop: 16,
          padding: 12,
          background: '#f5f5f5',
          borderRadius: 8,
          fontSize: '0.8rem',
          maxHeight: 180,
          overflow: 'auto',
        }}
      >
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
};

export const SingleFeaturePoint: Story = {
  render: SingleFeatureTemplate,
};

/**
 * `singleFeature` with `directional-point` mode — equivalent to
 * `CoordinateDirectionField`. Click the map to place a point, then drag the
 * direction handle to set the bearing.
 */
const SingleDirectionalTemplate: StoryFn<typeof GeoJsonEditor> = () => {
  const [data, setData] = useState<FeatureCollection>({
    type: 'FeatureCollection',
    features: [],
  });

  return (
    <div>
      <GeoJsonEditor singleFeature modes={['directional-point']} value={data} onChange={setData} />
      <pre
        style={{
          marginTop: 16,
          padding: 12,
          background: '#f5f5f5',
          borderRadius: 8,
          fontSize: '0.8rem',
          maxHeight: 180,
          overflow: 'auto',
        }}
      >
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
};

export const SingleFeatureDirectionalPoint: Story = {
  render: SingleDirectionalTemplate,
};

/** `singleFeature` with `polygon` mode — only one polygon at a time. */
export const SingleFeaturePolygon: Story = {
  args: {
    singleFeature: true,
    modes: ['polygon'],
  },
};
