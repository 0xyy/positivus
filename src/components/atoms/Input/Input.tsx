import type { InputProps } from './Input.type';
import s from './Input.module.scss';
import clsx from 'clsx';

const Input = ({ placeholder, label, variant }: InputProps) => {
  return (
    <>
      {label && <label>{label}</label>}
      <input
        type='text'
        placeholder={placeholder}
        className={clsx(s.input, {
          [s.primary]: variant === 'primary',
          [s.secondary]: variant === 'secondary',
        })}
      />
    </>
  );
};

export default Input;
