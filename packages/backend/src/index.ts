import dotenv from 'dotenv';
import express from 'express';
import session from 'express-session';
import { once } from 'node:events';

import { SESSION_COOKIE_NAME } from './shared/config/constants.config';
import { registerRouters } from './shared/config/routers.config';
import { prisma } from './shared/lib/prisma';
import { errorHandler } from './shared/middlewares/error-handler.middleware';

dotenv.config();

(async () => {
  try {
    await prisma.$connect();

    const app = express();
    const port = process.env.PORT || 3000;

    app.use(express.json());
    app.use(
      session({
        name: SESSION_COOKIE_NAME,
        secret: process.env.SESSION_SECRET || '',
        resave: false,
        saveUninitialized: false,
      })
    );

    registerRouters(app);

    app.use(errorHandler);

    await once(
      app.listen(port, () => {
        console.log(`Server listening on port :${port}`);
      }),
      'listening'
    );
  } catch (err) {
    console.log(`Error while bootstrapping application: ${err}`);

    prisma.$disconnect();
    process.exit(1);
  }
})();
