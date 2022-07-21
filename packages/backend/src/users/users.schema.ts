import { PASSWORD_REGEX } from '@scalaure/common';
import { object, string } from 'yup';

import type { CreateUserRequest } from '@scalaure/common';
import type { SchemaOf } from 'yup';

export const createUserSchema: SchemaOf<CreateUserRequest> = object({
  fullName: string().required(),
  email: string().required(),
  password: string()
    .matches(PASSWORD_REGEX, 'Password must contains at least 5 characters.')
    .required(),
});
