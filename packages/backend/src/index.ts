import dotenv from 'dotenv';
import express from 'express';
import { once } from 'node:events';

import { registerRouters } from './shared/config/routers.config';

(async () => {
  try {
    dotenv.config();

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

    process.exit(1);
  }
})();
