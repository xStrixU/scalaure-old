import { axiosWrapper } from '../lib/axios';

import type {
  CreateUserRequest,
  CreateUserResponse,
  UpdateUserDetailsRequest,
  UpdateUserDetailsResponse,
} from '@scalaure/common';

export const createUser = async (requestData: CreateUserRequest) => {
  const { data } = await axiosWrapper.post<
    typeof requestData,
    CreateUserResponse
  >('/users', requestData);

  return data;
};

export const updateUserDetails = async (
  requestData: UpdateUserDetailsRequest
) => {
  const { data } = await axiosWrapper.put<
    typeof requestData,
    UpdateUserDetailsResponse
  >('/users/details', requestData);

  return data;
};
