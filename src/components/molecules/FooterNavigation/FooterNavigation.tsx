import AppLink from '~atoms/AppLink/AppLink';
import Logo from '~atoms/Logo/Logo';
import { NAV_LINKS } from '~constants/navigation';
import { useTranslation } from '~i18n/hooks/useTranslation';
import SocialMedia from '~molecules/SocialMedia/SocialMedia';
import s from './FooterNavigation.module.scss';

const FooterNavigation = () => {
  const { t } = useTranslation();

  return (
    <nav className={s.nav}>
      <Logo color='white' />

      <div className={s.links}>
        {NAV_LINKS.map((link, index) => (
          <AppLink
            key={`${link.href}-${index}`}
            href={link.href}
            variant='light'
            className={s.underline}
          >
            {t(link.text)}
          </AppLink>
        ))}
      </div>

      <SocialMedia className={s.socialMedia} />
    </nav>
  );
};

export default FooterNavigation;
