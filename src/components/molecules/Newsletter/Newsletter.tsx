import Input from '~atoms/Input/Input';
import s from './Newsletter.module.scss';
import Button from '~atoms/Button/Button';
import { useTranslation } from '~i18n/hooks/useTranslation';

const Newsletter = () => {
  const { t } = useTranslation();
  return (
    <div className={s.container}>
      <Input
        placeholder={t('footer.form.emailPlaceholder')}
        variant='secondary'
      />
      <Button variant='accent' size='small'>
        {t('footer.form.submitButton')}
      </Button>
    </div>
  );
};

export default Newsletter;
