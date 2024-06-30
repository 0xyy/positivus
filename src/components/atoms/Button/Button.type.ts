import type { LinkProps } from 'next/link';
import type { HTMLAttributes, HTMLProps, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'outlined' | 'accent' | 'pure';

type ButtonSize = 'small' | 'large';

type ButtonAction =
  | (() => void)
  | ({ isExternal: true } & HTMLProps<HTMLAnchorElement>)
  | LinkProps;

export type ButtonProps = {
  children: ReactNode;

  type?: HTMLButtonElement['type'];
  variant?: ButtonVariant;
  size?: ButtonSize;

  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;

  action?: ButtonAction;

  isFullSize?: boolean;
  isDisabled?: boolean;
};
