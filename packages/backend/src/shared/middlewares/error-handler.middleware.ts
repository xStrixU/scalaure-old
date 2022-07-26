import status from 'http-status';

import { HttpError } from '../errors/http/http.error';
import { InternalServerError } from '../errors/http/internal-server.error';

import type { ApiError } from '@scalaure/common';
import type { ErrorRequestHandler, Response } from 'express';

export const errorHandler: ErrorRequestHandler = (
  err,
  req,
  res: Response<ApiError>,
  next
) => {
  const error: ApiError =
    err instanceof HttpError
      ? err
      : {
          status: status.INTERNAL_SERVER_ERROR,
          message: 'Something went wrong',
        };

  if (err instanceof InternalServerError && err.error) {
    console.log(`[ErrorHandler] Internal Server Error: ${err.error}`);
  }

  res.status(error.status).json({
    status: error.status,
    message: error.message,
    data: error.data,
  });
};
