export type ScreenSize = 'screen-xxs' | 'screen-xs' | 'screen-sm' | 'screen-md' | 'screen-lg';

export const supportedLanguages = ['nb-NO', 'nn-NO', 'en-US'] as const;
export type SupportedLanguage = (typeof supportedLanguages)[number];
