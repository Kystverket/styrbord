import { useLayoutEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Avatar,
  AvatarStack,
  Badge,
  Button,
  Checkbox,
  ChipCheckbox,
  ChipRemovable,
  Heading,
  Icon,
  Paragraph,
  Switch,
  Tag,
  TextInput,
} from '~/main';
import cat1 from '@assets/img/cats/Cat 1.jpg';
import cat2 from '@assets/img/cats/Cat 2.jpg';

/**
 * SAK-1157: prototype for a new size scale. Storybook only.
 *
 * The overrides live in `storybook/storybook-style.scss` and switch on with
 * `data-size-scale="proposal"`. These stories lock the toolbar to "Dagens skala"
 * and set the attribute themselves, so current and proposal sit side by side.
 */

const tokens = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 22, 26, 30] as const;
const modes = ['sm', 'md', 'lg'] as const;
type Mode = (typeof modes)[number];
type Scale = 'current' | 'proposal';

const scaleLabel: Record<Scale, string> = {
  current: 'Dagens',
  proposal: 'Forslag',
};

const cellStyle: CSSProperties = {
  padding: '0.25rem 0.75rem',
  textAlign: 'right',
  fontVariantNumeric: 'tabular-nums',
  borderBottom: '1px solid var(--ds-color-neutral-border-subtle)',
};

const headerCellStyle: CSSProperties = {
  ...cellStyle,
  fontWeight: 500,
  borderBottom: '1px solid var(--ds-color-neutral-border-default)',
};

/** Resolves `--ds-size-{token}` to px inside the given scale and mode. */
function ResolvedSize({ token, mode, scale }: Readonly<{ token: number; mode: Mode; scale: Scale }>) {
  const probe = useRef<HTMLSpanElement>(null);
  const [px, setPx] = useState<string>('');

  useLayoutEffect(() => {
    if (!probe.current) return;
    const width = Number.parseFloat(getComputedStyle(probe.current).width);
    const next = `${Math.round(width * 100) / 100}`;
    if (next !== px) setPx(next);
  });

  const onGrid = px !== '' && Number(px) % 4 === 0;

  return (
    <td
      style={{
        ...cellStyle,
        color: onGrid ? 'var(--ds-color-neutral-text-default)' : 'var(--ds-color-danger-text-subtle)',
      }}
    >
      <span data-size-scale={scale} style={{ display: 'contents' }}>
        <span
          ref={probe}
          data-size={mode}
          aria-hidden
          style={{ position: 'absolute', visibility: 'hidden', width: `var(--ds-size-${token})` }}
        />
      </span>
      {px}
    </td>
  );
}

function ScaleTable() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Heading level={2} data-size="sm">
        Størrelsesskala: dagens og forslaget
      </Heading>
      <Paragraph>
        Verdiene er px. Rødt betyr at verdien ikke er delelig med 4. I forslaget bruker large den felles 4 px-skalaen
        direkte, mens medium ligger ett trinn ned og small to trinn ned.
      </Paragraph>
      <table style={{ borderCollapse: 'collapse', width: 'max-content', position: 'relative' }}>
        <thead>
          <tr>
            <th style={{ ...headerCellStyle, textAlign: 'left' }} rowSpan={2}>
              Token
            </th>
            {modes.map((mode) => (
              <th key={mode} style={{ ...headerCellStyle, textAlign: 'center' }} colSpan={2}>
                {mode}
              </th>
            ))}
          </tr>
          <tr>
            {modes.map((mode) =>
              (['current', 'proposal'] as const).map((scale) => (
                <th key={`${mode}-${scale}`} style={headerCellStyle}>
                  {scaleLabel[scale]}
                </th>
              )),
            )}
          </tr>
        </thead>
        <tbody>
          {tokens.map((token) => (
            <tr key={token}>
              <td style={{ ...cellStyle, textAlign: 'left', fontFamily: 'monospace' }}>--ds-size-{token}</td>
              {modes.map((mode) =>
                (['current', 'proposal'] as const).map((scale) => (
                  <ResolvedSize key={`${mode}-${scale}`} token={token} mode={mode} scale={scale} />
                )),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Column({ scale, children }: Readonly<{ scale: Scale; children: ReactNode }>) {
  return (
    <div data-size-scale={scale} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', flex: 1 }}>
      <Heading level={3} data-size="xs">
        {scaleLabel[scale]}
      </Heading>
      {children}
    </div>
  );
}

/**
 * Designsystemet shows tooltips in one shared popover appended to <body>, so only one can be open
 * and it never sits inside a column's data-size-scale. This renders the same `.ds-tooltip` styling
 * in place instead, pointing left at the button next to it.
 */
function StaticTooltip({ text }: Readonly<{ text: string }>) {
  return (
    <div
      className="ds-tooltip"
      popover="manual"
      data-floating="right"
      style={
        {
          display: 'block',
          position: 'relative',
          inset: 'auto',
          marginInlineStart: 'var(--dsc-tooltip-arrow-size)',
          '--_ds-floating-arrow-y': '50%',
        } as CSSProperties
      }
    >
      {text}
    </div>
  );
}

const rowStyle: CSSProperties = { display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' };

function ComponentsInMode({ mode }: Readonly<{ mode: Mode }>) {
  return (
    <div data-size={mode} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      <Paragraph data-size="xs" style={{ fontFamily: 'monospace' }}>
        data-size=&quot;{mode}&quot;
      </Paragraph>

      <div style={rowStyle}>
        <Button size={mode} variant="filled">
          <Icon material="file_save" />
          Lagre
        </Button>
        <Button size={mode} variant="outline">
          <Icon material="add" />
          Legg til
        </Button>
        <Button size={mode} variant="outline">
          Avbryt
        </Button>
      </div>

      <div style={rowStyle}>
        <ChipCheckbox defaultChecked>Valgt</ChipCheckbox>
        <ChipCheckbox>Ikke valgt</ChipCheckbox>
        <ChipRemovable>Fjernbar</ChipRemovable>
        <Tag data-size={mode}>Tag</Tag>
      </div>

      <div style={rowStyle}>
        <Switch label="Varsler" defaultChecked />
        <Checkbox label="Godta vilkår" defaultChecked />
      </div>

      <div style={rowStyle}>
        <Badge count={5} />
        <Badge count={120} maxCount={99} data-color="danger" />
        {/* Default size is a fixed 42 px; var(--ds-size-12) lets the stack follow the scale. */}
        <AvatarStack size="var(--ds-size-12)" aria-label="Deltakere">
          <li>
            <Avatar data-size={mode} aria-label="Magnus Ekset" initials="ME" />
          </li>
          <li>
            <Avatar data-size={mode} aria-label="Ola Nordmann">
              <img src={cat1} alt="" />
            </Avatar>
          </li>
          <li>
            <Avatar data-size={mode} aria-label="Kari Nordmann">
              <img src={cat2} alt="" />
            </Avatar>
          </li>
        </AvatarStack>
      </div>

      <div style={rowStyle}>
        <Button size={mode} variant="ghost" data-tooltip="Dette er en tooltip">
          Tooltip
        </Button>
        <StaticTooltip text="Dette er en tooltip" />
      </div>

      <TextInput label="Navn" value="Ola Nordmann" readOnly />
    </div>
  );
}

function ComponentsSideBySide() {
  return (
    <div style={{ display: 'flex', gap: '3rem', alignItems: 'flex-start' }}>
      {(['current', 'proposal'] as const).map((scale) => (
        <Column key={scale} scale={scale}>
          {modes.map((mode) => (
            <ComponentsInMode key={mode} mode={mode} />
          ))}
        </Column>
      ))}
    </div>
  );
}

const meta: Meta = {
  title: 'Tokens/Størrelsesskala (forslag)',
  tags: ['!autodocs'],
  // The toolbar sets data-size-scale on <html>, which would leak into the "Dagens" column.
  globals: { sizeScale: 'current' },
  parameters: {
    docs: {
      description: {
        component:
          'Prototype for SAK-1157. Bruk «Størrelsesskala» i verktøylinja for å se forslaget i alle andre stories.',
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const Skala: Story = {
  render: () => <ScaleTable />,
};

export const KomponenterSideOmSide: Story = {
  name: 'Komponenter side om side',
  render: () => <ComponentsSideBySide />,
};
