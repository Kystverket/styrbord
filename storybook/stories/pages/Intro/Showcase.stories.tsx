import type { Meta, StoryFn } from '@storybook/react';
import { useState } from 'react';

import { Fieldset, type Size, ToggleGroup } from '@digdir/designsystemet-react';

import classes from './Showcase.module.css';
import { Showcase } from './Showcase';
import StyrbordDecorator from '../../../styrbordDecorator';

export default {
  title: 'Designsystemet Showcase',
  decorators: [StyrbordDecorator],
  parameters: {
    chromatic: {
      modes: {
        mobile: {
          disable: true,
        },
      },
    },
    a11y: {
      // TODO: this rule should be enabled after https://github.com/dequelabs/axe-core/issues/4672 have propagated to @storybook/addon-a11y.
      config: {
        rules: [
          {
            id: 'aria-allowed-role',
            enabled: false,
          },
        ],
      },
    },
  },
} as Meta;

const sizes: Size[] = ['sm', 'md', 'lg'];
const colorModes = ['light', 'dark', 'auto'];
const typography = ['primary', 'secondary'];

const colorSchemes = ['primary', 'accent', 'extra1', 'extra2', 'neutral'];

export const DesignsystemetShowcase: StoryFn = () => {
  const [size, setSize] = useState<Size>('md');
  const [colorMode, setColorMode] = useState('light');
  const [colorScheme, setColorScheme] = useState('primary');
  const [typographyMode, setTypographyMode] = useState('primary');

  return (
    <div className={classes.wrapper}>
      <div className={classes.controls} data-size="sm">
        <Fieldset>
          <Fieldset.Legend>
            Størrelse
            <code data-size="xs">(data-size)</code>
          </Fieldset.Legend>
          <ToggleGroup value={size} onChange={(val) => setSize(val as Size)}>
            {sizes.map((s) => (
              <ToggleGroup.Item key={s} value={s}>
                {s}
              </ToggleGroup.Item>
            ))}
          </ToggleGroup>
        </Fieldset>
        <Fieldset>
          <Fieldset.Legend>
            Fargemodus
            <code data-size="xs">(data-color-scheme)</code>
          </Fieldset.Legend>
          <ToggleGroup value={colorMode} onChange={setColorMode}>
            {colorModes.map((cm) => (
              <ToggleGroup.Item key={cm} value={cm}>
                {cm}
              </ToggleGroup.Item>
            ))}
          </ToggleGroup>
        </Fieldset>
        <Fieldset>
          <Fieldset.Legend>
            Typografi
            <code data-size="xs">(data-typography)</code>
          </Fieldset.Legend>
          <ToggleGroup value={typographyMode} onChange={setTypographyMode}>
            {typography.map((tm) => (
              <ToggleGroup.Item key={tm} value={tm}>
                {tm}
              </ToggleGroup.Item>
            ))}
          </ToggleGroup>
        </Fieldset>
        <Fieldset>
          <Fieldset.Legend>
            Farger
            <code data-size="xs">(data-color)</code>
          </Fieldset.Legend>
          <ToggleGroup value={colorScheme} onChange={setColorScheme}>
            {colorSchemes.map((tm) => (
              <ToggleGroup.Item key={tm} value={tm}>
                {tm}
              </ToggleGroup.Item>
            ))}
          </ToggleGroup>
        </Fieldset>
      </div>
      <Showcase
        data-size={size}
        data-color={colorScheme}
        data-color-scheme={colorMode}
        data-typography={typographyMode}
      />
    </div>
  );
};
