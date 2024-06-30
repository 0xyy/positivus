import { CardProps } from './Card.type';
import clsx from 'clsx';
import s from './Card.module.scss';

const Card = ({
  children,
  className,
  variant = 'primary',
  isWithShadow = true,
  isWithBorder = true,
}: CardProps) => {
  return (
    <div
      className={clsx(
        s.card,
        isWithShadow && s.shadow,
        isWithBorder && s.border,
        className,
        {
          [s.primary]: variant === 'primary',
          [s.secondary]: variant === 'secondary',
          [s.accent]: variant === 'accent',
        },
      )}
    >
      {children}
    </div>
  );
};

export default Card;
