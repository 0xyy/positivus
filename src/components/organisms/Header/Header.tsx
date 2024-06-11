import MainNavigation from '~molecules/MainNavigation/MainNavigation';
import s from './Header.module.scss';

const Header = () => {
  return (
    <div className={s.container}>
      <header className={s.header}>
        <div className={s.insideHeader}>
          <MainNavigation />
        </div>
      </header>
    </div>
  );
};

export default Header;
