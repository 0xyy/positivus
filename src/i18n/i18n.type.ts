import type en from './locales/en.json';

type Join<S1, S2> = S1 extends string
  ? S2 extends string
    ? `${S1}.${S2}`
    : never
  : never;

export type TPaths<T> = {
  [K in keyof T]: T[K] extends Record<string, unknown>
    ? Join<K, TPaths<T[K]>>
    : K;
}[keyof T];

export type TTranslationsKeys = TPaths<typeof en>;
