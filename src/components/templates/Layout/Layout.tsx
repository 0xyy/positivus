import type { ReactNode } from 'react';
import Header from '~organisms/Header/Header';
import Footer from '~organisms/Footer/Footer';
import s from './Layout.module.scss';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={s.layout}>
      <Header />

      <main className={s.main}>{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
