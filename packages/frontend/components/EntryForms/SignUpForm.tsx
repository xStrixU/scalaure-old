import { yupResolver } from '@hookform/resolvers/yup';
import { PASSWORD_REGEX } from '@scalaure/common';
import status from 'http-status';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { object, ref, string } from 'yup';

import { EntryFormWrapper } from './EntryFormWrapper';
import { Input } from 'components/Input';
import { PasswordInput } from 'components/PasswordInput';

import { useUser } from 'hooks/useUser';
import { isApiError } from 'lib/api-error';
import { SIGN_IN_PATH } from 'lib/paths';

import type { SubmitHandler } from 'react-hook-form';
import type { InferType } from 'yup';
import { LoadingSpinner } from 'components/LoadingSpinner';

const formSchema = object({
  fullName: string().required('Full name is required.'),
  email: string().email('Invalid email').required('Email is required.'),
  password: string()
    .matches(PASSWORD_REGEX, 'Password must contains at least 5 characters.')
    .required('Password is required'),
  confirmPassword: string()
    .oneOf([ref('password'), null], 'Passwords do not match.')
    .required('Confirm password is required.'),
});

type FormValues = InferType<typeof formSchema>;

export const SignUpForm = () => {
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(formSchema),
  });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { registerMutation } = useUser();

  const onSubmit: SubmitHandler<FormValues> = data => {
    setErrorMessage(null);

    registerMutation.mutate(data, {
      onError: err => {
        if (isApiError(err)) {
          const { data: errData } = err.response;

          setErrorMessage(errData.message);

          if (errData.status === status.CONFLICT) {
            setError('email', {});
          }
        }
      },
    });
  };

  return (
    <EntryFormWrapper onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        placeholder="Full name"
        error={errors.fullName}
        {...register('fullName')}
      />
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
      <PasswordInput
        placeholder="Confirm pasword"
        error={errors.confirmPassword}
        {...register('confirmPassword')}
      />
      {errorMessage && (
        <span className="text-red-600 text-sm">{errorMessage}</span>
      )}
      {registerMutation.isSuccess && (
        <span className="text-lime-600 text-sm">
          You have been registered successfully!
        </span>
      )}
      <Link href={SIGN_IN_PATH}>
        <a className="link text-sm ml-auto">Already have an account? Sign In</a>
      </Link>
      <button className="btn btn-primary">
        {registerMutation.isLoading ? (
          <LoadingSpinner className="fill-violet-600" />
        ) : (
          'Sign Up'
        )}
      </button>
    </EntryFormWrapper>
  );
};
