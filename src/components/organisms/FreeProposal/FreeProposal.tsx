import Typography from '~atoms/Typography/Typography';
import { useTranslation } from '~i18n/hooks/useTranslation';
import Card from '~molecules/Card/Card';
import s from './FreeProposal.module.scss';
import Button from '~atoms/Button/Button';
import AppImage from '~atoms/AppImage/AppImage';
import FreeProposalImage from '~assets/images/services/free-proposal.svg';

const FreeProposal = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Card
        variant='secondary'
        isWithShadow={false}
        isWithBorder={false}
        className={s.container}
      >
        <div className={s.textContent}>
          <Typography variant='h3'>{t('freeProposal.title')}</Typography>
          <Typography variant='p'>{t('freeProposal.text')}</Typography>
          <Button>{t('freeProposal.proposalButton')}</Button>
        </div>

        <AppImage
          src={FreeProposalImage}
          alt='Free proposal'
          className={s.image}
        />
      </Card>
    </div>
  );
};

export default FreeProposal;
