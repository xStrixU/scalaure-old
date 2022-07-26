import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';

import { LabelInput } from 'components/Inputs/LabelInput';

import { useUser } from 'hooks/useUser';
import { isApiError } from 'lib/api-error';

import type { SubmitHandler } from 'react-hook-form';
import type { InferType } from 'yup';

const formSchema = object({
  firstName: string().required('First name is required.'),
  lastName: string(),
});

type FormValues = InferType<typeof formSchema>;

export const AccountDetailsContent = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { user, updateUserDetailsMutation } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    reset,
  } = useForm<FormValues>({
    resolver: yupResolver(formSchema),
    defaultValues: {
      firstName: user?.firstName,
      lastName: user?.lastName || undefined,
    },
  });

  if (!user) return null;

  const onSubmit: SubmitHandler<FormValues> = ({ firstName, lastName }) => {
    setErrorMessage(null);
    updateUserDetailsMutation.mutate(
      {
        firstName,
        lastName: lastName || null,
      },
      {
        onSuccess: data => {
          reset({
            firstName: data?.firstName,
            lastName: data?.lastName || undefined,
          });
        },
        onError: err => {
          if (isApiError(err)) {
            setErrorMessage(err.response.data.message);
          }
        },
      }
    );
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full space-y-2 max-w-[500px]"
      >
        <LabelInput
          label="First name"
          error={errors.firstName}
          {...register('firstName')}
        />
        <LabelInput
          label="Last name"
          error={errors.lastName}
          {...register('lastName')}
        />
        <button
          className={clsx(
            'btn mt-4',
            updateUserDetailsMutation.isLoading && 'loading',
            !isDirty && 'btn-disabled'
          )}
        >
          Save
        </button>
      </form>
      {errorMessage && (
        <div className="toast">
          <div className="alert alert-error">
            <div>
              <span>Error: {errorMessage}</span>
            </div>
          </div>
        </div>
      )}
      {updateUserDetailsMutation.isSuccess && (
        <div className="toast">
          <div className="alert alert-info">
            <div>
              <span>Profile updated successfully!</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
