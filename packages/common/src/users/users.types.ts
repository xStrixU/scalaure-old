import type { UserRoleName } from '@prisma/client';

export interface UserDto {
  firstName: string;
  lastName: string | null;
  email: string;
  roles: UserRoleName[];
}

export interface CreateUserRequest {
  fullName: string;
  email: string;
  password: string;
}
export type CreateUserResponse = UserDto;
