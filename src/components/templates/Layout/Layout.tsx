import type { ReactNode } from 'react';
import s from './Layout.module.scss';
import Header from '~organisms/Header/Header';
import Footer from '~organisms/Footer/Footer';

type TLayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: TLayoutProps) => {
  return (
    <div className={s.layout}>
      <Header />

      <main className={s.main}>{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
