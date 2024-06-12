import Typography from '~atoms/Typography/Typography';
import { useTranslation } from '~i18n/hooks/useTranslation';
import AppImage from '~atoms/AppImage/AppImage';
import s from './Hero.module.scss';
import HeroImage from '~assets/images/Hero.svg';

import Image from 'next/image';
import Button from '~atoms/Button/Button';

const Hero = () => {
  const { t } = useTranslation();

  const image = (
    <div className={s.img}>
      <AppImage src={HeroImage} alt='Megaphone' />
    </div>
  );

  return (
    <>
      <section className={s.smallHero}>
        <Typography variant='h1'>{t('hero.title')}</Typography>
        {image}
        <Typography variant='p'>{t('hero.text')}</Typography>
        <Button>{t('hero.consultationButton')}</Button>
      </section>

      <section className={s.hero}>
        <div className={s.content}>
          <Typography variant='h1'>{t('hero.title')}</Typography>
          <Typography variant='p'>{t('hero.text')}</Typography>
          <Button>{t('hero.consultationButton')}</Button>
        </div>

        {image}
      </section>
    </>
  );
};

export default Hero;
