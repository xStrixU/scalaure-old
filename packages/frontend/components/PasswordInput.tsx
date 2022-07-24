import { forwardRef, useState } from 'react';
import { BiHide, BiShow } from 'react-icons/bi';

import { Input } from './Input';

import type { ComponentProps } from 'react';

type PasswordInputProps = Omit<ComponentProps<typeof Input>, 'type'>;

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  (props, ref) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false);

    const togglePasswordIcon = isPasswordShown ? (
      <BiShow
        size={22}
        onClick={() => setIsPasswordShown(false)}
        className="cursor-pointer"
      />
    ) : (
      <BiHide
        size={22}
        onClick={() => setIsPasswordShown(true)}
        className="cursor-pointer"
      />
    );

    return (
      <Input
        type={isPasswordShown ? 'text' : 'password'}
        icon={togglePasswordIcon}
        ref={ref}
        {...props}
      />
    );
  }
);

PasswordInput.displayName = 'PasswordInput';
