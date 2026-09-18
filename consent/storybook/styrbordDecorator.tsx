import { PartialStoryFn, StoryContext } from 'storybook/internal/types';

/**
 * Rammen alle historiene kjører i.
 *
 * Bakgrunn og minstehøyde settes her fordi historiene kjører i `fullscreen`-oppsett: banneret og
 * innstillingsknappen er `position: fixed` og legger seg mot bunnen av rammen, og uten en flate
 * bak seg ville de ligget mot en hvit iframe også i mørk fargemodus.
 *
 * Merk at samtykkepakken ikke krever `SprakProvider` slik base og kart gjør — tekstene følger
 * biblioteket og velges med `language`-propen på `ConsentProvider`.
 */
const StyrbordDecorator = (Story: PartialStoryFn, context: StoryContext) => {
  const colorScheme = context.globals?.colorScheme ?? 'light';

  return (
    <div
      data-color-scheme={colorScheme}
      style={{ minHeight: '100vh', background: 'var(--ds-color-neutral-background-default)' }}
    >
      <Story />
    </div>
  );
};

export default StyrbordDecorator;
