import { SupportedLanguage } from '~/utils/types';

import nbNO from './nb-NO.json';
import nnNO from './nn-NO.json';
import enUS from './en-US.json';

const translations: Record<SupportedLanguage, Record<string, string>> = {
  'nb-NO': nbNO,
  'nn-NO': nnNO,
  'en-US': enUS,
};

export function getTranslation(languageTranslations: Record<string, string>, key: string): string | undefined {
  if (!languageTranslations) {
    return undefined;
  }

  if (languageTranslations[key]) {
    return languageTranslations[key];
  }

  return undefined;
}

export function translate(language: SupportedLanguage, key: string): string {
  const preferredTranslation = getTranslation(translations[language], key);
  if (preferredTranslation) {
    return preferredTranslation;
  }

  const backupTranslation = getTranslation(translations['nb-NO'], key);
  if (backupTranslation) {
    return backupTranslation;
  }

  return key;
}

export function useTranslation(language: SupportedLanguage): (key: string) => string {
  return translate.bind(null, language);
}
