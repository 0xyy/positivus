import FooterNavigation from '~molecules/FooterNavigation/FooterNavigation';
import ContactInfo from '~molecules/ContactInfo/ContactInfo';
import Copyright from '~molecules/Copyright/Copyright';
import SocialMedia from '~molecules/SocialMedia/SocialMedia';
import Newsletter from '~molecules/Newsletter/Newsletter';
import s from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.insideFooter}>
        <FooterNavigation />

        <div className={s.contact}>
          <ContactInfo />
          <Newsletter />
          <SocialMedia className={s.socialMedia} />
        </div>

        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
