import Typography from '~atoms/Typography/Typography';
import { useTranslation } from '~i18n/hooks/useTranslation';
import s from './Copyright.module.scss';

const Copyright = () => {
  const { t } = useTranslation();
  const copyrightText = `© ${new Date().getFullYear()} ${t('footer.copyright')}`;
  return (
    <div className={s.container}>
      <Typography variant='p' color='secondary'>
        {copyrightText}
      </Typography>

      <Typography variant='p' color='secondary' className={s.underline}>
        {t('footer.privacyPolicy')}
      </Typography>
    </div>
  );
};

export default Copyright;
