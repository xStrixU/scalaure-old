import type { User, UserRole } from '@prisma/client';
import type { UserDto } from '@scalaure/common';

export const createUserDto = (user: User & { roles: UserRole[] }): UserDto => ({
  firstName: user.firstName,
  lastName: user.lastName,
  email: user.email,
  roles: user.roles.map(({ name }) => name),
});
