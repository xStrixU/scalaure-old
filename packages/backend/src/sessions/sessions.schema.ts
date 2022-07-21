import { object, string } from 'yup';

import type { CreateSessionRequest } from '@scalaure/common';
import type { SchemaOf } from 'yup';

export const createSessionSchema: SchemaOf<CreateSessionRequest> = object({
  email: string().required(),
  password: string().required(),
});
