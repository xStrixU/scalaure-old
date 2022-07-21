import type { ApiError } from '@scalaure/common';

export class HttpError extends Error implements ApiError {
  constructor(
    public status: number,
    public message: string,
    public data?: unknown
  ) {
    super(message);
  }
}
