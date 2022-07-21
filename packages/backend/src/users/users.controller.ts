import { Prisma } from '@prisma/client';
import bcrypt from 'bcrypt';
import status from 'http-status';

import { createUserDto } from './users.factory';

import { HttpError } from '../shared/errors/http/http.error';
import { InternalServerError } from '../shared/errors/http/internal-server.error';
import { prisma } from '../shared/lib/prisma';

import type { CreateUserRequest, CreateUserResponse } from '@scalaure/common';

import type { Handler } from '../shared/types';

export const createUser: Handler<
  CreateUserRequest,
  CreateUserResponse
> = async (req, res, next) => {
  try {
    const { fullName, email, password } = req.body;

    const [firstName, lastName] = fullName.replace(/\s{2,}/g, ' ').split(' ');
    const saltOrRounds = process.env.PASSWORD_SALT_OR_ROUNDS || 10;
    const saltOrRoundsNumber = Number(saltOrRounds);
    const hashedPassword = await bcrypt.hash(
      password,
      isNaN(saltOrRoundsNumber) ? saltOrRounds : saltOrRoundsNumber
    );

    const user = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password: hashedPassword,
        roles: {
          create: [{ name: 'USER' }],
        },
      },
      include: { roles: true },
    });

    res.status(status.CREATED).json(createUserDto(user));
  } catch (err) {
    const error =
      err instanceof Prisma.PrismaClientKnownRequestError &&
      err.code === 'P2002'
        ? new HttpError(status.CONFLICT, 'User with this email already exists.')
        : new InternalServerError(err);

    next(error);
  }
};
