import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
  createSession,
  deleteSession,
  getCurrentSession,
} from '../services/session.service';
import { createUser, updateUserDetails } from '../services/user.service';

import type { UserDto } from '@scalaure/common';

const USER_QUERY_KEY = ['user'];

export const useUser = () => {
  const queryClient = useQueryClient();
  const { data: user, ...rest } = useQuery(
    USER_QUERY_KEY,
    async () => {
      try {
        return await getCurrentSession();
      } catch (err) {
        return null;
      }
    },
    {
      staleTime: Infinity,
      retry: false,
    }
  );

  const setUser = (user: UserDto | null) => {
    queryClient.setQueryData(USER_QUERY_KEY, user);
  };

  const registerMutation = useMutation(createUser);

  const loginMutation = useMutation(createSession, {
    onSuccess: setUser,
  });

  const logoutMutation = useMutation(deleteSession, {
    onSuccess: () => {
      setUser(null);
    },
  });

  const updateUserDetailsMutation = useMutation(updateUserDetails, {
    onSuccess: setUser,
  });

  return {
    user,
    registerMutation,
    loginMutation,
    logoutMutation,
    updateUserDetailsMutation,
    ...rest,
  };
};
