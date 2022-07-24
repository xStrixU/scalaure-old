import { Router } from 'express';

import {
  createSession,
  deleteSession,
  getCurrentSession,
} from './sessions.controller';
import { createSessionSchema } from './sessions.schema';

import { auth } from '../auth/auth.middleware';
import { validate } from '../shared/middlewares/validation.middleware';

import type { AppRouter } from '../shared/types';

const router = Router();

router.post('/', validate(createSessionSchema), createSession);
router.delete('/', deleteSession);
router.get('/me', auth(), getCurrentSession);

const sessionsRouter: AppRouter = {
  path: '/sessions',
  router,
};

export default sessionsRouter;
