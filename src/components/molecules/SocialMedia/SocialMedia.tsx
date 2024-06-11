import Facebook from '~assets/icons/Facebook';
import Linkedin from '~assets/icons/Linkedin';
import Twitter from '~assets/icons/Twitter';
import type { SocialMediaProps } from './SocialMedia.type';
import clsx from 'clsx';
import s from './SocialMedia.module.scss';

const SocialMedia = ({ className }: SocialMediaProps) => {
  return (
    <div className={clsx(s.container, className)}>
      <Linkedin />
      <Facebook />
      <Twitter />
    </div>
  );
};

export default SocialMedia;
