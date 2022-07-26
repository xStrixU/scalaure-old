import { useRouter } from 'next/router';

import { AccountNavigationItem } from './AccountNavigationItem';

const nav: { path: string; content: string }[] = [
  {
    path: '/security',
    content: 'Account security',
  },
  {
    path: '/details',
    content: 'Profile details',
  },
  {
    path: '/picture',
    content: 'Profile picture',
  },
];

export const AccountNavigation = () => {
  const { pathname } = useRouter();

  return (
    <nav className="mb-4">
      {nav.map(navItem => (
        <AccountNavigationItem
          key={navItem.path}
          isActive={pathname.endsWith(navItem.path)}
          {...navItem}
        />
      ))}
    </nav>
  );
};
