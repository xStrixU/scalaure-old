import { Router } from 'express';

import { createUser, getAuthenticatedUser } from './users.controller';
import { createUserSchema } from './users.schema';

import { auth } from '../auth/auth.middleware';
import { validate } from '../shared/middlewares/validation.middleware';

import type { AppRouter } from '../shared/types';

const router = Router();

router.post('/', validate(createUserSchema), createUser);
router.get('/me', auth(), getAuthenticatedUser);

const usersRouter: AppRouter = {
  path: '/users',
  router,
};

export default usersRouter;
