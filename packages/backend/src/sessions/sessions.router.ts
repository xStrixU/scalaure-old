import { Router } from 'express';

import { createSession, deleteSession } from './sessions.controller';
import { createSessionSchema } from './sessions.schema';

import { validate } from '../shared/middlewares/validation.middleware';

import type { AppRouter } from '../shared/types';

const router = Router();

router.post('/', validate(createSessionSchema), createSession);
router.delete('/', deleteSession);

const sessionsRouter: AppRouter = {
  path: '/sessions',
  router,
};

export default sessionsRouter;
