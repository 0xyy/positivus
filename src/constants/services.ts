import { TranslationsKeys } from '~i18n/i18n.type';
import SearchEngine from '~assets/images/services/search-engine.svg';
import Advertising from '~assets/images/services/advertising.svg';
import SocialMedia from '~assets/images/services/social-media.svg';
import Email from '~assets/images/services/email.svg';
import Content from '~assets/images/services/content.svg';
import Analytics from '~assets/images/services/analytics.svg';
import { CardProps } from '~molecules/Card/Card.type';
import { ArrowUpProps } from '~atoms/ArrowUp/ArrowUp.type';
import { TypographyColor } from '~atoms/Typography/Typography.type';

type Services = {
  title: TranslationsKeys;
  image: string;
  titleBackground: TypographyColor;
  cardVariant: CardProps['variant'];
  arrowColor: ArrowUpProps['color'];
};

export const SERVICES: Services[] = [
  {
    title: 'services.serviceOne',
    image: SearchEngine,
    titleBackground: 'accent',
    cardVariant: 'secondary',
    arrowColor: 'primary',
  },
  {
    title: 'services.serviceTwo',
    image: Advertising,
    titleBackground: 'secondary',
    cardVariant: 'accent',
    arrowColor: 'primary',
  },
  {
    title: 'services.serviceThree',
    image: SocialMedia,
    titleBackground: 'secondary',
    cardVariant: 'primary',
    arrowColor: 'secondary',
  },
  {
    title: 'services.serviceFour',
    image: Email,
    titleBackground: 'accent',
    cardVariant: 'secondary',
    arrowColor: 'primary',
  },
  {
    title: 'services.serviceFive',
    image: Content,
    titleBackground: 'secondary',
    cardVariant: 'accent',
    arrowColor: 'primary',
  },
  {
    title: 'services.serviceSix',
    image: Analytics,
    titleBackground: 'secondary',
    cardVariant: 'primary',
    arrowColor: 'secondary',
  },
];
