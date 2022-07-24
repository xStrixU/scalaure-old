import { Header } from './Header';

import type { ReactNode } from 'react';

export const Layout = ({ children }: { readonly children: ReactNode }) => (
  <>
    <Header />
    <main>{children}</main>
  </>
);
