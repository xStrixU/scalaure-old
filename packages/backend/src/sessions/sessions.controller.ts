import status from 'http-status';

import { authenticate } from '../auth/auth.facade';
import { AuthenticationError } from '../auth/errors/authentication.error';
import { SESSION_COOKIE_NAME } from '../shared/config/constants.config';
import { HttpError } from '../shared/errors/http/http.error';
import { InternalServerError } from '../shared/errors/http/internal-server.error';
import { createUserDto } from '../users/users.factory';

import type {
  CreateSessionRequest,
  CreateSessionResponse,
  DeleteSessionResponse,
  GetCurrentSessionResponse,
} from '@scalaure/common';

import type { Handler } from '../shared/types';

export const createSession: Handler<
  CreateSessionRequest,
  CreateSessionResponse
> = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await authenticate(email, password);

    req.session.email = email;

    res.status(status.CREATED).json(createUserDto(user));
  } catch (err) {
    const error =
      err instanceof AuthenticationError
        ? new HttpError(status.UNAUTHORIZED, err.message)
        : new InternalServerError(err);

    next(error);
  }
};

export const deleteSession: Handler<never, DeleteSessionResponse> = (
  req,
  res,
  next
) => {
  req.session.destroy(err => {
    if (err) {
      return next(new InternalServerError(err));
    }

    res.clearCookie(SESSION_COOKIE_NAME);
    res.sendStatus(status.OK);
  });
};

export const getCurrentSession: Handler<never, GetCurrentSessionResponse> = (
  req,
  res
) => {
  res.json(createUserDto(req.authData.user));
};
