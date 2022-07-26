import { PASSWORD_REGEX, UpdateUserDetailsRequest } from '@scalaure/common';
import { object, string } from 'yup';

import type { CreateUserRequest } from '@scalaure/common';
import type { ObjectSchema } from 'yup';

export const createUserSchema: ObjectSchema<CreateUserRequest> = object({
  fullName: string().required(),
  email: string().required(),
  password: string()
    .matches(PASSWORD_REGEX, 'Password must contains at least 5 characters.')
    .required(),
});

export const updateUserDetailsSchema: ObjectSchema<UpdateUserDetailsRequest> =
  object({
    firstName: string().required(),
    lastName: string().required().nullable(),
  }).required();
