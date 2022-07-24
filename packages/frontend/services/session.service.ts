import { axiosWrapper } from '../lib/axios';

import type {
  CreateSessionRequest,
  CreateSessionResponse,
  DeleteSessionResponse,
  GetCurrentSessionResponse,
} from '@scalaure/common';

export const createSession = async (requestData: CreateSessionRequest) => {
  const { data } = await axiosWrapper.post<
    typeof requestData,
    CreateSessionResponse
  >('/sessions', requestData);

  return data;
};

export const deleteSession = async () => {
  const { data } = await axiosWrapper.delete<DeleteSessionResponse>(
    '/sessions'
  );

  return data;
};

export const getCurrentSession = async () => {
  const { data } = await axiosWrapper.get<GetCurrentSessionResponse>(
    '/sessions/me'
  );

  return data;
};
