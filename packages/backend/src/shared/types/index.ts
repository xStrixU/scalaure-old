import express from 'express';
import * as core from 'express-serve-static-core';

export interface AppRouter {
  path: string;
  router: core.Router;
}

export type Handler<ReqBody = any, ResBody = any> = express.RequestHandler<
  core.ParamsDictionary,
  ResBody,
  ReqBody
>;
