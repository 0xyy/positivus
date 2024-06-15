import Typography from '~atoms/Typography/Typography';
import { useTranslation } from '~i18n/hooks/useTranslation';
import AppImage from '~atoms/AppImage/AppImage';
import HeroImage from '~assets/images/hero/hero.svg';
import Button from '~atoms/Button/Button';
import s from './Hero.module.scss';

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
