import bcrypt from 'bcrypt';

import { AuthenticationError } from './errors/authentication.error';

import { findByEmail } from '../users/users.facade';

export const authenticate = async (email: string, password: string) => {
  const user = await findByEmail(email);

  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new AuthenticationError('Invalid email or password.');
  }

  return user;
};
