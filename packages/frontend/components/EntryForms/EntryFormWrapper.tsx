import type { FormEventHandler, ReactNode } from 'react';

type EntryFormWrapperProps = Readonly<{
  onSubmit: FormEventHandler<HTMLFormElement>;
  children: ReactNode;
}>;

export const EntryFormWrapper = ({
  onSubmit,
  children,
}: EntryFormWrapperProps) => (
  <div className="w-full max-w-md">
    <form onSubmit={onSubmit} className="flex flex-col space-y-2">
      {children}
    </form>
  </div>
);
