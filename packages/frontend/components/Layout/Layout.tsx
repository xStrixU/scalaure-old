import { useRouter } from 'next/router';

import { MainLayout } from './MainLayout';
import { AccountLayout } from './AccountLayout/AccountLayout';

import { ACCOUNT_BASE_PATH } from 'lib/paths';

import type { ComponentType, ReactNode } from 'react';

const layouts: Record<
  string,
  ComponentType<{ readonly children: ReactNode }>
> = {
  [ACCOUNT_BASE_PATH]: AccountLayout,
};

export const Layout = ({ children }: { readonly children: ReactNode }) => {
  const { pathname } = useRouter();

  const layoutKey = Object.keys(layouts).find(path =>
    pathname.startsWith(path)
  );
  const CurrentLayout = layoutKey ? layouts[layoutKey] : MainLayout;

  return <CurrentLayout>{children}</CurrentLayout>;
};
