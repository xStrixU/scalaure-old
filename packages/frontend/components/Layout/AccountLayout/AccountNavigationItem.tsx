import clsx from 'clsx';
import Link from 'next/link';

import { ACCOUNT_BASE_PATH } from 'lib/paths';

type AccountNavigationItemProps = Readonly<{
  path: string;
  content: string;
  isActive: boolean;
}>;

export const AccountNavigationItem = ({
  path,
  content,
  isActive,
}: AccountNavigationItemProps) => (
  <Link href={ACCOUNT_BASE_PATH + path}>
    <a
      className={clsx(
        'tab tab-bordered font-bold text-base',
        isActive && 'tab-active'
      )}
    >
      {content}
    </a>
  </Link>
);
