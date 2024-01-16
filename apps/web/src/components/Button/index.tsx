import React from 'react';

import { cn } from '@/utils';

import s from './Button.module.scss';
import { global } from '@/types/global';

const Button: React.FC<global.TButton & React.HTMLProps<HTMLButtonElement>> = ({
  href,
  onClick,
  type,
  title,
  Icons,
  classNames,
  children,
  typeButton,
  isLoading,
  disabled,
  ...props
}) => {
  const Comp: any = 'button';
  return (
    <Comp
      className={cn(classNames, s[type], s.btn, disabled && s.disabled)}
      type={typeButton}
      {...props}
      onClick={!disabled ? onClick : undefined}
    >
      {Icons && (isLoading ? <span className={cn(s.loading)}></span> : <Icons />)}
      {type !== 'icon' && children}
    </Comp>
  );
};
export default Button;
