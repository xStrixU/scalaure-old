import { object, string } from 'yup';

import type { CreateSessionRequest } from '@scalaure/common';
import type { ObjectSchema } from 'yup';

export const createSessionSchema: ObjectSchema<CreateSessionRequest> = object({
  email: string().required(),
  password: string().required(),
});
