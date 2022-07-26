import 'express-serve-static-core';

import type { UserRoleName } from '@prisma/client';

import type { AppUser } from '../../src/users/users.types';

declare module 'express-serve-static-core' {
  export interface AuthData {
    user: AppUser;
    roles: UserRoleName[];
  }

  export interface Request {
    authData: AuthData;
  }
}
