import { forwardRef } from 'react';

import { Input } from './Input';

import type { ComponentProps } from 'react';

type LabelInputProps = Readonly<{
  label: string;
}> &
  ComponentProps<typeof Input>;

export const LabelInput = forwardRef<HTMLInputElement, LabelInputProps>(
  ({ label, ...props }, ref) => (
    <label>
      <span className="font-medium text-sm">{label}</span>
      <Input ref={ref} {...props} />
    </label>
  )
);

LabelInput.displayName = 'LabelInput';
