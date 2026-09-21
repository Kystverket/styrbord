import { PartialStoryFn, StoryContext } from 'storybook/internal/types';
import styles from './styrbordDecorator.module.css';

/**
 * Rammen alle historiene kjører i.
 *
 * Bakgrunn og minstehøyde settes her fordi historiene kjører i `fullscreen`-oppsett: banneret og
 * innstillingsknappen er `position: fixed` og legger seg mot bunnen av rammen, og uten en flate
 * bak seg ville de ligget mot en hvit iframe også i mørk fargemodus.
 *
 * Merk at samtykkepakken verken krever `SprakProvider` eller `@kystverket/styrbord`: tekstene
 * følger biblioteket og velges med `language`-propen på `ConsentProvider`, og stilene bygger
 * bare på designtokenene.
 */
const StyrbordDecorator = (Story: PartialStoryFn, context: StoryContext) => {
  const colorScheme = context.globals?.colorScheme ?? 'light';

  return (
    <div data-color-scheme={colorScheme} className={styles.canvas}>
      <Story />
    </div>
  );
};

export default StyrbordDecorator;
