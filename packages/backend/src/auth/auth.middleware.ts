import status from 'http-status';

import { HttpError } from '../shared/errors/http/http.error';
import { findByEmail } from '../users/users.facade';

import type { UserRoleName } from '@prisma/client';
import type { RequestHandler } from 'express';

export const auth =
  (...roles: UserRoleName[]): RequestHandler =>
  async (req, res, next) => {
    const { email } = req.session;

    if (email) {
      const user = await findByEmail(email);

      if (user) {
        const userRoleNames = user.roles.map(({ name }) => name);
        const includeRoles = roles.every(roleName =>
          userRoleNames.includes(roleName)
        );

        if (includeRoles) {
          req.authData = {
            user,
            roles: userRoleNames,
          };

          return next();
        }

        return next(
          new HttpError(status.FORBIDDEN, String(status[status.FORBIDDEN]))
        );
      }
    }

    next(
      new HttpError(status.UNAUTHORIZED, String(status[status.UNAUTHORIZED]))
    );
  };
