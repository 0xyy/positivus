'use client';
import Logo from '~atoms/Logo/Logo';
import AppLink from '~atoms/AppLink/AppLink';
import { NAV_LINKS } from '~constants/navigation';
import { useTranslation } from '~i18n/hooks/useTranslation';
import Button from '~atoms/Button/Button';
import { useWindowSize } from '~hooks/useWindowSize';
import { useCallback, useState } from 'react';
import Hamburger from '~assets/icons/Hamburger';
import Close from '~assets/icons/Close';
import clsx from 'clsx';
import s from './MainNavigation.module.scss';

const MainNavigation = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDesktop } = useWindowSize();

  const renderLinks = useCallback(
    () =>
      NAV_LINKS.map((link, index) => (
        <AppLink
          key={`${link.href}-${index}`}
          href={link.href}
          variant={isDesktop ? 'dark' : 'light'}
        >
          {t(link.text)}
        </AppLink>
      )),
    [t, isDesktop],
  );

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className={s.nav}>
      <Logo />

      <div className={s.links}>
        {renderLinks()}

        <Button variant='outlined'>{t('navigation.requestQuote')}</Button>
      </div>

      <div className={s.mobileContainer}>
        <Button variant='pure' action={handleMenuToggle}>
          {!isMenuOpen ? <Hamburger /> : <Close />}
        </Button>

        <div className={clsx(s.mobileLinks, !isMenuOpen && s.hidden)}>
          {isMenuOpen ? renderLinks() : null}
        </div>
      </div>
    </nav>
  );
};

export default MainNavigation;
