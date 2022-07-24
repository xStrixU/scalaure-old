import type { UserDto } from '@scalaure/common';
import type { HTMLAttributes } from 'react';

type AvatarProps = Readonly<{
  user: UserDto;
}> &
  HTMLAttributes<HTMLDivElement>;

export const Avatar = ({ user, ...props }: AvatarProps) => {
  const initials = user.firstName[0] + (user.lastName?.at(0) || '');

  return (
    <div className="avatar placeholder" {...props}>
      <div className="bg-neutral-focus text-neutral-content rounded-full w-9">
        <span>{initials}</span>
      </div>
    </div>
  );
};
