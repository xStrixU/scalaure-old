import { useUser } from 'hooks/useUser';

import type { UserRoleName } from '@prisma/client';
import type { ReactElement } from 'react';

type PrivateElementsProps = Readonly<{
  loggedIn: boolean;
  roles?: UserRoleName[];
  children: ReactElement | ReactElement[];
}>;

export const PrivateElements = ({
  loggedIn,
  roles = [],
  children,
}: PrivateElementsProps) => {
  const { user } = useUser();

  return loggedIn === !!user ||
    (user && !roles.every(role => user.roles.includes(role))) ? (
    <>{children}</>
  ) : null;
};
