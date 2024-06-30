import AppImage from '~atoms/AppImage/AppImage';
import Typography from '~atoms/Typography/Typography';
import { SERVICES } from '~constants/services';
import { useTranslation } from '~i18n/hooks/useTranslation';
import Card from '~molecules/Card/Card';
import ArrowUp from '~atoms/ArrowUp/ArrowUp';
import clsx from 'clsx';
import s from './Services.module.scss';

const Services = () => {
  const { t } = useTranslation();

  return (
    <div className={s.container}>
      <div className={s.text}>
        <Typography variant='h2' component='h3' background='accent'>
          {t('services.title')}
        </Typography>

        <Typography variant='p' className={s.description}>
          {t('services.description')}
        </Typography>
      </div>

      <div className={s.services}>
        {SERVICES.map((service, index) => (
          <Card key={index} variant={service.cardVariant} className={s.card}>
            <div className={s.serviceTitle}>
              <Typography
                variant='h3'
                component='h4'
                background={service.titleBackground}
              >
                {t(service.title)}
              </Typography>

              <div className={s.arrowBox}>
                <ArrowUp color={service.arrowColor} />

                <Typography
                  variant='p'
                  className={clsx(s.learnMore, {
                    [s.learnMorePrimary]: service.arrowColor === 'primary',
                    [s.learnMoreSecondary]: service.arrowColor === 'secondary',
                  })}
                >
                  {t('services.learnMore')}
                </Typography>
              </div>
            </div>

            <div className={s.image}>
              <AppImage src={service.image} alt={service.title} />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Services;
