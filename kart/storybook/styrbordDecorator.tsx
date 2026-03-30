import { PartialStoryFn } from 'storybook/internal/types';

import { STYRBORD_KART_TRANSLATIONS_NAMESPACE, StyrbordKartTranslations } from '~/translations';
import { SprakProvider } from '@kystverket/sprak-react';

const StyrbordDecorator = (Story: PartialStoryFn) => (
  <div>
    <SprakProvider locale="nb-NO" defaultNamespace={STYRBORD_KART_TRANSLATIONS_NAMESPACE}>
      <StyrbordKartTranslations>
        <Story />
      </StyrbordKartTranslations>
    </SprakProvider>
  </div>
);

export default StyrbordDecorator;
