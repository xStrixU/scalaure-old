import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';

import { EntryFormWrapper } from './EntryFormWrapper';
import { Input } from 'components/Input';
import { PasswordInput } from 'components/PasswordInput';

import { useUser } from 'hooks/useUser';
import { isApiError } from 'lib/api-error';
import { INDEX_PATH, SIGN_UP_PATH } from 'lib/paths';

import type { SubmitHandler } from 'react-hook-form';
import type { InferType } from 'yup';
import { LoadingSpinner } from 'components/LoadingSpinner';

const formSchema = object({
  email: string().required('Email is required.'),
  password: string().required('Password is required.'),
});

type FormValues = InferType<typeof formSchema> & { remember: boolean };

export const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(formSchema),
  });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { loginMutation } = useUser();
  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = data => {
    loginMutation.mutate(data, {
      onSuccess: () => {
        void router.push(INDEX_PATH);
      },
      onError: err => {
        if (isApiError(err)) {
          setErrorMessage(err.response.data.message);
        }
      },
    });
  };

  return (
    <EntryFormWrapper onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="email"
        placeholder="Email"
        error={errors.email}
        {...register('email')}
      />
      <PasswordInput
        placeholder="Password"
        error={errors.password}
        {...register('password')}
      />
      <label className="flex items-center cursor-pointer select-none w-fit">
        <span className="label-text">Remember me</span>
        <input
          type="checkbox"
          className="checkbox checkbox-sm ml-2"
          {...register('remember')}
        />
      </label>
      {errorMessage && (
        <span className="text-red-600 text-sm">{errorMessage}</span>
      )}
      <div className="flex items-center justify-between text-sm">
        <a href="#" className="link">
          Forgot password?
        </a>
        <Link href={SIGN_UP_PATH}>
          <a className="link">{"Don't have account? Sign Up"}</a>
        </Link>
      </div>
      <button className="btn btn-primary">
        {loginMutation.isLoading ? (
          <LoadingSpinner className="fill-violet-600" />
        ) : (
          'Sign In'
        )}
      </button>
    </EntryFormWrapper>
  );
};
