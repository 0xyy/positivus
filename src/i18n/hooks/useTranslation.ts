import { getByPath } from 'dot-path-value';
import type { TranslationsKeys } from '~i18n/i18n.type';
import en from '~i18n/locales/en.json';

type GetTranslation = (key: TranslationsKeys) => string;

export const useTranslation = () => {
  const getTranslation: GetTranslation = (key) => {
    return getByPath(en, key);
  };

  return {
    t: getTranslation,
  };
};
