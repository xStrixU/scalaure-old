import status from 'http-status';

import { HttpError } from './http.error';

export class InternalServerError extends HttpError {
  constructor(public error: unknown) {
    super(
      status.INTERNAL_SERVER_ERROR,
      String(status[status.INTERNAL_SERVER_ERROR])
    );
  }
}
