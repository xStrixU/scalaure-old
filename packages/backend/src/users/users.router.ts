import { Router } from 'express';

import { createUser, updateUserDetails } from './users.controller';
import { createUserSchema, updateUserDetailsSchema } from './users.schema';

import { auth } from '../auth/auth.middleware';
import { validate } from '../shared/middlewares/validation.middleware';

import type { AppRouter } from '../shared/types';

const router = Router();

router.post('/', validate(createUserSchema), createUser);
router.put(
  '/details',
  auth(),
  validate(updateUserDetailsSchema),
  updateUserDetails
);

const usersRouter: AppRouter = {
  path: '/users',
  router,
};

export default usersRouter;
