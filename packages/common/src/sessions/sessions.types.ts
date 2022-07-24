import type { UserDto } from '../users';

export interface CreateSessionRequest {
  email: string;
  password: string;
}
export type CreateSessionResponse = UserDto;

export type DeleteSessionResponse = never;

export type GetCurrentSessionResponse = UserDto;
