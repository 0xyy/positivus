import { ReactNode } from 'react';

type CardVariant = 'primary' | 'secondary' | 'accent';

export type CardProps = {
  children: ReactNode;
  variant?: CardVariant;
  className?: string;
  isWithShadow?: boolean;
  isWithBorder?: boolean;
};
