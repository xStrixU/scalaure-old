import { AccountHeader } from './AccountHeader';
import { AccountNavigation } from './AccountNavigation';

import type { ReactNode } from 'react';

export const AccountLayout = ({
  children,
}: {
  readonly children: ReactNode;
}) => (
  <>
    <AccountHeader />
    <div className="p-20">
      <h1 className="font-bold text-3xl mb-12">Account settings</h1>
      <AccountNavigation />
      <main>{children}</main>
    </div>
  </>
);
