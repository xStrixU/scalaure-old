import { LoadingSpinner } from './LoadingSpinner';

import { useUser } from 'hooks/useUser';

import type { ReactElement } from 'react';

export const PageLoader = ({
  children,
}: {
  readonly children: ReactElement;
}) => {
  const { isLoading } = useUser();

  if (isLoading) {
    return (
      <div className="absolute w-full h-full flex items-center justify-center">
        <LoadingSpinner size="big" className="fill-blue-600" />
      </div>
    );
  }

  return children;
};
