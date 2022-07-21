import { Router } from 'express';

import sessionsRouter from '../../sessions/sessions.router';
import usersRouter from '../../users/users.router';

import type { Application } from 'express';

import type { AppRouter } from '../types';

const routers: AppRouter[] = [sessionsRouter, usersRouter];

export const registerRouters = (app: Application) => {
  const rootRouter = Router();
  const basePath = process.env.BASE_PATH;

  console.log(`The base path has been set to ${basePath}`);

  routers.forEach(({ path, router }) => {
    const fullPath = basePath + path;

    rootRouter.use(fullPath, router);

    console.log(`Registered router on path ${fullPath}`);
  });

  app.use(rootRouter);

  console.log(`All routers (${routers.length}) have been registered`);
};
