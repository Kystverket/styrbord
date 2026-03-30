import { useTranslation as useTranslationSprak } from '@kystverket/sprak-react';
import { ReactNode } from 'react';

import nbNO from './i18n/nb-NO.json';
import nnNO from './i18n/nn-NO.json';
import enUS from './i18n/en-US.json';

import { NamespaceProvider } from '@kystverket/sprak-react';
import { SupportedLanguage } from '@kystverket/styrbord';

const translations: Record<SupportedLanguage, Record<string, unknown>> = {
  'nb-NO': nbNO,
  'nn-NO': nnNO,
  'en-US': enUS,
};

export const STYRBORD_KART_TRANSLATIONS_NAMESPACE = 'styrbord-kart';

export const StyrbordKartTranslations = (props: { children: ReactNode }) => {
  return (
    <NamespaceProvider ns={STYRBORD_KART_TRANSLATIONS_NAMESPACE} translations={translations}>
      {props.children}
    </NamespaceProvider>
  );
};

export const useTranslation = useTranslationSprak.bind(null, STYRBORD_KART_TRANSLATIONS_NAMESPACE);
