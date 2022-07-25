import type { ReactNode } from 'react';

type EntryPageWrapperProps = Readonly<{
  title: string;
  children: ReactNode;
}>;

export const EntryPageWrapper = ({
  title,
  children,
}: EntryPageWrapperProps) => (
  <div className="flex flex-col items-center mt-32">
    <h1 className="font-bold text-3xl mb-4">{title}</h1>
    {children}
  </div>
);
