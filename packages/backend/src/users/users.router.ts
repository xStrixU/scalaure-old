import { Router } from 'express';

import { createUser } from './users.controller';
import { createUserSchema } from './users.schema';

import { validate } from '../shared/middlewares/validation.middleware';

import type { AppRouter } from '../shared/types';

const router = Router();

router.post('/', validate(createUserSchema), createUser);

const usersRouter: AppRouter = {
  path: '/users',
  router,
};

export default usersRouter;
