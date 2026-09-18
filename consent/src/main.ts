import './css/index.css';

export { ConsentProvider } from './components/ConsentProvider/ConsentProvider';
export type { ConsentProviderProps } from './components/ConsentProvider/ConsentProvider.types';

export { CookieConsent, ManageConsentLink } from './components/CookieConsent/CookieConsent';
export { ConsentBanner } from './components/ConsentBanner/ConsentBanner';
export { ConsentPreferencesDialog } from './components/ConsentPreferencesDialog/ConsentPreferencesDialog';
export { ConsentSettingsButton } from './components/ConsentSettingsButton/ConsentSettingsButton';

export { useConsent } from './hooks/useConsent';
export type { UseConsentResult } from './hooks/useConsent';
export { useStoreValue } from './hooks/useStoreValue';

export { useConsentStore } from './utility/consentContext';
export type { ConsentContextValue } from './utility/consentContext';

export {
  clearServiceCookies,
  createConsentStore,
  getSelectableCategories,
  hasGatedServices,
  DEFAULT_EXPIRY_DAYS,
  DEFAULT_STORAGE_KEY,
} from './utility/consentStore';
export type { ConsentStore } from './utility/consentStore';

export { consentCookieService, hotjarService, plausibleService, postHogService } from './utility/services';
export type { HotjarOptions, PlausibleOptions, PostHogOptions } from './utility/services';

export {
  consentTranslations,
  defaultConsentLanguage,
  formatCookieDuration,
  getConsentTranslations,
} from './utility/translations';
export type { ConsentLanguage, ConsentTranslations } from './utility/translations';

export type {
  ConsentCategory,
  ConsentConfig,
  ConsentService,
  ConsentState,
  ConsentUI,
  ServiceCookie,
} from './utility/consent.types';
