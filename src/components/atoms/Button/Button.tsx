import clsx from 'clsx';
import type { ButtonProps } from './Button.type';
import s from './Button.module.scss';
import { MouseEvent } from 'react';

const Button = ({
  children,

  type = 'button',
  variant = 'primary',
  action,

  leftIcon,
  rightIcon,

  isFullSize,
  isDisabled,
}: ButtonProps) => {
  const handleButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (typeof action !== 'function') return null;
    action();
  };

  const renderContent = () => (
    <>
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </>
  );

  const renderElement = () => {
    if (!action) return <button type={type}>{renderContent()}</button>;

    if (typeof action === 'function') {
      return (
        <button
          type={type}
          onClick={handleButtonClick}
          className={clsx({
            [s.disabled]: isDisabled,
            [s.fullSize]: isFullSize,
          })}
          disabled={isDisabled}
        >
          {renderContent()}
        </button>
      );
    }
  };

  return (
    <div
      className={clsx(s.container, {
        [s.primary]: variant === 'primary',
        [s.outlined]: variant === 'outlined',
        [s.accent]: variant === 'accent',
        [s.pure]: variant === 'pure',
      })}
    >
      {renderElement()}
    </div>
  );
};

export default Button;
