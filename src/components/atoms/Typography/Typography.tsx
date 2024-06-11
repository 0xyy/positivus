import clsx from 'clsx';
import type { TypographyProps } from './Typography.type';
import s from './Typography.module.scss';

const Typography = ({
  variant,
  component,
  className,
  children,
  color = 'primary',
  background,
}: TypographyProps) => {
  const TypeElement = variant;
  const elementStyle = component ?? variant;

  return (
    <TypeElement
      className={clsx(
        className,
        elementStyle,
        s.container,
        background && s.background,
        {
          [s.primary]: color === 'primary',
          [s.secondary]: color === 'secondary',
          [s.accent]: color === 'accent',
          [s.accentBackground]: background === 'accent',
        },
      )}
    >
      {children}
    </TypeElement>
  );
};

export default Typography;
