import clsx from 'clsx';
import { forwardRef } from 'react';

import type { InputHTMLAttributes, ReactElement } from 'react';
import type { FieldError } from 'react-hook-form';

type InputProps = Readonly<{
  error?: FieldError;
  icon?: ReactElement;
}> &
  InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, icon, ...props }, ref) => (
    <div className="flex flex-col">
      <div className="relative">
        <input
          className={clsx(
            'input input-bordered w-full focus:outline-none',
            error
              ? 'border-red-600 text-red-500 placeholder:text-red-500'
              : 'border-black'
          )}
          {...props}
          ref={ref}
        />
        {icon && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2 select-none">
            {icon}
          </div>
        )}
      </div>
      <span className="text-sm text-red-600">{error && error.message}</span>
    </div>
  )
);

Input.displayName = 'Input';
