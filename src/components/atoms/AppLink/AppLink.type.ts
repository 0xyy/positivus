import type { ReactNode } from 'react';
import type { LinkProps } from 'next/link';

type AppLinkVariant = 'dark' | 'light';

export type AppLinkProps = LinkProps & {
  children: ReactNode;
  className?: string;
  variant?: AppLinkVariant;
};
