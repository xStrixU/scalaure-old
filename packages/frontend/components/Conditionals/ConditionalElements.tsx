import { useUser } from 'hooks/useUser';

import type { UserRoleName } from '@prisma/client';
import type { ReactElement } from 'react';

type ConditionalElementsProps = Readonly<{
  loggedIn: boolean;
  roles?: UserRoleName[];
  children: ReactElement | ReactElement[];
}>;

export const ConditionalElements = ({
  loggedIn,
  roles = [],
  children,
}: ConditionalElementsProps) => {
  const { user } = useUser();

  return loggedIn === !!user ||
    (user && !roles.every(role => user.roles.includes(role))) ? (
    <>{children}</>
  ) : null;
};
