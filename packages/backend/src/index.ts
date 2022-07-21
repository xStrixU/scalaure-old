import dotenv from 'dotenv';
import express from 'express';
import { once } from 'node:events';

import { registerRouters } from './shared/config/routers.config';
import { prisma } from './shared/lib/prisma';

(async () => {
  try {
    dotenv.config();

    await prisma.$connect();

    const app = express();
    const port = process.env.PORT || 3000;

    registerRouters(app);

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
