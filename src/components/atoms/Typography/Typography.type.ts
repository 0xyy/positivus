import type { ReactNode } from 'react';

export type TypographyType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'label'
  | 'span';

export type TypographyColor = 'primary' | 'secondary' | 'accent';

export type TypographyProps = {
  children: ReactNode;
  className?: string;
  variant: TypographyType;
  component?: TypographyType | 'placeholder';
  color?: TypographyColor;
  background?: TypographyColor;
};
