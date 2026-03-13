import { PartialStoryFn } from 'storybook/internal/types';

import './storybook-style.scss';
import { STYRBORD_TRANSLATIONS_NAMESPACE, StyrbordTranslations } from '~/translations';
import { SprakProvider } from '@kystverket/sprak-react';

const StyrbordDecorator = (Story: PartialStoryFn) => (
  <div>
    <SprakProvider locale="nb-NO" defaultNamespace={STYRBORD_TRANSLATIONS_NAMESPACE}>
      <StyrbordTranslations>
        <Story />
      </StyrbordTranslations>
    </SprakProvider>
  </div>
);

export default StyrbordDecorator;
