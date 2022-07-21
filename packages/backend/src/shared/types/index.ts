import * as core from 'express-serve-static-core';

export interface AppRouter {
  path: string;
  router: core.Router;
}
