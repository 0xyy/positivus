import Link from 'next/link';
import type { AppLinkProps } from './AppLink.type';
import clsx from 'clsx';
import s from './AppLink.module.scss';

const AppLink = (props: AppLinkProps) => {
  const { children, variant, className, ...linkProps } = props;

  return (
    <Link
      className={clsx(
        s.link,
        className,
        variant === 'dark' && [s.darkHover, s.darkLink],
        variant === 'light' && [s.lightLink, s.lightHover],
      )}
      {...linkProps}
    >
      {children}
    </Link>
  );
};

export default AppLink;
