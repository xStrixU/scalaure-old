import { Router } from 'express';

import type { Application } from 'express';

import type { AppRouter } from '../types';

const routers: AppRouter[] = [];

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
