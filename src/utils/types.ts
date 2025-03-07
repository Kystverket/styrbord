export type ScreenSize = 'screen-xxs' | 'screen-xs' | 'screen-sm' | 'screen-md' | 'screen-lg';

export type SupportedLanguage = 'nb-NO' | 'nn-NO' | 'en-US';

export interface LanguageDependentComponent {
  language: SupportedLanguage;
}
