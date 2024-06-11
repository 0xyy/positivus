import type { TranslationsKeys } from '~i18n/i18n.type';

type NavLinks = { href: string; text: TranslationsKeys }[];

export const NAV_LINKS: NavLinks = [
  { href: '', text: 'navigation.aboutUs' },
  { href: '', text: 'navigation.services' },
  { href: '', text: 'navigation.useCases' },
  { href: '', text: 'navigation.pricing' },
  { href: '', text: 'navigation.blog' },
];
