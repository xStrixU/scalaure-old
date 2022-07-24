import { axiosWrapper } from '../lib/axios';

import type { CreateUserRequest, CreateUserResponse } from '@scalaure/common';

export const createUser = async (requestData: CreateUserRequest) => {
  const { data } = await axiosWrapper.post<
    typeof requestData,
    CreateUserResponse
  >('/users', requestData);

  return data;
};
