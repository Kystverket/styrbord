import type { Meta, StoryFn } from '@storybook/react-vite';
import { AIS_SHIP_TYPES, getShipTypeByAisCode } from './shipTypes';

const meta = {
  title: 'Data/AIS Ship Types',
  tags: ['autodocs'],
} satisfies Meta;

export default meta;

export const Overview: StoryFn = () => (
  <div style={{ fontFamily: 'system-ui, sans-serif', padding: '1rem' }}>
    <table style={{ borderCollapse: 'collapse', width: '100%' }}>
      <thead>
        <tr
          style={{
            borderBottom: '2px solid #ccc',
            textAlign: 'left',
          }}
        >
          <th style={{ padding: '0.5rem' }}>ID</th>
          <th style={{ padding: '0.5rem' }}>Label</th>
          <th style={{ padding: '0.5rem' }}>Farge</th>
          <th style={{ padding: '0.5rem' }}>AIS-koder</th>
        </tr>
      </thead>
      <tbody>
        {AIS_SHIP_TYPES.map((t) => (
          <tr key={t.id} style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '0.5rem' }}>
              <code>{t.id}</code>
            </td>
            <td style={{ padding: '0.5rem' }}>{t.label}</td>
            <td style={{ padding: '0.5rem' }}>
              <span
                style={{
                  background: t.color,
                  border: `2px solid ${t.borderColor}`,
                  display: 'inline-block',
                  width: 24,
                  height: 24,
                  borderRadius: 4,
                  verticalAlign: 'middle',
                  marginRight: 8,
                }}
              />
              <code>{t.color}</code>
            </td>
            <td style={{ padding: '0.5rem', fontVariantNumeric: 'tabular-nums' }}>{t.aisCodes.join(', ')}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export const Lookup: StoryFn = () => {
  const exampleCodes = ['40', '30', '80', '99', '50', '37'];
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', padding: '1rem' }}>
      <h3 style={{ marginBottom: '0.5rem' }}>getShipTypeByAisCode()</h3>
      <table style={{ borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #ccc', textAlign: 'left' }}>
            <th style={{ padding: '0.5rem' }}>AIS-kode</th>
            <th style={{ padding: '0.5rem' }}>Resultat</th>
          </tr>
        </thead>
        <tbody>
          {exampleCodes.map((code) => {
            const result = getShipTypeByAisCode(code);
            return (
              <tr key={code} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '0.5rem' }}>
                  <code>{code}</code>
                </td>
                <td style={{ padding: '0.5rem' }}>
                  {result ? (
                    <>
                      <span
                        style={{
                          background: result.color,
                          border: `2px solid ${result.borderColor}`,
                          display: 'inline-block',
                          width: 16,
                          height: 16,
                          borderRadius: 3,
                          verticalAlign: 'middle',
                          marginRight: 6,
                        }}
                      />
                      {result.label}
                    </>
                  ) : (
                    <em>undefined</em>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
