/**
 * Shared label styles for map layers.
 */

import { Fill, Text } from 'ol/style';

export function createLabelText(labelText: string): Text {
  return new Text({
    text: labelText,
    font: '13px museo-sans, sans-serif',
    fill: new Fill({ color: '#000' }),
    backgroundFill: new Fill({ color: 'rgba(255, 255, 255, 0.7)' }),
    padding: [2, 4, 2, 4],
    offsetY: -15,
    textAlign: 'center',
    textBaseline: 'bottom',
  });
}
