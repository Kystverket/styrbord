import { PartialStoryFn, StoryContext } from 'storybook/internal/types';

import './storybook-style.scss';
import { STYRBORD_TRANSLATIONS_NAMESPACE, StyrbordTranslations } from '~/translations';
import { SprakProvider } from '@kystverket/sprak-react';

const StyrbordDecorator = (Story: PartialStoryFn, context: StoryContext) => {
  const locale = context.globals?.locale ?? 'nb-NO';
  const colorScheme = context.globals?.colorScheme ?? 'light';

  document.documentElement.lang = locale;

  return (
    <div data-color-scheme={colorScheme}>
      <SprakProvider locale={locale} defaultNamespace={STYRBORD_TRANSLATIONS_NAMESPACE}>
        <StyrbordTranslations>
          <Story />
        </StyrbordTranslations>
      </SprakProvider>
    </div>
  );
};

export default StyrbordDecorator;
