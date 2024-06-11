import Typography from '~atoms/Typography/Typography';
import { useTranslation } from '~i18n/hooks/useTranslation';
import s from './ContactInfo.module.scss';
import AppLink from '~atoms/AppLink/AppLink';
import Button from '~atoms/Button/Button';

const ContactInfo = () => {
  const { t } = useTranslation();

  return (
    <div className={s.container}>
      <Typography variant='p' background='accent' className={s.title}>
        {t('footer.contactUs')}
      </Typography>

      <Button
        action={{ isExternal: true, href: 'mailto:info@positivus.com' }}
        variant='pure'
      >
        {t('footer.email')}
      </Button>

      <Button
        action={{ isExternal: true, href: 'tel:555-567-8901' }}
        variant='pure'
      >
        {t('footer.phone')}
      </Button>

      <div className={s.address}>
        <Typography variant='p' color='secondary'>
          {t('footer.street')}
        </Typography>
        <Typography variant='p' color='secondary'>
          {t('footer.address')}
        </Typography>
      </div>
    </div>
  );
};

export default ContactInfo;
