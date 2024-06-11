import { ComponentPropsWithoutRef } from 'react';

type InputVariant = 'primary' | 'secondary';

export type InputProps = {
  placeholder: string;
  label?: string;
  variant?: InputVariant;
} & ComponentPropsWithoutRef<'input'>;
