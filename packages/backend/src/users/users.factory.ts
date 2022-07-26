import type { UserDto } from '@scalaure/common';

import type { AppUser } from './users.types';

export const createUserDto = ({
  email,
  roles,
  details: { firstName, lastName },
}: AppUser): UserDto => ({
  firstName,
  lastName,
  email,
  roles: roles.map(({ name }) => name),
});
