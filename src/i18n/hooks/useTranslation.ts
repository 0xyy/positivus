import { getByPath } from 'dot-path-value';
import type { TTranslationsKeys } from '~i18n/i18n.type';
import en from '~i18n/locales/en.json';

type TGetTranslation = (key: TTranslationsKeys) => string;

export const useTranslation = () => {
  const getTranslation: TGetTranslation = (key) => {
    return getByPath(en, key);
  };

  return {
    t: getTranslation,
  };
};
