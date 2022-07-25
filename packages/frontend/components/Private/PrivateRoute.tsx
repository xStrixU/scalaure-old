import { useRouter } from 'next/router';

import { useUser } from 'hooks/useUser';
import { INDEX_PATH, SIGN_IN_PATH } from 'lib/paths';

import type { UserRoleName } from '@prisma/client';
import type { ReactElement } from 'react';

type PrivateRouteProps = Readonly<{
  loggedIn?: boolean;
  roles?: UserRoleName[];
  children: ReactElement | ReactElement[];
}>;

export const PrivateRoute = ({
  loggedIn = true,
  roles = [],
  children,
}: PrivateRouteProps) => {
  const router = useRouter();
  const { user } = useUser();

  if (
    loggedIn !== !!user ||
    (user && !roles.every(role => user.roles.includes(role)))
  ) {
    router.replace(loggedIn ? SIGN_IN_PATH : INDEX_PATH);

    return null;
  }

  return <>{children}</>;
};
