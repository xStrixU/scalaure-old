import { useState } from 'react';

import { Avatar } from 'components/Avatar';

import { useUser } from 'hooks/useUser';

export const HeaderAvatar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logoutMutation } = useUser();

  if (!user) return null;

  return (
    <div
      className="relative cursor-pointer"
      onMouseEnter={() => setIsMenuOpen(true)}
      onMouseLeave={() => setIsMenuOpen(false)}
    >
      <Avatar user={user} />
      {isMenuOpen && (
        <ul className="absolute right-0 top-6 menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li onClick={() => logoutMutation.mutate()}>
            <span>Logout</span>
          </li>
        </ul>
      )}
    </div>
  );
};
