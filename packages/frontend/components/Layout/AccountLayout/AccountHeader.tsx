import Image from 'next/image';
import Link from 'next/link';

import { HeaderAvatar } from '../HeaderAvatar';

import { INDEX_PATH } from 'lib/paths';

export const AccountHeader = () => (
  <header className="absolute top-0 left-0 right-0">
    <nav className="navbar bg-base-300 space-x-6 flex justify-between">
      <Link href={INDEX_PATH}>
        <a>
          <Image src="/logo.png" width={140} height={50} alt="logo" />
        </a>
      </Link>
      <HeaderAvatar />
    </nav>
  </header>
);
