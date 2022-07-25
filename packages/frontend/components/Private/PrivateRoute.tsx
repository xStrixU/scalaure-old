import { useRouter } from 'next/router';

import { useUser } from 'hooks/useUser';

import type { UserRoleName } from '@prisma/client';
import type { ReactElement } from 'react';

type PrivateRouteProps = Readonly<{
  loggedIn: boolean;
  roles?: UserRoleName[];
  redirectPath: string;
  children: ReactElement | ReactElement[];
}>;

export const PrivateRoute = ({
  loggedIn,
  roles = [],
  redirectPath,
  children,
}: PrivateRouteProps) => {
  const router = useRouter();
  const { user } = useUser();

  if (
    loggedIn !== !!user ||
    (user && !roles.every(role => user.roles.includes(role)))
  ) {
    router.replace(redirectPath);

    return null;
  }

  return <>{children}</>;
};
