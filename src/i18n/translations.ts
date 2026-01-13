import { SupportedLanguage } from '~/utils/types';

import nbNO from './nb-NO.json';
import nnNO from './nn-NO.json';
import enUS from './en-US.json';
import { createContext, useContext } from 'react';

const translations: Record<SupportedLanguage, Record<string, unknown>> = {
  'nb-NO': nbNO,
  'nn-NO': nnNO,
  'en-US': enUS,
};

function getTranslation(languageTranslations: Record<string, unknown>, key: string): string | undefined {
  if (!languageTranslations) {
    return undefined;
  }

  if (key.includes('.')) {
    const keys = key.split('.', 2);
    const deeperTranslations = languageTranslations[keys[0]];

    if (typeof deeperTranslations === 'string' || deeperTranslations instanceof String) {
      return deeperTranslations ? String(deeperTranslations) : undefined;
    } else {
      return getTranslation(deeperTranslations as Record<string, unknown>, keys[1]);
    }
  } else {
    return languageTranslations[key] ? String(languageTranslations[key]) : undefined;
  }
}

function translate(language: SupportedLanguage, key: string): string {
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

function advancedTranslate(
  language: SupportedLanguage,
  prefix: string | undefined | null,
  alternativeTranslationData: Record<string, unknown> | null | undefined,
  key: string,
): string {
  const fullKey = prefix ? `${prefix}.${key}` : key;

  if (alternativeTranslationData) {
    const altTranslationWithoutPrefix = getTranslation(alternativeTranslationData, key);
    if (altTranslationWithoutPrefix) {
      return altTranslationWithoutPrefix;
    }

    const altTranslation = getTranslation(alternativeTranslationData, fullKey);
    if (altTranslation) {
      return altTranslation;
    }
  }

  const preferredTranslation = getTranslation(translations[language], fullKey);
  if (preferredTranslation) {
    return preferredTranslation;
  }

  const backupTranslation = getTranslation(translations['nb-NO'], fullKey);
  if (backupTranslation) {
    return backupTranslation;
  }

  return fullKey;
}

export interface TranslationContextProps {
  language: SupportedLanguage;
}

export const StyrbordTranslationContext = createContext<TranslationContextProps>({
  language: 'nb-NO',
});

export const useStyrbordTranslation = () => {
  const { language } = useContext(StyrbordTranslationContext);

  return {
    language,
    t: translate.bind(null, language),
    at: advancedTranslate.bind(null, language),
  };
};
